(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9917:function(e,i,t){"use strict";var n=t(3038),o=t(319);i.default=function(e){var i=e.src,t=e.sizes,o=e.unoptimized,l=void 0!==o&&o,d=e.priority,u=void 0!==d&&d,g=e.loading,p=e.lazyBoundary,b=void 0===p?"200px":p,y=e.className,v=e.quality,w=e.width,_=e.height,N=e.objectFit,A=e.objectPosition,S=e.onLoadingComplete,D=e.loader,W=void 0===D?k:D,I=e.placeholder,H=void 0===I?"empty":I,B=e.blurDataURL,C=function(e,i){if(null==e)return{};var t,n,o=function(e,i){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],i.indexOf(t)>=0||(o[t]=e[t]);return o}(e,i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),z=t?"responsive":"intrinsic";"layout"in C&&(C.layout&&(z=C.layout),delete C.layout);var L="";if(function(e){return"object"===typeof e&&(f(e)||function(e){return void 0!==e.src}(e))}(i)){var T=f(i)?i.default:i;if(!T.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(T)));if(B=B||T.blurDataURL,L=T.src,(!z||"fill"!==z)&&(_=_||T.height,w=w||T.width,!T.height||!T.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(T)))}i="string"===typeof i?i:L;var O=j(w),M=j(_),P=j(v),E=!u&&("lazy"===g||"undefined"===typeof g);i.startsWith("data:")&&(l=!0,E=!1);h.has(i)&&(E=!1);0;var R,q,G,F=c.useIntersection({rootMargin:b,disabled:!E}),J=n(F,2),U=J[0],Z=J[1],V=!E||Z,Q={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:N,objectPosition:A},X="blur"===H?{filter:"blur(20px)",backgroundSize:N||"cover",backgroundImage:'url("'.concat(B,'")'),backgroundPosition:A||"0% 0%"}:{};if("fill"===z)R={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0};else if("undefined"!==typeof O&&"undefined"!==typeof M){var Y=M/O,K=isNaN(Y)?"100%":"".concat(100*Y,"%");"responsive"===z?(R={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},q={display:"block",boxSizing:"border-box",paddingTop:K}):"intrinsic"===z?(R={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},q={boxSizing:"border-box",display:"block",maxWidth:"100%"},G='<svg width="'.concat(O,'" height="').concat(M,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===z&&(R={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:O,height:M})}else 0;var $={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};V&&($=x({src:i,unoptimized:l,layout:z,width:O,quality:P,sizes:t,loader:W}));var ee=i;return a.default.createElement("div",{style:R},q?a.default.createElement("div",{style:q},G?a.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(r.toBase64(G))}):null):null,!V&&a.default.createElement("noscript",null,a.default.createElement("img",Object.assign({},C,x({src:i,unoptimized:l,layout:z,width:O,quality:P,sizes:t,loader:W}),{decoding:"async","data-nimg":!0,style:Q,className:y}))),a.default.createElement("img",Object.assign({},C,$,{decoding:"async","data-nimg":!0,className:y,ref:function(e){U(e),function(e,i,t,n){if(!e)return;var o=function(){e.src.startsWith("data:")||("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===t&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),h.add(i),n){var o=e.naturalWidth,a=e.naturalHeight;n({naturalWidth:o,naturalHeight:a})}}))};e.complete?o():e.onload=o}(e,ee,H,S)},style:m({},Q,X)})),u?a.default.createElement(s.default,null,a.default.createElement("link",{key:"__nimg-"+$.src+$.srcSet+$.sizes,rel:"preload",as:"image",href:$.srcSet?void 0:$.src,imagesrcset:$.srcSet,imagesizes:$.sizes})):null)};var a=u(t(7294)),s=u(t(639)),r=t(8997),l=t(5809),c=t(7426);function d(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function u(e){return e&&e.__esModule?e:{default:e}}function m(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(i){d(e,i,t[i])}))}return e}var h=new Set;var g=new Map([["default",function(e){var i=e.root,t=e.src,n=e.width,o=e.quality;0;return"".concat(i,"?url=").concat(encodeURIComponent(t),"&w=").concat(n,"&q=").concat(o||75)}],["imgix",function(e){var i=e.root,t=e.src,n=e.width,o=e.quality,a=new URL("".concat(i).concat(N(t))),s=a.searchParams;s.set("auto",s.get("auto")||"format"),s.set("fit",s.get("fit")||"max"),s.set("w",s.get("w")||n.toString()),o&&s.set("q",o.toString());return a.href}],["cloudinary",function(e){var i=e.root,t=e.src,n=e.width,o=e.quality,a=["f_auto","c_limit","w_"+n,"q_"+(o||"auto")].join(",")+"/";return"".concat(i).concat(a).concat(N(t))}],["akamai",function(e){var i=e.root,t=e.src,n=e.width;return"".concat(i).concat(N(t),"?imwidth=").concat(n)}],["custom",function(e){var i=e.src;throw new Error('Image with src "'.concat(i,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function f(e){return void 0!==e.default}var p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://res.cloudinary.com/sequoia/image/upload/",loader:"cloudinary"}||l.imageConfigDefault,b=p.deviceSizes,y=p.imageSizes,v=p.loader,w=p.path,_=(p.domains,[].concat(o(b),o(y)));function x(e){var i=e.src,t=e.unoptimized,n=e.layout,a=e.width,s=e.quality,r=e.sizes,l=e.loader;if(t)return{src:i,srcSet:void 0,sizes:void 0};var c=function(e,i,t){if(t&&("fill"===i||"responsive"===i)){for(var n,a=/(^|\s)(1?\d?\d)vw/g,s=[];n=a.exec(t);n)s.push(parseInt(n[2]));if(s.length){var r=.01*Math.min.apply(Math,s);return{widths:_.filter((function(e){return e>=b[0]*r})),kind:"w"}}return{widths:_,kind:"w"}}return"number"!==typeof e||"fill"===i||"responsive"===i?{widths:b,kind:"w"}:{widths:o(new Set([e,2*e].map((function(e){return _.find((function(i){return i>=e}))||_[_.length-1]})))),kind:"x"}}(a,n,r),d=c.widths,u=c.kind,m=d.length-1;return{sizes:r||"w"!==u?r:"100vw",srcSet:d.map((function(e,t){return"".concat(l({src:i,quality:s,width:e})," ").concat("w"===u?e:t+1).concat(u)})).join(", "),src:l({src:i,quality:s,width:d[m]})}}function j(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function k(e){var i=g.get(v);if(i)return i(m({root:w},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(v))}function N(e){return"/"===e[0]?e.slice(1):e}b.sort((function(e,i){return e-i})),_.sort((function(e,i){return e-i}))},7426:function(e,i,t){"use strict";var n=t(3038);Object.defineProperty(i,"__esModule",{value:!0}),i.useIntersection=function(e){var i=e.rootMargin,t=e.disabled||!s,l=o.useRef(),c=o.useState(!1),d=n(c,2),u=d[0],m=d[1],h=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),t||u||e&&e.tagName&&(l.current=function(e,i,t){var n=function(e){var i=e.rootMargin||"",t=r.get(i);if(t)return t;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var i=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;i&&t&&i(t)}))}),e);return r.set(i,t={id:i,observer:o,elements:n}),t}(t),o=n.id,a=n.observer,s=n.elements;return s.set(e,i),a.observe(e),function(){s.delete(e),a.unobserve(e),0===s.size&&(a.disconnect(),r.delete(o))}}(e,(function(e){return e&&m(e)}),{rootMargin:i}))}),[t,i,u]);return o.useEffect((function(){if(!s&&!u){var e=a.requestIdleCallback((function(){return m(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),[h,u]};var o=t(7294),a=t(3447),s="undefined"!==typeof IntersectionObserver;var r=new Map},8997:function(e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.toBase64=function(e){return window.btoa(e)}},1335:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return h}});var n=t(5893),o=t(9008),a=t(5675),s=t(4476),r=t.n(s),l=[{name:"Museums",items:["Freer Gallery of Art","National Archives Museum","National Building Museum","National Museum of African American History and Culture","National Museum of African Art","National Museum of American History","National Museum of The American Indian","National Museum of Women in The Arts","S. Dillon Ripley Center","Smithsonian American Art Museum","Smithsonian Institution Building (The Castle)"]},{name:"Fine art insitutions",items:["City of Alexandria","Corcoran Gallery of Art","Dumbarton Oaks","Glenstone Foundation","McLean Community Center","Sasakawa Peace Foundation ","The Phillips Collection","Virginia Historic Society"]},{name:"Exhibitions Houses",items:["Design & Production Inc.","First Floor Graphics","Hadley Exhibits Inc.","Pacific Studio"]},{name:"Brand Graphics",items:["DC Rental","Design Cuisine "]}],c={"@context":"https://schema.org","@type":"LocalBusiness",additionalType:"https://en.wikipedia.org/wiki/Screen_printing",image:["https://res.cloudinary.com/sequoia/image/upload/f_auto,c_limit,w_1920,q_auto/v1629160133/blue-line-design.com/dgfhmd7o342rtugnxlje.jpg"],"@id":"https://www.blue-line-design.com",name:"Blueline Design",description:"A creative studio redefining the modern exhibition space",address:{"@type":"PostalAddress",streetAddress:"2480 Fenwick Circle",addressLocality:"Bryans Road",addressRegion:"MD",postalCode:"20616",addressCountry:"US"},logo:"",email:"blt@blue-line-design.com",geo:{"@type":"GeoCoordinates",latitude:38.6417185,longitude:-77.1112648},url:"https://www.blue-line-design.com",telephone:"+12023168717"},d=[{name:"The Corcoran",isHorizontal:!0,image:"v1629417027/blue-line-design.com/bkpsh9dgpff9pqomktla.jpg",copy:"Bruce attended the Corcoran School of Art in Washington, D.C. from 1964-1972. At the Corcoran, Bruce was immediately captivated by serigraphy. The accumulation of color layers builds excitement as each consecutive layer embellishes the last, revealing the finished piece with an air of surprise. Bruce met fellow student Libby Dorsett while at the Corcoran and they would marry and in 1975 open Blueline Design together. Bruce also started teaching part-time at the Corcoran School. During this time, he introduced at the ground floor silkscreen graphics to exhibiting institutions of renown, by being the first to print exhibition grade graphic text at the Corcoran Gallery. Jake grew up there in the gallery surrounded by one of the most spectacular private collections of American art, helping his parents masking screens and cleaning squeegees."},{name:"The Smithsonian",isHorizontal:!0,image:"v1629163311/blue-line-design.com/dwea42ra0sd7zj4nhlmd.jpg",copy:"Blueline Design started printing for the Smithsonian Institute in the 1980s with their work on the Carnival exhibit at the S. Dillon Ripley Center, on the National Mall. Since then, Blueline Design has contributed to exhibit installations in almost all eight of the Smithsonian Museum locations, including the entire permanent collection at the Smithsonian National Museum of African American History and Culture, where Bruce and Jake demonstrated their capacity for large-scale projects."},{name:"The National Building Museum",image:"v1629339305/blue-line-design.com/irlkhoraq2nylsmzc161.jpg",copy:"Since the 1990s, Blueline has featured some of its most versatile work at GSA\u2019s National Building Museum, having contributed to such epic exhibitions as: C\xe9sar Pelli, Big and Green, and Liquid Stone. Masterful layering of transparent color, entire walls painted in plaid, and large-scale murals representing cartography, the artist\u2019s signature, or block lettering. Blueline Design\u2019s most recent work there at NBM is the title wall and introductory paragraph for the welcome center, on permanent view at the ground floor colonnade."}],u=[{title:"Craft & Precision",copy:"Whether produced on site, or in house (to be delivered as text panels installed by the client\u2019s own personnel): silkscreen leaves little else to be considered. Graphics can simply be painted out, and wall surfaces and panels alike can be prepared for the next show, or they can be left permanently for a seamless, lasting, quality finish. The process is more than mere applique, it is a true and ancient artistic medium with a contemporary sense of precision."},{title:"Silkscreening",copy:"Established in 1975 by first introducing silkscreen wall graphics to the Corcoran Gallery of Art, the studio evolved from a fine arts/illustration background to providing wall graphics and text for the exhibitions of several major Washington, D.C. area museums and fine arts institutions."},{title:"Restoration",copy:"Over time, Blueline Design has grown to include major restoration projects such as the floral motif of the Great Hall at the Smithsonian Institution\u2019s National Portrait Gallery to developing lasting relationships with exhibit companies for new permanent installations nationwide."}],m=[{name:"Bruce Thiel",image:"v1629337475/blue-line-design.com/e1k9xiakb3pppnfqc1kj.jpg",bio:"Bruce is the master printmaker and cofounder of Blueline Design. He was trained as a fine artist at Washington D.C.\u2019s Corcoran School of Art, with a concentration in printmaking. Not only has Bruce printed for other Artists such as Brockie Stevenson and Jack Pearlmutter; his own original work has been featured in Alexandria, Virginia\u2019s Lyceum and galleries throughout the Washington, D.C. metro area. Bruce\u2019s layering of abstract shapes composed of transparent inks emphasizing positive and negative linework informs his compositions. With an almost afro-centric, or indigenous style, he gives way to complete trust in the subconscious realm for imagery."},{name:"Jake Thiel",image:"v1629337475/blue-line-design.com/ywm6ia5zopvkhgm3cdlk.jpg",bio:"Jake is a registered architect in the State of Maryland and the District of Columbia, and not only reads design drawings and specifications, he also draws and designs them himself. Jake is the business manager and journeyman printmaker at Blueline Design, and received his Bachelor\u2019s of Architecture at Pratt Institute. Jake is an avid sketch artist and scale model maker and often translates his streetscapes and figure drawings into fine arts serigraphs."}];function h(){return(0,n.jsxs)("div",{className:r().container,children:[(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:"Blueline Design"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("meta",{name:"description",content:"A creative studio redefining the modern exhibition space"}),(0,n.jsx)("link",{rel:"icon",href:"/blueline-favicon.ico"}),(0,n.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(c)}})]}),(0,n.jsxs)("main",{children:[(0,n.jsx)("header",{className:r().header,children:(0,n.jsxs)("div",{className:r().sectionInner,children:[(0,n.jsxs)("h1",{className:r().logo,children:[(0,n.jsx)("span",{className:r().logoBlue,children:"Blue"}),(0,n.jsx)("span",{className:r().logoLine,children:"line"})," Design"]}),(0,n.jsx)("h2",{className:r().title,children:"A creative studio redefining the modern exhibition space"}),(0,n.jsx)("p",{className:r().description,children:"Bespoke Silkscreen Wall Graphics"})]})}),(0,n.jsx)("section",{children:(0,n.jsx)("div",{className:r().headerImage,children:(0,n.jsx)(a.default,{src:"v1629160133/blue-line-design.com/dgfhmd7o342rtugnxlje.jpg",alt:"photo of richard avedon: portraits of power",layout:"fill",objectFit:"cover",priority:"true"})})}),(0,n.jsx)("section",{className:r().ourWork,children:(0,n.jsxs)("div",{className:r().sectionInner,children:[(0,n.jsxs)("h3",{className:r().sectionTitle,children:["Our ",(0,n.jsx)("span",{className:r().sectionTitleLine,children:"Work"})]}),d.map((function(e,i){return(0,n.jsxs)("div",{className:r().ourWorkItem,children:[(0,n.jsx)("div",{className:r().ourWorkImage,children:(0,n.jsx)(a.default,{src:e.image,alt:"photo of ".concat(e.name),width:e.isHorizontal?600:400,height:e.isHorizontal?400:600})}),(0,n.jsxs)("div",{className:r().ourWorkDescription,children:[(0,n.jsx)("h5",{className:r().subTitle,children:e.name}),(0,n.jsx)("p",{className:r().copy,children:e.copy})]})]},i)}))]})}),(0,n.jsx)("section",{className:r().whatWeDo,children:(0,n.jsxs)("div",{className:r().sectionInner,children:[(0,n.jsxs)("h3",{className:r().sectionTitle,children:[(0,n.jsx)("span",{className:r().sectionTitleLine,children:"What"})," We Do"]}),(0,n.jsx)("h4",{className:r().sectionDescription,children:"We empower art and culture by making your ideas clear and engaging."}),(0,n.jsxs)("div",{className:r().whatWeDoSubSection,children:[(0,n.jsx)("div",{className:r().whatWeDoThings,children:u.map((function(e,i){return(0,n.jsxs)("div",{children:[(0,n.jsx)("h5",{className:r().whatWeDoThingsTitle,children:e.title}),(0,n.jsx)("p",{className:r().whatWeDoThingsCopy,children:e.copy})]},i)}))}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:r().whatWeDoImage,children:(0,n.jsx)(a.default,{alt:"Type",src:"v1629335221/blue-line-design.com/odgopgrdeultskyokc37.jpg",width:600/.7,height:400/.7})}),(0,n.jsx)("div",{children:(0,n.jsx)(a.default,{alt:"Bruce touching up lettering",src:"v1629334673/blue-line-design.com/ccpiozxcibvg5zyewgy2.jpg",width:600/.7,height:400/.7})})]})]})]})}),(0,n.jsx)("section",{children:(0,n.jsxs)("div",{className:r().sectionInner,children:[(0,n.jsxs)("h3",{className:r().sectionTitle,children:["Who ",(0,n.jsx)("span",{className:r().sectionTitleLine,children:"We Are"})]}),(0,n.jsx)("h4",{className:r().sectionDescription,children:"Our deep knowledge of fine art and craftsmanship adds a multiplier effect to our work."}),(0,n.jsx)("div",{className:r().whoWeAreBios,children:m.map((function(e,i){return(0,n.jsxs)("div",{className:r().whoWeAreBio,children:[(0,n.jsx)("div",{className:r().whoWeAreBioImage,children:(0,n.jsx)(a.default,{src:e.image,alt:"photo of ".concat(e.name),width:600,height:450})}),(0,n.jsx)("h5",{className:r().subTitle,children:e.name}),(0,n.jsx)("p",{className:r().copy,children:e.bio})]},i)}))})]})}),(0,n.jsx)("section",{className:r().clients,children:(0,n.jsxs)("div",{className:r().sectionInner,children:[(0,n.jsx)("h3",{className:r().sectionTitle,children:(0,n.jsx)("span",{className:r().sectionTitleLine,children:"Clients"})}),(0,n.jsx)("h4",{className:r().sectionDescription,children:"Our network of creative clients range from museums to fine art institutions and exhibition houses."}),(0,n.jsx)("div",{className:r().clientsLists,children:l.slice(0,3).map((function(e,i){return(0,n.jsxs)("div",{className:r().clientsList,children:[(0,n.jsx)("h5",{className:r().clientsListName,children:e.name}),(0,n.jsx)("ul",{children:e.items.map((function(e,i){return(0,n.jsx)("li",{className:r().clientsListItem,children:e},i)}))}),2===i&&l.slice(-1).map((function(e,i){return(0,n.jsxs)("div",{className:r().clientsListSub,children:[(0,n.jsx)("h5",{className:r().clientsListName,children:e.name}),(0,n.jsx)("ul",{children:e.items.map((function(e,i){return(0,n.jsx)("li",{className:r().clientsListItem,children:e},i)}))})]},i)}))]},i)}))})]})})]}),(0,n.jsx)("footer",{className:r().footer,children:(0,n.jsxs)("div",{className:r().sectionInner,children:[(0,n.jsxs)("div",{className:r().footerItem,children:[(0,n.jsx)("strong",{className:r().footerCompanyName,children:"Blueline Design"})," A custom silkscreen and fine art studio",(0,n.jsx)("br",{}),"2480 Fenwick Circle",(0,n.jsx)("br",{}),"Bryans Road MD 20616"]}),(0,n.jsxs)("div",{className:r().footerItem,children:[(0,n.jsx)("a",{href:"tel:202-316-8717",children:"202-316-8717"}),(0,n.jsx)("br",{}),"blt@blue-line-design.com"]}),(0,n.jsx)("div",{className:r().footerItem,children:"\xa9 2021 \u2014 Blueline Design, LLC. We reserve all rights."}),(0,n.jsx)("a",{className:r().contactButton,role:"button",href:"mailto:blt@blue-line-design.com",children:"Request a consultation"})]})})]})}},8581:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1335)}])},4476:function(e){e.exports={logo:"Home_logo__1YbrH",logoBlue:"Home_logoBlue__2ySwG",logoLine:"Home_logoLine__IzXVP",header:"Home_header__3vlZW",title:"Home_title__3DjR7",description:"Home_description__17Z4F",headerImage:"Home_headerImage__22M8Q",sectionInner:"Home_sectionInner__2Uwn8",sectionTitle:"Home_sectionTitle__2vjNb",sectionTitleLine:"Home_sectionTitleLine__29Wv0",sectionDescription:"Home_sectionDescription__2EfkQ",subTitle:"Home_subTitle__1RWPZ",ourWorkItem:"Home_ourWorkItem__14OPI",ourWorkImage:"Home_ourWorkImage__1eMnQ",copy:"Home_copy__2ZkAm",ourWorkDescription:"Home_ourWorkDescription__1ef-v",whatWeDo:"Home_whatWeDo__vPt51",whatWeDoSubSection:"Home_whatWeDoSubSection__11Hdo",whatWeDoThings:"Home_whatWeDoThings__2qXWC",whatWeDoThingsTitle:"Home_whatWeDoThingsTitle__1cIHT Home_sectionDescription__2EfkQ",whatWeDoThingsCopy:"Home_whatWeDoThingsCopy__3AWBI Home_copy__2ZkAm",whatWeDoImage:"Home_whatWeDoImage__2Rxzz",whoWeAreBios:"Home_whoWeAreBios__1S8kp",whoWeAreBio:"Home_whoWeAreBio__2dhdD",whoWeAreBioImage:"Home_whoWeAreBioImage__30wRU",clients:"Home_clients__qpB9o",clientsLists:"Home_clientsLists__1MHge",clientsList:"Home_clientsList__2qYFI",clientsListName:"Home_clientsListName__1ORs- Home_subTitle__1RWPZ Home_copy__2ZkAm",clientsListItem:"Home_clientsListItem__2r8ZK Home_copy__2ZkAm",clientsListSub:"Home_clientsListSub__3673U",footerItem:"Home_footerItem__8_skn",contactButton:"Home_contactButton__33apY",footer:"Home_footer__1WdhD",footerCompanyName:"Home_footerCompanyName__mtxZz"}},5809:function(e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.imageConfigDefault=i.VALID_LOADERS=void 0;i.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];i.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60}},9008:function(e,i,t){e.exports=t(639)},5675:function(e,i,t){e.exports=t(9917)}},function(e){e.O(0,[774,888,179],(function(){return i=8581,e(e.s=i);var i}));var i=e.O();_N_E=i}]);