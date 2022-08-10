"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[372],{9372:function(n,t,e){e.r(t),e.d(t,{default:function(){return N}});var r,a,i,o,c,u,s,p,l=e(5705),d=e(5861),f=e(885),h=e(7757),x=e.n(h),v=e(2791),m=e(3504),g=e(6871),b=e(7444),Z=e(9566),k=e(5650),y=e(168),w=e(6444),_=w.ZP.div(r||(r=(0,y.Z)(["\n  max-width: 1440px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n"]))),j=w.ZP.main(a||(a=(0,y.Z)(["\n  margin-top: 25px;\n"]))),P=(0,w.ZP)(l.l0)(i||(i=(0,y.Z)(["\n  outline: 1px solid;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 360px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),S=w.ZP.button(o||(o=(0,y.Z)(["\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),M=(0,w.ZP)(l.gN)(c||(c=(0,y.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 15px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),z=w.ZP.ul(u||(u=(0,y.Z)(["\n  margin-top: 25px;\n"]))),q=w.ZP.li(s||(s=(0,y.Z)(["\n  display: flex;\n  cursor: pointer;\n  width: max-content;\n  color: black;\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),T=(0,w.ZP)(m.rU)(p||(p=(0,y.Z)(["\n  text-decoration: none;\n  color: black;\n  &:hover,\n  &:focus {\n    background-color: orange;\n    color: white;\n  }\n"]))),U=e(6355),C=e(184),J={searchMovies:""},L=Z.Ry().shape({searchMovies:Z.Z_().min(2,"Too Short!").max(50,"Too Long!")});function N(){var n=function(){var n=(0,m.lr)(),t=(0,f.Z)(n,2),e=t[0],r=t[1],a=(0,v.useState)([]),i=(0,f.Z)(a,2),o=i[0],c=i[1],u=(0,v.useState)(!1),s=(0,f.Z)(u,2),p=s[0],l=s[1],h=(0,v.useState)(null),Z=(0,f.Z)(h,2),k=Z[0],y=Z[1],w=e.get("query"),_=(0,g.TH)();return(0,v.useEffect)((function(){function n(){return(n=(0,d.Z)(x().mark((function n(){var t;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l(!0),n.prev=1,n.next=4,(0,b.Ph)(w);case 4:t=n.sent,c(t.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),y(n.t0);case 11:return n.prev=11,l(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})))).apply(this,arguments)}w&&function(){n.apply(this,arguments)}()}),[w]),{handleSubmit:function(n,t){var e=n.searchMovies,a=t.resetForm;r({query:e}),a()},item:o,loading:p,error:k,location:_}}(),t=n.handleSubmit,e=n.item,r=n.loading,a=n.error,i=n.location;return(0,C.jsx)(j,{children:(0,C.jsxs)(_,{children:[(0,C.jsx)(l.J9,{initialValues:J,validationSchema:L,onSubmit:t,children:(0,C.jsxs)(P,{children:[(0,C.jsx)(M,{type:"text",name:"searchMovies",placeholder:"Search movies"}),(0,C.jsx)(l.Bc,{name:"searchMovies"}),(0,C.jsx)(S,{type:"submit",children:(0,C.jsx)(U.U41,{})})]})}),r&&(0,C.jsx)(k.Nx,{color:"black"}),0!==e.length&&!a&&(0,C.jsx)(z,{children:e.map((function(n){return(0,C.jsx)(q,{children:(0,C.jsx)(T,{to:"/movies/".concat(n.id),state:{from:i},children:n.title||n.name})},n.id)}))})]})})}},7444:function(n,t,e){e.d(t,{Df:function(){return s},M1:function(){return l},Ph:function(){return f},YJ:function(){return p},tx:function(){return d}});var r=e(5861),a=e(7757),i=e.n(a),o=e(4569),c=e.n(o);c().defaults.baseURL="https://api.themoviedb.org/3/";var u="42df6f3c7599d2c5d225ca5d434dc871",s=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/trending/all/day?api_key=".concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(t,"?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(t,"/credits?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(t,"/reviews?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/search/movie?api_key=".concat(u,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=372.176dae84.chunk.js.map