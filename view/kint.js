var f=!1;"undefined"===typeof kint&&("undefined"===typeof kintExpandOnLoad&&(kintExpandOnLoad={}),kint={a:[],c:-1,j:function(a){var b=window.getSelection(),c=document.createRange();c.selectNodeContents(a);b.removeAllRanges();b.addRange(c)},e:function(a,b){"undefined"===typeof b&&(b="kint-minus");kint.d(a,b).className+=" "+b},d:function(a,b){"undefined"===typeof b&&(b="kint-minus");a.className=a.className.replace(RegExp("(\\s|^)"+b+"(\\s|$)")," ");return a},next:function(a){do a=a.nextElementSibling;while("dd"!==a.nodeName.toLowerCase());return a},g:function(a,b){var c=kint.next(a),d=c.getElementsByClassName("kint-parent"),e=d.length;for("undefined"===typeof b&&(b="inline"===c.style.display);e--;)kint.toggle(d[e],b);kint.toggle(a,b)},toggle:function(a,b){var c,d;c=kint.next(a);d=a.getElementsByClassName("_kint-collapse")[0];"undefined"===typeof b&&(b="inline"===c.style.display);b?(c.style.display="none",d&&kint.d(d)):(c.style.display="inline",d&&kint.e(d));1===c.childNodes.length?(c=c.childNodes[0].childNodes[0],kint.b(c,"kint-parent")&&kint.toggle(c,b)):-1!==kint.c&&kint.f()},k:function(a){for(var b=document.getElementsByClassName("kint-parent"),c=b.length,a="inline"===kint.next(a.parentNode).style.display;c--;)kint.toggle(b[c],a)},i:function(a){var b=a,c=0;kint.d(a.parentNode.getElementsByClassName("kint-active-tab")[0],"kint-active-tab");for(kint.e(a,"kint-active-tab");b=b.previousSibling;)1===b.nodeType&&c++;a=a.parentNode.nextSibling.getElementsByTagName("li");for(b=0;b<a.length;b++)a[b].style.display=b===c?"block":"none";-1!==kint.c&&kint.f()},b:function(a,b){return RegExp("\\b"+b+"\\b").test(a.className)},f:function(){kint.a=[];Array.prototype.slice.call(document.querySelectorAll(".kint-plus, .kint-tabs>li:not(.kint-active-tab)"),0).forEach(function(a){(0!==a.offsetWidth||0!==a.offsetHeight)&&kint.a.push(a)})}},window.addEventListener("click",function(a){var b=a.target,c=b.nodeName.toLowerCase();"dfn"===c?(kint.j(b),b=b.parentNode):"var"===c&&(b=b.parentNode,c=b.nodeName.toLowerCase());if("li"===c&&"kint-tabs"===b.parentNode.className&&"kint-active-tab"!==b.className)return kint.i(b),f;kint.b(b,"_kint-collapse")?(setTimeout(function(){0<parseInt(b.h,10)?b.h--:kint.g(b.parentNode)},300),a.stopPropagation()):kint.b(b,"kint-parent")?kint.toggle(b):kint.b(b,"kint-ide-link")&&(a.preventDefault(),c=new XMLHttpRequest,c.open("GET",b.href),c.send(null));a.preventDefault();return f},f),window.addEventListener("dblclick",function(a){var b=a.target;kint.b(b,"_kint-collapse")&&(b.h=2,kint.k(b),a.stopPropagation())},f),window.addEventListener("load",function(){for(var a in kintExpandOnLoad)Array.prototype.slice.call(document.querySelectorAll("."+a+">dl>dt"),0).forEach(function(a){kint.g(a)})},f),window.onkeydown=function(a){function b(a){a?0>--e&&(e=kint.a.length-1):++e>=kint.a.length&&(e=0);c(e);return f}function c(a){var b=document.querySelector(".kint-focused");b&&kint.d(b,"kint-focused");if(-1!==a){b=kint.a[a];kint.e(b,"kint-focused");var c=function(a){return a.offsetTop+(a.offsetParent?c(a.offsetParent):0)};window.scrollTo(0,c(b)-window.innerHeight/2)}kint.c=a}var d=a.keyCode,a=a.shiftKey,e=kint.c;if(68===d){if(-1===e)return kint.f(),b(f);c(-1);return f}if(-1!==e){if(9===d)return b(a);if(38===d)return b(!0);if(40===d)return b(f);if(-1!==e){a=kint.a[e];if("li"===a.nodeName.toLowerCase()){if(32===d||13===d)return kint.i(a),b(!0);if(39===d)return b(f);if(37===d)return b(!0)}a=a.parentNode;if(32===d||13===d)return kint.toggle(a),f;if(39===d||37===d){var g="inline"===kint.next(a).style.display,d=37===d;if(g)kint.g(a,d);else{if(d){do a=a.parentNode;while(a&&"dd"!==a.nodeName.toLowerCase());if(a){a=a.previousElementSibling;e=-1;for(g=a.querySelector(".kint-plus");g!==kint.a[++e];);c(e)}else a=kint.a[e].parentNode}kint.toggle(a,d)}return f}}}});