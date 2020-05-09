(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{216:function(e,r,t){"use strict";t.r(r);var n=t(0),a=t.n(n),o=t(145),i=t(68),l=t(218),s=t(219),c=t(28),u=t.n(c),h=t(92),d=t.n(h),b=t(3),g=(t(24),t(70)),f=t.n(g),p=t(116);function v(){var e=f()(["\n  flex-shrink: 0;\n  backface-visibility: hidden;\n  &:not(:root) {\n    overflow: hidden;\n  }\n"]);return v=function(){return e},e}var m=Object(p.a)(i.a)(v()),y=Object(n.forwardRef)((function(e,r){var t=e.size,a=void 0===t?"1em":t,o=e.name,i=e.color,l=void 0===i?"currentColor":i,s=e.role,c=void 0===s?"presentation":s,h=e.focusable,g=void 0!==h&&h,f=d()(e,["size","name","color","role","focusable"]),p=Object(n.useContext)(b.b).icons,v=p["question-outline"],y=null==p[o]?v.path:p[o].path,w=(null==p[o]?v.viewBox:p[o].viewBox)||"0 0 24 24";return Object(b.d)(m,u()({ref:r,as:"svg",size:a,color:l,display:"inline-block",verticalAlign:"middle",viewBox:w,focusable:g,role:c},f),y)}));y.displayName="Icon";var w=y;function k(){var e=f()(["\n  border: 0px;\n  clip: rect(0px, 0px, 0px, 0px);\n  height: 1px;\n  width: 1px;\n  margin: -1px;\n  padding: 0px;\n  overflow: hidden;\n  white-space: nowrap;\n  position: absolute;\n"]);return k=function(){return e},e}var M=Object(p.a)(i.a)(k());M.displayName="VisuallyHidden";var O=M;function x(){var e=f()(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);return x=function(){return e},e}var j=Object(b.e)(x()),_={xs:"0.75rem",sm:"1rem",md:"1.5rem",lg:"2rem",xl:"3rem"},A=Object(n.forwardRef)((function(e,r){var t=e.size,n=void 0===t?"md":t,a=e.label,o=void 0===a?"Loading...":a,l=e.thickness,s=void 0===l?"2px":l,c=e.speed,h=void 0===c?"0.45s":c,g=e.color,f=e.emptyColor,p=void 0===f?"transparent":f,v=d()(e,["size","label","thickness","speed","color","emptyColor"]),m=_[n]||n;return Object(b.d)(i.a,u()({ref:r,display:"inline-block",borderWidth:s,borderColor:"currentColor",borderBottomColor:p,borderLeftColor:p,borderStyle:"solid",rounded:"full",color:g,animation:j+" "+h+" linear infinite",size:m},v),o&&Object(b.d)(O,null,o))}));A.displayName="Spinner";var N=A,z=(t(41),t(58),t(59),t(13),t(35),t(22),t(11),t(12),t(4),t(20),t(19)),I=t.n(z),E=t(222),S=t.n(E);var C=function(e,r){return S()(e).fade(1-r).rgb().string()},F=t(214);function P(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function q(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?P(t,!0).forEach((function(r){I()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(t).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var D={light:{color:"inherit",_hover:{bg:"gray.100"},_active:{bg:"gray.200"}},dark:{color:"whiteAlpha.900",_hover:{bg:"whiteAlpha.200"},_active:{bg:"whiteAlpha.300"}}},L=function(e){var r=e.color,t=e.colorMode,n=e.theme,a=n.colors[r]&&n.colors[r][200];return("gray"===r?D:{light:{color:r+".500",bg:"transparent",_hover:{bg:r+".50"},_active:{bg:r+".100"}},dark:{color:r+".200",bg:"transparent",_hover:{bg:C(a,.12)},_active:{bg:C(a,.24)}}})[t]},W={light:{bg:"gray.100",_hover:{bg:"gray.200"},_active:{bg:"gray.300"}},dark:{bg:"whiteAlpha.200",_hover:{bg:"whiteAlpha.300"},_active:{bg:"whiteAlpha.400"}}},T={_disabled:{opacity:"40%",cursor:"not-allowed",boxShadow:"none"}},U={lg:{height:12,minWidth:12,fontSize:"lg",px:6},md:{height:10,minWidth:10,fontSize:"md",px:4},sm:{height:8,minWidth:8,fontSize:"sm",px:3},xs:{height:6,minWidth:6,fontSize:"xs",px:2}},B={_focus:{boxShadow:"outline"}},H={userSelect:"inherit",bg:"none",border:0,color:"inherit",display:"inline",font:"inherit",lineHeight:"inherit",m:0,p:0,textAlign:"inherit"},R=function(e){switch(e.variant){case"solid":return t=(r=e).color,n=r.colorMode,a={light:{bg:t+".500",color:"white",_hover:{bg:t+".600"},_active:{bg:t+".700"}},dark:{bg:t+".200",color:"gray.800",_hover:{bg:t+".300"},_active:{bg:t+".400"}}},"gray"===t&&(a=W),a[n];case"ghost":return L(e);case"link":return function(e){var r=e.color,t=e.colorMode;return{p:0,height:"auto",lineHeight:"normal",color:{light:r+".500",dark:r+".200"}[t],_hover:{textDecoration:"underline"},_active:{color:{light:r+".700",dark:r+".500"}[t]}}}(e);case"outline":return function(e){var r=e.color,t=e.colorMode;return q({border:"1px",borderColor:"gray"===r?{light:"gray.200",dark:"whiteAlpha.300"}[t]:"current"},L(e))}(e);case"unstyled":return H;default:return{}}var r,t,n,a},$={display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",transition:"all 250ms",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",lineHeight:"1.2",outline:"none"},V=function(e){var r,t=q({},e,{colorMode:Object(o.b)().colorMode,theme:Object(F.b)()});return q({},$,{},(r=t.size,U[r]),{},B,{},T,{},R(t))},J=t(154),G=t(155),X=Object(p.a)(i.a)((function(e){var r,t=e._after,n=e._focus,a=e._selected,o=e._focusWithin,i=e._hover,l=e._invalid,s=e._active,c=e._disabled,u=e._grabbed,h=e._pressed,d=e._expanded,b=e._visited,g=e._before,f=e._readOnly,p=e._first,v=e._notFirst,m=e._notLast,y=e._last,w=e._placeholder,k=e._checked,M=e._groupHover,O=e._mixed,x=e._odd,j=e._even;return Object(J.a)(((r={})["&:hover"]=Object(G.b)(i),r["&:focus"]=Object(G.b)(n),r["&:active, &[data-active=true]"]=Object(G.b)(s),r["&:visited"]=Object(G.b)(b),r["&:disabled, &:disabled:focus, &:disabled:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover"]=Object(G.b)(c),r["&[aria-selected=true]"]=Object(G.b)(a),r["&[aria-invalid=true]"]=Object(G.b)(l),r["&[aria-expanded=true]"]=Object(G.b)(d),r["&[aria-grabbed=true]"]=Object(G.b)(u),r["&[aria-readonly=true], &[readonly]"]=Object(G.b)(f),r["&:first-of-type"]=Object(G.b)(p),r["&:not(:first-of-type)"]=Object(G.b)(v),r["&:not(:last-of-type)"]=Object(G.b)(m),r["&:last-of-type"]=Object(G.b)(y),r["&:nth-of-type(odd)"]=Object(G.b)(x),r["&:nth-of-type(even)"]=Object(G.b)(j),r["&[aria-checked=mixed]"]=Object(G.b)(O),r["&[aria-checked=true]"]=Object(G.b)(k),r["&[aria-pressed=true]"]=Object(G.b)(h),r["[role=group]:hover &"]=Object(G.b)(M),r["&:before"]=Object(G.b)(g),r["&:after"]=Object(G.b)(t),r["&:focus-within"]=Object(G.b)(o),r["&::placeholder"]=w,r))}));X.displayName="PseudoBox";var Y=X;t(95),t(73),t(118),["a[href]","area[href]","button:not([disabled])","embed","iframe","input:not([disabled])","object","select:not([disabled])","textarea:not([disabled])","*[tabindex]:not([aria-disabled])","*[contenteditable]"].join();"undefined"!=typeof window?n.useLayoutEffect:n.useEffect;var K=function(e){var r=e.icon,t=d()(e,["icon"]);return"string"==typeof r?Object(b.d)(w,u()({focusable:"false","aria-hidden":"true",name:r,color:"currentColor"},t)):Object(b.d)(i.a,u()({as:r,"data-custom-icon":!0,focusable:"false","aria-hidden":"true",color:"currentColor"},t))},Q=Object(n.forwardRef)((function(e,r){var t=e.isDisabled,n=e.isLoading,a=e.isActive,o=e.isFullWidth,l=e.children,s=e.as,c=void 0===s?"button":s,h=e.variantColor,g=void 0===h?"gray":h,f=e.leftIcon,p=e.rightIcon,v=e.variant,m=void 0===v?"solid":v,y=e.loadingText,w=e.iconSpacing,k=void 0===w?2:w,M=e.type,O=void 0===M?"button":M,x=e.size,j=void 0===x?"md":x,_=e.colorMode,A=d()(e,["isDisabled","isLoading","isActive","isFullWidth","children","as","variantColor","leftIcon","rightIcon","variant","loadingText","iconSpacing","type","size","colorMode"]);Object(F.b)();var z=V({color:g,variant:m,size:j,colorMode:_}),I=t||n;return Object(b.d)(Y,u()({disabled:I,"aria-disabled":I,ref:r,as:c,type:O,borderRadius:"md",fontWeight:"semibold",width:o?"full":void 0,"data-active":a?"true":void 0},z,A),f&&!n&&Object(b.d)(K,{ml:-1,mr:k,icon:f}),n&&Object(b.d)(N,{position:y?"relative":"absolute",mr:y?k:0,color:"currentColor",size:"1em"}),n?y||Object(b.d)(i.a,{as:"span",opacity:"0"},l):l,p&&!n&&Object(b.d)(K,{mr:-1,ml:k,icon:p}))}));Q.displayName="Button";var Z=Q;r.default=function(){var e=Object(o.b)(),r=e.colorMode,t=e.toggleColorMode;return a.a.createElement(i.a,{p:5},a.a.createElement(l.a,{size:"md",mb:5},"Hello World"),a.a.createElement(s.a,{mb:3},"Color mode: ",r),a.a.createElement(Z,{variantColor:"teal",onClick:t},"Toggle color mode"))}},221:function(e,r,t){t(26),t(34),t(91),t(49),t(69),t(4),t(41);var n=t(230),a={};for(var o in n)n.hasOwnProperty(o)&&(a[n[o]]=o);var i=e.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var l in i)if(i.hasOwnProperty(l)){if(!("channels"in i[l]))throw new Error("missing channels property: "+l);if(!("labels"in i[l]))throw new Error("missing channel labels property: "+l);if(i[l].labels.length!==i[l].channels)throw new Error("channel and label counts mismatch: "+l);var s=i[l].channels,c=i[l].labels;delete i[l].channels,delete i[l].labels,Object.defineProperty(i[l],"channels",{value:s}),Object.defineProperty(i[l],"labels",{value:c})}i.rgb.hsl=function(e){var r,t,n=e[0]/255,a=e[1]/255,o=e[2]/255,i=Math.min(n,a,o),l=Math.max(n,a,o),s=l-i;return l===i?r=0:n===l?r=(a-o)/s:a===l?r=2+(o-n)/s:o===l&&(r=4+(n-a)/s),(r=Math.min(60*r,360))<0&&(r+=360),t=(i+l)/2,[r,100*(l===i?0:t<=.5?s/(l+i):s/(2-l-i)),100*t]},i.rgb.hsv=function(e){var r,t,n,a,o,i=e[0]/255,l=e[1]/255,s=e[2]/255,c=Math.max(i,l,s),u=c-Math.min(i,l,s),h=function(e){return(c-e)/6/u+.5};return 0===u?a=o=0:(o=u/c,r=h(i),t=h(l),n=h(s),i===c?a=n-t:l===c?a=1/3+r-n:s===c&&(a=2/3+t-r),a<0?a+=1:a>1&&(a-=1)),[360*a,100*o,100*c]},i.rgb.hwb=function(e){var r=e[0],t=e[1],n=e[2];return[i.rgb.hsl(e)[0],100*(1/255*Math.min(r,Math.min(t,n))),100*(n=1-1/255*Math.max(r,Math.max(t,n)))]},i.rgb.cmyk=function(e){var r,t=e[0]/255,n=e[1]/255,a=e[2]/255;return[100*((1-t-(r=Math.min(1-t,1-n,1-a)))/(1-r)||0),100*((1-n-r)/(1-r)||0),100*((1-a-r)/(1-r)||0),100*r]},i.rgb.keyword=function(e){var r=a[e];if(r)return r;var t,o,i,l=1/0;for(var s in n)if(n.hasOwnProperty(s)){var c=n[s],u=(o=e,i=c,Math.pow(o[0]-i[0],2)+Math.pow(o[1]-i[1],2)+Math.pow(o[2]-i[2],2));u<l&&(l=u,t=s)}return t},i.keyword.rgb=function(e){return n[e]},i.rgb.xyz=function(e){var r=e[0]/255,t=e[1]/255,n=e[2]/255;return[100*(.4124*(r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92)+.3576*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.1805*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)),100*(.2126*r+.7152*t+.0722*n),100*(.0193*r+.1192*t+.9505*n)]},i.rgb.lab=function(e){var r=i.rgb.xyz(e),t=r[0],n=r[1],a=r[2];return n/=100,a/=108.883,t=(t/=95.047)>.008856?Math.pow(t,1/3):7.787*t+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(t-n),200*(n-(a=a>.008856?Math.pow(a,1/3):7.787*a+16/116))]},i.hsl.rgb=function(e){var r,t,n,a,o,i=e[0]/360,l=e[1]/100,s=e[2]/100;if(0===l)return[o=255*s,o,o];r=2*s-(t=s<.5?s*(1+l):s+l-s*l),a=[0,0,0];for(var c=0;c<3;c++)(n=i+1/3*-(c-1))<0&&n++,n>1&&n--,o=6*n<1?r+6*(t-r)*n:2*n<1?t:3*n<2?r+(t-r)*(2/3-n)*6:r,a[c]=255*o;return a},i.hsl.hsv=function(e){var r=e[0],t=e[1]/100,n=e[2]/100,a=t,o=Math.max(n,.01);return t*=(n*=2)<=1?n:2-n,a*=o<=1?o:2-o,[r,100*(0===n?2*a/(o+a):2*t/(n+t)),100*((n+t)/2)]},i.hsv.rgb=function(e){var r=e[0]/60,t=e[1]/100,n=e[2]/100,a=Math.floor(r)%6,o=r-Math.floor(r),i=255*n*(1-t),l=255*n*(1-t*o),s=255*n*(1-t*(1-o));switch(n*=255,a){case 0:return[n,s,i];case 1:return[l,n,i];case 2:return[i,n,s];case 3:return[i,l,n];case 4:return[s,i,n];case 5:return[n,i,l]}},i.hsv.hsl=function(e){var r,t,n,a=e[0],o=e[1]/100,i=e[2]/100,l=Math.max(i,.01);return n=(2-o)*i,t=o*l,[a,100*(t=(t/=(r=(2-o)*l)<=1?r:2-r)||0),100*(n/=2)]},i.hwb.rgb=function(e){var r,t,n,a,o,i,l,s=e[0]/360,c=e[1]/100,u=e[2]/100,h=c+u;switch(h>1&&(c/=h,u/=h),n=6*s-(r=Math.floor(6*s)),0!=(1&r)&&(n=1-n),a=c+n*((t=1-u)-c),r){default:case 6:case 0:o=t,i=a,l=c;break;case 1:o=a,i=t,l=c;break;case 2:o=c,i=t,l=a;break;case 3:o=c,i=a,l=t;break;case 4:o=a,i=c,l=t;break;case 5:o=t,i=c,l=a}return[255*o,255*i,255*l]},i.cmyk.rgb=function(e){var r=e[0]/100,t=e[1]/100,n=e[2]/100,a=e[3]/100;return[255*(1-Math.min(1,r*(1-a)+a)),255*(1-Math.min(1,t*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a))]},i.xyz.rgb=function(e){var r,t,n,a=e[0]/100,o=e[1]/100,i=e[2]/100;return t=-.9689*a+1.8758*o+.0415*i,n=.0557*a+-.204*o+1.057*i,r=(r=3.2406*a+-1.5372*o+-.4986*i)>.0031308?1.055*Math.pow(r,1/2.4)-.055:12.92*r,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,[255*(r=Math.min(Math.max(0,r),1)),255*(t=Math.min(Math.max(0,t),1)),255*(n=Math.min(Math.max(0,n),1))]},i.xyz.lab=function(e){var r=e[0],t=e[1],n=e[2];return t/=100,n/=108.883,r=(r/=95.047)>.008856?Math.pow(r,1/3):7.787*r+16/116,[116*(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116)-16,500*(r-t),200*(t-(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116))]},i.lab.xyz=function(e){var r,t,n,a=e[0];r=e[1]/500+(t=(a+16)/116),n=t-e[2]/200;var o=Math.pow(t,3),i=Math.pow(r,3),l=Math.pow(n,3);return t=o>.008856?o:(t-16/116)/7.787,r=i>.008856?i:(r-16/116)/7.787,n=l>.008856?l:(n-16/116)/7.787,[r*=95.047,t*=100,n*=108.883]},i.lab.lch=function(e){var r,t=e[0],n=e[1],a=e[2];return(r=360*Math.atan2(a,n)/2/Math.PI)<0&&(r+=360),[t,Math.sqrt(n*n+a*a),r]},i.lch.lab=function(e){var r,t=e[0],n=e[1];return r=e[2]/360*2*Math.PI,[t,n*Math.cos(r),n*Math.sin(r)]},i.rgb.ansi16=function(e){var r=e[0],t=e[1],n=e[2],a=1 in arguments?arguments[1]:i.rgb.hsv(e)[2];if(0===(a=Math.round(a/50)))return 30;var o=30+(Math.round(n/255)<<2|Math.round(t/255)<<1|Math.round(r/255));return 2===a&&(o+=60),o},i.hsv.ansi16=function(e){return i.rgb.ansi16(i.hsv.rgb(e),e[2])},i.rgb.ansi256=function(e){var r=e[0],t=e[1],n=e[2];return r===t&&t===n?r<8?16:r>248?231:Math.round((r-8)/247*24)+232:16+36*Math.round(r/255*5)+6*Math.round(t/255*5)+Math.round(n/255*5)},i.ansi16.rgb=function(e){var r=e%10;if(0===r||7===r)return e>50&&(r+=3.5),[r=r/10.5*255,r,r];var t=.5*(1+~~(e>50));return[(1&r)*t*255,(r>>1&1)*t*255,(r>>2&1)*t*255]},i.ansi256.rgb=function(e){if(e>=232){var r=10*(e-232)+8;return[r,r,r]}var t;return e-=16,[Math.floor(e/36)/5*255,Math.floor((t=e%36)/6)/5*255,t%6/5*255]},i.rgb.hex=function(e){var r=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(r.length)+r},i.hex.rgb=function(e){var r=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!r)return[0,0,0];var t=r[0];3===r[0].length&&(t=t.split("").map((function(e){return e+e})).join(""));var n=parseInt(t,16);return[n>>16&255,n>>8&255,255&n]},i.rgb.hcg=function(e){var r,t=e[0]/255,n=e[1]/255,a=e[2]/255,o=Math.max(Math.max(t,n),a),i=Math.min(Math.min(t,n),a),l=o-i;return r=l<=0?0:o===t?(n-a)/l%6:o===n?2+(a-t)/l:4+(t-n)/l+4,r/=6,[360*(r%=1),100*l,100*(l<1?i/(1-l):0)]},i.hsl.hcg=function(e){var r=e[1]/100,t=e[2]/100,n=1,a=0;return(n=t<.5?2*r*t:2*r*(1-t))<1&&(a=(t-.5*n)/(1-n)),[e[0],100*n,100*a]},i.hsv.hcg=function(e){var r=e[1]/100,t=e[2]/100,n=r*t,a=0;return n<1&&(a=(t-n)/(1-n)),[e[0],100*n,100*a]},i.hcg.rgb=function(e){var r=e[0]/360,t=e[1]/100,n=e[2]/100;if(0===t)return[255*n,255*n,255*n];var a,o=[0,0,0],i=r%1*6,l=i%1,s=1-l;switch(Math.floor(i)){case 0:o[0]=1,o[1]=l,o[2]=0;break;case 1:o[0]=s,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=l;break;case 3:o[0]=0,o[1]=s,o[2]=1;break;case 4:o[0]=l,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=s}return a=(1-t)*n,[255*(t*o[0]+a),255*(t*o[1]+a),255*(t*o[2]+a)]},i.hcg.hsv=function(e){var r=e[1]/100,t=r+e[2]/100*(1-r),n=0;return t>0&&(n=r/t),[e[0],100*n,100*t]},i.hcg.hsl=function(e){var r=e[1]/100,t=e[2]/100*(1-r)+.5*r,n=0;return t>0&&t<.5?n=r/(2*t):t>=.5&&t<1&&(n=r/(2*(1-t))),[e[0],100*n,100*t]},i.hcg.hwb=function(e){var r=e[1]/100,t=r+e[2]/100*(1-r);return[e[0],100*(t-r),100*(1-t)]},i.hwb.hcg=function(e){var r=e[1]/100,t=1-e[2]/100,n=t-r,a=0;return n<1&&(a=(t-n)/(1-n)),[e[0],100*n,100*a]},i.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},i.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},i.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},i.gray.hsl=i.gray.hsv=function(e){return[0,0,e[0]]},i.gray.hwb=function(e){return[0,100,e[0]]},i.gray.cmyk=function(e){return[0,0,0,e[0]]},i.gray.lab=function(e){return[e[0],0,0]},i.gray.hex=function(e){var r=255&Math.round(e[0]/100*255),t=((r<<16)+(r<<8)+r).toString(16).toUpperCase();return"000000".substring(t.length)+t},i.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}},222:function(e,r,t){"use strict";t(25),t(223),t(34),t(224),t(27),t(119),t(11),t(12),t(4),t(20),t(13);var n=t(225),a=t(229),o=[].slice,i=["keyword","gray","hex"],l={};Object.keys(a).forEach((function(e){l[o.call(a[e].labels).sort().join("")]=e}));var s={};function c(e,r){if(!(this instanceof c))return new c(e,r);if(r&&r in i&&(r=null),r&&!(r in a))throw new Error("Unknown model: "+r);var t,u;if(null==e)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(e instanceof c)this.model=e.model,this.color=e.color.slice(),this.valpha=e.valpha;else if("string"==typeof e){var h=n.get(e);if(null===h)throw new Error("Unable to parse color from string: "+e);this.model=h.model,u=a[this.model].channels,this.color=h.value.slice(0,u),this.valpha="number"==typeof h.value[u]?h.value[u]:1}else if(e.length){this.model=r||"rgb",u=a[this.model].channels;var d=o.call(e,0,u);this.color=b(d,u),this.valpha="number"==typeof e[u]?e[u]:1}else if("number"==typeof e)e&=16777215,this.model="rgb",this.color=[e>>16&255,e>>8&255,255&e],this.valpha=1;else{this.valpha=1;var g=Object.keys(e);"alpha"in e&&(g.splice(g.indexOf("alpha"),1),this.valpha="number"==typeof e.alpha?e.alpha:0);var f=g.sort().join("");if(!(f in l))throw new Error("Unable to parse color from object: "+JSON.stringify(e));this.model=l[f];var p=a[this.model].labels,v=[];for(t=0;t<p.length;t++)v.push(e[p[t]]);this.color=b(v)}if(s[this.model])for(u=a[this.model].channels,t=0;t<u;t++){var m=s[this.model][t];m&&(this.color[t]=m(this.color[t]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}function u(e,r,t){return(e=Array.isArray(e)?e:[e]).forEach((function(e){(s[e]||(s[e]=[]))[r]=t})),e=e[0],function(n){var a;return arguments.length?(t&&(n=t(n)),(a=this[e]()).color[r]=n,a):(a=this[e]().color[r],t&&(a=t(a)),a)}}function h(e){return function(r){return Math.max(0,Math.min(e,r))}}function d(e){return Array.isArray(e)?e:[e]}function b(e,r){for(var t=0;t<r;t++)"number"!=typeof e[t]&&(e[t]=0);return e}c.prototype={toString:function(){return this.string()},toJSON:function(){return this[this.model]()},string:function(e){var r=this.model in n.to?this:this.rgb(),t=1===(r=r.round("number"==typeof e?e:1)).valpha?r.color:r.color.concat(this.valpha);return n.to[r.model](t)},percentString:function(e){var r=this.rgb().round("number"==typeof e?e:1),t=1===r.valpha?r.color:r.color.concat(this.valpha);return n.to.rgb.percent(t)},array:function(){return 1===this.valpha?this.color.slice():this.color.concat(this.valpha)},object:function(){for(var e={},r=a[this.model].channels,t=a[this.model].labels,n=0;n<r;n++)e[t[n]]=this.color[n];return 1!==this.valpha&&(e.alpha=this.valpha),e},unitArray:function(){var e=this.rgb().color;return e[0]/=255,e[1]/=255,e[2]/=255,1!==this.valpha&&e.push(this.valpha),e},unitObject:function(){var e=this.rgb().object();return e.r/=255,e.g/=255,e.b/=255,1!==this.valpha&&(e.alpha=this.valpha),e},round:function(e){return e=Math.max(e||0,0),new c(this.color.map(function(e){return function(r){return function(e,r){return Number(e.toFixed(r))}(r,e)}}(e)).concat(this.valpha),this.model)},alpha:function(e){return arguments.length?new c(this.color.concat(Math.max(0,Math.min(1,e))),this.model):this.valpha},red:u("rgb",0,h(255)),green:u("rgb",1,h(255)),blue:u("rgb",2,h(255)),hue:u(["hsl","hsv","hsl","hwb","hcg"],0,(function(e){return(e%360+360)%360})),saturationl:u("hsl",1,h(100)),lightness:u("hsl",2,h(100)),saturationv:u("hsv",1,h(100)),value:u("hsv",2,h(100)),chroma:u("hcg",1,h(100)),gray:u("hcg",2,h(100)),white:u("hwb",1,h(100)),wblack:u("hwb",2,h(100)),cyan:u("cmyk",0,h(100)),magenta:u("cmyk",1,h(100)),yellow:u("cmyk",2,h(100)),black:u("cmyk",3,h(100)),x:u("xyz",0,h(100)),y:u("xyz",1,h(100)),z:u("xyz",2,h(100)),l:u("lab",0,h(100)),a:u("lab",1),b:u("lab",2),keyword:function(e){return arguments.length?new c(e):a[this.model].keyword(this.color)},hex:function(e){return arguments.length?new c(e):n.to.hex(this.rgb().round().color)},rgbNumber:function(){var e=this.rgb().color;return(255&e[0])<<16|(255&e[1])<<8|255&e[2]},luminosity:function(){for(var e=this.rgb().color,r=[],t=0;t<e.length;t++){var n=e[t]/255;r[t]=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}return.2126*r[0]+.7152*r[1]+.0722*r[2]},contrast:function(e){var r=this.luminosity(),t=e.luminosity();return r>t?(r+.05)/(t+.05):(t+.05)/(r+.05)},level:function(e){var r=this.contrast(e);return r>=7.1?"AAA":r>=4.5?"AA":""},isDark:function(){var e=this.rgb().color;return(299*e[0]+587*e[1]+114*e[2])/1e3<128},isLight:function(){return!this.isDark()},negate:function(){for(var e=this.rgb(),r=0;r<3;r++)e.color[r]=255-e.color[r];return e},lighten:function(e){var r=this.hsl();return r.color[2]+=r.color[2]*e,r},darken:function(e){var r=this.hsl();return r.color[2]-=r.color[2]*e,r},saturate:function(e){var r=this.hsl();return r.color[1]+=r.color[1]*e,r},desaturate:function(e){var r=this.hsl();return r.color[1]-=r.color[1]*e,r},whiten:function(e){var r=this.hwb();return r.color[1]+=r.color[1]*e,r},blacken:function(e){var r=this.hwb();return r.color[2]+=r.color[2]*e,r},grayscale:function(){var e=this.rgb().color,r=.3*e[0]+.59*e[1]+.11*e[2];return c.rgb(r,r,r)},fade:function(e){return this.alpha(this.valpha-this.valpha*e)},opaquer:function(e){return this.alpha(this.valpha+this.valpha*e)},rotate:function(e){var r=this.hsl(),t=r.color[0];return t=(t=(t+e)%360)<0?360+t:t,r.color[0]=t,r},mix:function(e,r){if(!e||!e.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof e);var t=e.rgb(),n=this.rgb(),a=void 0===r?.5:r,o=2*a-1,i=t.alpha()-n.alpha(),l=((o*i==-1?o:(o+i)/(1+o*i))+1)/2,s=1-l;return c.rgb(l*t.red()+s*n.red(),l*t.green()+s*n.green(),l*t.blue()+s*n.blue(),t.alpha()*a+n.alpha()*(1-a))}},Object.keys(a).forEach((function(e){if(-1===i.indexOf(e)){var r=a[e].channels;c.prototype[e]=function(){if(this.model===e)return new c(this);if(arguments.length)return new c(arguments,e);var t="number"==typeof arguments[r]?r:this.valpha;return new c(d(a[this.model][e].raw(this.color)).concat(t),e)},c[e]=function(t){return"number"==typeof t&&(t=b(o.call(arguments),r)),new c(t,e)}}})),e.exports=c},223:function(e,r,t){"use strict";var n=t(8),a=t(36),o=t(50),i=t(117),l=t(93),s=t(15),c=t(72).f,u=t(94).f,h=t(18).f,d=t(166).trim,b=n.Number,g=b,f=b.prototype,p="Number"==o(t(71)(f)),v="trim"in String.prototype,m=function(e){var r=l(e,!1);if("string"==typeof r&&r.length>2){var t,n,a,o=(r=v?r.trim():d(r,3)).charCodeAt(0);if(43===o||45===o){if(88===(t=r.charCodeAt(2))||120===t)return NaN}else if(48===o){switch(r.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+r}for(var i,s=r.slice(2),c=0,u=s.length;c<u;c++)if((i=s.charCodeAt(c))<48||i>a)return NaN;return parseInt(s,n)}}return+r};if(!b(" 0o1")||!b("0b1")||b("+0x1")){b=function(e){var r=arguments.length<1?0:e,t=this;return t instanceof b&&(p?s((function(){f.valueOf.call(t)})):"Number"!=o(t))?i(new g(m(r)),t,b):m(r)};for(var y,w=t(14)?c(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;w.length>k;k++)a(g,y=w[k])&&!a(b,y)&&h(b,y,u(g,y));b.prototype=f,f.constructor=b,t(21)(n,"Number",b)}},224:function(e,r,t){var n=t(10),a=t(57).onFreeze;t(165)("freeze",(function(e){return function(r){return e&&n(r)?e(a(r)):r}}))},225:function(e,r,t){t(49),t(69),t(4),t(91);var n=t(226),a=t(227),o={};for(var i in n)n.hasOwnProperty(i)&&(o[n[i]]=i);var l=e.exports={to:{},get:{}};function s(e,r,t){return Math.min(Math.max(r,e),t)}function c(e){var r=e.toString(16).toUpperCase();return r.length<2?"0"+r:r}l.get=function(e){var r,t;switch(e.substring(0,3).toLowerCase()){case"hsl":r=l.get.hsl(e),t="hsl";break;case"hwb":r=l.get.hwb(e),t="hwb";break;default:r=l.get.rgb(e),t="rgb"}return r?{model:t,value:r}:null},l.get.rgb=function(e){if(!e)return null;var r,t,a,o=[0,0,0,1];if(r=e.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(a=r[2],r=r[1],t=0;t<3;t++){var i=2*t;o[t]=parseInt(r.slice(i,i+2),16)}a&&(o[3]=Math.round(parseInt(a,16)/255*100)/100)}else if(r=e.match(/^#([a-f0-9]{3,4})$/i)){for(a=(r=r[1])[3],t=0;t<3;t++)o[t]=parseInt(r[t]+r[t],16);a&&(o[3]=Math.round(parseInt(a+a,16)/255*100)/100)}else if(r=e.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)){for(t=0;t<3;t++)o[t]=parseInt(r[t+1],0);r[4]&&(o[3]=parseFloat(r[4]))}else{if(!(r=e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)))return(r=e.match(/(\D+)/))?"transparent"===r[1]?[0,0,0,0]:(o=n[r[1]])?(o[3]=1,o):null:null;for(t=0;t<3;t++)o[t]=Math.round(2.55*parseFloat(r[t+1]));r[4]&&(o[3]=parseFloat(r[4]))}for(t=0;t<3;t++)o[t]=s(o[t],0,255);return o[3]=s(o[3],0,1),o},l.get.hsl=function(e){if(!e)return null;var r=e.match(/^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);if(r){var t=parseFloat(r[4]);return[(parseFloat(r[1])+360)%360,s(parseFloat(r[2]),0,100),s(parseFloat(r[3]),0,100),s(isNaN(t)?1:t,0,1)]}return null},l.get.hwb=function(e){if(!e)return null;var r=e.match(/^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);if(r){var t=parseFloat(r[4]);return[(parseFloat(r[1])%360+360)%360,s(parseFloat(r[2]),0,100),s(parseFloat(r[3]),0,100),s(isNaN(t)?1:t,0,1)]}return null},l.to.hex=function(){var e=a(arguments);return"#"+c(e[0])+c(e[1])+c(e[2])+(e[3]<1?c(Math.round(255*e[3])):"")},l.to.rgb=function(){var e=a(arguments);return e.length<4||1===e[3]?"rgb("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+")":"rgba("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+", "+e[3]+")"},l.to.rgb.percent=function(){var e=a(arguments),r=Math.round(e[0]/255*100),t=Math.round(e[1]/255*100),n=Math.round(e[2]/255*100);return e.length<4||1===e[3]?"rgb("+r+"%, "+t+"%, "+n+"%)":"rgba("+r+"%, "+t+"%, "+n+"%, "+e[3]+")"},l.to.hsl=function(){var e=a(arguments);return e.length<4||1===e[3]?"hsl("+e[0]+", "+e[1]+"%, "+e[2]+"%)":"hsla("+e[0]+", "+e[1]+"%, "+e[2]+"%, "+e[3]+")"},l.to.hwb=function(){var e=a(arguments),r="";return e.length>=4&&1!==e[3]&&(r=", "+e[3]),"hwb("+e[0]+", "+e[1]+"%, "+e[2]+"%"+r+")"},l.to.keyword=function(e){return o[e.slice(0,3)]}},226:function(e,r,t){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},227:function(e,r,t){"use strict";var n=t(228),a=Array.prototype.concat,o=Array.prototype.slice,i=e.exports=function(e){for(var r=[],t=0,i=e.length;t<i;t++){var l=e[t];n(l)?r=a.call(r,o.call(l)):r.push(l)}return r};i.wrap=function(e){return function(){return e(i(arguments))}}},228:function(e,r,t){t(24),t(25),e.exports=function(e){return!(!e||"string"==typeof e)&&(e instanceof Array||Array.isArray(e)||e.length>=0&&(e.splice instanceof Function||Object.getOwnPropertyDescriptor(e,e.length-1)&&"String"!==e.constructor.name))}},229:function(e,r,t){t(41),t(13),t(11),t(12),t(4),t(20);var n=t(221),a=t(231),o={};Object.keys(n).forEach((function(e){o[e]={},Object.defineProperty(o[e],"channels",{value:n[e].channels}),Object.defineProperty(o[e],"labels",{value:n[e].labels});var r=a(e);Object.keys(r).forEach((function(t){var n=r[t];o[e][t]=function(e){var r=function(r){if(null==r)return r;arguments.length>1&&(r=Array.prototype.slice.call(arguments));var t=e(r);if("object"==typeof t)for(var n=t.length,a=0;a<n;a++)t[a]=Math.round(t[a]);return t};return"conversion"in e&&(r.conversion=e.conversion),r}(n),o[e][t].raw=function(e){var r=function(r){return null==r?r:(arguments.length>1&&(r=Array.prototype.slice.call(arguments)),e(r))};return"conversion"in e&&(r.conversion=e.conversion),r}(n)}))})),e.exports=o},230:function(e,r,t){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},231:function(e,r,t){t(11),t(12),t(4),t(20);var n=t(221);function a(e){var r=function(){for(var e={},r=Object.keys(n),t=r.length,a=0;a<t;a++)e[r[a]]={distance:-1,parent:null};return e}(),t=[e];for(r[e].distance=0;t.length;)for(var a=t.pop(),o=Object.keys(n[a]),i=o.length,l=0;l<i;l++){var s=o[l],c=r[s];-1===c.distance&&(c.distance=r[a].distance+1,c.parent=a,t.unshift(s))}return r}function o(e,r){return function(t){return r(e(t))}}function i(e,r){for(var t=[r[e].parent,e],a=n[r[e].parent][e],i=r[e].parent;r[i].parent;)t.unshift(r[i].parent),a=o(n[r[i].parent][i],a),i=r[i].parent;return a.conversion=t,a}e.exports=function(e){for(var r=a(e),t={},n=Object.keys(r),o=n.length,l=0;l<o;l++){var s=n[l];null!==r[s].parent&&(t[s]=i(s,r))}return t}}}]);
//# sourceMappingURL=component---src-pages-index-js-f4b7d3fe68eecbf22837.js.map