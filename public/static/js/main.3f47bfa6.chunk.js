(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{126:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var a,r,c=n(0),s=n(29),i=n.n(s),o=(n(77),n(70)),u=n(18),j=n(71),b=n(67),d=n(37),l=n(16),O=n(10),h="event-data/FETCH_EVENT_DATA",x="event-data/RECEIVE_EVENT_DATA",v="event-data/EVENT_DATA_NOT_FOUND",f="event-data/SAVE_EVENT_DATA",p="event-data/FETCH_EVENT_HISTORY_DATA",g="event-data/RECEIVE_EVENT_HISTORY_DATA",E="event-data/EVENT_HISTORY_DATA_NOT_FOUND",D=Object(u.b)({name:"event-data",initialState:{isFetchingEventData:!1,isFetchingEventHistoryData:!1,eventData:null,eventHistoryData:null},reducers:{},extraReducers:(a={},Object(O.a)(a,h,(function(e,t){e.isFetchingEventData=!0})),Object(O.a)(a,v,(function(e,t){e.isFetchingEventData=!1})),Object(O.a)(a,x,(function(e,t){e.isFetchingEventData=!1,e.eventData=t.payload})),Object(O.a)(a,f,(function(e,t){e.isFetchingEventHistoryData=!0})),Object(O.a)(a,p,(function(e,t){e.isFetchingEventHistoryData=!0})),Object(O.a)(a,E,(function(e,t){e.isFetchingEventHistoryData=!1})),Object(O.a)(a,g,(function(e,t){e.isFetchingEventHistoryData=!1,e.eventHistoryData=t.payload})),a)}).reducer,k="auth/LOGIN",m="auth/SIGNUP",y="auth/RECEIVE_ACCESS_TOKEN",T="auth/ACCESS_TOKEN_NOT_FOUND",S="auth/LOGOUT",w="event-data",F=function(e){return JSON.parse(localStorage.getItem(_(e)))||""},H=function(e,t){t=JSON.stringify(t),localStorage.setItem(_(e),t)},N=function(e){localStorage.removeItem(_(e))},_=function(e){return[w,e].join(":")},C={email:F("email"),accessToken:F("accessToken"),isFetching:!1,errorMessage:""},A={eventData:D,auth:Object(u.b)({name:"auth",initialState:C,reducers:{},extraReducers:(r={},Object(O.a)(r,k,(function(e){e.isFetching=!0})),Object(O.a)(r,m,(function(e){e.isFetching=!0})),Object(O.a)(r,T,(function(e,t){e.isFetching=!1,e.errorMessage=t.payload})),Object(O.a)(r,y,(function(e,t){H("accessToken",t.payload.accessToken),H("email",t.payload.email),e.isFetching=!1,e.accessToken=t.payload.accessToken,e.email=t.payload.email})),Object(O.a)(r,S,(function(e){N("accessToken"),N("email"),e.accessToken="",e.email=""})),r)}).reducer};Object(l.b)(Object(d.a)({},A));function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(l.b)(Object(d.a)(Object(d.a)({},A),e))}var V=n(8),U=n.n(V),L=n(5),M=n(133),R=function(e){return Object(M.a)(x)(e)},P=function(){return Object(M.a)(v)()},J=function(){return Object(M.a)(p)()},B=function(e){return Object(M.a)(E)(e)},G=n(21),Y=n.n(G),K={headers:{"Content-Type":"application/json"}},z=function(e){return Y.a.get("https://opendata.hopefully.works/api/events",{headers:{Authorization:"Bearer ".concat(e)}})},q=function(){return Y.a.get("/api/event-history-data")},Q=function(e){return Y.a.post("/api/event-history-data",e,K)},W=U.a.mark(ee),X=U.a.mark(te),Z=U.a.mark(ne),$=U.a.mark(ae);function ee(e){var t,n,a,r;return U.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,c.prev=1,c.next=4,Object(L.b)(z,t);case 4:n=c.sent,a=n.data,r=n.status,c.t0=r,c.next=200===c.t0?10:401===c.t0?13:16;break;case 10:return c.next=12,Object(L.d)(R(a));case 12:return c.abrupt("break",19);case 13:return c.next=15,Object(L.d)(P());case 15:return c.abrupt("break",19);case 16:return c.next=18,Object(L.d)(P());case 18:return c.abrupt("break",19);case 19:c.next=26;break;case 21:return c.prev=21,c.t1=c.catch(1),console.error('Failed to fetch event data with error "%s"',c.t1),c.next=26,Object(L.d)(P());case 26:case"end":return c.stop()}}),W,null,[[1,21]])}function te(e){var t,n,a;return U.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,Object(L.b)(Q,t);case 4:n=r.sent,a=n.status,r.t0=a,r.next=200===r.t0?9:12;break;case 9:return r.next=11,Object(L.d)(J());case 11:return r.abrupt("break",15);case 12:return r.next=14,Object(L.d)(B());case 14:return r.abrupt("break",15);case 15:r.next=20;break;case 17:r.prev=17,r.t1=r.catch(1),console.error('Failed to save event data with error "%s"',r.t1);case 20:case"end":return r.stop()}}),X,null,[[1,17]])}function ne(){var e,t,n;return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(L.b)(q);case 3:e=a.sent,t=e.data,n=e.status,a.t0=n,a.next=200===a.t0?9:12;break;case 9:return a.next=11,Object(L.d)((r=t.eventData,Object(M.a)(g)(r)));case 11:return a.abrupt("break",15);case 12:return a.next=14,Object(L.d)(B());case 14:return a.abrupt("break",15);case 15:a.next=22;break;case 17:return a.prev=17,a.t1=a.catch(0),console.error('Failed to fetch event history data with error "%s"',a.t1),a.next=22,Object(L.d)(B());case 22:case"end":return a.stop()}var r}),Z,null,[[0,17]])}function ae(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.a)([Object(L.c)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.e)(h,ee);case 2:return e.next=4,Object(L.e)(f,te);case 4:return e.next=6,Object(L.e)(p,ne);case 6:case"end":return e.stop()}}),e)})))]);case 2:case"end":return e.stop()}}),$)}var re=function(e){return Object(M.a)(y)(e)},ce=function(e){return Object(M.a)(T)(e)},se=function(e){return Y.a.post("https://opendata.hopefully.works/api/signup",e,K)},ie=function(e){return Y.a.post("https://opendata.hopefully.works/api/login",e,K)},oe=U.a.mark(be),ue=U.a.mark(de),je=U.a.mark(le);function be(e){var t,n,a,r;return U.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,c.prev=1,c.next=4,Object(L.b)(se,t);case 4:n=c.sent,a=n.data,r=n.status,c.t0=r,c.next=200===c.t0?10:13;break;case 10:return c.next=12,Object(L.d)(re(a));case 12:return c.abrupt("break",16);case 13:return c.next=15,Object(L.d)(ce("Sign up error: User already exists"));case 15:return c.abrupt("break",16);case 16:c.next=23;break;case 18:return c.prev=18,c.t1=c.catch(1),console.error('Failed to sign up with error "%s"',c.t1),c.next=23,Object(L.d)(ce("Sign up error: User already exists"));case 23:case"end":return c.stop()}}),oe,null,[[1,18]])}function de(e){var t,n,a,r;return U.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,c.prev=1,c.next=4,Object(L.b)(ie,t);case 4:n=c.sent,a=n.data,r=n.status,c.t0=r,c.next=200===c.t0?10:13;break;case 10:return c.next=12,Object(L.d)(re(a));case 12:return c.abrupt("break",16);case 13:return c.next=15,Object(L.d)(ce("Login error: User does not exists"));case 15:return c.abrupt("break",16);case 16:c.next=23;break;case 18:return c.prev=18,c.t1=c.catch(1),console.error('Failed to login with error "%s"',c.t1),c.next=23,Object(L.d)(ce("Login error: User does not exists"));case 23:case"end":return c.stop()}}),ue,null,[[1,18]])}function le(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.a)([Object(L.c)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.e)(m,be);case 2:return e.next=4,Object(L.e)(k,de);case 4:case"end":return e.stop()}}),e)})))]);case 2:case"end":return e.stop()}}),je)}var Oe=U.a.mark(he);function he(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.a)([Object(L.c)(ae),Object(L.c)(le)]);case 2:case"end":return e.stop()}}),Oe)}var xe=n(12),ve=n(65),fe=n(33),pe=Object(xe.a)();var ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,134)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},Ee=n(9),De=n(6),ke=n(34),me=(n(126),n(2)),ye={logout:function(){return Object(M.a)(S)()}},Te=Object(Ee.c)((function(e){return{}}),ye)(Object(De.f)((function(e){var t=e.logout;return Object(me.jsxs)("div",{className:"top-navigation",children:[Object(me.jsx)(ke.a,{to:Le(Ue.HOME),children:"Home"}),Object(me.jsx)(ke.a,{to:Le(Ue.HOME),onClick:function(){return t()},children:"Logout"})]})}))),Se=n(23),we=(n(128),{signUp:function(e){return Object(M.a)(m)(e)},login:function(e){return Object(M.a)(k)(e)}}),Fe=Object(Ee.c)((function(e){return{email:e.auth.email,accessToken:e.auth.accessToken,isFetching:e.auth.isFetching,errorMessage:e.auth.errorMessage}}),we)((function(e){var t=Object(c.useState)(""),n=Object(Se.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),i=Object(Se.a)(s,2),o=i[0],u=i[1],j=Object(c.useState)(!1),b=Object(Se.a)(j,2),d=b[0],l=b[1];return Object(me.jsx)("div",{className:"login-form",children:Object(me.jsxs)("form",{onSubmit:function(t){var n=e.signUp,r=e.login,c={email:a,password:o};d?n(c):r(c),t.preventDefault()},children:["Please login",Object(me.jsx)("input",{name:"email",value:a,type:"text",placeholder:"Email Address",onChange:function(e){return r(e.target.value)}}),Object(me.jsx)("input",{name:"password",value:o,type:"password",placeholder:"Password",onChange:function(e){return u(e.target.value)}}),Object(me.jsx)("label",{children:"New user"}),Object(me.jsx)("input",{name:"newUser",value:d,type:"checkbox",onChange:function(){return l(!d)}}),Object(me.jsx)("button",{type:"submit",disabled:""===o||""===a,children:"Sign In"}),e.errorMessage&&Object(me.jsx)("p",{children:e.errorMessage})]})})})),He=(n(129),Object(Ee.c)((function(e){return{email:e.auth.email,accessToken:e.auth.accessToken}}),{})((function(e){return e.email&&e.accessToken?Object(me.jsxs)("div",{className:"body",children:[Object(me.jsx)(Te,{}),e.children]}):Object(me.jsx)(Fe,{})}))),Ne=function(e){return"".concat(new Date(e).toLocaleDateString("fi-FI")," ").concat(new Date(e).toLocaleTimeString("fi-FI"))},_e=(n(66),function(e){var t=e.data;return Object(me.jsx)("div",{children:Object(me.jsxs)("table",{className:"event-data-table",children:[Object(me.jsx)("caption",{children:"Event Data"}),Object(me.jsx)("thead",{children:Object(me.jsxs)("tr",{children:[Object(me.jsx)("th",{children:"Sensor"}),Object(me.jsx)("th",{children:"Value"})]})}),Object(me.jsxs)("tbody",{children:[Object(me.jsxs)("tr",{children:[Object(me.jsx)("td",{children:"Date"}),Object(me.jsx)("td",{children:Ne(t.date)})]}),Object(me.jsxs)("tr",{children:[Object(me.jsx)("td",{children:"Sensor 1"}),Object(me.jsx)("td",{children:t.sensor1})]}),Object(me.jsxs)("tr",{children:[Object(me.jsx)("td",{children:"Sensor 2"}),Object(me.jsx)("td",{children:t.sensor2})]}),Object(me.jsxs)("tr",{children:[Object(me.jsx)("td",{children:"Sensor 3"}),Object(me.jsx)("td",{children:t.sensor3})]}),Object(me.jsxs)("tr",{children:[Object(me.jsx)("td",{children:"Sensor 4"}),Object(me.jsx)("td",{children:t.sensor4})]})]})]})})}),Ce=function(e){var t=e.eventHistoryData,n=Object(c.useState)(0),a=Object(Se.a)(n,2),r=a[0],s=a[1],i=t[r],o=t.length;return i?Object(me.jsxs)("div",{children:[Object(me.jsxs)("table",{className:"event-data-table",children:[Object(me.jsx)("caption",{children:"History Data"}),Object(me.jsx)("thead",{children:Object(me.jsxs)("tr",{children:[Object(me.jsx)("th",{children:"Sensor"}),Object(me.jsx)("th",{children:"Value"})]})}),Object(me.jsxs)("tbody",{children:[Object(me.jsxs)("tr",{children:[Object(me.jsx)("td",{children:"Date"}),Object(me.jsx)("td",{children:Ne(i.date)})]}),Object(me.jsxs)("tr",{children:[Object(me.jsx)("td",{children:"Sensor 1"}),Object(me.jsx)("td",{children:i.sensor1})]}),Object(me.jsxs)("tr",{children:[Object(me.jsx)("td",{children:"Sensor 2"}),Object(me.jsx)("td",{children:i.sensor2})]}),Object(me.jsxs)("tr",{children:[Object(me.jsx)("td",{children:"Sensor 3"}),Object(me.jsx)("td",{children:i.sensor3})]}),Object(me.jsxs)("tr",{children:[Object(me.jsx)("td",{children:"Sensor 4"}),Object(me.jsx)("td",{children:i.sensor4})]})]})]}),Object(me.jsxs)("div",{className:"control-buttons",children:[Object(me.jsx)("button",{disabled:0===r,onClick:function(){return s(r-1)},children:"<"}),Object(me.jsx)("button",{disabled:r===o-1,onClick:function(){return s(r+1)},children:">"})]})]}):Object(me.jsx)("div",{children:"No Event History Data"})},Ae=(n(130),{fetchEventData:function(e){return Object(M.a)(h)(e)},fetchEventHistoryData:J,saveEventData:function(e){return Object(M.a)(f)(e)}}),Ie=Object(Ee.c)((function(e){return{isFetchingEventData:e.eventData.isFetchingEventData,isFetchingEventHistoryData:e.eventData.isFetchingEventHistoryData,eventData:e.eventData.eventData,eventHistoryData:e.eventData.eventHistoryData,accessToken:e.auth.accessToken}}),Ae)((function(e){var t=e.fetchEventData,n=e.eventData,a=e.isFetchingEventData,r=e.isFetchingEventHistoryData,s=e.eventHistoryData,i=e.accessToken,o=e.saveEventData,u=e.fetchEventHistoryData;Object(c.useEffect)((function(){a||n||!i||s||t(i),u()}),[]);return!n&&a?Object(me.jsx)("div",{children:"Loading"}):Object(me.jsxs)("div",{className:"event-data-content",children:[n&&Object(me.jsx)(_e,{data:n}),Object(me.jsx)("button",{onClick:function(){r||o(n)},children:"Save event data"}),r&&Object(me.jsx)("div",{children:"Loading"}),!r&&s&&Object(me.jsx)(Ce,{eventHistoryData:s})]})})),Ve=(n(131),function(){return Object(me.jsx)("div",{className:"error-page",children:"404 Page not found"})}),Ue={HOME:"home"},Le=function(e){var t=Object(O.a)({},Ue.HOME,"/");return t[e]?t[e]:""},Me=Object(me.jsx)(He,{children:Object(me.jsxs)(De.c,{children:[Object(me.jsx)(De.a,{exact:!0,path:"/",component:Ie}),Object(me.jsx)(De.a,{component:Ve})]})}),Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={},n=Object(j.a)(t),a=n.run,r=[n,Object(ve.a)(pe)],c=[Object(b.a)({createReducer:I,runSaga:a})],s={router:Object(fe.b)(pe)},i=Object(u.a)({reducer:I(s),middleware:[].concat(Object(o.a)(Object(u.c)()),r),preloadedState:e,devTools:!1,enhancers:c});return n.run(he),i}({});i.a.render(Object(me.jsx)(Ee.a,{store:Re,children:Object(me.jsx)(fe.a,{history:pe,children:Me})}),document.getElementById("root")),ge()},66:function(e,t,n){},77:function(e,t,n){}},[[132,1,2]]]);
//# sourceMappingURL=main.3f47bfa6.chunk.js.map