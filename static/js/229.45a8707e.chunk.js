"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[229],{1229:function(n,t,r){r.r(t),r.d(t,{default:function(){return _}});var e,a,c,u,i=r(168),o=r(6444),s=r(3504),f=o.ZP.div(e||(e=(0,i.Z)(["\n  max-width: 1440px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n"]))),p=o.ZP.li(a||(a=(0,i.Z)(["\n  display: flex;\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),d=(0,o.ZP)(s.rU)(c||(c=(0,i.Z)(["\n  color: #0000ff;\n  &:active {\n    color: #ff0000;\n  }\n"]))),l=o.ZP.main(u||(u=(0,i.Z)(["\n  margin-top: 25px;\n"]))),v=r(5650),h=r(5861),x=r(885),m=r(7757),g=r.n(m),w=r(2791),y=r(7444),Z=r(6871),k=r(184);function _(){var n=function(){var n=(0,w.useState)([]),t=(0,x.Z)(n,2),r=t[0],e=t[1],a=(0,w.useState)(!1),c=(0,x.Z)(a,2),u=c[0],i=c[1],o=(0,w.useState)(null),s=(0,x.Z)(o,2),f=s[0],p=s[1];return(0,w.useEffect)((function(){function n(){return(n=(0,h.Z)(g().mark((function n(){var t;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i(!0),n.prev=1,n.next=4,(0,y.Df)();case 4:t=n.sent,e(t.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),p(n.t0);case 11:return n.prev=11,i(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),{items:r,loading:u,error:f}}(),t=n.items,r=n.loading,e=n.error,a=(0,Z.TH)();return(0,k.jsx)(l,{children:(0,k.jsxs)(f,{children:[(0,k.jsx)("h1",{children:"Trending today"}),r&&(0,k.jsx)(v.Nx,{color:"grey"}),!e&&(0,k.jsx)("ul",{children:t.map((function(n){return(0,k.jsx)(p,{children:(0,k.jsx)(d,{to:"/movies/".concat(n.id),state:{from:a},children:n.title||n.name})},n.id)}))})]})})}},7444:function(n,t,r){r.d(t,{Df:function(){return s},M1:function(){return p},Ph:function(){return l},YJ:function(){return f},tx:function(){return d}});var e=r(5861),a=r(7757),c=r.n(a),u=r(4569),i=r.n(u);i().defaults.baseURL="https://api.themoviedb.org/3/";var o="42df6f3c7599d2c5d225ca5d434dc871",s=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/trending/all/day?api_key=".concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"/credits?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"/reviews?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/search/movie?api_key=".concat(o,"&query=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=229.45a8707e.chunk.js.map