(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+Sw5":function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},"0qAl":function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},"5WRv":function(t,e,n){var r=n("iNmH"),c=n("Qatm"),a=n("Zhxd"),o=n("kluZ");t.exports=function(t){return r(t)||c(t)||a(t)||o()}},"8lrx":function(t,e,n){var r=n("uUj8"),c=n("5WRv"),a=n("OvAC"),o=n("PE9J");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u=n("mXGw"),s=n("/FXl").mdx,b=n("U+ow").useMDXScope;t.exports=function(t){var e=t.scope,n=t.children,a=o(t,["scope","children"]),i=b(e),f=u.useMemo((function(){if(!n)return null;var t=l({React:u,mdx:s},i),e=Object.keys(t),a=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(c(e),[""+n])).apply(void 0,[{}].concat(c(a)))}),[n,e]);return u.createElement(f,l({},a))}},MwNx:function(t,e,n){"use strict";n.r(e);var r=n("Fcif"),c=n("6CzD"),a=n("+I+c"),o=n("mXGw"),i=n.n(o),l=n("1Gva"),u=n("fGC6"),s=n("og7e"),b=n("hpqI"),f=n("wEEh"),p=n("ycXb"),O=n("x5bA"),j=n("fhMP"),d=n("jRwh"),x=n("aD51"),m=function(t){var e=t.body;return Object(x.c)(d.MDXRenderer,null,e)},v=n("Wbzz"),g={wrapper:{alignItems:"center"},heading:{color:"omegaDark",mr:3,mb:0},badge:{fontSize:"1rem"}},h=function(t){var e=t.tags;return e&&e.length>0?Object(x.c)(l.g,{sx:g.wrapper},Object(x.c)(l.h,{variant:"h5",sx:g.heading},"標籤"),Object(x.c)(l.b,{variant:"lists.badges"},e.map((function(t){var e=t.id,n=t.name,r=t.slug;return Object(x.c)(l.a,{variant:"tag",sx:g.badge,key:e,as:v.Link,to:r},n)})))):null},y=n("q/Up"),w=Object(y.a)((function(){return n.e(21).then(n.bind(null,"tzOk"))})),k=Object(y.a)((function(){return n.e(24).then(n.bind(null,"rS7E"))})),D={flex:{alignItems:["flex-start","center"],justifyContent:"space-between",flexDirection:["column","row"],"& > div + div":{mt:[3,0],flexBasis:"1/2",justifyContent:"flex-end"}}},P=function(t){return Object(x.c)(l.b,null,Object(x.c)(l.f,null),Object(x.c)(l.g,{sx:D.flex},Object(x.c)(h,t),Object(x.c)(k,t)))},S=function(t){var e=t.data,n=e.post,o=e.tagCategoryPosts,d=e.tagPosts,v=e.categoryPosts,g=t.location,h=Object(a.a)(t,["data","location"]),y=[].concat(Object(c.a)(o?o.nodes:[]),Object(c.a)(d?d.nodes:[]),Object(c.a)(v?v.nodes:[])),k=h.pageContext,D=(k=void 0===k?{}:k).services,S=void 0===D?{}:D,A=k.siteUrl;return Object(x.c)(i.a.Fragment,null,Object(x.c)(p.a,Object(r.a)({},n,{siteUrl:A})),Object(x.c)(f.a,null),Object(x.c)(u.e,{effectProps:{effect:"fadeInDown"}},Object(x.c)(u.b,null,Object(x.c)(b.a,Object(r.a)({},n,{variant:"horizontal-hero",omitExcerpt:!0})))),Object(x.c)(f.a,null),Object(x.c)(u.e,{effectProps:{fraction:0}},Object(x.c)(u.b,null,Object(x.c)(l.d,{variant:"paper-lg"},Object(x.c)(m,n),Object(x.c)(P,Object(r.a)({},n,{location:g}))),Object(x.c)(f.a,null),Object(x.c)(O.a,{author:n.author}),S.disqus&&Object(x.c)(i.a.Fragment,null,Object(x.c)(f.a,null),Object(x.c)(w,n)),Object(x.c)(f.a,null),n.category&&Object(x.c)(s.a,{nodes:y,variant:["horizontal-md"],columns:[1,2,3,3],limit:6,title:"相關文章",distinct:!0}),S.mailchimp&&Object(x.c)(i.a.Fragment,null,Object(x.c)(f.a,null),Object(x.c)(j.a,{simple:!0})))))};e.default=S},Qatm:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},WI9V:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},Zhxd:function(t,e,n){var r=n("+Sw5");t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},iNmH:function(t,e,n){var r=n("+Sw5");t.exports=function(t){if(Array.isArray(t))return r(t)}},jRwh:function(t,e,n){var r=n("8lrx");t.exports={MDXRenderer:r}},kluZ:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},uUj8:function(t,e,n){var r=n("WI9V"),c=n("0qAl");function a(e,n,o){return c()?t.exports=a=Reflect.construct:t.exports=a=function(t,e,n){var c=[null];c.push.apply(c,e);var a=new(Function.bind.apply(t,c));return n&&r(a,n.prototype),a},a.apply(null,arguments)}t.exports=a},x5bA:function(t,e,n){"use strict";n("mXGw");var r=n("Wbzz"),c=n("1Gva"),a=n("3IhM"),o=n("1L5Y"),i=n("Tn8W"),l=n("WwoH"),u=n("aD51"),s={card:{position:"relative"},wrapper:{flexDirection:["column","row"],position:"relative",zIndex:3},avatarColumn:{flexBasis:"1/3"},infoColumn:{flexBasis:"2/3"},innerBox:{flexBasis:"1/2",flexGrow:1,px:[0,3],mt:[3,0]},subheader:{color:"omegaDark"},name:{textAlign:["center","left"],mt:[3,0],px:3},bio:{textAlign:["center","left"]},socialList:{a:{m:0}},link:{position:"absolute",top:10,right:10,zIndex:3},pattern:{borderRadius:"lg"},gradient:{size:"full",borderRadius:"lg",position:"absolute",left:0,top:0,zIndex:2,background:[function(t){return"linear-gradient(0deg, "+t.colors.contentBg+" 20%, transparent 80%)"},function(t){return"linear-gradient(270deg, "+t.colors.contentBg+" 20%, transparent 100%)"}]}},b=function(t){var e=t.children;return Object(u.c)(c.h,{variant:"h4",sx:s.subheader},e)},f=function(t){var e=t.name,n=t.thumbnail,a=t.slug;return n?Object(u.c)(c.b,null,Object(u.c)(c.l,{as:r.Link,to:a,"aria-label":e},Object(u.c)(o.a,{avatar:n}))):null},p=function(t){var e=t.name,n=t.slug;return Object(u.c)(c.b,{sx:s.name},Object(u.c)(c.h,{variant:"h3"},Object(u.c)(c.l,{as:r.Link,to:n},e)))},O=function(t){var e=t.title,n=t.description;return Object(u.c)(c.b,{sx:s.bio},Object(u.c)(b,null,e),Object(u.c)(c.p,null,n))},j=function(t){var e=t.skills;return e?Object(u.c)(c.b,{sx:s.innerBox},Object(u.c)(b,null,"專業知識"),e.map((function(t){return Object(u.c)(c.p,{key:"skill-"+t},t)}))):null},d=function(t){var e=t.social;return e?Object(u.c)(c.b,{sx:s.innerBox},Object(u.c)(b,null,"社交媒體"),Object(u.c)(i.a,{variant:"vertical",items:Object(l.a)(e),wrapperStyle:s.socialList})):null};e.a=function(t){var e=t.author,n=t.withLink;if(!e)return null;var o=e.skills,i=e.social;return Object(u.c)(c.d,{variant:"paper",sx:s.card},Object(u.c)(c.g,{sx:s.wrapper},Object(u.c)(c.b,{sx:s.avatarColumn},Object(u.c)(f,e)),Object(u.c)(c.b,{sx:s.infoColumn},Object(u.c)(p,e),Object(u.c)(c.g,{sx:s.wrapper},Object(u.c)(c.b,{sx:s.innerBox},Object(u.c)(O,e)),(i||o)&&Object(u.c)(c.b,{sx:s.innerBox},Object(u.c)(c.g,null,Object(u.c)(j,e),Object(u.c)(d,e)))))),n&&Object(u.c)(c.a,{variant:"tag",as:r.Link,to:e.slug,sx:s.link},"他的文章"),Object(u.c)(c.b,{sx:s.gradient}),Object(u.c)(a.a,{sx:s.pattern}))}}}]);
//# sourceMappingURL=component---packages-blog-core-src-templates-post-js-9338ffaa28170f4bcaf0.js.map