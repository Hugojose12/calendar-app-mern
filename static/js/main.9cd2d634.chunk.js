(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{114:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=a(8),s=a(21),u=a(64),i=a(4),m="[ui] Open modal",d="[ui] Close modal",p="[event] Set Active",f="[event] Logout event",v="[event] Add new",b="[event] Clear active event",E="[event] Event updated",h="[event] Event deleted",g="[event] Events loaded",O="[auth] Finish checking login state",j="[auth] Login",y="[auth] Start Register",w="[auth] Logout",N={modalOpen:!1},k=a(54),x={events:[],activeEvent:null},S={checking:!0},C=Object(s.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!0});case d:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(i.a)(Object(i.a)({},e),{},{activeEvent:t.payload});case v:return Object(i.a)(Object(i.a)({},e),{},{events:[].concat(Object(k.a)(e.events),[t.payload])});case b:return Object(i.a)(Object(i.a)({},e),{},{activeEvent:null});case E:return Object(i.a)(Object(i.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case h:return Object(i.a)(Object(i.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case g:return Object(i.a)(Object(i.a)({},e),{},{events:Object(k.a)(t.payload)});case f:return Object(i.a)({},x);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:case y:return Object(i.a)(Object(i.a)(Object(i.a)({},e),t.payload),{},{checking:!1});case O:return Object(i.a)(Object(i.a)({},e),{},{checking:!1});case w:return{checking:!1};default:return e}}}),D="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,P=Object(s.e)(C,D(Object(s.a)(u.a))),T=a(35),A=a(9),I=a(13),_=(a(75),a(24)),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(I.a)(t,2),r=a[0],c=a[1],o=function(){c(e)},l=function(e){var t=e.target;c(Object(i.a)(Object(i.a)({},r),{},Object(_.a)({},t.name,t.value)))};return[r,l,o]},R=a(11),G=a.n(R),F=a(20),V="https://mern-calendar-2021.herokuapp.com/api",H=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(V,"/").concat(e);return"GET"===a?fetch(n):fetch(n,{method:a,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},J=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(V,"/").concat(e),r=localStorage.getItem("token-auth")||"";return"GET"===a?fetch(n,{method:a,headers:{"x-token":r}}):fetch(n,{method:a,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},M=a(17),U=a.n(M),X=a(15),q=a.n(X),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{end:q()(e.end).toDate(),start:q()(e.start).toDate()})}))},B=function(e){return{type:v,payload:e}},K=function(){return{type:b}},Q=function(e){return{type:E,payload:e}},W=function(){return{type:h}},Y=function(e){return{type:g,payload:e}},Z=function(){return function(e){localStorage.clear(),e({type:f}),e(ae())}},$=function(){return{type:O}},ee=function(e){return{type:j,payload:e}},te=function(e){return{type:y,payload:e}},ae=function(){return{type:w}},ne=function(){var e=Object(l.b)(),t=L({lEmail:"",lPassword:""}),a=Object(I.a)(t,2),n=a[0],c=a[1],o=n.lEmail,s=n.lPassword,u=L({rName:"",rEmail:"",rPassword1:"",rPassword2:""}),i=Object(I.a)(u,2),m=i[0],d=i[1],p=m.rName,f=m.rEmail,v=m.rPassword1,b=m.rPassword2;return r.a.createElement("div",{className:"container login-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 login-form-1"},r.a.createElement("h3",null,"Log in"),r.a.createElement("form",{onSubmit:function(t){var a,n;t.preventDefault(),e((a=o,n=s,function(){var e=Object(F.a)(G.a.mark((function e(t){var r,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H("auth",{email:a,password:n},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token-auth",c.token),localStorage.setItem("token-start",(new Date).getTime())):U.a.fire("Error",c.msg,"error"),t(ee({uid:c.uid,name:c.name}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:o,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:s,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Login"})))),r.a.createElement("div",{className:"col-md-6 login-form-2"},r.a.createElement("h3",null,"Create Account"),r.a.createElement("form",{onSubmit:function(t){if(t.preventDefault(),console.log(m),v!==b)return U.a.fire("Error","Passwords do not match","error");var a,n,r;e((a=f,n=v,r=p,function(){var e=Object(F.a)(G.a.mark((function e(t){var c,o;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H("auth/new",{name:r,email:a,password:n},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token-auth",o.token),localStorage.setItem("token-start",(new Date).getTime())):U.a.fire("Error",o.msg,"error"),t(te({uid:o.uid,name:o.name}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Name",name:"rName",value:p,onChange:d})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email",name:"rEmail",value:f,onChange:d})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",name:"rPassword1",value:v,onChange:d})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Repeat Password",name:"rPassword2",value:b,onChange:d})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Create Account"}))))))},re=a(53),ce=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})).name;return r.a.createElement("div",{className:"navbar navbar-dark bg-dark mb-4"},r.a.createElement("span",{className:"navbar-brand"},t),r.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){e(Z())}},r.a.createElement("i",{className:"fas fa-sign-out-alt"}),r.a.createElement("span",null," Salir")))},oe={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},le=function(e){var t=e.event,a=t.title,n=t.user;return r.a.createElement("div",null,r.a.createElement("strong",null," ",a," "),r.a.createElement("span",null,"- ",n.name," "))},se=a(48),ue=a.n(se),ie=a(49),me=a.n(ie),de=function(){return{type:m}},pe={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};ue.a.setAppElement("#root");var fe=q()().minutes(0).seconds(0).add(1,"hours"),ve=fe.clone().add(1,"hours"),be={title:"",notes:"",start:fe.toDate(),end:ve.toDate()},Ee=function(){var e=Object(l.c)((function(e){return e.ui})).modalOpen,t=Object(l.c)((function(e){return e.calendar})).activeEvent,a=Object(l.b)(),c=Object(n.useState)(fe.toDate()),o=Object(I.a)(c,2),s=o[0],u=o[1],m=Object(n.useState)(ve.toDate()),p=Object(I.a)(m,2),f=p[0],v=p[1],b=Object(n.useState)(!0),E=Object(I.a)(b,2),h=E[0],g=E[1],O=Object(n.useState)(be),j=Object(I.a)(O,2),y=j[0],w=j[1],N=y.notes,k=y.title,x=y.start,S=y.end;Object(n.useEffect)((function(){w(t||be)}),[t,w]);var C=function(e){var t=e.target;w(Object(i.a)(Object(i.a)({},y),{},Object(_.a)({},t.name,t.value)))},D=function(){a({type:d}),a(K()),w(be)};return r.a.createElement(ue.a,{isOpen:e,onRequestClose:D,style:pe,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo"},r.a.createElement("h1",null," ",t?"Editar evento":"Nuevo evento"," "),r.a.createElement("hr",null),r.a.createElement("form",{className:"container",onSubmit:function(e){e.preventDefault();var n,r=q()(x),c=q()(S);return r.isSameOrAfter(c)?U.a.fire("Error","La fecha fin debe de ser mayor a la fecha de inicio","error"):k.trim().length<2?g(!1):(a(t?(n=y,function(){var e=Object(F.a)(G.a.mark((function e(t){var a,r;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J("events/".concat(n.id),n,"PUT");case 3:return a=e.sent,e.next=6,a.json();case 6:(r=e.sent).ok?t(Q(n)):U.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(F.a)(G.a.mark((function t(a,n){var r,c,o,l,s;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,J("events",e,"POST");case 4:return l=t.sent,t.next=7,l.json();case 7:(s=t.sent).ok&&(e.id=s.event.id,e.user={_id:c,name:o},a(B(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,a){return t.apply(this,arguments)}}()}(y)),g(!0),void D())}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora inicio"),r.a.createElement(me.a,{onChange:function(e){u(e),w(Object(i.a)(Object(i.a)({},y),{},{start:e}))},value:s,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora fin"),r.a.createElement(me.a,{onChange:function(e){v(e),w(Object(i.a)(Object(i.a)({},y),{},{end:e}))},value:f,minDate:s,className:"form-control"})),r.a.createElement("hr",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Titulo y notas"),r.a.createElement("input",{type:"text",className:"form-control ".concat(!h&&"is-invalid"," "),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:k,onChange:C}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Una descripci\xf3n corta")),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:N,onChange:C}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Informaci\xf3n adicional")),r.a.createElement("button",{type:"submit",className:"btn btn-outline-primary btn-block"},r.a.createElement("i",{className:"far fa-save"}),r.a.createElement("span",null," Guardar"))))},he=(a(111),a(112),function(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-primary fab",onClick:function(){e(de())}},r.a.createElement("i",{className:"fas fa-plus"}))}),ge=function(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(F.a)(G.a.mark((function e(t,a){var n,r,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().calendar.activeEvent.id,e.prev=1,e.next=4,J("events/".concat(n),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(W()):U.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}())}},r.a.createElement("i",{className:"fas fa-trash"}),r.a.createElement("span",null," Delete event "))};q.a.locale("es");var Oe=Object(re.b)(q.a),je=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.calendar})),a=t.events,c=t.activeEvent,o=Object(l.c)((function(e){return e.auth})).uid,s=Object(n.useState)(localStorage.getItem("lastView")||"month"),u=Object(I.a)(s,2),i=u[0],m=u[1];Object(n.useEffect)((function(){e(function(){var e=Object(F.a)(G.a.mark((function e(t){var a,n,r;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J("events");case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,r=z(n.events),console.log(r),t(Y(r)),console.log(n),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return r.a.createElement("div",{className:"calendar-screen"},r.a.createElement(ce,null),r.a.createElement(re.a,{localizer:Oe,events:a,startAccessor:"start",endAccessor:"end",messages:oe,eventPropGetter:function(e,t,a,n){return{style:{backgroundColor:o===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(t){e(de())},onSelectEvent:function(t){e({type:p,payload:t})},onView:function(e){m(e),localStorage.setItem("lastView",e)},onSelectSlot:function(t){e(K())},selectable:!0,view:i,components:{event:le}}),r.a.createElement(he,null),c&&r.a.createElement(ge,null),r.a.createElement(Ee,null))},ye=a(39),we=function(e){var t=e.isAuthenticated,a=e.component,n=Object(ye.a)(e,["isAuthenticated","component"]);return r.a.createElement(A.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(A.a,{to:"/"}):r.a.createElement(a,e)}}))},Ne=function(e){var t=e.isAuthenticated,a=e.component,n=Object(ye.a)(e,["isAuthenticated","component"]);return r.a.createElement(A.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(A.a,{to:"/login"})}}))},ke=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})).uid;return Object(n.useEffect)((function(){e(function(){var e=Object(F.a)(G.a.mark((function e(t){var a,n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J("auth/renew");case 2:return a=e.sent,e.next=5,a.json();case 5:(n=e.sent).ok?(localStorage.setItem("token-auth",n.token),localStorage.setItem("token-start",(new Date).getTime()),t(ee({uid:n.uid,name:n.name}))):t($());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),r.a.createElement(T.a,null,r.a.createElement("div",null,r.a.createElement(A.d,null,r.a.createElement(we,{exact:!0,path:"/login",component:ne,isAuthenticated:!!t}),r.a.createElement(Ne,{exact:!0,path:"/",component:je,isAuthenticated:!!t}),r.a.createElement(A.a,{to:"/"}))))},xe=function(){return r.a.createElement(l.a,{store:P},r.a.createElement(ke,null))};a(114);console.log("https://mern-calendar-2021.herokuapp.com/api"),o.a.render(r.a.createElement(xe,null),document.getElementById("root"))},67:function(e,t,a){e.exports=a(116)},75:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.9cd2d634.chunk.js.map