"use strict";(self.webpackChunkyasix_wiki=self.webpackChunkyasix_wiki||[]).push([[3089],{9058:function(e,t,a){a.d(t,{Z:function(){return _}});var r=a(102),l=a(7294),n=a(6010),i=a(7649),o=a(7524),s=a(9960),m=a(5999),c="sidebar_re4s",u="sidebarItemTitle_pO2u",d="sidebarItemList_Yudw",g="sidebarItem__DBe",p="sidebarItemLink_mo7H",h="sidebarItemLinkActive_I1ZP";function v(e){var t=e.sidebar;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(c,"thin-scrollbar"),"aria-label":(0,m.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(u,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(d,"clean-list")},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:g},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:p,activeClassName:h},e.title))})))))}var b=a(3102);function E(e){var t=e.sidebar;return l.createElement("ul",{className:"menu__list"},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function f(e){return l.createElement(b.Zo,{component:E,props:e})}function N(e){var t=e.sidebar,a=(0,o.i)();return null!=t&&t.items.length?"mobile"===a?l.createElement(f,{sidebar:t}):l.createElement(v,{sidebar:t}):null}var Z=["sidebar","toc","children"];function _(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,r.Z)(e,Z),m=t&&t.items.length>0;return l.createElement(i.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(N,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&l.createElement("div",{className:"col col--2"},a))))}},46:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var r=a(7294),l=a(6010),n=a(2263),i=a(1944),o=a(5281),s=a(9058),m=a(1860),c=a(9703),u=a(197);function d(e){var t=e.metadata,a=(0,n.Z)().siteConfig.title,l=t.blogDescription,o=t.blogTitle,s="/"===t.permalink?a:o;return r.createElement(r.Fragment,null,r.createElement(i.d,{title:s,description:l}),r.createElement(u.Z,{tag:"blog_posts_list"}))}function g(e){var t=e.metadata,a=e.items,l=e.sidebar;return r.createElement(s.Z,{sidebar:l},a.map((function(e){var t=e.content;return r.createElement(m.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(c.Z,{metadata:t}))}function p(e){return r.createElement(i.FG,{className:(0,l.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage)},r.createElement(d,e),r.createElement(g,e))}},9703:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),l=a(5999),n=a(2244);function i(e){var t=e.metadata,a=t.previousPage,i=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&r.createElement(n.Z,{permalink:a,title:r.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&r.createElement(n.Z,{permalink:i,title:r.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},1860:function(e,t,a){a.d(t,{Z:function(){return _}});var r=a(7294),l=a(6010),n=a(5999),i=a(9960),o=a(4996),s=a(8824),m=a(8780),c=a(6453),u=a(6114),d=a(1526);function g(e){return e.href?r.createElement(i.Z,e):r.createElement(r.Fragment,null,e.children)}function p(e){var t=e.author,a=t.name,l=t.title,n=t.url,i=t.imageURL,o=t.email,s=n||o&&"mailto:"+o||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(g,{href:s,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(g,{href:s,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}var h="authorCol_sTYa",v="imageOnlyAuthorRow_vA2J",b="imageOnlyAuthorCol_kG3X";function E(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var n=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",n?v:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,l.Z)(!n&&"col col--6",n?b:h),key:t},r.createElement(p,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}var f="blogPostTitle_Ikge",N="blogPostData_SAv4",Z="blogPostDetailsFull_u0Nl";function _(e){var t,a,g=(a=(0,s.c)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),p=(0,o.C)().withBaseUrl,h=e.children,v=e.frontMatter,b=e.assets,_=e.metadata,k=e.truncated,P=e.isBlogPostPage,w=void 0!==P&&P,T=_.date,I=_.formattedDate,y=_.permalink,x=_.tags,A=_.readingTime,F=_.title,L=_.editUrl,M=_.authors,R=null!=(t=b.image)?t:v.image,C=!w&&k,B=x.length>0,O=w?"h1":"h2";return r.createElement("article",{className:w?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(O,{className:f,itemProp:"headline"},w?F:r.createElement(i.Z,{itemProp:"url",to:y},F)),r.createElement("div",{className:(0,l.Z)(N,"margin-vert--md")},r.createElement("time",{dateTime:T,itemProp:"datePublished"},I),void 0!==A&&r.createElement(r.Fragment,null," \xb7 ",g(A))),r.createElement(E,{authors:M,assets:b})),R&&r.createElement("meta",{itemProp:"image",content:p(R,{absolute:!0})}),r.createElement("div",{id:w?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(c.Z,null,h)),(B||k)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",w&&Z)},B&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":C})},r.createElement(d.Z,{tags:x})),w&&L&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:L})),C&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":B})},r.createElement(i.Z,{to:_.permalink,"aria-label":(0,n.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:F})},r.createElement("b",null,r.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},8824:function(e,t,a){a.d(t,{c:function(){return m}});var r=a(7294),l=a(2263),n=["zero","one","two","few","many","other"];function i(e){return n.filter((function(t){return e.includes(t)}))}var o={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=(0,l.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:i(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),o}var t,a}),[e])}function m(){var e=s();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var l=a.select(t),n=a.pluralForms.indexOf(l);return r[Math.min(n,r.length-1)]}(a,t,e)}}}}}]);