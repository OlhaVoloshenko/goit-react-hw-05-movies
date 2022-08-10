"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[536],{5536:function(n,e,r){r.r(e),r.d(e,{default:function(){return H}});var t,a,i,c,s,o,u,p=r(2791),l=r(6871),d=r(5861),f=r(885),h=r(7757),x=r.n(h),v=r(7444),m=r(5650),g=r(168),j=r(6444),w=j.ZP.div(t||(t=(0,g.Z)(["\n  max-width: 1170px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n"]))),Z=j.ZP.div(a||(a=(0,g.Z)(["\n  margin-top: 25px;\n  display: flex;\n  gap: 25px;\n"]))),k=j.ZP.p(i||(i=(0,g.Z)(["\n  font-weight: bold;\n"]))),y=j.ZP.div(c||(c=(0,g.Z)(["\n  margin-top: 25px;\n  display: flex;\n  gap: 25px;\n"]))),b=j.ZP.main(s||(s=(0,g.Z)(["\n  margin-top: 25px;\n"]))),_=r(6856),P=r(184),S=function(n){var e=n.prevLocation,r=(0,l.s0)();return(0,P.jsxs)("button",{onClick:function(){r(e||"/")},children:[(0,P.jsx)(_.Q1j,{}),"Go back"]})},C=function(n){var e,r=n.item,t=n.error,a=r.poster_path,i=r.original_title,c=r.vote_average,s=r.overview,o=r.genres,u=(0,l.TH)();return(0,P.jsx)(b,{children:0!==r.length&&!t&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(S,{prevLocation:null===u||void 0===u||null===(e=u.state)||void 0===e?void 0:e.from}),(0,P.jsxs)(Z,{children:[(0,P.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w300".concat(a):"https://www.diabetes.ie/wp-content/uploads/2017/02/no-image-available-250x417.png",alt:i}),(0,P.jsxs)("div",{children:[(0,P.jsx)("h1",{children:i}),(0,P.jsxs)(y,{children:[(0,P.jsx)(k,{children:"User Score:"}),(0,P.jsx)("p",{children:c})]}),(0,P.jsx)("h3",{children:"Overview: "}),(0,P.jsx)("p",{children:s}),(0,P.jsx)("h3",{children:"Genres"}),(0,P.jsx)("p",{children:o.map((function(n){return n.name})).join(", ")})]})]}),(0,P.jsx)("hr",{})]})})},F=r(3504),U=(0,j.ZP)(F.rU)(o||(o=(0,g.Z)(["\n  color: #0000ff;\n  &:active {\n    color: #ff0000;\n  }\n"]))),L=j.ZP.h3(u||(u=(0,g.Z)(["\n  margin-top: 25px;\n"]))),G=function(n){var e=n.prevState;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(L,{children:"Additional information"}),(0,P.jsxs)("ul",{children:[(0,P.jsx)("li",{children:(0,P.jsx)(U,{to:"cast",state:{from:e},children:"Cast"})}),(0,P.jsx)("li",{children:(0,P.jsx)(U,{to:"reviews",state:{from:e},children:"Reviews"})})]}),(0,P.jsx)("hr",{})]})};function H(){var n,e=function(){var n=(0,l.UO)().itemId,e=(0,p.useState)([]),r=(0,f.Z)(e,2),t=r[0],a=r[1],i=(0,p.useState)(!1),c=(0,f.Z)(i,2),s=c[0],o=c[1],u=(0,p.useState)(null),h=(0,f.Z)(u,2),m=h[0],g=h[1];return(0,p.useEffect)((function(){function e(){return(e=(0,d.Z)(x().mark((function e(){var r;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.prev=1,e.next=4,(0,v.YJ)(n);case 4:r=e.sent,a(r),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),g(e.t0),alert(e.t0.message);case 12:return e.prev=12,o(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),{item:t,loading:s,error:m}}(),r=e.item,t=e.loading,a=e.error,i=(0,l.TH)();return(0,P.jsxs)(P.Fragment,{children:[t&&(0,P.jsx)(m.Nx,{color:"grey"}),a&&(0,P.jsx)(l.Fg,{to:"/",replace:!0}),(0,P.jsxs)(w,{children:[(0,P.jsx)(C,{item:r,error:a}),(0,P.jsx)(G,{prevState:null===i||void 0===i||null===(n=i.state)||void 0===n?void 0:n.from}),(0,P.jsx)(p.Suspense,{children:(0,P.jsx)(l.j3,{})})]})]})}},7444:function(n,e,r){r.d(e,{Df:function(){return u},M1:function(){return l},Ph:function(){return f},YJ:function(){return p},tx:function(){return d}});var t=r(5861),a=r(7757),i=r.n(a),c=r(4569),s=r.n(c);s().defaults.baseURL="https://api.themoviedb.org/3/";var o="42df6f3c7599d2c5d225ca5d434dc871",u=function(){var n=(0,t.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/trending/all/day?api_key=".concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/movie/".concat(e,"?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/movie/".concat(e,"/credits?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/movie/".concat(e,"/reviews?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/search/movie?api_key=".concat(o,"&query=").concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=536.6304828d.chunk.js.map