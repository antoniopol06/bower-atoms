/* atoms v0.05.20
   http://atoms.tapquo.com
   Copyright (c) 2014 Tapquo S.L. - Licensed MIT */
(function(){"use strict";var a,b,c,d,e,f,g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1},h=[].slice,i={}.hasOwnProperty,j=function(a,b){function c(){this.constructor=a}for(var d in b)i.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},k=function(a,b){return function(){return a.apply(b,arguments)}};c=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;return d=[],h=Object.prototype,g=/^\s*<(\w+|!)[^>]*>/,c=[1,9,11],b=/^\.([\w-]+)$/,f=/^#[\w\d-]+$/,k=/^[\w-]+$/,i=document.createElement("table"),j=document.createElement("tr"),e={tr:document.createElement("tbody"),tbody:i,thead:i,tfoot:i,td:j,th:j,"*":document.createElement("div")},a=function(b,c){var d;return b?"function"===a.toType(b)?a(document).ready(b):(d=o(b,c),p(d,b)):p()},a.query=function(a,c){var d;return b.test(c)?d=a.getElementsByClassName(c.replace(".","")):k.test(c)?d=a.getElementsByTagName(c):f.test(c)&&a===document?(d=a.getElementById(c.replace("#","")),d||(d=[])):d=a.querySelectorAll(c),d.nodeType?[d]:Array.prototype.slice.call(d)},a.extend=function(a){return Array.prototype.slice.call(arguments,1).forEach(function(b){var c,d;d=[];for(c in b)d.push(a[c]=b[c]);return d}),a},a.toType=function(a){return h.toString.call(a).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()},a.each=function(b,c){var d,e,f,g,h;if(e=void 0,f=void 0,"array"===a.toType(b))for(e=g=0,h=b.length;h>g;e=++g)d=b[e],c.call(d,e,d)===!1;else for(f in b)c.call(b[f],f,b[f])===!1;return b},a.map=function(b,c){var d,e,f,g;if(g=[],d=void 0,e=void 0,"array"===a.toType(b))for(d=0;d<b.length;)f=c(b[d],d),null!=f&&g.push(f),d++;else for(e in b)f=c(b[e],e),null!=f&&g.push(f);return m(g)},a.mix=function(){var a,b,c,d,e;for(c={},a=0,d=arguments.length;d>a;){b=arguments[a];for(e in b)q(b,e)&&void 0!==b[e]&&(c[e]=b[e]);a++}return c},p=function(a,b){return null==b&&(b=""),a=a||d,a.selector=b,a.__proto__=p.prototype,a},o=function(b,d){var e,f;return e=null,f=a.toType(b),"array"===f?e=l(b):"string"===f&&g.test(b)?(e=n(b.trim(),RegExp.$1),b=null):"string"===f?(e=a.query(document,b),d&&(e=1===e.length?a.query(e[0],d):a.map(function(){return a.query(e,d)}))):(c.indexOf(b.nodeType)>=0||b===window)&&(e=[b],b=null),e},n=function(b,c){var d;return null==c&&(c="*"),c in e||(c="*"),d=e[c],d.innerHTML=""+b,a.each(Array.prototype.slice.call(d.childNodes),function(){return d.removeChild(this)})},l=function(a){return a.filter(function(a){return null!=a?a:void 0})},m=function(a){return a.length>0?d.concat.apply(d,a):a},q=function(a,b){return h.hasOwnProperty.call(a,b)},p.prototype=a.fn={},a.fn.each=function(a){return this.forEach(function(b,c){return a.call(b,c,b)}),this},a.fn.filter=function(b){return a(d.filter.call(this,function(c){return c.parentNode&&a.query(c.parentNode,b).indexOf(c)>=0}))},a.fn.forEach=d.forEach,a.fn.indexOf=d.indexOf,a}(),this.Quo=this.$$=c,function(a){var b,c,d,e,f,g,h,i,j,k,l;return b={TYPE:"GET",MIME:"json"},d={script:"text/javascript, application/javascript",json:"application/json",xml:"application/xml, text/xml",html:"text/html",text:"text/plain"},c=0,a.ajaxSettings={type:b.TYPE,async:!0,success:{},error:{},context:null,dataType:b.MIME,headers:{},xhr:function(){return new window.XMLHttpRequest},crossDomain:!1,timeout:0},a.ajax=function(c){var d,h,k,m;if(k=a.mix(a.ajaxSettings,c),k.type===b.TYPE?k.url+=a.serialize(k.data,"?"):k.data=a.serialize(k.data),e(k.url))return f(k);m=k.xhr(),m.onreadystatechange=function(){return 4===m.readyState?(clearTimeout(d),j(m,k)):void 0},m.open(k.type,k.url,k.async),i(m,k),k.timeout>0&&(d=setTimeout(function(){return l(m,k)},k.timeout));try{m.send(k.data)}catch(n){h=n,m=h,g("Resource not found",m,k)}return m},a.get=function(b,c,d,e){return a.ajax({url:b,data:c,success:d,dataType:e})},a.post=function(a,b,c,d){return h("POST",a,b,c,d)},a.put=function(a,b,c,d){return h("PUT",a,b,c,d)},a["delete"]=function(a,b,c,d){return h("DELETE",a,b,c,d)},a.json=function(b,c,d){return a.ajax({url:b,data:c,success:d})},a.serialize=function(a,b){var c,d;null==b&&(b=""),d=b;for(c in a)a.hasOwnProperty(c)&&(d!==b&&(d+="&"),d+=""+encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return d===b?"":d},f=function(b){var d,e,f,g;return b.async?(e="jsonp"+ ++c,f=document.createElement("script"),g={abort:function(){return a(f).remove(),e in window?window[e]={}:void 0}},d=void 0,window[e]=function(c){return clearTimeout(d),a(f).remove(),delete window[e],k(c,b)},f.src=b.url.replace(RegExp("=\\?"),"="+e),a("head").append(f),b.timeout>0&&(d=setTimeout(function(){return l(g,b)},b.timeout)),g):console.error("QuoJS.ajax: Unable to make jsonp synchronous call.")},j=function(a,b){a.status>=200&&a.status<300||0===a.status?b.async&&k(a,b):g("QuoJS.ajax: Unsuccesful request",a,b)},k=function(a,b){b.success.call(b.context,a)},g=function(a,b,c){c.error.call(c.context,a,b,c)},i=function(a,b){var c;b.contentType&&(b.headers["Content-Type"]=b.contentType),b.dataType&&(b.headers.Accept=d[b.dataType]);for(c in b.headers)a.setRequestHeader(c,b.headers[c])},l=function(a,b){a.onreadystatechange={},a.abort(),g("QuoJS.ajax: Timeout exceeded",a,b)},h=function(b,c,d,e,f){return a.ajax({type:b,url:c,data:d,success:e,dataType:f,contentType:"application/x-www-form-urlencoded"})},e=function(a){return RegExp("=\\?").test(a)}}(c),function(a){var b,c;return b=["-webkit-","-moz-","-ms-","-o-",""],a.fn.addClass=function(a){return this.each(function(){return this.classList.add(a)})},a.fn.removeClass=function(a){return this.each(function(){return this.classList.remove(a)})},a.fn.toggleClass=function(a){return this.each(function(){var b;return b=this.classList.contains(a)?"remove":"add",this.classList[b](a)})},a.fn.hasClass=function(a){return this.length>0&&this[0].classList.contains(a)},a.fn.listClass=function(){return this.length>0?this[0].classList:void 0},a.fn.style=a.fn.css=function(a,b){var d;return null!=b?this.each(function(){return this.style[a]=b}):(d=this[0],d.style[a]||c(d,a))},a.fn.vendor=function(a,c){var d,e,f,g;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],g.push(this.style(""+d+a,c));return g},c=function(a,b){return document.defaultView.getComputedStyle(a,"")[b]}}(c),function(a){return a.fn.attr=function(b,c){return this.length>0&&"string"===a.toType(b)?c?this.each(function(){return this.setAttribute(b,c)}):this[0].getAttribute(b):void 0},a.fn.removeAttr=function(b){return this.length>0&&"string"===a.toType(b)?this.each(function(){return this.removeAttribute(b)}):void 0},a.fn.data=function(a,b){return this.attr("data-"+a,b)},a.fn.removeData=function(a){return this.removeAttr("data-"+a)},a.fn.val=function(a){return null!=a?this.each(function(){return this.value=a.toString()}):this.length>0?this[0].value:null},a.fn.show=function(){return this.style("display","block")},a.fn.hide=function(){return this.style("display","none")},a.fn.focus=function(){return this[0].focus()},a.fn.blur=function(){return this[0].blur()},a.fn.offset=function(){var a,b;return this.length>0&&(a=this[0].getBoundingClientRect(),b={left:a.left+window.pageXOffset,top:a.top+window.pageYOffset,width:a.width,height:a.height}),b}}(c),function(a){var b,c,d,e,f,g;return d=null,b=/WebKit\/([\d.]+)/,c={Android:/(Android)\s+([\d.]+)/,ipad:/(iPad).*OS\s([\d_]+)/,iphone:/(iPhone\sOS)\s([\d_]+)/,Blackberry:/(BlackBerry|BB10|Playbook).*Version\/([\d.]+)/,FirefoxOS:/(Mozilla).*Mobile[^\/]*\/([\d\.]*)/,webOS:/(webOS|hpwOS)[\s\/]([\d.]+)/},a.isMobile=function(){return this.environment(),d.isMobile},a.environment=function(){var a,b;return d||(b=navigator.userAgent,a=f(b),d={browser:e(b),isMobile:!!a,screen:g(),os:a}),d},e=function(a){var c;return c=a.match(b),c?c[0]:a},f=function(a){var b,d,e;for(d in c)if(e=a.match(c[d])){b={name:"iphone"===d||"ipad"===d||"ipod"===d?"ios":d,version:e[2].replace("_",".")};break}return b},g=function(){return{width:window.innerWidth,height:window.innerHeight}}}(c),function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;return b=1,e={},d={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"},c={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",touch:"click",orientationchange:"resize"},f=/complete|loaded|interactive/,a.fn.on=function(b,c,d){return null==c||"function"===a.toType(c)?this.bind(b,c):this.delegate(c,b,d)},a.fn.off=function(b,c,d){return null==c||"function"===a.toType(c)?this.unbind(b,c):this.undelegate(c,b,d)},a.fn.ready=function(b){return f.test(document.readyState)?b.call(this,a):a.fn.addEvent(document,"DOMContentLoaded",function(){return b.call(this,a)})},a.fn.bind=function(a,b){return this.each(function(){return m(this,a,b)})},a.fn.unbind=function(a,b){return this.each(function(){return n(this,a,b)})},a.fn.delegate=function(b,c,d){return this.each(function(e,f){return m(f,c,d,b,function(c){return function(d){var e,h;return h=a(d.target).closest(b,f).get(0),h?(e=a.extend(g(d),{currentTarget:h,liveFired:f}),c.apply(h,[e].concat([].slice.call(arguments,1)))):void 0}})})},a.fn.undelegate=function(a,b,c){return this.each(function(){return n(this,b,c,a)})},a.fn.trigger=function(b,c,d){return"string"===a.toType(b)&&(b=j(b,c)),null!=d&&(b.originalEvent=d),this.each(function(){return this.dispatchEvent(b)})},a.fn.addEvent=function(a,b,c){return a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):a["on"+b]=c},a.fn.removeEvent=function(a,b,c){return a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent?a.detachEvent("on"+b,c):a["on"+b]=null},j=function(a,b){var c;return c=document.createEvent("Events"),c.initEvent(a,!0,!0,null,null,null,null,null,null,null,null,null,null,null,null),b&&(c.quoData=b),c},m=function(b,c,d,f,g){var j,k,m,n;return c=i(c),m=l(b),k=e[m]||(e[m]=[]),j=g&&g(d,c),n={event:c,callback:d,selector:f,proxy:h(j,d,b),delegate:j,index:k.length},k.push(n),a.fn.addEvent(b,n.event,n.proxy)},n=function(b,c,d,f){var g;return c=i(c),g=l(b),k(g,c,d,f).forEach(function(c){return delete e[g][c.index],a.fn.removeEvent(b,c.event,c.proxy)})},l=function(a){return a._id||(a._id=b++)},i=function(b){var d;return d=("function"==typeof a.isMobile?a.isMobile():void 0)?b:c[b],d||b},h=function(a,b,c){var d;return b=a||b,d=function(a){var d;return d=b.apply(c,[a].concat(a.data)),d===!1&&a.preventDefault(),d}},k=function(a,b,c,d){return(e[a]||[]).filter(function(a){return!(!a||b&&a.event!==b||c&&a.callback!==c||d&&a.selector!==d)})},g=function(b){var c;return c=a.extend({originalEvent:b},b),a.each(d,function(a,d){return c[a]=function(){return this[d]=function(){return!0},b[a].apply(b,arguments)},c[d]=function(){return!1}}),c}}(c),c.Gestures=function(a){var b,c,d,e,f,h,i,j,k,l,m,n,o,p;return p=!1,l={},i=null,n=null,f=["input","select","textarea"],a(document).ready(function(){var b;return b=a(document.body),b.bind("touchstart",o),b.bind("touchmove",m),b.bind("touchend",h),b.bind("touchcancel",e)}),b=function(a){return l[a.name]=a.handler,d(a.events)},c=function(b,c,d){return a(b).trigger(c,d,n)},o=function(a){var b;return b=a.srcElement.tagName.toLowerCase(),g.call(f,b)>=0?a.stopPropagation():(p=!0,n=a||event,i=j(a),k("start",a.target,i))},m=function(a){return p?(n=a||event,i=j(a),i.length>1&&n.preventDefault(),k("move",a.target,i)):void 0},h=function(a){return p?(n=a||event,k("end",a.target,i),p=!1):void 0},e=function(){return p=!1,k("cancel")},d=function(b){return b.forEach(function(b){return a.fn[b]=function(c){return a(document.body).delegate(this.selector,b,c)}}),this},k=function(a,b,c){var d,e,f;f=[];for(e in l)d=l[e],d[a]&&f.push(d[a].call(d,b,c));return f},j=function(a){var b,c,d,e,f;for(e=a.touches||[a],f=[],c=0,d=e.length;d>c;c++)b=e[c],f.push({x:b.pageX,y:b.pageY});return f},{add:b,trigger:c}}(c),c.Gestures.add({name:"basic",events:["tap","hold","singleTap","doubleTap","touch"],handler:function(a){var b,c,d,e,f,g,h,i,j,k,l,m;return c=15,b={TAP:250,DOUBLE_TAP:400,HOLD:400},h=null,j=null,m=!0,l=null,k=null,i=null,g=function(c,e){return 1===e.length?(k={time:new Date,x:e[0].x,y:e[0].y},l=c,h=setTimeout(function(){return a.trigger(c,"hold",e[0])},b.HOLD)):d()},f=function(a,b){var e,f;return null!==k&&(e=b[0].x-k.x,f=b[0].y-k.y,e>c||f>c||b.length>1)?d():void 0},e=function(c,d){var e;return a.trigger(c,"touch",d[0]),k?(clearTimeout(h),e=new Date,e-k.time<b.TAP?e-i<b.DOUBLE_TAP?(clearTimeout(j),a.trigger(c,"doubleTap",d[0]),i=null):(i=e,a.trigger(c,"tap",d[0]),j=setTimeout(function(){return a.trigger(c,"singleTap",d[0])},b.DOUBLE_TAP+5)):void 0):void 0},d=function(){return k=null,m=!1,clearTimeout(h),clearTimeout(j)},{start:g,move:f,end:e,cancel:d}}(c.Gestures)}),c.Gestures.add({name:"drag",events:["drag","dragging"],handler:function(a){var b,c,d,e,f,g,h,i,j,k,l;return b=20,l=null,j=null,k=null,i=null,e=function(a,b){return b.length>=2?(l=a,j=b.length,k=f(b)):void 0},d=function(a,b){var c;return b.length===j?(c=g(b),i={touches:b,delta:c},h(!0)):void 0},c=function(){return k&&i?(h(!1),j=null,k=null,i=null):void 0},g=function(a){var b;return b=f(a),{x:b.x-k.x,y:b.y-k.y}},f=function(a){var b,c,d,e,f;for(c=0,d=0,e=0,f=a.length;f>e;e++)b=a[e],c+=parseInt(b.x),d+=parseInt(b.y);return{x:c/a.length,y:d/a.length}},h=function(c){return c?a.trigger(l,"dragging",i):Math.abs(i.delta.x)>b||Math.abs(i.delta.y)>b?a.trigger(l,"drag",i):void 0},{start:e,move:d,end:c}}(c.Gestures)}),c.Gestures.add({name:"pinch",events:["pinch","pinching","pinchIn","pinchOut"],handler:function(a){var b,c,d,e,f,g,h,i,j;return b=20,j=null,i=null,h=null,e=function(a,b){return 2===b.length?(j=a,i=g(b[0],b[1])):void 0},d=function(a,b){var c;return i&&2===b.length?(c=g(b[0],b[1]),h={touches:b,delta:c-i},f(!0)):void 0},c=function(){return i&&h?(f(!1),i=null,h=null):void 0},g=function(a,b){return Math.sqrt((b.x-a.x)*(b.x-a.x)+(b.y-a.y)*(b.y-a.y))},f=function(c){var d;return c?a.trigger(j,"pinching",h):Math.abs(h.delta)>b?(a.trigger(j,"pinch",h),d=h.delta>0?"pinchOut":"pinchIn",a.trigger(j,d,h)):void 0},{start:e,move:d,end:c}}(c.Gestures)}),c.Gestures.add({name:"rotation",events:["rotate","rotating","rotateLeft","rotateRight"],handler:function(a){var b,c,d,e,f,g,h,i,j,k,l,m;return b=5,c=20,m=null,i=0,l=null,h=null,f=function(a,b){return 2===b.length?(m=a,i=0,l=j(b[0],b[1])):void 0},e=function(a,b){var d;return l&&2===b.length?(d=j(b[0],b[1])-l,h&&Math.abs(h.delta-d)>c&&(d+=360*k(h.delta)),Math.abs(d)>360&&(i++,d-=360*k(h.delta)),h={touches:b,delta:d,rotationsCount:i},g(!0)):void 0},d=function(){return l&&h?(g(!1),m=null,i=0,l=null,h=null,l=null):void 0},k=function(a){return 0>a?-1:1},j=function(a,b){var c;return c=Math.atan2(a.y-b.y,a.x-b.x),180*(0>c?c+2*Math.PI:c)/Math.PI},g=function(c){var d;return c?a.trigger(m,"rotating",h):Math.abs(h.delta)>b?(a.trigger(m,"rotate",h),d=h.delta>0?"rotateRight":"rotateLeft",a.trigger(m,d,h)):void 0},{start:f,move:e,end:d}}(c.Gestures)}),c.Gestures.add({name:"swipe",events:["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","swiping","swipingHorizontal","swipingVertical"],handler:function(a){var b,c,d,e,f,g,h,i,j,k;return b=20,k=null,i=null,j=null,h=null,e=function(a,b){return 1===b.length?(k=a,i=b[0],h=null):void 0},d=function(a,b){var c,d;return 1===b.length?(c={x:b[0].x-i.x,y:b[0].y-i.y},d=null===h,h={x:b[0].x,y:b[0].y,delta:c},f(!0,d)):h=null},c=function(){return h?(f(!1),h=null):void 0},f=function(c,d){var e,f,i,l,m;if(null==d&&(d=!1),c)return d&&(j=g(h.delta.x,h.delta.y)),null!==j&&a.trigger(k,"swiping"+j,h),a.trigger(k,"swiping",h);if(f=[],Math.abs(h.delta.y)>b&&f.push(h.delta.y<0?"Up":"Down"),Math.abs(h.delta.x)>b&&f.push(h.delta.x<0?"Left":"Right"),f.length){for(a.trigger(k,"swipe",h),m=[],i=0,l=f.length;l>i;i++)e=f[i],m.push(a.trigger(k,"swipe"+e,h));return m}},g=function(a,b){var c;return c=null,Math.round(Math.abs(a/b))>=2?c="Horizontal":Math.round(Math.abs(b/a))>=2&&(c="Vertical"),c},{start:e,move:d,end:c}}(c.Gestures)}),function(a){return a.fn.text=function(a){return null!=a?this.each(function(){return this.textContent=a}):this.length>0?this[0].textContent:""},a.fn.html=function(b){var c;return null!=b?(c=a.toType(b),this.each(function(){return"string"===c?this.innerHTML=b:"array"===c?b.forEach(function(b){return function(c){return a(b).html(c)}}(this)):this.innerHTML+=a(b).html()})):this.length>0?this[0].innerHTML:""},a.fn.remove=function(){return this.each(function(){return null!=this.parentNode?this.parentNode.removeChild(this):void 0})},a.fn.empty=function(){return this.each(function(){return this.innerHTML=null})},a.fn.append=function(b){var c;return c=a.toType(b),this.each(function(){return"string"===c?this.insertAdjacentHTML("beforeend",b):"array"===c?b.forEach(function(b){return function(c){return a(b).append(c)}}(this)):this.appendChild(b)})},a.fn.prepend=function(b){var c;return c=a.toType(b),this.each(function(){return"string"===c?this.insertAdjacentHTML("afterbegin",b):"array"===c?b.each(function(a){return function(b,c){return a.insertBefore(c,a.firstChild)}}(this)):this.insertBefore(b,this.firstChild)})},a.fn.replaceWith=function(b){var c;return c=a.toType(b),this.each(function(){return this.parentNode?"string"===c?this.insertAdjacentHTML("beforeBegin",b):"array"===c?b.each(function(a){return function(b,c){return a.parentNode.insertBefore(c,a)}}(this)):this.parentNode.insertBefore(b,this):void 0}),this.remove()}}(c),function(a){var b,d,e,f;return b="parentNode",a.fn.find=function(b){var d;return d=1===this.length?c.query(this[0],b):this.map(function(){return c.query(this,b)}),a(d)},a.fn.parent=function(a){var c;return c=a?e(this):this.instance(b),d(c,a)},a.fn.children=function(a){var b;return b=this.map(function(){return Array.prototype.slice.call(this.children)}),d(b,a)},a.fn.siblings=function(a){var b;return b=this.map(function(a,b){return Array.prototype.slice.call(b.parentNode.children).filter(function(a){return a!==b})}),d(b,a)},a.fn.get=function(a){return this[a]||null},a.fn.first=function(){return a(this[0])},a.fn.last=function(){return a(this[this.length-1])},a.fn.closest=function(b,c){var d,e;for(e=this[0],d=a(b),d.length||(e=null);e&&d.indexOf(e)<0;)e=e!==c&&e!==document&&e.parentNode;return a(e)},a.fn.next=function(){return f.call(this,"nextSibling")},a.fn.prev=function(){return f.call(this,"previousSibling")},a.fn.instance=function(a){return this.map(function(){return this[a]})},a.fn.map=function(b){return a.map(this,function(a,c){return b.call(a,c,a)})},e=function(b){var c;for(c=[];b.length>0;)b=a.map(b,function(a){return a=a.parentNode,a!==document&&c.indexOf(a)<0?(c.push(a),a):void 0});return c},d=function(b,c){return null!=c?a(b).filter(c):a(b)},f=function(b){var c;for(c=this[0][b];c&&1!==c.nodeType;)c=c[b];return a(c)}}(c),a=this.Atoms={version:"0.05.20",Core:{},Class:{},Atom:{},Molecule:{},Organism:{},Entity:{},$:function(){var a;return a=1<=arguments.length?h.call(arguments,0):[],"undefined"!=typeof $$&&null!==$$?$$.apply(null,a):$.apply(null,a)}},a.Core.Attributes={scaffold:function(){var a,b;return this.parent={},null!=(null!=(a=this.attributes)?a.parent:void 0)&&(this.parent=this.attributes.parent,delete this.attributes.parent),this.container=this.attributes.container||this.parent.el||document.body,delete this.attributes.container,null!=(null!=(b=this.attributes)?b.entity:void 0)?(this.entity=this.attributes.entity,delete this.attributes.entity):void 0},chemistry:function(){var a,b,c,d,e,f,g;for(f=this.attributes.children||(null!=(e=this.constructor["default"])?e.children:void 0)||[],g=[],c=0,d=f.length;d>c;c++)b=f[c],g.push(function(){var c;c=[];for(a in b)c.push(this.appendChild(a,b[a]));return c}.call(this));return g},appendChild:function(b,c){var e,f;return null==c&&(c={}),f=d(b),f?this.__available(f)?(null!=f["default"]&&(c=a.Core.Helper.mix(c,f["default"])),c.parent=c.parent||this,e=new f(c),this.children.push(e),c.id&&(this[c.id]=e),e):console.error("Instance "+b+" not available in "+this.constructor.type+"."+this.constructor.base+" #"+this.constructor.name+"."):console.error("Instance "+b+" doesn't exists.")},destroyChildren:function(){var a,b,c,d;for(d=this.children||[],b=0,c=d.length;c>b;b++)a=d[b],"function"==typeof a.destroy&&a.destroy();return this.children=[]},__available:function(a){var b;return b=""+a.type+"."+(a.base||a.name),!this.constructor.available||g.call(this.constructor.available,b)>=0}},d=function(b){var c,d,e,f,g;for(c=a,g=b.split("."),e=0,f=g.length;f>e;e++)d=g[e],null!=c&&(c=c[d]);return c},a.Core.Constants={ANIMATION:{END:"webkitAnimationEnd mozAnimationEnd animationend"},APPEND:"append",EXCLUDED_IF_KEYS:["class","entity","events","if","parent","children"],ENTITY:{EVENT:{CREATE:"create",UPDATE:"update",DESTROY:"destroy"}}},a.Core.Event={bindings:null,bind:function(a,b){var c,d,e,f,g;for(a=a.split(" "),this.events=this.events||{},g=[],e=0,f=a.length;f>e;e++)c=a[e],c=this._customEventName(c),(d=this.events)[c]||(d[c]=[]),g.push(this.events[c].push(b));return g},unbind:function(a,b){var c;return a=this._customEventName(a),this.hasOwnProperty("events")&&(null!=(c=this.events)?c[a]:void 0)?this.events[a].splice(this.events[a].indexOf(b),1):void 0},trigger:function(){var a,b,c,d,e,f,g;if(b=arguments[0],a=2<=arguments.length?h.call(arguments,1):[],b=this._customEventName(b),c=this.hasOwnProperty("events")&&null!=(f=this.events)?f[b]:void 0){for(a.push(this),g=[],d=0,e=c.length;e>d&&(b=c[d],b.apply(this,a)!==!1);d++)g.push(void 0);return g}},bubble:function(){var a,b,c,d;return b=arguments[0],c=2<=arguments.length?h.call(arguments,1):[],a=!0,1===c.length&&g.call(this.attributes.events||[],b)<0&&(a=!1),a&&null!=(null!=(d=this.parent)?d.uid:void 0)?(c.push(this),this._state(this.parent,b,c,"bubble")):void 0},tunnel:function(){var a,b,c,d,e,f,g,i;if(c=arguments[0],a=2<=arguments.length?h.call(arguments,1):[],(null!=(f=this.children)?f.length:void 0)>0){for(a.push(this),g=this.children,i=[],d=0,e=g.length;e>d;d++)b=g[d],null!=b.uid&&i.push(this._state(b,c,a,"tunnel"));return i}},_customEventName:function(a){var b;return b=this._base(this.constructor),(""+this.constructor.type+":"+b+":"+a).toLowerCase()},_base:function(a){return a.base||a.name},_state:function(a,b,c,d){var e,f,g,h,i,j,k;return null==d&&(d="bubble"),"bubble"===d?(h=null!=(i=this.attributes.events)?i.indexOf(b):void 0,h>-1&&(f=null!=(j=this.attributes.callbacks)?j[h]:void 0,f&&(c[0].eventCustomCallback=f)),f||(f=c[0].eventCustomCallback),f||(g=1===c.length?this.constructor:c[1].constructor,e=this._base(g),g["extends"]&&(e=g.name),f="on"+e.toClassName()+b.toClassName())):"tunnel"===d&&(f=b),c[0].eventType=d,(null!=(k=a[f])?k.apply(a,c):void 0)!==!1?a[d].apply(a,[b].concat(c)):void 0}},a.Core.Helper=function(){var a,b;return b=function(a,b){var c,d;if(c=this._clone(b),null!=c)for(d in a)c[d]="object"==typeof a[d]?this.mix(a[d],c[d]):a[d];else c=a;return c},a=function(a){return"[object Array]"==={}.toString.call(a)},{_clone:function(a){var b,c,d;if(null==a||"object"!=typeof a)return a;if(a instanceof Date)return new Date(a.getTime());if(a instanceof RegExp)return b="",null!=a.global&&(b+="g"),null!=a.ignoreCase&&(b+="i"),null!=a.multiline&&(b+="m"),null!=a.sticky&&(b+="y"),new RegExp(a.source,b);d=new a.constructor;for(c in a)d[c]=this._clone(a[c]);return d},mix:b,isArray:a}}(),String.prototype.toClassName=function(){return this.charAt(0).toUpperCase()+this.slice(1)},b=["included","extended"],a.Core.Module=function(){function a(){this.uid=e()}return a.extend=function(a){var c,d,e;if(!a)throw new Error("extend(obj) requires obj");for(c in a)d=a[c],g.call(b,c)<0&&(this[c]=d);return null!=(e=a.extended)&&e.apply(this),this},a.include=function(a){var c,d,e;if(!a)throw new Error("include(obj) requires obj");for(d in a)e=a[d],g.call(b,d)<0&&(this.prototype[d]=e);return c=a.included,c&&c.apply(this),this},a.create=function(a,b){var c;return c=function(a){function b(){return b.__super__.constructor.apply(this,arguments)}return j(b,a),b}(this),a&&c.include(a),b&&c.extend(b),c},a}(),e=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b,c;return b=16*Math.random()|0,c="x"===a?b:3&b|8,c.toString(16)}).toUpperCase()},a.Core.Output={append:function(){return this.output("append")},prepend:function(){return this.output("prepend")},html:function(){return this.output("html")},output:function(){if(null==this.constructor.template)throw"No template defined.";if(null==this.container)throw"No container assigned.";return this._render(),this.constructor.method=this.attributes.method||a.Core.Constants.APPEND,("string"==typeof this.container||null==this.container.length)&&(this.container=a.$(this.container)),this.container.first()[this.constructor.method](this.el)},refresh:function(){var a;return a=this.el,this._render(),"function"==typeof this.bindEvents&&this.bindEvents(),a.replaceWith(this.el)},destroy:function(){return this.el.remove()},_render:function(){var b;return this._createIfBindings(),this.el=a.$(f(this.constructor.template)(this.attributes)),b=this.constructor.base||new String,this.el.attr("data-"+this.constructor.type,b.toLowerCase()),this.constructor.name.toLowerCase()!==b.toLowerCase()&&this.el.attr("data-extend",this.constructor.name.toLowerCase()),this.el},_createIfBindings:function(){var b,c;this.attributes["if"]={},c=[];for(b in this.attributes)g.call(a.Core.Constants.EXCLUDED_IF_KEYS,b)<0&&c.push(this.attributes[b]?this.attributes["if"][b]=!0:void 0);return c}},f=function(a){var b,c,d,e;return c=function(a,b){var c,d,e;for(b=1,a=a.replace(/\.\.\//g,function(){return b++,""}),d=["data[data.length - ",b,"]"],e="."===a?[]:a.split("."),c=0;c<e.length;)d.push("."+e[c]),c++;return d.join("")},e=function(a){return a.replace(/\{\{(!|&|\{)?\s*(.*?)\s*}}+/g,function(a,b,e){var f;return"!"===b?"":(f=d++,['"; var o',f," = ",c(e),", s",f," = (((typeof(o",f,') == "function" ? o',f,".call(data[data.length - 1]) : o",f,') || "") + ""); s += ',b?"s"+f:'(/[&"><]/.test(s'+f+") ? s"+f+'.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/>/g,"&gt;").replace(/</g,"&lt;") : s'+f+")",' + "'].join(""))})},b=function(a){return e(a.replace(/\{\{(\^|#)(.*?)}}(.*?)\{\{\/\2}}/g,function(a,e,f,g){var h;return h=d++,['"; var o',h," = ",c(f),"; ",("^"===e?["if ((o",h," instanceof Array) ? !o",h,".length : !o",h,') { s += "',b(g),'"; } ']:["if (typeof(o",h,') == "boolean" && o',h,') { s += "',b(g),'"; } else if (o',h,") { for (var i",h," = 0; i",h," < o",h,".length; i",h,"++) { data.push(o",h,"[i",h,']); s += "',b(g),'"; data.pop(); }}']).join(""),'; s += "'].join("")}))},d=0,new Function("data",'data = [data], s = "'+b(a.replace(/"/g,'\\"').replace(/\n/g,"\\n"))+'"; return s;')},a.Url=function(){var b,c,d,e,f,g,i,j,k;return k={attributes:/:([\w\d]+)/g,splat:/\*([\w\d]+)/g,escape:/[-[\]{}()+?.,\\^$|#\s]/g,hash:/^#*/},i={path:null,forward:!0,history:!1,routes:{}},j=function(){var a,b,e;return a=1<=arguments.length?h.call(arguments,0):[],a.length>0?(i.forward=!0,b="/"+a.join("/"),b!==i.path?(i.history||(b="#"+b),e=window.history.state||null,window.history.pushState(e,document.title,b.toLowerCase()),g()):void 0):i.history?d():c()},b=function(){var a;return i.forward=!1,a=null!=window.history.state.steps?window.history.state.steps:1,window.history.go(-a)},e=function(a,b){var c,d;for(c=["url"],k.attributes.lastIndex=0;null!==(d=k.attributes.exec(a));)c.push(d[1]);for(k.splat.lastIndex=0;null!==(d=k.splat.exec(a));)c.push(d[1]);return a=a.replace(k.escape,"\\$&").replace(k.attributes,"([^/]*)").replace(k.splat,"(.*?)"),i.routes[a]={attributes:c,callback:b,regexp:new RegExp("^"+a+"$")}},g=function(a){var b;return a&&a.preventDefault(),b=i.history?d():c(),b!==i.path?(i.path=b,f(b)):void 0},d=function(){var a;return a=window.location.pathname,"/"!==a.substr(0,1)&&(a="/"+a),a},c=function(){return window.location.hash.replace(k.hash,"")},f=function(a){var b,c,d,e,f,g,h,j,k,l,m;m=[];for(e in i.routes){if(g=i.routes[e],c=g.regexp.exec(a)){for(f={},k=g.attributes,d=h=0,j=k.length;j>h;d=++h)b=k[d],f[b]=c[d];null!=(l=g.callback)&&l.call(this,f);break}m.push(void 0)}return m},function(){return a.$(window).on("popstate",g)}(),{path:j,back:b,listen:e,options:i}}(a),a.Class.Atom=function(b){function c(b){var d,e;this.attributes=b,this.bindEntityDestroy=k(this.bindEntityDestroy,this),this.bindEntityUpdate=k(this.bindEntityUpdate,this),c.__super__.constructor.apply(this,arguments),this.attributes=a.Core.Helper.mix(this.attributes,this.constructor["default"]),this.scaffold(),this.entity&&(b=("function"==typeof(e=this.entity).parse?e.parse():void 0)||this.entity.attributes(),this.attributes=a.Core.Helper.mix(this.attributes,b),d=a.Core.Constants.ENTITY.EVENT,this.attributes.bind.update&&a.Entity[this.entity.className].bind(d.UPDATE,this.bindEntityUpdate),this.attributes.bind.destroy&&a.Entity[this.entity.className].bind(d.DESTROY,this.bindEntityDestroy)),this.output(),this.bindEvents()}return j(c,b),c.include(a.Core.Attributes),c.include(a.Core.Event),c.include(a.Core.Output),c.type="Atom",c["default"]={},c.prototype.bindEntityUpdate=function(a){var b,c,d;if(a.uid===this.entity.uid){c=("function"==typeof(d=this.entity).parse?d.parse():void 0)||this.entity.attributes();for(b in c)this.attributes[b]=c[b];return this.refresh()}},c.prototype.bindEntityDestroy=function(a){return a.uid===this.entity.uid?this.destroy():void 0},c.prototype.bindEvents=function(){var a,b,c,d,e;if(this.attributes.events){for(d=this.attributes.events,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(this.el.on(a,function(a){return function(b){return function(c){return a.el[0].disabled!==!0?a.bubble(b,c):void 0}}}(this)(a)));return e}},c}(a.Core.Module),a.Class.Entity=function(b){function c(a){c.__super__.constructor.apply(this,arguments),this.constructor.constructor.type="Entity",this.constructor.constructor.base=this.constructor.name,this.className=this.constructor.name,a&&this.load(a)}return j(c,b),c.extend(a.Core.Event),c.records={},c.attributes=[],c.fields=function(){var a;return a=1<=arguments.length?h.call(arguments,0):[],this.records={},this.attributes=a||[],this.unbind(),this},c.create=function(a){var b;return b=new this(a),b.save()},c.exists=function(a){return this.find(a)},c.find=function(a){var b;return b=this.records[a],(null!=b?b.clone():void 0)||null},c.findBy=function(a,b){var c,d,e;e=this.records;for(d in e)if(c=e[d],c[a]===b)return c.clone();return null},c.select=function(a){var b,c;return this.cloneArray(function(){var d,e;d=this.records,e=[];for(c in d)b=d[c],a(b)&&e.push(b);return e}.call(this))},c.each=function(a){var b,c,d,e;d=this.records,e=[];for(b in d)c=d[b],e.push(a(c.clone()));return e},c.all=function(){return this.cloneArray(this.recordsValues())},c.count=function(){return this.recordsValues().length},c.cloneArray=function(a){var b,c,d,e;for(e=[],c=0,d=a.length;d>c;c++)b=a[c],e.push(b.clone());return e},c.recordsValues=function(){var a,b,c,d;b=[],d=this.records;for(a in d)c=d[a],b.push(c);return b},c.destroyAll=function(){var a,b,c;c=this.records;for(b in c)a=c[b],a.destroy();return this.records={}},c.prototype.isNew=function(){return!this.exists()},c.prototype.exists=function(){return this.uid&&this.uid in this.constructor.records},c.prototype.load=function(a){var b,c;for(b in a)c=a[b],"function"==typeof this[b]?this[b](c):this[b]=c;return this},c.prototype.attributes=function(){var a,b,c,d,e;for(b={},e=this.constructor.attributes,c=0,d=e.length;d>c;c++)a=e[c],a in this&&(b[a]="function"==typeof this[a]?this[a]():this[a]);return b},c.prototype.equal=function(a){return!((null!=a?a.constructor:void 0)!==this.constructor||a.uid!==this.uid)},c.prototype.save=function(){var a,b;return null!=this.validate&&(a=this.validate()),a?this.trigger("error",a):(b=this.isNew()?this.create():this.update(),this.trigger("save"),b)},c.prototype.updateAttributes=function(a){return this.load(a),this.save()},c.prototype.create=function(){var a;return a=new this.constructor(this.attributes()),a.uid=this.uid,this.constructor.records[this.uid]=a,this.trigger("create"),this.trigger("change"),a.clone()},c.prototype.update=function(){var a;return a=this.constructor.records,a[this.uid].load(this.attributes()),this.trigger("update"),this.trigger("change"),a[this.uid].clone()
},c.prototype.destroy=function(){return delete this.constructor.records[this.uid],this.trigger("destroy"),this.trigger("change"),this.unbind()},c.prototype.clone=function(){return Object.create(this)},c.prototype.unbind=function(){return this.trigger("unbind")},c.prototype.trigger=function(){var a,b;return a=1<=arguments.length?h.call(arguments,0):[],a.splice(1,0,this),(b=this.constructor).trigger.apply(b,a)},c}(a.Core.Module),"function"!=typeof Object.create&&(Object.create=function(a){var b;return b=function(){},b.prototype=a,new b}),a.Class.Molecule=function(b){function c(a){var b;this.attributes=a,this._removeAtomsEntities=k(this._removeAtomsEntities,this),this._addAtomEntity=k(this._addAtomEntity,this),c.__super__.constructor.apply(this,arguments),this["default"]||(this["default"]={children:[]}),this.children=[],this._records=[],this.scaffold(),this.output(),this.chemistry(),null!=(null!=(b=this.attributes.bind)?b.entity:void 0)&&null!=this.attributes.bind.atom&&this.attributes.bind.create&&this._bindEntityCreate()}return j(c,b),c.include(a.Core.Attributes),c.include(a.Core.Event),c.include(a.Core.Output),c.type="Molecule",c.prototype.entity=function(a,b){var c,d,e,f,g;if(null==b&&(b=!1),b||this._removeAtomsEntities(),null!=(null!=(f=this.attributes.bind)?f.entity:void 0)&&null!=this.attributes.bind.atom){for(g=[],d=0,e=a.length;e>d;d++)c=a[d],g.push(this._addAtomEntity(c,this.attributes.bind));return g}},c.prototype._addAtomEntity=function(b,c,d){var e,f,g,h,i,j,k;for(null==d&&(d=!0),f={entity:b,bind:{update:c.update,destroy:c.destroy}},j=["events","callbacks"],h=0,i=j.length;i>h;h++)g=j[h],null!=this.attributes.bind[g]&&(f[g]=this.attributes.bind[g]);return f=a.Core.Helper.mix(f,null!=(k=this["default"].children)?k[this.attributes.entityAtom]:void 0),e=this.appendChild(""+this.attributes.bind.atom,f),d&&this._records.push(e),e},c.prototype._removeAtomsEntities=function(){var a,b,c,d;for(d=this._records,b=0,c=d.length;c>b;b++)a=d[b],a.el.remove();return this._records=[]},c.prototype._bindEntityCreate=function(){var b;return b=a.Entity[this.attributes.bind.entity],null!=b?(new b,b.bind(a.Core.Constants.ENTITY.EVENT.CREATE,function(a){return function(b){return a._addAtomEntity(b,a.attributes.bind)}}(this))):void 0},c}(a.Core.Module),a.Class.Organism=function(b){function c(b,e){this.attributes=b,c.__super__.constructor.apply(this,arguments),this["default"]||(this["default"]={children:[]}),this.children=[],e&&(d=this._getScaffold(e)),this.attributes=a.Core.Helper.mix(this.attributes,d),d=void 0}var d;return j(c,b),c.include(a.Core.Attributes),c.include(a.Core.Event),c.include(a.Core.Output),c.type="Organism",d=void 0,c.scaffold=function(a){var b,c;return b="undefined"!=typeof $$&&null!==$$?$$:$,c=b.ajax({url:a,async:!1,dataType:"text",error:function(){throw"Error loading scaffold in "+a}}),d=JSON.parse(c.responseText)},c.prototype.render=function(){return this.scaffold(),this.output(),this.chemistry()},c.prototype._getScaffold=function(a){var b,c;return b="undefined"!=typeof $$&&null!==$$?$$:$,c=b.ajax({url:a,async:!1,dataType:"text",error:function(){throw"Error loading scaffold in "+a}}),d=JSON.parse(c.responseText)},c}(a.Core.Module)}).call(this);