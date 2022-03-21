"use strict";(self.webpackChunkcsb_jp_github_io=self.webpackChunkcsb_jp_github_io||[]).push([[4],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=p(n),v=i,f=m["".concat(l,".").concat(v)]||m[v]||c[v]||o;return n?a.createElement(f,r(r({ref:t},s),{},{components:n})):a.createElement(f,r({ref:t},s))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:i,r[1]=d;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9733:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>d,contentTitle:()=>l,metadata:()=>p,toc:()=>s,default:()=>m});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],d={id:"configuration",title:"\u8a2d\u5b9a"},l=void 0,p={unversionedId:"configuration",id:"configuration",title:"\u8a2d\u5b9a",description:"\u30b5\u30f3\u30c9\u30dc\u30c3\u30af\u30b9\u306e\u8a2d\u5b9a\u65b9\u6cd5\u3068\u305d\u308c\u305e\u308c\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/docs/configuration",editUrl:"https://github.com/csb-jp/csb-jp.github.io/edit/master/docs/configuration.md",tags:[],version:"current",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1647867304,formattedLastUpdatedAt:"2022/3/21",frontMatter:{id:"configuration",title:"\u8a2d\u5b9a"},sidebar:"docs",previous:{title:"Live (\u5171\u540c\u7de8\u96c6)",permalink:"/docs/live"},next:{title:"\u74b0\u5883",permalink:"/docs/environment"}},s=[{value:"package.json",id:"packagejson",children:[],level:2},{value:"sandbox.config.json",id:"sandboxconfigjson",children:[],level:2},{value:".prettierrc",id:"prettierrc",children:[],level:2},{value:"netlify.toml",id:"netlifytoml",children:[],level:2},{value:"now.json (vercel.json)",id:"nowjson-verceljson",children:[],level:2}],c={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u30b5\u30f3\u30c9\u30dc\u30c3\u30af\u30b9\u306e\u8a2d\u5b9a\u65b9\u6cd5\u3068\u305d\u308c\u305e\u308c\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"packagejson"},"package.json"),(0,o.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u5fc5\u8981\u306a\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u7ba1\u7406\u306a\u3069\u306e\u8a2d\u5b9a\u3092\u884c\u3044\u307e\u3059\u3002\u8a73\u3057\u304f\u306f",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/files/package.json"},"npm \u516c\u5f0f\u306e package.json \u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("h2",{id:"sandboxconfigjson"},"sandbox.config.json"),(0,o.kt)("p",null,"\u30b5\u30f3\u30c9\u30dc\u30c3\u30af\u30b9\u306e\u8a2d\u5b9a\u306f sandbox.config.json \u30d5\u30a1\u30a4\u30eb\u306e\u5185\u5bb9\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u3067\u884c\u3044\u307e\u3059\u3002\u5de6\u7aef\u306e\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u306e\u4e2d\u304b\u3089","[Configuration Files]","\u2192","[sandbox.config.json]","\u2192","[Create]","\u307e\u305f\u306f","[Edit]","\u9078\u629e\u3059\u308b\u3068 sandbox.config.json \u306e\u5185\u5bb9\u3092\u5909\u66f4\u3067\u304d\u307e\u3059"),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},"Infinite Loop Protection"),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("inlineCode",{parentName:"dd"},"infiniteLoopProtection"),"\n\u7121\u9650\u30eb\u30fc\u30d7\u3092\u691c\u77e5\u3057\u305f\u3068\u304d\u5b9f\u884c\u3092\u505c\u6b62\u3059\u308b\u304b\u3069\u3046\u304b\u8a2d\u5b9a\u3057\u307e\u3059\u3002(\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,o.kt)("inlineCode",{parentName:"dd"},"false")," \u505c\u6b62\u3057\u306a\u3044)")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u7121\u9650\u30eb\u30fc\u30d7\u3092\u52d5\u4f5c\u3057\u305f\u3044\u5834\u5408\u306f",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"\u306b\u8a2d\u5b9a\u3057\u307e\u3057\u3087\u3046\u3002"))),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},"Hard Reload on Change"),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("inlineCode",{parentName:"dd"},"hardReloadOnChange"),"\n\u30d5\u30a1\u30a4\u30eb\u3092\u5909\u66f4\u3059\u308b\u305f\u3073\u5f37\u5236\u7684\u306b\u30ea\u30ed\u30fc\u30c9\u3059\u308b\u304b\u3069\u3046\u304b\u8a2d\u5b9a\u3057\u307e\u3059\u3002(\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,o.kt)("inlineCode",{parentName:"dd"},"false")," \u5f37\u5236\u7684\u306a\u30ea\u30ed\u30fc\u30c9\u3092\u3057\u306a\u3044)")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"setInterval()"),"\u306a\u3069\u30b0\u30ed\u30fc\u30d0\u30eb\u306a\u72b6\u614b\u3092\u6271\u3046\u969b\u306f",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"\u306b\u8a2d\u5b9a\u3057\u307e\u3057\u3087\u3046\u3002"))),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},"Template"),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("a",{parentName:"dd",href:"https://github.com/codesandbox/codesandbox-importers/blob/97d52141aa025ac7baf83b9574a9e5ae4f771df7/packages/types/index.d.ts#L38-L65"},(0,o.kt)("inlineCode",{parentName:"a"},"template")),"\n\u9078\u629e\u3057\u305f\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002(",(0,o.kt)("inlineCode",{parentName:"dd"},"static")," \u9759\u7684\u30d5\u30a1\u30a4\u30eb\u3001",(0,o.kt)("inlineCode",{parentName:"dd"},"node")," Node.js \u30b3\u30f3\u30c6\u30ca\u30fc\u74b0\u5883)")),(0,o.kt)("h2",{id:"prettierrc"},".prettierrc"),(0,o.kt)("p",null,"\u30b3\u30fc\u30c9\u306e\u81ea\u52d5\u6574\u5f62\u306e\u8a2d\u5b9a\u3092\u884c\u3044\u307e\u3059\u3002\u8a73\u3057\u304f\u306f",(0,o.kt)("a",{parentName:"p",href:"https://prettier.io/docs/en/configuration.html"},"Prettier \u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("h2",{id:"netlifytoml"},"netlify.toml"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u30c7\u30d7\u30ed\u30a4\u306b\u95a2\u3059\u308b\u8a2d\u5b9a\u3067\u3059\u3002"))),(0,o.kt)("p",null,"Netlify \u3078\u306e\u30c7\u30d7\u30ed\u30a4\u306b\u95a2\u308f\u308b\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3067\u3059\u3002\u8a73\u3057\u304f\u306f",(0,o.kt)("a",{parentName:"p",href:"https://docs.netlify.com/configure-builds/file-based-configuration/"},"Netlify \u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("h2",{id:"nowjson-verceljson"},"now.json (vercel.json)"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u30c7\u30d7\u30ed\u30a4\u306b\u95a2\u3059\u308b\u8a2d\u5b9a\u3067\u3059\u3002"))),(0,o.kt)("p",null,"Vercel \u3078\u306e\u30c7\u30d7\u30ed\u30a4\u306b\u95a2\u308f\u308b\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3067\u3059\u3002\u8a73\u3057\u304f\u306f",(0,o.kt)("a",{parentName:"p",href:"https://vercel.com/docs/configuration"},"Vercel \u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}m.isMDXComponent=!0}}]);