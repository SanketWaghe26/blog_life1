(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{59:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(28),l=c.n(n),r=c(2),o=c(3),i=c(0),d=function(){return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(r.b,{className:"navbar-brand",to:"/",children:"Blog Life"}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(i.jsxs)("ul",{className:"navbar-nav",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.c,{className:"nav-link active","aria-current":"page",exact:!0,to:"/",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.c,{className:"nav-link",exact:!0,to:"/blog",children:"Blog"})})]})})]})})},b=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)(d,{}),e.children]})},j=function(){return Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"jumbotron mt-5",children:[Object(i.jsx)("h1",{className:"display-4",children:"Welcome to Blog Life!"}),Object(i.jsx)("p",{className:"lead",children:"We makes all kinds of awesome blogs on various topics."}),Object(i.jsx)("hr",{className:"my-4"}),Object(i.jsx)("p",{children:"Click the button below to check out our awesome blogs."}),Object(i.jsx)("p",{className:"lead",children:Object(i.jsx)(r.b,{className:"btn btn-primary btn-lg",to:"/blog",role:"button",children:"Check out our blog"})})]})})},m=c(9),h=c.n(m),x=c(12),u=c(10),p=c(13),O=c.n(p),g=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([]),l=Object(u.a)(n,2),o=l[0],d=l[1];Object(a.useEffect)((function(){(function(){var e=Object(x.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat("http://localhost:8000","/api/blog"));case 3:t=e.sent,d(t.data[0]),s(t.data),console.log(t.data),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]);return Object(i.jsxs)("div",{className:"container mt-3",children:[Object(i.jsx)("div",{className:"nav-scroller py-1 mb-2",children:Object(i.jsxs)("nav",{className:"nav d-flex justify-content-between",children:[Object(i.jsx)(r.b,{className:"p-2 text-muted",to:"/category/world",children:"World"}),Object(i.jsx)(r.b,{className:"p-2 text-muted",to:"/category/environment",children:"Environment"}),Object(i.jsx)(r.b,{className:"p-2 text-muted",to:"/category/technology",children:"Technology"}),Object(i.jsx)(r.b,{className:"p-2 text-muted",to:"/category/design",children:"Design"}),Object(i.jsx)(r.b,{className:"p-2 text-muted",to:"/category/culture",children:"Culture"}),Object(i.jsx)(r.b,{className:"p-2 text-muted",to:"/category/business",children:"Business"}),Object(i.jsx)(r.b,{className:"p-2 text-muted",to:"/category/politics",children:"Politics"}),Object(i.jsx)(r.b,{className:"p-2 text-muted",to:"/category/opinion",children:"Opinion"}),Object(i.jsx)(r.b,{className:"p-2 text-muted",to:"/category/science",children:"Science"}),Object(i.jsx)(r.b,{className:"p-2 text-muted",to:"/category/health",children:"Health"}),Object(i.jsx)(r.b,{className:"p-2 text-muted",to:"/category/style",children:"Style"}),Object(i.jsx)(r.b,{className:"p-2 text-muted",to:"/category/Travel",children:"Travel"})]})}),Object(i.jsx)("div",{className:"jumbotron p-4 p-md-5 text-white rounded bg-dark",children:Object(i.jsxs)("div",{className:"col-md-6 px-0",children:[Object(i.jsx)("h1",{className:"display-4 font-italic",children:o.title}),Object(i.jsx)("p",{className:"lead-my-3",children:o.excerpt}),Object(i.jsx)("p",{className:"lead mb-0",children:Object(i.jsx)(r.b,{to:"/blog/".concat(o.slug),className:"text-white font-weight-bold",children:"Continue reading....."})})]})}),function(){var e=[],t=[];c.map((function(t){return e.push(Object(i.jsxs)("div",{className:"row no-gutters border overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative",children:[Object(i.jsxs)("div",{className:"col p-4 d-flex flex-column position-static",children:[Object(i.jsx)("strong",{className:"md-inline-block mb-2 text-primary",children:(c=t.category,c?c.charAt(0).toUpperCase()+c.slice(1):"")}),Object(i.jsx)("h3",{className:"mb-0",children:t.title}),Object(i.jsxs)("div",{className:"mb-1 text-muted",children:[t.month,t.day]}),Object(i.jsx)("p",{className:"card-text mb-auto",children:t.excerpt}),Object(i.jsx)(r.b,{to:"/blog/".concat(t.slug),className:"streached-link",children:"Continue reading"})]}),Object(i.jsx)("div",{className:"col-auto d-lg-block",children:Object(i.jsx)("img",{width:"200",height:"250",src:t.thumbnail,alt:"thumbnail"})})]}));var c}));for(var a=0;a<e.length;a+=2)t.push(Object(i.jsxs)("div",{className:"row mb-2",children:[Object(i.jsx)("div",{className:"col-md-6",children:e[a]}),Object(i.jsx)("div",{className:"col-md-6",children:e[a+1]?e[a+1]:null})]},a));return t}()]})},v=function(e){var t=Object(a.useState)({}),c=Object(u.a)(t,2),s=c[0],n=c[1];Object(a.useEffect)((function(){var t=e.match.params.id;(function(){var e=Object(x.a)(h.a.mark((function e(){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat("http://localhost:8000","/api/blog/").concat(t));case 3:c=e.sent,n(c.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[e.match.params.id]);var l;return Object(i.jsxs)("div",{className:"container mt-3",children:[Object(i.jsx)("h1",{className:"display-2",children:s.title}),Object(i.jsxs)("h2",{className:"text-muted mt-3",children:["Category : ",(l=s.category,l?l.charAt(0).toUpperCase()+l.slice(1):"")]}),Object(i.jsxs)("h4",{children:[s.month,s.day]}),Object(i.jsx)("div",{className:"mt-5 mb-5",dangerouslySetInnerHTML:{__html:s.content}}),Object(i.jsx)("hr",{}),Object(i.jsx)("p",{className:"lead mb-5",children:Object(i.jsx)(r.b,{to:"/blog",className:"font-weight-bold",children:"Back to Blogs"})})]})},N=function(e){var t=Object(a.useState)([]),c=Object(u.a)(t,2),s=c[0],n=c[1],l=Object(a.useState)([""]),o=Object(u.a)(l,2),d=o[0],b=o[1];Object(a.useEffect)((function(){var t=e.match.params.id;b(j(t));var c={headers:{"Content-Type":"application/json"}};(function(){var e=Object(x.a)(h.a.mark((function e(){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("".concat("http://localhost:8000","/api/blog/category"),{category:t},c);case 3:a=e.sent,n(a.data),console.log("res"),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[e.match.params.id]);var j=function(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""};return Object(i.jsxs)("div",{className:"container mt-3",children:[Object(i.jsxs)("h3",{className:"display-4",children:[d," Category"]}),Object(i.jsx)("div",{className:"nav-scroller py-1 mb-2",children:Object(i.jsxs)("nav",{className:"nav d-flex justify-content-between",children:[Object(i.jsx)(r.b,{className:"p-2 text-muted",to:"/category/world",children:"World"}),Object(i.jsx)(r.b,{className:"p-2 text-muted",to:"/category/environment",children:"Environment"}),Object(i.jsx)(r.b,{className:"p-2 text-muted",to:"/category/technology",children:"Technology"}),Object(i.jsx)(r.b,{className:"p-2 text-muted",to:"/category/design",children:"Design"}),Object(i.jsx)(r.b,{className:"p-2 text-muted",to:"/category/culture",children:"Culture"}),Object(i.jsx)(r.b,{className:"p-2 text-muted",to:"/category/business",children:"Business"}),Object(i.jsx)(r.b,{className:"p-2 text-muted",to:"/category/politics",children:"Politics"}),Object(i.jsx)(r.b,{className:"p-2 text-muted",to:"/category/opinion",children:"Opinion"}),Object(i.jsx)(r.b,{className:"p-2 text-muted",to:"/category/science",children:"Science"}),Object(i.jsx)(r.b,{className:"p-2 text-muted",to:"/category/health",children:"Health"}),Object(i.jsx)(r.b,{className:"p-2 text-muted",to:"/category/style",children:"Style"}),Object(i.jsx)(r.b,{className:"p-2 text-muted",to:"/category/Travel",children:"Travel"})]})}),function(){var e=[],t=[];s.map((function(t){return e.push(Object(i.jsxs)("div",{className:"row no-gutters border overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative",children:[Object(i.jsxs)("div",{className:"col p-4 d-flex flex-column position-static",children:[Object(i.jsx)("strong",{className:"md-inline-block mb-2 text-primary",children:j(t.category)}),Object(i.jsx)("h3",{className:"mb-0",children:t.title}),Object(i.jsxs)("div",{className:"mb-1 text-muted",children:[t.month,t.day]}),Object(i.jsx)("p",{className:"card-text mb-auto",children:t.excerpt}),Object(i.jsx)(r.b,{to:"/blog/".concat(t.slug),className:"streached-link",children:"Continue reading"})]}),Object(i.jsx)("div",{className:"col-auto d-lg-block",children:Object(i.jsx)("img",{width:"200",height:"250",src:t.thumbnail,alt:"thumbnail"})})]}))}));for(var c=0;c<e.length;c+=2)t.push(Object(i.jsxs)("div",{className:"row mb-2",children:[Object(i.jsx)("div",{className:"col-md-6",children:e[c]}),Object(i.jsx)("div",{className:"col-md-6",children:e[c+1]?e[c+1]:null})]},c));return t}()]})},y=function(){return Object(i.jsx)(r.a,{children:Object(i.jsx)(b,{children:Object(i.jsxs)(o.c,{children:[Object(i.jsx)(o.a,{exact:!0,path:"/",component:j}),Object(i.jsx)(o.a,{exact:!0,path:"/blog",component:g}),Object(i.jsx)(o.a,{exact:!0,path:"/category/:id",component:N}),Object(i.jsx)(o.a,{exact:!0,path:"/blog/:id",component:v})]})})})};l.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.a454704c.chunk.js.map