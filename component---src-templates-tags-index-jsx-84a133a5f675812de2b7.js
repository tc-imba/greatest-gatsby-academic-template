(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"/CWk":function(t){t.exports=JSON.parse('{"tags":{"gatsby":{"count":1,"path":"/tags/gatsby","color":"orange"},"cpp":{"count":1,"path":"/tags/cpp","color":"volcano"},"scheduling":{"count":1,"path":"/tags/scheduling","color":"gold"},"algorithm":{"count":1,"path":"/tags/algorithm","color":"magenta"},"blog":{"count":1,"path":"/tags/blog","color":"red"}},"git":{"hash":"ecb82a2","commits":1,"dirty":false}}')},"4QF9":function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return b}));n("M7k7");var a=n("Ol7k"),o=(n("Jmwx"),n("BMrR")),i=(n("rO+z"),n("kPKH")),r=n("q1tI"),c=n.n(r),s=(n("9eSz"),n("JkAW")),l=n("U4IR"),d=n("EosS"),m=n("kuUC"),u=n("obyI"),f=n.n(u),p=n("/CWk"),g=n("Rt21"),v=n.n(g),E=n("OBNy"),h=n.n(E),b="622317941";e.default=function(t){var e=t.data,n=t.pageContext.tag,r=p.tags[n].name||n,u=f.a.pages.tags,g=e.allMarkdownRemark.edges;return c.a.createElement(a.a,{className:"outerPadding"},c.a.createElement(a.a,{className:"container"},c.a.createElement(l.a,null),c.a.createElement(s.a,{title:r,description:"All post about "+r+". "+p.tags[n].description+" ",path:v.a.resolvePageUrl(u,n),keywords:[r]}),c.a.createElement(m.b,null,c.a.createElement("div",{className:"marginTopTitle "+h.a.tagsList},c.a.createElement("h1",null,"#",r),c.a.createElement("h4",{className:"textCenter"},p.tags[n].description)),c.a.createElement(o.a,{gutter:[20,20]},g.map((function(t,e){return c.a.createElement(i.a,{key:e,xs:24,sm:24,md:12,lg:8},c.a.createElement(d.a,{data:t}))}))))))}},EosS:function(t,e,n){"use strict";n("SchZ"),n("u3En");var a=n("lSNA"),o=n.n(a),i=n("pVnL"),r=n.n(i),c=n("J4zp"),s=n.n(c),l=n("q1tI"),d=n.n(l),m=n("TSYQ"),u=n.n(m),f=n("BGR+"),p=n("V/uB"),g=n.n(p),v=n("H84U"),E=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(t);o<a.length;o++)e.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(n[a[o]]=t[a[o]])}return n},h=function(t){var e,n=l.useContext(v.b).getPrefixCls,a=t.prefixCls,i=t.className,c=t.checked,s=E(t,["prefixCls","className","checked"]),d=n("tag",a),m=u()(d,(e={},o()(e,"".concat(d,"-checkable"),!0),o()(e,"".concat(d,"-checkable-checked"),c),e),i);return delete s.onChange,l.createElement("span",r()({},s,{className:m,onClick:function(e){var n=t.checked,a=t.onChange,o=t.onClick;a&&a(!n),o&&o(e)}}))},b=n("09Wf"),y=n("g0mS"),k=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(t);o<a.length;o++)e.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(n[a[o]]=t[a[o]])}return n},C=new RegExp("^(".concat(b.a.join("|"),")(-inverse)?$")),S=new RegExp("^(".concat(b.b.join("|"),")$")),w=function(t,e){var n,a=t.prefixCls,i=t.className,c=t.style,d=t.children,m=t.icon,p=t.color,E=t.onClose,h=t.closeIcon,b=t.closable,w=void 0!==b&&b,x=k(t,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),T=l.useContext(v.b),N=T.getPrefixCls,O=T.direction,A=l.useState(!0),P=s()(A,2),I=P[0],L=P[1];l.useEffect((function(){"visible"in x&&L(x.visible)}),[x.visible]);var M=function(){return!!p&&(C.test(p)||S.test(p))},W=r()({backgroundColor:p&&!M()?p:void 0},c),j=M(),z=N("tag",a),H=u()(z,(n={},o()(n,"".concat(z,"-").concat(p),j),o()(n,"".concat(z,"-has-color"),p&&!j),o()(n,"".concat(z,"-hidden"),!I),o()(n,"".concat(z,"-rtl"),"rtl"===O),n),i),R=function(t){t.stopPropagation(),E&&E(t),t.defaultPrevented||"visible"in x||L(!1)},U="onClick"in x||d&&"a"===d.type,J=Object(f.a)(x,["visible"]),Y=m||null,B=Y?l.createElement(l.Fragment,null,Y,l.createElement("span",null,d)):d,V=l.createElement("span",r()({},J,{ref:e,className:H,style:W}),B,w?h?l.createElement("div",{className:"".concat(z,"-close-icon"),onClick:R},h):l.createElement(g.a,{className:"".concat(z,"-close-icon"),onClick:R}):null);return U?l.createElement(y.a,null,V):V},x=l.forwardRef(w);x.displayName="Tag",x.CheckableTag=h;var T=x,N=n("wd/R"),O=n.n(N),A=n("Wbzz"),P=n("aFl2"),I=n.n(P),L=n("Rt21"),M=n.n(L),W=n("/CWk"),j=function(t){var e=W.tags[t]?W.tags[t].color:"";return d.a.createElement(T,{color:e},d.a.createElement("a",{href:"/tags/"+t},"#"+t))};e.a=function(t){var e=t.data.node;M.a.generateOmittedPostInfo(e);var n=e.frontmatter;return d.a.createElement("div",{className:I.a.postCard},d.a.createElement(A.Link,{to:M.a.resolvePageUrl(n.path)},d.a.createElement("div",{className:I.a.postCardImg,style:{backgroundImage:"url("+(n&&n.cover?n.cover.childImageSharp.fluid.src:"")+")"}}),d.a.createElement("div",{className:I.a.mrTp20},d.a.createElement("p",null,d.a.createElement("span",{className:I.a.dateHolder},n?O()(n.date).format("MMM Do YYYY"):"")),d.a.createElement("h3",null,n?n.title:""),d.a.createElement("p",null,n?n.excerpt:""))),d.a.createElement("p",{style:{color:"#ce6d96",wordSpacing:"10px"}},n.tags.map(j)))}},KS4O:function(t,e,n){"use strict";var a={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},o={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},i=[],r=[];function c(t,e,n){t.addEventListener(e,n,!1)}function s(t,e,n){t.removeEventListener(e,n,!1)}"undefined"!=typeof window&&"undefined"!=typeof document&&function(){var t=document.createElement("div").style;function e(e,n){for(var a in e)if(e.hasOwnProperty(a)){var o=e[a];for(var i in o)if(i in t){n.push(o[i]);break}}}"AnimationEvent"in window||(delete a.animationstart.animation,delete o.animationend.animation),"TransitionEvent"in window||(delete a.transitionstart.transition,delete o.transitionend.transition),e(a,i),e(o,r)}();var l={startEvents:i,addStartEventListener:function(t,e){0!==i.length?i.forEach((function(n){c(t,n,e)})):window.setTimeout(e,0)},removeStartEventListener:function(t,e){0!==i.length&&i.forEach((function(n){s(t,n,e)}))},endEvents:r,addEndEventListener:function(t,e){0!==r.length?r.forEach((function(n){c(t,n,e)})):window.setTimeout(e,0)},removeEndEventListener:function(t,e){0!==r.length&&r.forEach((function(n){s(t,n,e)}))}};e.a=l},OBNy:function(t,e,n){t.exports={tagsList:"tags-module--tagsList--39vLn",bannerImgContainer:"tags-module--bannerImgContainer--24LjU",bannerImg:"tags-module--bannerImg--xzH6c"}},aFl2:function(t,e,n){t.exports={postCard:"postCard-module--postCard--3vov_",postCardImg:"postCard-module--postCardImg--yRYws",mrTp20:"postCard-module--mrTp20--31jVy",dateHolder:"postCard-module--dateHolder--k3h7B"}},g0mS:function(t,e,n){"use strict";n.d(e,"a",(function(){return k}));var a,o=n("lwsE"),i=n.n(o),r=n("W8MJ"),c=n.n(r),s=n("PJYZ"),l=n.n(s),d=n("7W2i"),m=n.n(d),u=n("LQ03"),f=n.n(u),p=n("q1tI"),g=n("i8i4"),v=n("KS4O"),E=n("oHiP"),h=n("H84U");function b(t){return!t||null===t.offsetParent}function y(t){var e=(t||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return!(e&&e[1]&&e[2]&&e[3])||!(e[1]===e[2]&&e[2]===e[3])}var k=function(t){m()(n,t);var e=f()(n);function n(){var t;return i()(this,n),(t=e.apply(this,arguments)).animationStart=!1,t.destroyed=!1,t.onClick=function(e,n){if(!(!e||b(e)||e.className.indexOf("-leave")>=0)){var o=t.props.insertExtraNode;t.extraNode=document.createElement("div");var i=l()(t).extraNode,r=t.context.getPrefixCls;i.className="".concat(r(""),"-click-animating-node");var c=t.getAttributeName();e.setAttribute(c,"true"),a=a||document.createElement("style"),n&&"#ffffff"!==n&&"rgb(255, 255, 255)"!==n&&y(n)&&!/rgba\((?:\d*, ){3}0\)/.test(n)&&"transparent"!==n&&(t.csp&&t.csp.nonce&&(a.nonce=t.csp.nonce),i.style.borderColor=n,a.innerHTML="\n      [".concat(r(""),"-click-animating-without-extra-node='true']::after, .").concat(r(""),"-click-animating-node {\n        --antd-wave-shadow-color: ").concat(n,";\n      }"),document.body.contains(a)||document.body.appendChild(a)),o&&e.appendChild(i),v.a.addStartEventListener(e,t.onTransitionStart),v.a.addEndEventListener(e,t.onTransitionEnd)}},t.onTransitionStart=function(e){if(!t.destroyed){var n=Object(g.findDOMNode)(l()(t));e&&e.target===n&&!t.animationStart&&t.resetEffect(n)}},t.onTransitionEnd=function(e){e&&"fadeEffect"===e.animationName&&t.resetEffect(e.target)},t.bindAnimationEvent=function(e){if(e&&e.getAttribute&&!e.getAttribute("disabled")&&!(e.className.indexOf("disabled")>=0)){var n=function(n){if("INPUT"!==n.target.tagName&&!b(n.target)){t.resetEffect(e);var a=getComputedStyle(e).getPropertyValue("border-top-color")||getComputedStyle(e).getPropertyValue("border-color")||getComputedStyle(e).getPropertyValue("background-color");t.clickWaveTimeoutId=window.setTimeout((function(){return t.onClick(e,a)}),0),E.a.cancel(t.animationStartId),t.animationStart=!0,t.animationStartId=Object(E.a)((function(){t.animationStart=!1}),10)}};return e.addEventListener("click",n,!0),{cancel:function(){e.removeEventListener("click",n,!0)}}}},t.renderWave=function(e){var n=e.csp,a=t.props.children;return t.csp=n,a},t}return c()(n,[{key:"componentDidMount",value:function(){var t=Object(g.findDOMNode)(this);t&&1===t.nodeType&&(this.instance=this.bindAnimationEvent(t))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroyed=!0}},{key:"getAttributeName",value:function(){var t=this.context.getPrefixCls,e=this.props.insertExtraNode;return"".concat(t(""),e?"-click-animating":"-click-animating-without-extra-node")}},{key:"resetEffect",value:function(t){if(t&&t!==this.extraNode&&t instanceof Element){var e=this.props.insertExtraNode,n=this.getAttributeName();t.setAttribute(n,"false"),a&&(a.innerHTML=""),e&&this.extraNode&&t.contains(this.extraNode)&&t.removeChild(this.extraNode),v.a.removeStartEventListener(t,this.onTransitionStart),v.a.removeEndEventListener(t,this.onTransitionEnd)}}},{key:"render",value:function(){return p.createElement(h.a,null,this.renderWave)}}]),n}(p.Component);k.contextType=h.b},oHiP:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n("xEkU"),o=n.n(a),i=0,r={};function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=i++,a=e;function c(){(a-=1)<=0?(t(),delete r[n]):r[n]=o()(c)}return r[n]=o()(c),n}c.cancel=function(t){void 0!==t&&(o.a.cancel(r[t]),delete r[t])},c.ids=r},u3En:function(t,e,n){}}]);
//# sourceMappingURL=component---src-templates-tags-index-jsx-84a133a5f675812de2b7.js.map