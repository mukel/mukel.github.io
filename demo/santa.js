jQuery("#main-content > h1, #main-content > div.right-col > div:nth-child(1) > div.presentation > h4").text("Alfonso² Peterssen"); 

var cssId = 'santa';
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://mukel.github.io/demo/santa.css';
    link.media = 'all';
    head.appendChild(link);
}

jQuery("div.portrait:nth-child(2)").html('<audio id="djklaus" autoplay loop><source src="https://mukel.github.io/demo/happy_bells_mix.mp3"></audio>')