module.exports = {
  onWillParseMarkdown: function(markdown) {
    return new Promise((resolve, reject)=> {
      return resolve(markdown)
    })
  },
  onDidParseMarkdown: function(html, {cheerio}) {
    return new Promise((resolve, reject)=> {
      html=`<script src="https://kit.fontawesome.com/849ddf9236.js" crossorigin="anonymous"></script>
      <script src="Hyper_md/jquery-3.4.1.min.js"></script>
<link rel="stylesheet" href="Hyper_md/md.css">`
      +html+`<br /><br />
<script  type="text/javascript" src="Hyper_md/md.js"></script>
<script> 
var Main_LeftListLiSelector = $(".md-sidebar-toc li");

$(Main_LeftListLiSelector).on('click', function() {
  $(Main_LeftListLiSelector).removeClass('active');
  $(this).addClass('active');
});
</script>`;
/*      html=html+`<script>
var mdPreview = document.getElementsByClassName('mume');
for (var i = 0; i < mdPreview.length; i++) {
  mdPreview[i].addEventListener('click', function(event) {
    event.stopPropagation();
    if (document.body.hasAttribute('html-show-sidebar-toc')){
      document.body.removeAttribute('html-show-sidebar-toc');
    }
  })
}
</script>`*/

      return resolve(html)
    })
  },
  onWillTransformMarkdown: function (markdown) {
        return new Promise((resolve, reject) => {
      //change fig size
      markdown = markdown+"\n";
      //雙欄
      markdown = markdown.replace(
        /:::\s*left\s*\n([\w\W]*?):::\s*right\s*\n([\w\W]*?):::/g,
        (all,l,r)=> {
            return `<div class="dcl">
<section>

${l}
</section>

<section>

${r}
</section></div>\n`
        }
      );
      markdown = markdown.replace(
        /!\[([^\]]*)\]\(([^\)]+)\s+=(\d*)\s*\)/g,
        (all,title,src,width,height)=> {
            return `<img src="${src}" alt="${title}" ${(width)?"width="+width+"%":""}>\n`;
        }
      );
      //collapse 
      
      markdown = markdown.replace(
        /:::\s*spoiler\s*(\{.+\})?\s*([\w\W]*?)\s*:::/g,
        (whole, s1, c1) =>`\<details\>
${(s1)?"\<summary\>"+s1.replaceAll("\{","").replaceAll("\}","")+"\<\/summary\>\n":""}
${c1}\n\n\<\/details\>\n\n`
      );
      //enable :::
      markdown = markdown.replace(
        /:::(\w+)\s*(\{.+\})?\s*([\w\W]*?):::/g,
        (whole, t1,t2,c1) => `
!!! ${(t1)?t1+' ':""}${(t2)?t2.replaceAll("\{","").replaceAll("\}",""):""}
    ${c1.replaceAll("\n","\n    ")}\n`,
      );
      //easy tikz 
      markdown = markdown.replace(
        /```\s*tikz\s*(\{.*?\})?\s*([\w\W]*?)\n```/g,
        (whole, t1, c1) =>`\`\`\`latex \{cmd run_on_save hide ${(t1)?t1.replaceAll("\{","").replaceAll("\}",""):""}\}
\\documentclass\[margin=0pt\]\{standalone\}
\\usepackage\{tikz\}
\\begin\{document\}
\\begin\{tikzpicture\}
${c1}
\\end\{tikzpicture\}
\\end\{document\}
\`\`\``
      );
      markdown = markdown.replace(
        /\[([^[]*?)\]\(([^()]*?).md\)+/g,
        (all,title,src,x)=> {
            return `[${title}](${src}.md) [:radioactive:](${src}.html)`
        }
      );  
      markdown = markdown.replace(
        /@web\s*"?(https:\/\/)?([^\n]*)"?/g,
        (all,h,src)=> {
            return `<iframe 
src="https://website-card-embed-demo.humblex.top/?url=https:\/\/${src}" 
style="width:100%;height:124px" frameborder="no">
</iframe>\n`
        }
      );
      
      
          return resolve(markdown);
        });
    },


  onDidTransformMarkdown: function (markdown) {
      return new Promise((resolve, reject) => {
          
        return resolve(markdown);
      });
      
  },

  onWillParseMarkdown: function(markdown) {
    return new Promise((resolve, reject) => {
      
      return resolve(markdown);
    });
  },
}
