(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(9),s=c.n(a),n=c(4),i=(c(14),c(15),c(2)),b=c(6),j=c.n(b),l=c(1),d=function(e){var t=e.tabs,c=e.selectedTab,a=t.find((function(e){return e.id===c}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"tabs is-boxed",children:Object(l.jsx)("ul",{children:t.map((function(e){return Object(l.jsx)("li",{className:j()({"is-active":e.id===(null===a||void 0===a?void 0:a.id)}),children:Object(l.jsx)(n.b,{to:"/tabs/".concat(e.id),children:e.title})},e.id)}))})}),Object(l.jsx)("div",{className:"block","data-cy":"tab-content",children:null===a||void 0===a?void 0:a.content}),!a&&Object(l.jsx)("div",{className:"block","data-cy":"TabContent",children:"Please select a tab"})]})},r=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],o=function(){var e=Object(i.h)().tabId,t=void 0===e?"":e;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"Tabs page"}),Object(l.jsx)(d,{tabs:r,selectedTab:t})]})},h=(c(17),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("nav",{className:"navbar is-light is-fixed-top","data-cy":"Nav",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(n.b,{to:"/",className:"navbar-item",children:"Home"}),Object(l.jsx)(n.c,{to:"tabs",className:function(e){var t=e.isActive;return j()("navbar-item",{"is-active":t})},children:"Tabs"})]})})}),Object(l.jsx)("div",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{path:"*",element:Object(l.jsx)("h1",{className:"title",children:"Page not found"})}),Object(l.jsx)(i.b,{path:"home",element:Object(l.jsx)(i.a,{to:"/",replace:!0})}),Object(l.jsx)(i.b,{path:"/",element:Object(l.jsx)("h1",{className:"title",children:"Home page"})}),Object(l.jsxs)(i.b,{path:"tabs",children:[Object(l.jsx)(i.b,{index:!0,element:Object(l.jsx)(o,{})}),Object(l.jsx)(i.b,{path:":tabId",element:Object(l.jsx)(o,{})})]})]})})})]})});s.a.render(Object(l.jsx)(n.a,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4a84749f.chunk.js.map