(this.webpackJsonpeventful=this.webpackJsonpeventful||[]).push([[0],{55:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(19),i=n.n(r),s=n(13),o=(n(54),n(55),n(31)),l=n.n(o),d=n(44),u=n(45),j=n(46),b=n(32),h=n.n(b),v="https://bootcamp-week14-eventful.herokuapp.com/",m=function(){function e(t,n){Object(u.a)(this,e),this.tokenProvider=t,this.logoutHandler=n}return Object(j.a)(e,[{key:"authenticatedApiFetch",value:function(e,t,n){var a=this;return h()({method:e,url:t,headers:{authorization:this.tokenProvider()},data:n}).catch((function(e){if(403===e.response.status)return a.logoutHandler(),Promise.reject();throw e}))}},{key:"getEvent",value:function(){return this.authenticatedApiFetch("get",v)}},{key:"addEvent",value:function(e,t,n,a,c){return this.authenticatedApiFetch("post",v,{name:e,location:t,description:n,date:a,time:c})}},{key:"removeEvent",value:function(e){return this.authenticatedApiFetch("delete","".concat(v).concat(e))}},{key:"updateEvent",value:function(e,t,n,a,c,r){return this.authenticatedApiFetch("put","".concat(v).concat(e),{name:t,location:n,description:a,date:c,time:r})}},{key:"login",value:function(){var e=Object(d.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()({method:"post",url:"".concat(v,"auth"),data:{username:t,password:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),x=n(17),p=n(7),O=n(18),f=n(26),g=n(48),E=n(49),N=n(6),w=n(20),k=n(2),y=Object(p.f)((function(e){var t,n,c,r,i,o=Object(a.useState)(!1),l=Object(s.a)(o,2),d=l[0],u=l[1];return Object(k.jsx)("div",{children:Object(k.jsxs)(N.a,{className:"w-25 mx-auto text-center pt-4",id:"add-event-form",onSubmit:function(t){return function(t){t.preventDefault(),u(!0),(e.currentEvent?e.apiClient.updateEvent(e.currentEvent._id,t.target.eventName.value,t.target.eventLocation.value,t.target.eventDescription.value,t.target.eventDate.value,t.target.eventTime.value):e.apiClient.addEvent(t.target.eventName.value,t.target.eventLocation.value,t.target.eventDescription.value,t.target.eventDate.value,t.target.eventTime.value)).then((function(){u(!1),document.getElementById("add-event-form").reset(),e.refreshList(),e.history.push("/")})).catch((function(){alert("An error occurred, please try again."),u(!1)}))}(t)},children:[Object(k.jsx)("h1",{children:e.currentEvent?"Update event":"Add new event"}),Object(k.jsxs)(N.a.Group,{controlId:"eventName",children:[Object(k.jsx)(N.a.Label,{children:"Name:"}),Object(k.jsx)(N.a.Control,{type:"text",placeholder:"Enter event name",className:"mb-3",defaultValue:null===(t=e.currentEvent)||void 0===t?void 0:t.name,name:"eventName",disabled:d,required:!0})]}),Object(k.jsxs)(N.a.Group,{controlId:"eventLocation",children:[Object(k.jsx)(N.a.Label,{children:"Location:"}),Object(k.jsx)(N.a.Control,{type:"text",placeholder:"Enter event location",className:"mb-3",defaultValue:null===(n=e.currentEvent)||void 0===n?void 0:n.location,name:"eventLocation",disabled:d,required:!0})]}),Object(k.jsxs)(N.a.Group,{controlId:"eventDescription",children:[Object(k.jsx)(N.a.Label,{children:"Description:"}),Object(k.jsx)(N.a.Control,{type:"text",placeholder:"Enter event description",className:"mb-3",defaultValue:null===(c=e.currentEvent)||void 0===c?void 0:c.description,name:"eventDescription",disabled:d,required:!0})]}),Object(k.jsxs)(N.a.Group,{controlId:"eventDate",children:[Object(k.jsx)(N.a.Label,{children:"Date:"}),Object(k.jsx)(N.a.Control,{type:"date",placeholder:"Enter event date",className:"mb-3",defaultValue:null===(r=e.currentEvent)||void 0===r?void 0:r.date,name:"eventDate",disabled:d,required:!0})]}),Object(k.jsxs)(N.a.Group,{controlId:"eventTime",children:[Object(k.jsx)(N.a.Label,{children:"Time:"}),Object(k.jsx)(N.a.Control,{type:"time",placeholder:"Enter event time",className:"mb-3",defaultValue:null===(i=e.currentEvent)||void 0===i?void 0:i.time,name:"eventTime",disabled:d,required:!0})]}),Object(k.jsx)(w.a,{variant:"success",type:"submit",className:"mx-2",disabled:d,children:"Submit"}),Object(k.jsx)(w.a,{variant:"danger",className:"mx-2",onClick:function(){return document.getElementById("add-event-form").reset(),e.refreshList(),void e.history.push("/")},disabled:d,children:"Cancel"})]})})})),C=function(e){var t=Object(a.useState)([]),n=Object(s.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(void 0),o=Object(s.a)(i,2),l=o[0],d=o[1],u=function(){e.apiClient.getEvent().then((function(e){return r(e.data)}))};Object(a.useEffect)((function(){u()}),[]);return Object(k.jsxs)(x.a,{children:[Object(k.jsxs)(O.a,{bg:"dark",variant:"dark",children:[Object(k.jsx)(O.a.Brand,{className:"mx-5",children:"Eventful"}),Object(k.jsx)(O.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(k.jsxs)(O.a.Collapse,{id:"basic-navbar-nav",children:[Object(k.jsxs)(f.a,{children:[Object(k.jsx)(x.b,{to:"/",className:"nav-link text-danger px-3",children:"View Events"}),Object(k.jsx)(x.b,{to:"/add",className:"nav-link text-danger px-3",children:"Add New Event"})]}),Object(k.jsx)(f.a,{className:"m-auto"}),Object(k.jsx)(f.a,{children:Object(k.jsx)(x.b,{to:"/",className:"ml-auto nav-link text-danger px-5",onClick:function(){return e.apiClient.logoutHandler()},children:"Logout"})})]})]}),Object(k.jsx)(g.a,{children:Object(k.jsxs)(p.c,{children:[Object(k.jsx)(p.a,{path:"/add",children:Object(k.jsx)(y,{apiClient:e.apiClient,refreshList:function(){u(),d(void 0)},currentEvent:l})}),Object(k.jsx)(p.a,{exact:!0,path:"/",children:Object(k.jsxs)("div",{className:"mx-auto text-center pt-4",children:[Object(k.jsx)("h1",{children:"My Events"}),c.length?Object(k.jsxs)(E.a,{striped:!0,bordered:!0,hover:!0,id:"events-table",children:[Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"Event Name"}),Object(k.jsx)("th",{children:"Location"}),Object(k.jsx)("th",{children:"Description"}),Object(k.jsx)("th",{children:"Date"}),Object(k.jsx)("th",{children:"Time"}),Object(k.jsx)("th",{children:"Actions"})]})}),Object(k.jsx)("tbody",{children:c.map((function(t){return Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{className:"table-width-15",children:t.name}),Object(k.jsx)("td",{className:"table-width-15",children:t.location}),Object(k.jsx)("td",{className:"table-width-35",children:t.description}),Object(k.jsx)("td",{className:"table-width-10",children:t.date}),Object(k.jsx)("td",{className:"table-width-10",children:t.time}),Object(k.jsxs)("td",{className:"table-width-15",children:[Object(k.jsx)(x.b,{to:"/add",className:"text-decoration-none",children:Object(k.jsx)("span",{className:"action-link update mx-2",onClick:function(){d(t)},children:"Update"})}),Object(k.jsx)("span",{className:"action-link remove mx-2",onClick:function(){return n=t._id,void e.apiClient.removeEvent(n).then((function(){return u()}));var n},children:"Remove"})]})]},t._id)}))})]}):Object(k.jsxs)("div",{className:"mt-4",children:["Sorry, you have no events yet."," ",Object(k.jsx)(x.b,{to:"/add",children:"Try adding one!"})]})]})}),Object(k.jsx)(p.a,{path:"/",children:"Error: 404 not found"})]})})]})},L=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),c=(n[0],n[1]);return Object(k.jsxs)("div",{children:[Object(k.jsx)(O.a,{bg:"dark",variant:"dark",children:Object(k.jsx)(O.a.Brand,{className:"mx-5",children:"Eventful"})}),Object(k.jsx)("div",{className:"w-25 m-auto text-center pt-4",children:Object(k.jsxs)(N.a,{onSubmit:function(t){return function(t){t.preventDefault(),c(!0),e.apiClient.login(t.target.formUsername.value,t.target.formPassword.value).then((function(t){c(!1),e.loggedIn(t.data.token)})).catch((function(e){401===e.response.status?alert("You have entered an invalid username or password."):alert(e),c(!1)}))}(t)},children:[Object(k.jsx)("h1",{children:"Log In"}),Object(k.jsxs)(N.a.Group,{controlId:"formUsername",className:"pt-4",children:[Object(k.jsx)(N.a.Label,{children:"Username:"}),Object(k.jsx)(N.a.Control,{type:"username",placeholder:"Enter username",required:!0})]}),Object(k.jsxs)(N.a.Group,{controlId:"formPassword",className:"py-4",children:[Object(k.jsx)(N.a.Label,{children:"Password:"}),Object(k.jsx)(N.a.Control,{type:"password",placeholder:"Enter password",required:!0})]}),Object(k.jsx)(w.a,{variant:"primary",type:"submit",children:"Submit"})]})})]})},I=function(){var e=Object(a.useState)(window.localStorage.getItem("token")),t=Object(s.a)(e,2),n=t[0],c=t[1],r=new m((function(){return n}),(function(){return i()})),i=function(){window.localStorage.removeItem("token"),c(void 0)};return n?Object(k.jsx)(C,{apiClient:r}):Object(k.jsx)(L,{loggedIn:function(e){return function(e){window.localStorage.setItem("token",e),c(e)}(e)},apiClient:r})};i.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(I,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.a2a1ea4d.chunk.js.map