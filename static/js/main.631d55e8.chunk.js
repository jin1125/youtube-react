(this["webpackJsonpyoutube-react"]=this["webpackJsonpyoutube-react"]||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(35),s=a.n(c),i=(a(52),a(11)),o=a(3),u=a(14),d=a(36),l=a(38),j=a(17),p=a.n(j),b=a(4),h=a(1),O={popular:[],related:[],searched:[],selected:{},term:""},x=function(e,t){switch(t.type){case"SET_POPULAR":return Object(b.a)(Object(b.a)({},e),{},{popular:t.payload.popular});case"SET_RELATED":return Object(b.a)(Object(b.a)({},e),{},{related:t.payload.related});case"SET_SELECTED":return Object(b.a)(Object(b.a)({},e),{},{selected:t.payload.selected});case"SET_SEARCHED":return Object(b.a)(Object(b.a)({},e),{},{searched:t.payload.searched});case"SET_TERM":return Object(b.a)(Object(b.a)({},e),{},{term:t.payload.term});default:return e}},f=Object(n.createContext)({globalState:O,setGlobalState:function(){return null}}),m=function(e){var t=e.children,a=Object(n.useReducer)(x,O),r=Object(u.a)(a,2),c=r[0],s=r[1];return Object(h.jsx)(f.Provider,{value:{globalState:c,setGlobalState:s},children:t})},v=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(o.f)(),s=Object(n.useContext)(f),j=s.globalState,b=s.setGlobalState;return Object(n.useEffect)((function(){r(j.term)}),[]),Object(h.jsxs)("div",{className:p.a.header,children:[Object(h.jsx)("div",{className:p.a.item,children:Object(h.jsx)(i.b,{to:"/",children:"VideoTube"})}),Object(h.jsx)("div",{className:p.a.item,children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b({type:"SET_TERM",payload:{term:a}}),c.push("/search?query=".concat(a))},children:[Object(h.jsx)("input",{type:"text",placeholder:"\u691c\u7d22",onChange:function(e){return r(e.target.value)},value:a}),Object(h.jsx)("button",{type:"submit",children:Object(h.jsx)(d.a,{icon:l.a})})]})})]})},_=a(23),y=a.n(_),w=function(e){var t=e.children;return Object(h.jsxs)("div",{className:y.a.wrapper,children:[Object(h.jsx)(v,{}),Object(h.jsx)("div",{className:y.a.main,children:t})]})},S=a(6),E=a.n(S),g=a(12),T=a(39),C=a.n(T).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),L={part:"snippet",maxResults:40,key:"AIzaSyDtT6PNTG0_FvjSy44pOUJgn4EZ3CLvn1A",regionCode:"JP",type:"video"},P=function(){var e=Object(g.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.get("/videos",{params:Object(b.a)(Object(b.a)({},L),{},{chart:"mostPopular"})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(g.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.get("videos",{params:Object(b.a)(Object(b.a)({},L),{},{id:t})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(g.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.get("/search",{params:Object(b.a)(Object(b.a)({},L),{},{relatedToVideoId:t})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(g.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.get("/search",{params:Object(b.a)(Object(b.a)({},L),{},{q:t})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=a(40),D=a.n(R),G=function(e){var t=e.children;return Object(h.jsx)("div",{className:D.a.container,children:t})},A=a(41),V=a.n(A),U=function(e){var t=e.id,a=e.src,n=e.title;return Object(h.jsx)(i.b,{to:{pathname:"watch",search:"?v=".concat(t)},className:V.a.item,children:Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:a,alt:n}),Object(h.jsx)("span",{children:n})]})})},H=function(){var e=Object(n.useContext)(f),t=e.globalState,a=e.setGlobalState;return Object(n.useEffect)((function(){P().then((function(e){console.log("data",e),a({type:"SET_POPULAR",payload:{popular:e.data.items}})}))}),[]),Object(h.jsx)(w,{children:Object(h.jsx)(G,{children:t.popular&&t.popular.map((function(e){return Object(h.jsx)(U,{id:e.id,src:e.snippet.thumbnails.medium.url,title:e.snippet.title},e.id)}))})})},J=function(){var e=Object(n.useContext)(f),t=e.globalState,a=e.setGlobalState,r=Object(o.g)(),c=function(){var e=Object(g.a)(E.a.mark((function e(){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new URLSearchParams(r.search),!(n=t.get("query"))){e.next=5;break}return e.next=5,N(n).then((function(e){a({type:"SET_SEARCHED",payload:{searched:e.data.items}})}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){c()}),[r.search]),Object(h.jsx)(w,{children:Object(h.jsx)(G,{children:t.searched?t.searched.map((function(e){return Object(h.jsx)(U,{id:e.id.videoId,src:e.snippet.thumbnails.medium.url,title:e.snippet.title},e.id.videoId)})):Object(h.jsx)("span",{children:"no data"})})})},q=a(42),B=a(24),M=a.n(B),F=function(e){var t=e.id;return Object(h.jsx)("div",{className:M.a.wrap,children:Object(h.jsx)(q.a,{className:M.a.video,videoId:t})})},W=a(45),z=a.n(W),X=a(46),Y=a.n(X),Z=function(){var e=Object(n.useContext)(f).globalState;return e.selected&&e.selected.id?Object(h.jsxs)("div",{className:z.a.wrap,children:[Object(h.jsx)(F,{id:e.selected.id}),Object(h.jsx)("p",{children:e.selected.snippet.title}),Object(h.jsx)("hr",{}),Object(h.jsx)(Y.a,{children:Object(h.jsx)("pre",{children:e.selected.snippet.description})})]}):Object(h.jsx)("span",{children:"no data"})},$=a(25),K=a.n($),Q=function(e){var t=e.id,a=e.src,n=e.title;return Object(h.jsxs)(i.b,{className:K.a.item,to:{pathname:"watch",search:"?v=".concat(t)},children:[Object(h.jsx)("img",{src:a,alt:n}),Object(h.jsx)("div",{className:K.a.info,children:Object(h.jsx)("span",{children:n})})]})},ee=a(47),te=a.n(ee),ae=function(){var e=Object(n.useContext)(f).globalState;return Object(h.jsx)("div",{className:te.a.sidenav,children:e.related?e.related.map((function(e){return Object(h.jsx)(Q,{id:e.id.videoId,src:e.snippet.thumbnails.medium.url,title:e.snippet.title},e.id.videoId)})):Object(h.jsx)("span",{children:"no data"})})},ne=function(){var e=Object(n.useContext)(f).setGlobalState,t=Object(o.g)(),a=function(){var a=Object(g.a)(E.a.mark((function a(){var n,r,c,s,i,o;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n=new URLSearchParams(t.search),!(r=n.get("v"))){a.next=11;break}return a.next=5,Promise.all([k(r),I(r)]);case 5:c=a.sent,s=Object(u.a)(c,2),i=s[0],o=s[1],e({type:"SET_SELECTED",payload:{selected:i.data.items.shift()}}),e({type:"SET_RELATED",payload:{related:o.data.items}});case 11:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(n.useEffect)((function(){a()}),[t.search]),Object(h.jsxs)(w,{children:[Object(h.jsx)(Z,{}),Object(h.jsx)(ae,{})]})};var re=function(){return Object(h.jsx)(i.a,{children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/",component:H}),Object(h.jsx)(o.a,{exact:!0,path:"/search",component:J}),Object(h.jsx)(o.a,{exact:!0,path:"/watch",component:ne})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(m,{children:Object(h.jsx)(re,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},17:function(e,t,a){e.exports={header:"Header_header__1v0yI",item:"Header_item__2VaIS"}},23:function(e,t,a){e.exports={wrapper:"Layout_wrapper__2dOTA",main:"Layout_main__3OBIG"}},24:function(e,t,a){e.exports={wrap:"VideoPlay_wrap__21ucX",video:"VideoPlay_video__2ekpd"}},25:function(e,t,a){e.exports={item:"SideListItem_item__b9PvY",info:"SideListItem_info__1xDCF"}},40:function(e,t,a){e.exports={container:"VideoGrid_container__1eUpe"}},41:function(e,t,a){e.exports={item:"VideoGridItem_item__2P63g"}},45:function(e,t,a){e.exports={wrap:"VideoDetail_wrap__2Cb5v"}},47:function(e,t,a){e.exports={sidenav:"SideList_sidenav__j1iTt"}}},[[101,1,2]]]);
//# sourceMappingURL=main.631d55e8.chunk.js.map