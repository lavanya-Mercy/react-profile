(this["webpackJsonpreact-profile"]=this["webpackJsonpreact-profile"]||[]).push([[0],{14:function(e,a,t){},23:function(e,a,t){e.exports=t(34)},28:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(16),i=t.n(r),o=(t(28),t(14),t(17)),c=t(18),m=t(22),s=t(21),u=t(8),d=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.location.data.id,a=u.profiles[e];return l.a.createElement("section",{className:"parent"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-top"},l.a.createElement("h3",null," ",a.basicInformation.name," "),l.a.createElement("em",null," ",a.basicInformation.email," ")),l.a.createElement("div",{className:"card-bottom"},l.a.createElement("a",{href:"mailto:"+a.basicInformation.email}," ",a.basicInformation.email,"  ")," ",l.a.createElement("br",null),l.a.createElement("a",{href:"tel:"+a.basicInformation.mobile}," ",a.basicInformation.mobile))),l.a.createElement("div",{className:"card2"},l.a.createElement("div",{className:"card-bottom"},l.a.createElement("h2",{className:"h2"},"\ud83d\udcd7 Educational Qualifications ")),l.a.createElement("div",{className:"card-top"},a.education.map((function(e,a){return l.a.createElement("div",null,l.a.createElement("h3",null," ",e.degree," "),l.a.createElement("p",null," ",e.institution," "))}))),l.a.createElement("div",{className:"card-bottom"},l.a.createElement("h2",{className:"h2"},"\ud83d\udef0 Skill ")),l.a.createElement("div",{className:"card-top"},a.skill.map((function(e,a){return l.a.createElement("div",null,l.a.createElement("h3",null," ",e.t," "),l.a.createElement("span",null," ",e.l," "))})))))}}]),t}(l.a.Component),E=t(9),f=t(5);var p=function(){var e=u.profiles;return l.a.createElement("section",{className:"parent"},e.map((function(e,a){return l.a.createElement("div",{className:"card",key:a},l.a.createElement("div",{className:"card-top"},l.a.createElement("h2",null," ",e.basicInformation.name," ")," ",l.a.createElement("br",null),l.a.createElement("h5",null," ",l.a.createElement("em",null," ",e.basicInformation.role))),l.a.createElement("div",{className:"card-bottom"},l.a.createElement("a",{href:"mailto:"+e.basicInformation.email}," ",e.basicInformation.email,"  ")," ",l.a.createElement("br",null),l.a.createElement("a",{href:"tel:"+e.basicInformation.mobile}," ",e.basicInformation.mobile)," ",l.a.createElement("br",null),l.a.createElement(E.b,{to:{pathname:"/profile",data:{id:a}}}," View Resume ")))})))},h=function(){var e=u.profiles;return l.a.createElement("section",null,l.a.createElement(E.a,null,l.a.createElement("header",{className:"header"},e.map((function(e,a){return l.a.createElement(E.b,{to:{pathname:"/profile",data:{id:a}},key:a}," ","Profile"+(a+1)," ")})))," ",l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement(f.a,{exact:!0,path:"/profile",component:d}),l.a.createElement(f.a,{exact:!0,path:"/react_profile",component:p})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e){e.exports=JSON.parse('{"profiles":[{"basicInformation":{"name":"Lavanya Polamarasetty","role":"Technical skill Trainer","email":"lavanya_p@apssdc.in","mobile":"+91 9505305452"},"education":[{"degree":"B.Tech","institution":"I completed my Graduation in the Stream of Electronics and communicaation Engineering from Indo American institute of Technical campus,anakapalli in 2018"},{"degree":"Diploma - ECE","institution":"I completed my Diploma in Electronics and Communication Engineering from Rajiv Gandhi R.E.C.S Polytechnic,kasimkota in 2015"},{"degree":"SSC","institution":"School Study\'s SSC from Z.P.H High School Gajuwaka completed in 2012"}],"skill":[{"t":"Coding Skills","l":"C,Python,Embedded C,Arduino Programming"},{"t":"Known Technologies","l":"Machine Learning,Embedded systems,Internet of Things"},{"t":"Web Technologies","l":"Html,css"}]}]}')}},[[23,1,2]]]);
//# sourceMappingURL=main.a1d18f93.chunk.js.map