module.exports = {
  onWillParseMarkdown: function(markdown) {
    return new Promise((resolve, reject)=> {
      return resolve(markdown)
    })
  },
  onDidParseMarkdown: function(html, {cheerio}) {
    return new Promise((resolve, reject)=> {
      html=html+"<br /><br />";
      return resolve(html)
    })
  },
  onWillTransformMarkdown: function (markdown) {
        return new Promise((resolve, reject) => {
      //change fig size
      markdown = markdown+"\n";
      markdown = markdown.replace(
        /!\[([^\]]*)\]\(([^\)]+)\s+=(\d*)\s*\)/g,
        (all,title,src,width,height)=> {
            return `<img src="${src}" alt="${title}" ${(width)?"width="+width+"%":""}>\n`;
        }
      );
      //collapse 
      markdown = markdown.replace(
        /:::\s*spoiler\s*(\{.+\})?\s*([\w\W]*?)\s*:::\n/g,
        (whole, s1, c1) =>`\<details\>
${(s1)?"\<summary\>"+s1.replaceAll("\{","").replaceAll("\}","")+"\<\/summary\>\n":""}
${c1}\n\n\<\/details\>\n\n`
      );
      //enable :::
      markdown = markdown.replace(
        /:::(\w+)\s*(\{.+\})?\s*([\w\W]*?):::/g,
        (whole, t1,t2,c1) => `
!!!${(t1)?t1:""}  ${(t2)?t2.replaceAll("\{","").replaceAll("\}",""):""}
\t${c1.replaceAll("\n","\n\t")}\n`,
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
      //雙欄
      markdown = markdown.replace(
        /@left\s*\n([\w\W]*?)\n\n@right\s*\n([\w\W]*?)\n\n/g,
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
