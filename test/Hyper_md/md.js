


window.onload=function(){
  var head=document.getElementsByTagName('head')[0];
  var script=document.createElement('script');
  script.innerHTML=`var Main_LeftListLiSelector = $(".md-sidebar-toc li");
$(Main_LeftListLiSelector).on('click', function() {
$(Main_LeftListLiSelector).removeClass('active');
$(this).addClass('active');
});`
  head.appendChild(script);
}

var share_bt = document.createElement("div");
share_bt.setAttribute('class', "btn");
share_bt.innerHTML = "<i class=\"fa fa-share-alt fa-18\"></i>";
share_bt.style = "top:8px;right:8px;";
share_bt.addEventListener('click', function() {
  const value = decodeURI(url.hostname+url.pathname);
  const el = document.createElement('textarea');
  el.value = value;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
});
document.body.appendChild(share_bt);

var Main_LeftListLiSelector = $(".md-sidebar-toc li");

$(Main_LeftListLiSelector).on('click', function() {
  $(Main_LeftListLiSelector).removeClass('active');
  $(this).addClass('active');
});




var mdPreview = document.getElementsByClassName('mume');
for (var i = 0; i < mdPreview.length; i++) {
  mdPreview[i].addEventListener('click', function(event) {
    event.stopPropagation();
    if (document.body.hasAttribute('html-show-sidebar-toc')){
      document.body.removeAttribute('html-show-sidebar-toc');
    }
  })
}
