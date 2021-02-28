(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"KZ+V":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return h})),a.d(t,"default",(function(){return d}));var o=a("Fcif"),n=a("+I+c"),c=(a("mXGw"),a("/FXl")),r=a("TjRS"),s=a("aN4c"),l=a("Vkpr"),b=a.n(l),i=a("isvF"),p=a.n(i),h=(a("aD51"),{});void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/__docz__/index.mdx"}});var m={_frontmatter:h},u=r.a;function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)(u,Object(o.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{style:{display:"flex",alignItems:"center"}},Object(c.b)("div",null,Object(c.b)("h1",null,"React Bootswatch Select")),Object(c.b)("div",null,Object(c.b)("a",{href:"https://github.com/justinmahar/react-bootswatch-select/",target:"_blank",rel:"noopener noreferrer"},Object(c.b)(s.a,{src:b.a,size:28,style:{margin:"0 0 0 20px"},mdxType:"SvgIcon"})))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Bootswatch theme selector component for React. Try Bootswatch themes on your Bootstrap site with one line!")),Object(c.b)("a",{href:"https://justinmahar.github.io/react-bootswatch-select-demo/",target:"_blank",rel:"noopener noreferrer"},Object(c.b)("img",{src:p.a,style:{border:"solid 1px #eeeeee"}})),Object(c.b)("p",null,"👁️ ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("a",{parentName:"strong",href:"https://justinmahar.github.io/react-bootswatch-select-demo/"},"Live Demo"))),Object(c.b)("h2",{id:"overview"},"Overview"),Object(c.b)("p",null,"Drop a ",Object(c.b)("a",{parentName:"p",href:"https://bootswatch.com/"},"Bootswatch")," theme selector onto your React site with just one line!"),Object(c.b)("p",null,"This package includes three components:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/react-bootswatch-select/BootswatchSelect"},"BootswatchSelect")," - A Bootswatch theme selector that supports three modes: visible, hidden, and display-only."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/react-bootswatch-select/Bootstrap"},"Bootstrap")," - A component for easily adding Bootstrap to your site, for convenience."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/react-bootswatch-select/FontAwesome"},"FontAwesome")," - A component for easily adding Font Awesome to your site, for convenience.")),Object(c.b)("p",null,"By default, all CSS is loaded from ",Object(c.b)("a",{parentName:"p",href:"https://www.bootstrapcdn.com/"},"bootstrapcdn.com"),"."),Object(c.b)("h3",{id:"features-include"},"Features include:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"🎨 Easily try Bootswatch themes"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Want to quickly skin your Bootstrap site? Drop this component in and try out Bootswatch with one line!"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"🌠 Build beautiful prototypes quickly"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Quickly swatch out your next big project so you can focus on the stuff that matters."))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"🎛️ Visible, hidden, and display-only modes"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Several modes for the level of integration that suits you."))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"🎁 Quickly drop in ",Object(c.b)("a",{parentName:"strong",href:"/react-bootswatch-select/Bootstrap"},"Bootstrap")," and ",Object(c.b)("a",{parentName:"strong",href:"/react-bootswatch-select/FontAwesome"},"Font Awesome")),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"For convenience, Bootstrap and Font Awesome CDN components are included to get you up and running fast.")))),Object(c.b)("h2",{id:"installation"},"Installation"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"npm i react-bootswatch-select\n")),Object(c.b)("h2",{id:"quick-start"},"Quick Start"),Object(c.b)("p",null,"If Bootstrap is loaded already:"),Object(c.b)("h4",{id:"selector-visible"},"Selector Visible"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"import { BootswatchSelect } from 'react-bootswatch-select';\n...\n<BootswatchSelect version={'4.4.1'} className=\"form-control\" />\n")),Object(c.b)("p",null,"This ",Object(c.b)("inlineCode",{parentName:"p"},"select")," will dynamically add the theme CSS link in the ",Object(c.b)("inlineCode",{parentName:"p"},"head")," when a Bootswatch style is selected."),Object(c.b)("h4",{id:"selector-hidden"},"Selector Hidden"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"import { BootswatchSelect } from 'react-bootswatch-select';\n...\n<BootswatchSelect version={'4.4.1'} selectedThemeName=\"cerulean\" selectorHidden />\n")),Object(c.b)("p",null,"This will add the Bootswatch CSS theme selected in the ",Object(c.b)("inlineCode",{parentName:"p"},"head")," and not render the ",Object(c.b)("inlineCode",{parentName:"p"},"select")," on the page."),Object(c.b)("h4",{id:"display-only-no-head-link"},"Display-Only (No Head Link)"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"import { BootswatchSelect } from 'react-bootswatch-select';\n...\n<BootswatchSelect className=\"form-control\" disableHeadLink />\n")),Object(c.b)("p",null,"This will render the ",Object(c.b)("inlineCode",{parentName:"p"},"select")," only and will not dynamically add the selected theme CSS link in the ",Object(c.b)("inlineCode",{parentName:"p"},"head"),". It just becomes a plain old ",Object(c.b)("inlineCode",{parentName:"p"},"select"),". Use ",Object(c.b)("inlineCode",{parentName:"p"},"onChange")," to listen for selection changes."),Object(c.b)("h3",{id:"bootstrap--bootswatch"},"Bootstrap + Bootswatch"),Object(c.b)("p",null,"If you'd like to load Bootstrap (or Font Awesome) from the CDN before the ",Object(c.b)("a",{parentName:"p",href:"/react-bootswatch-select/BootswatchSelect"},"BootswatchSelect")," is used:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"import { Bootstrap, FontAwesome, BootswatchSelect } from 'react-bootswatch-select';\n...\n<Bootstrap version={'4.4.1'} />\n<FontAwesome version={'4.7.0'} />\n<BootswatchSelect version={'4.4.1'} className=\"form-control\" />\n")),Object(c.b)("p",null,"All CSS is loaded from ",Object(c.b)("a",{parentName:"p",href:"https://www.bootstrapcdn.com/"},"bootstrapcdn.com")," by default. Check there for the latest version."),Object(c.b)("p",null,"Font Awesome is not required for ",Object(c.b)("a",{parentName:"p",href:"/react-bootswatch-select/BootswatchSelect"},"BootswatchSelect"),", but is included here in case you want it."),Object(c.b)("h2",{id:"typescript"},"TypeScript"),Object(c.b)("p",null,"Type definitions have been included for ",Object(c.b)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," support."),Object(c.b)("h2",{id:"contributing"},"Contributing"),Object(c.b)("p",null,"Open source software is awesome and so are you. 😎"),Object(c.b)("p",null,"Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help."),Object(c.b)("p",null,"For major changes, open an issue first to discuss what you'd like to change."),Object(c.b)("p",null,"See ",Object(c.b)("a",{parentName:"p",href:"https://tinyurl.com/kindlingscripts"},"Kindling")," for npm script documentation."),Object(c.b)("h2",{id:"-found-it-helpful-star-it"},"⭐ Found It Helpful? ",Object(c.b)("a",{parentName:"h2",href:"https://github.com/justinmahar/react-bootswatch-select/stargazers"},"Star It!")),Object(c.b)("p",null,"If you found this project helpful, let the community know by giving it a ",Object(c.b)("a",{parentName:"p",href:"https://github.com/justinmahar/react-bootswatch-select/stargazers"},"star"),": ",Object(c.b)("a",{parentName:"p",href:"https://github.com/justinmahar/react-bootswatch-select/stargazers"},"👉⭐")))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/__docz__/index.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docz-index-mdx-f0c229ab0285a180b2bd.js.map