"use strict";(self.webpackChunkcsb_jp_github_io=self.webpackChunkcsb_jp_github_io||[]).push([[287],{830:(e,t,n)=>{n.d(t,{W:()=>a});var r=n(7294);function a(){return r.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},9960:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(3366),a=n(7294),o=n(3727),l=n(2263),c=n(3919),i=n(412),s=(0,a.createContext)({collectLink:function(){}}),u=n(4996),m=n(8780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const f=function(e){var t,n,f=e.isNavLink,v=e.to,h=e.href,g=e.activeClassName,b=e.isActive,p=e["data-noBrokenLinkCheck"],E=e.autoAddBaseUrl,k=void 0===E||E,Z=(0,r.Z)(e,d),w=(0,l.Z)().siteConfig,_=w.trailingSlash,y=w.baseUrl,C=(0,u.C)().withBaseUrl,N=(0,a.useContext)(s),S=v||h,L=(0,c.Z)(S),I=null==S?void 0:S.replace("pathname://",""),T=void 0!==I?(n=I,k&&function(e){return e.startsWith("/")}(n)?C(n):n):void 0;T&&L&&(T=(0,m.applyTrailingSlash)(T,{trailingSlash:_,baseUrl:y}));var D=(0,a.useRef)(!1),B=f?o.OL:o.rU,A=i.Z.canUseIntersectionObserver,x=(0,a.useRef)();(0,a.useEffect)((function(){return!A&&L&&null!=T&&window.docusaurus.prefetch(T),function(){A&&x.current&&x.current.disconnect()}}),[x,T,A,L]);var P=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,R=!T||!L||P;return T&&L&&!P&&!p&&N.collectLink(T),R?a.createElement("a",Object.assign({href:T},S&&!L&&{target:"_blank",rel:"noopener noreferrer"},Z)):a.createElement(B,Object.assign({},Z,{onMouseEnter:function(){D.current||null==T||(window.docusaurus.preload(T),D.current=!0)},innerRef:function(e){var t,n;A&&e&&L&&(t=e,n=function(){null!=T&&window.docusaurus.prefetch(T)},x.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(x.current.unobserve(t),x.current.disconnect(),n())}))})),x.current.observe(t))},to:T||""},f&&{isActive:b,activeClassName:g}))}},3919:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>a})},4996:(e,t,n)=>{n.d(t,{C:()=>o,Z:()=>l});var r=n(2263),a=n(3919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,l=o.forcePrependBaseUrl,c=void 0!==l&&l,i=o.absolute,s=void 0!==i&&i;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(o,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},541:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294);const a="iconExternalLink_wgqa";const o=function(e){var t=e.width,n=void 0===t?13.5:t,o=e.height,l=void 0===o?13.5:o;return r.createElement("svg",{width:n,height:l,"aria-hidden":"true",viewBox:"0 0 24 24",className:a},r.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},1287:(e,t,n)=>{n.d(t,{Z:()=>ke});var r=n(7294),a=n(6010),o=n(6775),l=n(5999),c=n(2822);const i="skipToContent_OuoZ";function s(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}const u=function(){var e=(0,r.useRef)(null),t=(0,o.k6)().action;return(0,c.SL)((function(n){var r=n.location;e.current&&!r.hash&&"PUSH"===t&&s(e.current)})),r.createElement("div",{ref:e},r.createElement("a",{href:"#",className:i,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&s(t)}},r.createElement(l.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))};var m=n(7462),d=n(3366),f=["width","height","color","strokeWidth","className"];function v(e){var t=e.width,n=void 0===t?21:t,a=e.height,o=void 0===a?21:a,l=e.color,c=void 0===l?"currentColor":l,i=e.strokeWidth,s=void 0===i?1.2:i,u=(e.className,(0,d.Z)(e,f));return r.createElement("svg",(0,m.Z)({viewBox:"0 0 15 15",width:n,height:o},u),r.createElement("g",{stroke:c,strokeWidth:s},r.createElement("path",{d:"M.75.75l13.5 13.5M14.25.75L.75 14.25"})))}const h="announcementBar_axC9",g="announcementBarPlaceholder_xYHE",b="announcementBarClose_A3A1",p="announcementBarContent_6uhP";const E=function(){var e=(0,c.nT)(),t=e.isActive,n=e.close,o=(0,c.LU)().announcementBar;if(!t)return null;var i=o.content,s=o.backgroundColor,u=o.textColor,m=o.isCloseable;return r.createElement("div",{className:h,style:{backgroundColor:s,color:u},role:"banner"},m&&r.createElement("div",{className:g}),r.createElement("div",{className:p,dangerouslySetInnerHTML:{__html:i}}),m?r.createElement("button",{type:"button",className:(0,a.Z)("clean-btn close",b),onClick:n,"aria-label":(0,l.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement(v,{width:14,height:14,strokeWidth:3.1})):null)};var k=n(4978),Z=n(2389);const w={toggle:"toggle_iYfV",toggleScreenReader:"toggleScreenReader_h9qa",toggleDisabled:"toggleDisabled_xj38",toggleTrack:"toggleTrack_t-f2",toggleTrackCheck:"toggleTrackCheck_mk7D",toggleChecked:"toggleChecked_a04y",toggleTrackX:"toggleTrackX_dm8H",toggleTrackThumb:"toggleTrackThumb_W6To",toggleFocused:"toggleFocused_pRSw",toggleIcon:"toggleIcon_pHJ9"};var _=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(w.toggleIcon,w.dark),style:n},t)},y=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(w.toggleIcon,w.light),style:n},t)},C=(0,r.memo)((function(e){var t,n=e.className,o=e.icons,l=e.checked,c=e.disabled,i=e.onChange,s=(0,r.useState)(l),u=s[0],m=s[1],d=(0,r.useState)(!1),f=d[0],v=d[1],h=(0,r.useRef)(null);return r.createElement("div",{className:(0,a.Z)(w.toggle,n,(t={},t[w.toggleChecked]=u,t[w.toggleFocused]=f,t[w.toggleDisabled]=c,t))},r.createElement("div",{className:w.toggleTrack,role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=h.current)?void 0:e.click()}},r.createElement("div",{className:w.toggleTrackCheck},o.checked),r.createElement("div",{className:w.toggleTrackX},o.unchecked),r.createElement("div",{className:w.toggleTrackThumb})),r.createElement("input",{ref:h,checked:u,type:"checkbox",className:w.toggleScreenReader,"aria-label":"Switch between dark and light mode",onChange:i,onClick:function(){return m(!u)},onFocus:function(){return v(!0)},onBlur:function(){return v(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=h.current)||t.click())}}))}));function N(e){var t=(0,c.LU)().colorMode.switchConfig,n=t.darkIcon,a=t.darkIconStyle,o=t.lightIcon,l=t.lightIconStyle,i=(0,Z.Z)();return r.createElement(C,(0,m.Z)({disabled:!i,icons:{checked:r.createElement(_,{icon:n,style:a}),unchecked:r.createElement(y,{icon:o,style:l})}},e))}var S=n(5350);const L=function(e){var t=(0,r.useState)(e),n=t[0],a=t[1],o=(0,r.useRef)(!1),l=(0,r.useRef)(0),i=(0,r.useCallback)((function(e){null!==e&&(l.current=e.getBoundingClientRect().height)}),[]);return(0,c.RF)((function(t,n){if(e){var r=t.scrollY;if(r<l.current)a(!0);else if(o.current)o.current=!1;else{var c=null==n?void 0:n.scrollY,i=document.documentElement.scrollHeight-l.current,s=window.innerHeight;c&&r>=c?a(!1):r+s<i&&a(!0)}}})),(0,c.SL)((function(t){if(e)return t.location.hash?(o.current=!0,void a(!1)):void a(!0)})),{navbarRef:i,isNavbarVisible:n}};const I=function(e){void 0===e&&(e=!0),(0,r.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])};var T=n(3783),D=n(907),B=n(2207),A=n(5537),x=["width","height","className"];const P=function(e){var t=e.width,n=void 0===t?30:t,a=e.height,o=void 0===a?30:a,l=e.className,c=(0,d.Z)(e,x);return r.createElement("svg",(0,m.Z)({className:l,width:n,height:o,viewBox:"0 0 30 30","aria-hidden":"true"},c),r.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},R={toggle:"toggle_2i4l",navbarHideable:"navbarHideable_RReh",navbarHidden:"navbarHidden_FBwS",navbarSidebarToggle:"navbarSidebarToggle_AVbO"};var U="right";function M(){return(0,c.LU)().navbar.items}function O(){var e=(0,c.LU)().colorMode.disableSwitch,t=(0,S.Z)(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,r.useCallback)((function(e){return e.target.checked?o():a()}),[a,o]),disabled:e}}function W(e){var t=e.sidebarShown,n=e.toggleSidebar;I(t);var o=M(),i=O(),s=function(e){var t,n=e.sidebarShown,a=e.toggleSidebar,o=null==(t=(0,c.g8)())?void 0:t({toggleSidebar:a}),l=(0,c.D9)(o),i=(0,r.useState)((function(){return!1})),s=i[0],u=i[1];(0,r.useEffect)((function(){o&&!l&&u(!0)}),[o,l]);var m=!!o;return(0,r.useEffect)((function(){m?n||u(!0):u(!1)}),[n,m]),{shown:s,hide:(0,r.useCallback)((function(){u(!1)}),[]),content:o}}({sidebarShown:t,toggleSidebar:n});return r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(A.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!i.disabled&&r.createElement(N,{className:R.navbarSidebarToggle,checked:i.isDarkTheme,onChange:i.toggle}),r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},r.createElement(v,{color:"var(--ifm-color-emphasis-600)",className:R.navbarSidebarCloseSvg}))),r.createElement("div",{className:(0,a.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":s.shown})},r.createElement("div",{className:"navbar-sidebar__item menu"},r.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.createElement(B.Z,(0,m.Z)({mobile:!0},e,{onClick:n,key:t}))})))),r.createElement("div",{className:"navbar-sidebar__item menu"},o.length>0&&r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:s.hide},r.createElement(l.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),s.content)))}const j=function(){var e,t=(0,c.LU)().navbar,n=t.hideOnScroll,o=t.style,l=function(){var e=(0,T.Z)(),t="mobile"===e,n=(0,r.useState)(!1),a=n[0],o=n[1];(0,c.Rb)((function(){if(a)return o(!1),!1}));var l=(0,r.useCallback)((function(){o((function(e){return!e}))}),[]);return(0,r.useEffect)((function(){"desktop"===e&&o(!1)}),[e]),{shouldRender:t,toggle:l,shown:a}}(),i=O(),s=(0,D.gA)(),u=L(n),d=u.navbarRef,f=u.isNavbarVisible,v=M(),h=v.some((function(e){return"search"===e.type})),g=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:U)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:U)}))}}(v),b=g.leftItems,p=g.rightItems;return r.createElement("nav",{ref:d,className:(0,a.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===o,"navbar--primary":"primary"===o,"navbar-sidebar--show":l.shown},e[R.navbarHideable]=n,e[R.navbarHidden]=n&&!f,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},((null==v?void 0:v.length)>0||s)&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:l.toggle,onKeyDown:l.toggle},r.createElement(P,null)),r.createElement(A.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),b.map((function(e,t){return r.createElement(B.Z,(0,m.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},p.map((function(e,t){return r.createElement(B.Z,(0,m.Z)({},e,{key:t}))})),!i.disabled&&r.createElement(N,{className:R.toggle,checked:i.isDarkTheme,onChange:i.toggle}),!h&&r.createElement(k.Z,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:l.toggle}),l.shouldRender&&r.createElement(W,{sidebarShown:l.shown,toggleSidebar:l.toggle}))};var H=n(9960),F=n(4996),V=n(3919);const z="footerLogoLink_SRtH";var q=n(9750),K=n(541),G=["to","href","label","prependBaseUrlToHref"];function Q(e){var t=e.to,n=e.href,a=e.label,o=e.prependBaseUrlToHref,l=(0,d.Z)(e,G),c=(0,F.Z)(t),i=(0,F.Z)(n,{forcePrependBaseUrl:!0});return r.createElement(H.Z,(0,m.Z)({className:"footer__link-item"},n?{href:o?i:n}:{to:c},l),n&&!(0,V.Z)(n)?r.createElement("span",null,a,r.createElement(K.Z,null)):a)}var X=function(e){var t=e.sources,n=e.alt,a=e.width,o=e.height;return r.createElement(q.Z,{className:"footer__logo",alt:n,sources:t,width:a,height:o})};const Y=function(){var e=(0,c.LU)().footer,t=e||{},n=t.copyright,o=t.links,l=void 0===o?[]:o,i=t.logo,s=void 0===i?{}:i,u={light:(0,F.Z)(s.src),dark:(0,F.Z)(s.srcDark||s.src)};return e?r.createElement("footer",{className:(0,a.Z)("footer",{"footer--dark":"dark"===e.style})},r.createElement("div",{className:"container"},l&&l.length>0&&r.createElement("div",{className:"row footer__links"},l.map((function(e,t){return r.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.createElement("li",{key:e.href||e.to,className:"footer__item"},r.createElement(Q,e))}))):null)}))),(s||n)&&r.createElement("div",{className:"footer__bottom text--center"},s&&(s.src||s.srcDark)&&r.createElement("div",{className:"margin-bottom--sm"},s.href?r.createElement(H.Z,{href:s.href,className:z},r.createElement(X,{alt:s.alt,sources:u,width:s.width,height:s.height})):r.createElement(X,{alt:s.alt,sources:u})),n?r.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null};var J=n(412),$=(0,c.WA)("theme"),ee="light",te="dark",ne=function(e){return e===te?te:ee},re=function(e){(0,c.WA)("theme").set(ne(e))};const ae=function(){var e=(0,c.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,a=e.respectPrefersColorScheme,o=(0,r.useState)(function(e){return J.Z.canUseDOM?ne(document.documentElement.getAttribute("data-theme")):ne(e)}(t)),l=o[0],i=o[1],s=(0,r.useCallback)((function(){i(ee),re(ee)}),[]),u=(0,r.useCallback)((function(){i(te),re(te)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",ne(l))}),[l]),(0,r.useEffect)((function(){if(!n)try{var e=$.get();null!==e&&i(ne(e))}catch(t){console.error(t)}}),[n,i]),(0,r.useEffect)((function(){n&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;i(t?te:ee)}))}),[n,a]),{isDarkTheme:l===te,setLightTheme:s,setDarkTheme:u}};var oe=n(2924);const le=function(e){var t=ae(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return r.createElement(oe.Z.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:o}},e.children)};var ce="docusaurus.tab.";const ie=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],a=(0,r.useCallback)((function(e,t){(0,c.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{var e={};(0,c._f)().forEach((function(t){if(t.startsWith(ce)){var n=t.substring(ce.length);e[n]=(0,c.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}};const se=(0,r.createContext)(void 0);const ue=function(e){var t=ie(),n=t.tabGroupChoices,a=t.setTabGroupChoices;return r.createElement(se.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a}},e.children)};function me(e){var t=e.children;return r.createElement(le,null,r.createElement(c.pl,null,r.createElement(ue,null,r.createElement(c.OC,null,r.createElement(c.L5,null,r.createElement(c.Cn,null,t))))))}var de=n(2859),fe=n(2263);function ve(e){var t=e.locale,n=e.version,a=e.tag,o=t;return r.createElement(de.Z,null,o&&r.createElement("meta",{name:"docsearch:language",content:o}),n&&r.createElement("meta",{name:"docsearch:version",content:n}),a&&r.createElement("meta",{name:"docsearch:docusaurus_tag",content:a}))}var he=n(1217);function ge(){var e=(0,fe.Z)().i18n,t=e.defaultLocale,n=e.locales,a=(0,c.l5)();return r.createElement(de.Z,null,n.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function be(e){var t=e.permalink,n=(0,fe.Z)().siteConfig.url,a=function(){var e=(0,fe.Z)().siteConfig.url,t=(0,o.TH)().pathname;return e+(0,F.Z)(t)}(),l=t?""+n+t:a;return r.createElement(de.Z,null,r.createElement("meta",{property:"og:url",content:l}),r.createElement("link",{rel:"canonical",href:l}))}function pe(e){var t=(0,fe.Z)(),n=t.siteConfig.favicon,a=t.i18n,o=a.currentLocale,l=a.localeConfigs,i=(0,c.LU)(),s=i.metadatas,u=i.image,d=e.title,f=e.description,v=e.image,h=e.keywords,g=e.searchMetadatas,b=(0,F.Z)(n),p=(0,c.pe)(d),E=o,k=l[o].direction;return r.createElement(r.Fragment,null,r.createElement(de.Z,null,r.createElement("html",{lang:E,dir:k}),n&&r.createElement("link",{rel:"shortcut icon",href:b}),r.createElement("title",null,p),r.createElement("meta",{property:"og:title",content:p}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),u&&r.createElement(he.Z,{image:u}),v&&r.createElement(he.Z,{image:v}),r.createElement(he.Z,{description:f,keywords:h}),r.createElement(be,null),r.createElement(ge,null),r.createElement(ve,(0,m.Z)({tag:c.HX,locale:o},g)),r.createElement(de.Z,null,s.map((function(e,t){return r.createElement("meta",(0,m.Z)({key:"metadata_"+t},e))}))))}const Ee=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};const ke=function(e){var t=e.children,n=e.noFooter,o=e.wrapperClassName,l=e.pageClassName;return Ee(),r.createElement(me,null,r.createElement(pe,e),r.createElement(u,null),r.createElement(E,null),r.createElement(j,null),r.createElement("div",{className:(0,a.Z)(c.kM.wrapper.main,o,l)},t),!n&&r.createElement(Y,null))}},5537:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7462),a=n(3366),o=n(7294),l=n(9960),c=n(9750),i=n(4996),s=n(2263),u=n(2822),m=["imageClassName","titleClassName"];const d=function(e){var t=(0,s.Z)().siteConfig.title,n=(0,u.LU)().navbar,d=n.title,f=n.logo,v=void 0===f?{src:""}:f,h=e.imageClassName,g=e.titleClassName,b=(0,a.Z)(e,m),p=(0,i.Z)(v.href||"/"),E={light:(0,i.Z)(v.src),dark:(0,i.Z)(v.srcDark||v.src)},k=o.createElement(c.Z,{sources:E,height:v.height,width:v.width,alt:v.alt||d||t});return o.createElement(l.Z,(0,r.Z)({to:p},b,v.target&&{target:v.target}),v.src&&(h?o.createElement("div",{className:h},k):o.createElement(o.Fragment,null,k)),null!=d&&o.createElement("b",{className:g},d))}},5525:(e,t,n)=>{n.d(t,{O:()=>b,Z:()=>k});var r=n(7462),a=n(3366),o=n(7294),l=n(6010),c=n(9960),i=n(4996),s=n(541),u=n(3919),m=n(2822),d=n(2207),f=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],v=["className","isDropdownItem"],h=["className","isDropdownItem"],g=["mobile","position"];function b(e){var t,n=e.activeBasePath,l=e.activeBaseRegex,d=e.to,v=e.href,h=e.label,g=e.activeClassName,b=void 0===g?"":g,p=e.prependBaseUrlToHref,E=(0,a.Z)(e,f),k=(0,i.Z)(d),Z=(0,i.Z)(n),w=(0,i.Z)(v,{forcePrependBaseUrl:!0}),_=h&&v&&!(0,u.Z)(v),y="dropdown__link--active"===b;return o.createElement(c.Z,(0,r.Z)({},v?{href:p?w:v}:Object.assign({isNavLink:!0,activeClassName:null!=(t=E.className)&&t.includes(b)?"":b,to:k},n||l?{isActive:function(e,t){return l?(0,m.Fx)(l,t.pathname):t.pathname.startsWith(Z)}}:null),E),_?o.createElement("span",null,h,o.createElement(s.Z,y&&{width:12,height:12})):h)}function p(e){var t=e.className,n=e.isDropdownItem,c=void 0!==n&&n,i=(0,a.Z)(e,v),s=o.createElement(b,(0,r.Z)({className:(0,l.Z)(c?"dropdown__link":"navbar__item navbar__link",t)},i));return c?o.createElement("li",null,s):s}function E(e){var t=e.className,n=(e.isDropdownItem,(0,a.Z)(e,h));return o.createElement("li",{className:"menu__list-item"},o.createElement(b,(0,r.Z)({className:(0,l.Z)("menu__link",t)},n)))}const k=function(e){var t,n=e.mobile,l=void 0!==n&&n,c=(e.position,(0,a.Z)(e,g)),i=l?E:p;return o.createElement(i,(0,r.Z)({},c,{activeClassName:null!=(t=c.activeClassName)?t:(0,d.E)(l)}))}},6400:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(7462),a=n(3366),o=n(7294),l=n(5525),c=n(907),i=n(6010),s=n(2207),u=n(2822),m=n(8780),d=["docId","label","docsPluginId"];function f(e){var t,n=e.docId,f=e.label,v=e.docsPluginId,h=(0,a.Z)(e,d),g=(0,c.Iw)(v),b=g.activeVersion,p=g.activeDoc,E=(0,u.J)(v).preferredVersion,k=(0,c.yW)(v),Z=function(e,t){var n=e.flatMap((function(e){return e.docs})),r=n.find((function(e){return e.id===t}));if(!r){var a=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+a)}return r}((0,m.uniq)([b,E,k].filter(Boolean)),n),w=(0,s.E)(h.mobile);return o.createElement(l.Z,(0,r.Z)({exact:!0},h,{className:(0,i.Z)(h.className,(t={},t[w]=(null==p?void 0:p.sidebar)&&p.sidebar===Z.sidebar,t)),activeClassName:w,label:null!=f?f:Z.id,to:Z.path}))}},9308:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(7462),a=n(3366),o=n(7294),l=n(5525),c=n(3154),i=n(907),s=n(2822),u=n(5999),m=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],d=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function f(e){var t,n,f=e.mobile,v=e.docsPluginId,h=e.dropdownActiveClassDisabled,g=e.dropdownItemsBefore,b=e.dropdownItemsAfter,p=(0,a.Z)(e,m),E=(0,i.Iw)(v),k=(0,i.gB)(v),Z=(0,i.yW)(v),w=(0,s.J)(v),_=w.preferredVersion,y=w.savePreferredVersionName;var C,N=(C=k.map((function(e){var t=(null==E?void 0:E.alternateDocVersions[e.name])||d(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==E?void 0:E.activeVersion)},onClick:function(){y(e.name)}}})),[].concat(g,C,b)),S=null!=(t=null!=(n=E.activeVersion)?n:_)?t:Z,L=f&&N?(0,u.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):S.label,I=f&&N?void 0:d(S).path;return N.length<=1?o.createElement(l.Z,(0,r.Z)({},p,{mobile:f,label:L,to:I,isActive:h?function(){return!1}:void 0})):o.createElement(c.Z,(0,r.Z)({},p,{mobile:f,label:L,to:I,items:N,isActive:h?function(){return!1}:void 0}))}},7250:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(7462),a=n(3366),o=n(7294),l=n(5525),c=n(907),i=n(2822),s=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,a.Z)(e,s),f=(0,c.zu)(m),v=(0,i.J)(m).preferredVersion,h=(0,c.yW)(m),g=null!=(t=null!=f?f:v)?t:h,b=null!=n?n:g.label,p=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(g).path;return o.createElement(l.Z,(0,r.Z)({},d,{label:b,to:p}))}},3154:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(7462),a=n(3366),o=n(7294),l=n(6010),c=n(2822),i=n(5525),s=n(2207),u=["items","position","className"],m=["items","className","position"],d=["mobile"];function f(e,t){return e.some((function(e){return function(e,t){return!!(0,c.Mg)(e.to,t)||!!(0,c.Fx)(e.activeBaseRegex,t)||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)}))}function v(e){var t,n=e.items,c=e.position,m=e.className,d=(0,a.Z)(e,u),f=(0,o.useRef)(null),v=(0,o.useRef)(null),h=(0,o.useState)(!1),g=h[0],b=h[1];return(0,o.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&b(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f]),o.createElement("div",{ref:f,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===c,"dropdown--show":g})},o.createElement(i.O,(0,r.Z)({className:(0,l.Z)("navbar__link",m)},d,{onClick:d.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),b(!g))}}),null!=(t=d.children)?t:d.label),o.createElement("ul",{ref:v,className:"dropdown__menu"},n.map((function(e,t){return o.createElement(s.Z,(0,r.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),b(!1);var r=f.current.nextElementSibling;r&&r.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function h(e){var t,n=e.items,u=e.className,d=(e.position,(0,a.Z)(e,m)),v=(0,c.be)(),h=f(n,v),g=(0,c.uR)({initialState:function(){return!h}}),b=g.collapsed,p=g.toggleCollapsed,E=g.setCollapsed;return(0,o.useEffect)((function(){h&&E(!h)}),[v,h,E]),o.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":b})},o.createElement(i.O,(0,r.Z)({role:"button",className:(0,l.Z)("menu__link menu__link--sublist",u)},d,{onClick:function(e){e.preventDefault(),p()}}),null!=(t=d.children)?t:d.label),o.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},n.map((function(e,t){return o.createElement(s.Z,(0,r.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}const g=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,a.Z)(e,d),l=n?h:v;return o.createElement(l,r)}},2207:(e,t,n)=>{n.d(t,{Z:()=>k,E:()=>E});var r=n(3366),a=n(7294),o=n(5525),l=n(3154),c=n(7462),i=["width","height"];const s=function(e){var t=e.width,n=void 0===t?20:t,o=e.height,l=void 0===o?20:o,s=(0,r.Z)(e,i);return a.createElement("svg",(0,c.Z)({viewBox:"0 0 20 20",width:n,height:l,"aria-hidden":"true"},s),a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};var u=n(2263),m=n(2822);const d="iconLanguage_EbrZ";var f=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function v(e){var t=e.mobile,n=e.dropdownItemsBefore,o=e.dropdownItemsAfter,i=(0,r.Z)(e,f),v=(0,u.Z)().i18n,h=v.currentLocale,g=v.locales,b=v.localeConfigs,p=(0,m.l5)();function E(e){return b[e].label}var k=g.map((function(e){var t="pathname://"+p.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:E(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===h?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),Z=[].concat(n,k,o),w=t?"Languages":E(h);return a.createElement(l.Z,(0,c.Z)({},i,{href:"#",mobile:t,label:a.createElement("span",null,a.createElement(s,{className:d}),a.createElement("span",null,w)),items:Z}))}var h=n(4978);function g(e){return e.mobile?null:a.createElement(h.Z,null)}var b=["type"],p={default:function(){return o.Z},localeDropdown:function(){return v},search:function(){return g},dropdown:function(){return l.Z},docsVersion:function(){return n(7250).Z},docsVersionDropdown:function(){return n(9308).Z},doc:function(){return n(6400).Z}};var E=function(e){return e?"menu__link--active":"navbar__link--active"};function k(e){var t=e.type,n=(0,r.Z)(e,b),o=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items),l=function(e){var t=p[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(o);return a.createElement(l,n)}},1217:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(7294),a=n(2859),o=n(2822),l=n(4996);function c(e){var t=e.title,n=e.description,c=e.keywords,i=e.image,s=e.children,u=(0,o.pe)(t),m=(0,l.C)().withBaseUrl,d=i?m(i,{absolute:!0}):void 0;return r.createElement(a.Z,null,t&&r.createElement("title",null,u),t&&r.createElement("meta",{property:"og:title",content:u}),n&&r.createElement("meta",{name:"description",content:n}),n&&r.createElement("meta",{property:"og:description",content:n}),c&&r.createElement("meta",{name:"keywords",content:Array.isArray(c)?c.join(","):c}),d&&r.createElement("meta",{property:"og:image",content:d}),d&&r.createElement("meta",{name:"twitter:image",content:d}),s)}},2924:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(7294).createContext(void 0)},9750:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),a=n(3366),o=n(7294),l=n(6010),c=n(2389),i=n(5350);const s={themedImage:"themedImage_TMUO","themedImage--light":"themedImage--light_4Vu1","themedImage--dark":"themedImage--dark_uzRr"};var u=["sources","className","alt"];const m=function(e){var t=(0,c.Z)(),n=(0,i.Z)().isDarkTheme,m=e.sources,d=e.className,f=e.alt,v=void 0===f?"":f,h=(0,a.Z)(e,u),g=t?n?["dark"]:["light"]:["light","dark"];return o.createElement(o.Fragment,null,g.map((function(e){return o.createElement("img",(0,r.Z)({key:e,src:m[e],alt:v,className:(0,l.Z)(s.themedImage,s["themedImage--"+e],d)},h))})))}},5350:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(2924);const o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},3783:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),a=n(412),o="desktop",l="mobile",c="ssr";function i(){return a.Z.canUseDOM?window.innerWidth>996?o:l:c}const s=function(){var e=(0,r.useState)((function(){return i()})),t=e[0],n=e[1];return(0,r.useEffect)((function(){function e(){n(i())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),t}},4978:(e,t,n)=>{n.d(t,{Z:()=>I});var r=n(7462),a=n(3366),o=n(7294),l=n(3935),c=n(2263),i=n(6775),s=n(4996),u=n(9960),m=n(2859),d=n(6397),f=n(2822);function v(){return o.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},o.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var h=n(830);function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p="Ctrl";var E=o.forwardRef((function(e,t){var n=e.translations,r=void 0===n?{}:n,a=b(e,["translations"]),l=r.buttonText,c=void 0===l?"Search":l,i=r.buttonAriaLabel,s=void 0===i?"Search":i,u=(0,o.useMemo)((function(){return"undefined"!=typeof navigator?/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":p:null}),[]);return o.createElement("button",g({type:"button",className:"DocSearch DocSearch-Button","aria-label":s},a,{ref:t}),o.createElement("span",{className:"DocSearch-Button-Container"},o.createElement(h.W,null),o.createElement("span",{className:"DocSearch-Button-Placeholder"},c)),o.createElement("span",{className:"DocSearch-Button-Keys"},null!==u&&o.createElement(o.Fragment,null,o.createElement("span",{className:"DocSearch-Button-Key"},u===p?o.createElement(v,null):u),o.createElement("span",{className:"DocSearch-Button-Key"},"K"))))})),k=n(907);function Z(){var e=function(){var e=(0,c.Z)().i18n,t=(0,k._r)(),n=(0,k.WS)(),r=(0,f.Oh)(),a=[f.HX].concat(Object.keys(t).map((function(e){var a,o,l=(null==n||null==(a=n.activePlugin)?void 0:a.pluginId)===e?n.activeVersion:void 0,c=r[e],i=t[e].versions.find((function(e){return e.isLast})),s=null!=(o=null!=l?l:c)?o:i;return(0,f.os)(e,s.name)})));return{locale:e.currentLocale,tags:a}}();return["language:"+e.locale,e.tags.map((function(e){return"docusaurus_tag:"+e}))]}var w=n(5999);const _="searchBox_NKBi";var y=["contextualSearch","externalUrlRegex"],C=null;function N(e){var t=e.hit,n=e.children;return o.createElement(u.Z,{to:t.url},n)}function S(e){var t=e.state,n=e.onClose,r=(0,d.Z)().generateSearchPageLink;return o.createElement(u.Z,{to:r(t.query),onClick:n},"See all ",t.context.nbHits," results")}function L(e){var t,u,d=e.contextualSearch,v=e.externalUrlRegex,h=(0,a.Z)(e,y),g=(0,c.Z)().siteMetadata,b=Z(),p=null!=(t=null==(u=h.searchParameters)?void 0:u.facetFilters)?t:[],k=d?[].concat(b,p):p,L=Object.assign({},h.searchParameters,{facetFilters:k}),I=(0,s.C)().withBaseUrl,T=(0,i.k6)(),D=(0,o.useRef)(null),B=(0,o.useRef)(null),A=(0,o.useState)(!1),x=A[0],P=A[1],R=(0,o.useState)(null),U=R[0],M=R[1],O=(0,o.useCallback)((function(){return C?Promise.resolve():Promise.all([n.e(831).then(n.bind(n,831)),Promise.all([n.e(532),n.e(945)]).then(n.bind(n,6945)),Promise.all([n.e(532),n.e(256)]).then(n.bind(n,5256))]).then((function(e){var t=e[0].DocSearchModal;C=t}))}),[]),W=(0,o.useCallback)((function(){O().then((function(){D.current=document.createElement("div"),document.body.insertBefore(D.current,document.body.firstChild),P(!0)}))}),[O,P]),j=(0,o.useCallback)((function(){P(!1),D.current.remove()}),[P]),H=(0,o.useCallback)((function(e){O().then((function(){P(!0),M(e.key)}))}),[O,P,M]),F=(0,o.useRef)({navigate:function(e){var t=e.itemUrl;(0,f.Fx)(v,t)?window.location.href=t:T.push(t)}}).current,V=(0,o.useRef)((function(e){return e.map((function(e){if((0,f.Fx)(v,e.url))return e;var t=new URL(e.url);return Object.assign({},e,{url:I(""+t.pathname+t.hash)})}))})).current,z=(0,o.useMemo)((function(){return function(e){return o.createElement(S,(0,r.Z)({},e,{onClose:j}))}}),[j]),q=(0,o.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",g.docusaurusVersion),e}),[g.docusaurusVersion]);!function(e){var t=e.isOpen,n=e.onOpen,r=e.onClose,a=e.onInput,l=e.searchButtonRef;o.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?r():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),l&&l.current===document.activeElement&&a&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&a(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,r,a,l])}({isOpen:x,onOpen:W,onClose:j,onInput:H,searchButtonRef:B});var K=(0,w.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return o.createElement(o.Fragment,null,o.createElement(m.Z,null,o.createElement("link",{rel:"preconnect",href:"https://"+h.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),o.createElement("div",{className:_},o.createElement(E,{onTouchStart:O,onFocus:O,onMouseOver:O,onClick:W,ref:B,translations:{buttonText:K,buttonAriaLabel:K}})),x&&(0,l.createPortal)(o.createElement(C,(0,r.Z)({onClose:j,initialScrollY:window.scrollY,initialQuery:U,navigator:F,transformItems:V,hitComponent:N,resultsFooterComponent:z,transformSearchClient:q},h,{searchParameters:L})),D.current))}const I=function(){var e=(0,c.Z)().siteConfig;return o.createElement(L,e.themeConfig.algolia)}},6397:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(6775),a=n(2263),o=n(7294);const l=function(){var e=(0,r.k6)(),t=(0,a.Z)().siteConfig.baseUrl,n=(0,o.useState)(""),l=n[0],c=n[1];return(0,o.useEffect)((function(){var e,t=null!=(e=new URLSearchParams(window.location.search).get("q"))?e:"";c(t)}),[]),{searchQuery:l,setSearchQuery:(0,o.useCallback)((function(t){var n=new URLSearchParams(window.location.search);t?n.set("q",t):n.delete("q"),e.replace({search:n.toString()}),c(t)}),[e]),generateSearchPageLink:(0,o.useCallback)((function(e){return t+"search?q="+encodeURIComponent(e)}),[t])}}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,o=e.split(/[#?]/)[0],l="/"===o||o===r?o:(a=o,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(o,l)}},8780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},9964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);