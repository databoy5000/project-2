(this["webpackJsonpproject-2-starter"]=this["webpackJsonpproject-2-starter"]||[]).push([[0],{36:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(29),r=a.n(s),i=(a(36),a(4)),l=a(10),o=a(2),d=a(0);var j=function(){return c.a.useEffect((function(){console.log("%c  -- GA Project: WoCRO --","font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)","\n","Hi there, thanks for checking out this project.","\n","I'm currently looking for employement opportunities.","\n","Feel free to get in touch if you'd like to have a chat!","\n","{","\n","  name: 'Anthony Graham',","\n","  peopleCallMe: '\ud83d\udc1c',","\n","  title",": 'Junior Software Engineer',","\n","  github: 'https://github.com/databoy5000',","\n","  linkedin: 'https://www.linkedin.com/in/anthonygdev/',","\n","  projectReadMe: 'https://github.com/databoy5000/project-2/blob/main/README.md',","\n","}")}),[]),Object(d.jsx)("section",{className:"hero is-fullheight-with-navbar has-background-primary",children:Object(d.jsx)("div",{className:"hero-body",children:Object(d.jsx)("div",{className:"container has-text-centered",children:Object(d.jsx)("h1",{className:"title",children:"Quotetionary"})})})})};var b=function(){var e=c.a.useState(!1),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(d.jsxs)("nav",{className:"navbar",role:"navigation","aria-label":"main navigation",children:[Object(d.jsxs)("div",{className:"navbar-brand",children:[Object(d.jsx)(l.b,{className:"navbar-item",to:"/",children:"\u270d\ud83c\udffb"}),Object(d.jsxs)("span",{role:"button",className:"navbar-burger ".concat(a?"is-active":""),"aria-label":"menu","aria-expanded":"false",onClick:function(){n(!a)},children:[Object(d.jsx)("span",{"aria-hidden":"true"}),Object(d.jsx)("span",{"aria-hidden":"true"}),Object(d.jsx)("span",{"aria-hidden":"true"})]})]}),Object(d.jsx)("div",{className:"navbar-menu ".concat(a?"is-active":""),children:Object(d.jsxs)("div",{className:"navbar-start",children:[Object(d.jsx)(l.b,{className:"navbar-item",to:"/",children:"Home"}),Object(d.jsx)(l.b,{className:"navbar-item",to:"/random",children:"Random Quote"}),Object(d.jsx)(l.b,{className:"navbar-item",to:"/all",children:"Quotes"})]})})]})},u=a(9),h=a(13);var m=function(){return Object(d.jsx)("section",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"has-text-centered",children:Object(d.jsx)("h1",{className:"title help is-danger",children:"\ud83d\uded1 Ooopps something went wrong \ud83d\uded1"})})})})};var O=function(e){var t=e.text,a=e.author,c=e.tag,s=e.id,r=e.random;null===localStorage.getItem("dislike")&&localStorage.setItem("dislike",JSON.stringify([]));var l=Object(n.useState)(!1),o=Object(i.a)(l,2),j=o[0],b=o[1];return Object(d.jsx)("section",{className:"quotesCardContainer",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h2",{className:"subtitle",children:t}),Object(d.jsxs)("div",{className:"columns",children:[Object(d.jsx)("div",{className:"column",children:Object(d.jsxs)("p",{children:["Author: ",Object(d.jsx)("span",{className:"bold",children:a})," | Tag: ",Object(d.jsx)("span",{className:"italic",children:c})]})}),Object(d.jsx)("div",{className:"column is-offset-half",children:!r&&Object(d.jsx)("button",{className:"button ".concat(j?"is-dark":""),id:s,onClick:function(e){var t=e.target.id,a=String(t),n=[];if(localStorage.getItem("dislike")&&(n=JSON.parse(localStorage.getItem("dislike"))),-1===n.indexOf(a))b(!0),n.push(t),localStorage.setItem("dislike",JSON.stringify(n));else{var c=n.indexOf(a);b(!1),n.splice(c,1),localStorage.setItem("dislike",JSON.stringify(n))}},children:"Dislike"})})]})]})})})};var x=function(e){var t=e.error,a=JSON.parse(localStorage.getItem("dislike")),n=JSON.parse(localStorage.getItem("quotes")).filter((function(e){return!a.includes(String(e.id))})),s=JSON.parse(localStorage.getItem("tags")),r=c.a.useState(10),l=Object(i.a)(r,2),o=l[0],j=l[1],b=c.a.useState(n.slice(0,o)),x=Object(i.a)(b,2),g=x[0],p=x[1],f=function(e){var t=c.a.useState(e),a=Object(i.a)(t,2),n=a[0],s=a[1],r=c.a.useState(),l=Object(i.a)(r,2),o=l[0],d=l[1];return{searchForm:n,handleChange:function(e){s(Object(u.a)(Object(u.a)({},n),{},Object(h.a)({},e.target.name,e.target.value)))},filterQuotes:function(e){var t=e.filter((function(e){return e.tag===n.tag||"All"===n.tag})).filter((function(e){return e.author.toLowerCase().includes(n.searchField.toLowerCase())||""===n.searchField}));return d(t),t},filteredQuotes:o}}({tag:"All",searchField:""}),v=f.searchForm,N=f.handleChange,S=f.filterQuotes,k=f.filteredQuotes;return c.a.useEffect((function(){n&&(S(n),k&&(p(S(n).slice(0,10)),j(10),document.getElementById("AllQuotes").scrollTop=0))}),[v]),Object(d.jsx)(d.Fragment,{children:!t||n||s?Object(d.jsx)("section",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"columns",children:[Object(d.jsxs)("div",{className:"column is-one-third box",id:"filters",children:[Object(d.jsx)("h2",{className:"title",children:"Filter"}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{className:"label has-text-centered",children:"Filter By Tag"}),Object(d.jsx)("div",{className:"select is-link",children:Object(d.jsxs)("select",{name:"tag",onChange:N,children:[Object(d.jsx)("option",{value:"All",children:"All"}),s&&s.map((function(e){return Object(d.jsx)("option",{value:e.name,children:e.name},e.name)}))]})}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{className:"label has-text-centered",children:"Search By Author"}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("input",{className:"input",name:"searchField",onChange:N})})]})]})]}),Object(d.jsx)("div",{className:"column",id:"AllQuotes",onScroll:function(e){var t=e.target;t.scrollHeight-t.scrollTop===t.clientHeight&&(p(k.slice(0,o+10)),j(o+10))},children:g?g.map((function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(O,Object(u.a)({},e))},e.id)})):!t&&Object(d.jsx)("p",{children:"...loading"})})]})})}):Object(d.jsx)(m,{})})};var g=function(e){var t=e.error,a=JSON.parse(localStorage.getItem("dislike")),n=JSON.parse(localStorage.getItem("quotes")).filter((function(e){return!a.includes(String(e.id))})),s=c.a.useState(!!n&&n[Math.floor(Math.random()*n.length)]),r=Object(i.a)(s,2),l=r[0],o=r[1];return Object(d.jsx)("section",{className:"section",children:Object(d.jsxs)("div",{className:"container has-text-centered",children:[t&&!n&&Object(d.jsx)(m,{}),l?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O,Object(u.a)(Object(u.a)({},l),{},{random:!0})),Object(d.jsx)("button",{className:"button is-warning",onClick:function(){o(n[Math.floor(Math.random()*n.length)])},children:"Get Random"})]}):!t&&Object(d.jsx)("p",{children:"...loading"})]})})},p=a(18),f=a.n(p),v=a(31),N=a(19),S=a.n(N),k="https://goquotes-api.herokuapp.com/api/v1";function y(){return S.a.get("".concat(k,"/all/quotes"))}function I(){return S.a.get("".concat(k,"/all/tags"))}function w(){return(w=Object(v.a)(f.a.mark((function e(){var t,a,n,c,s,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y();case 3:return t=e.sent,e.next=6,I();case 6:return a=e.sent,n=0,c=t.data.quotes,s=a.data.tags,r=c.map((function(e){return n++,Object(u.a)(Object(u.a)({},e),{},{id:n})})),localStorage.setItem("quotes",JSON.stringify(r)),localStorage.setItem("tags",JSON.stringify(s)),e.abrupt("return",!1);case 16:return e.prev=16,e.t0=e.catch(0),e.abrupt("return",!0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}var J=function(){var e=c.a.useState(!1),t=Object(i.a)(e,2),a=t[0],n=t[1];return function(){return w.apply(this,arguments)}().then((function(e){n(e)})),null===localStorage.getItem("dislike")&&localStorage.setItem("dislike",JSON.stringify([])),Object(d.jsxs)(l.a,{children:[Object(d.jsx)(b,{}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/random",children:Object(d.jsx)(g,{error:a})}),Object(d.jsx)(o.a,{path:"/all",children:Object(d.jsx)(x,{error:a})}),Object(d.jsx)(o.a,{path:"/",component:j})]})]})};r.a.render(Object(d.jsx)(J,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.d354fe95.chunk.js.map