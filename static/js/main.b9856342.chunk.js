(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){},37:function(e,t,a){e.exports=a.p+"static/media/icon.81deeae6.png"},46:function(e,t,a){e.exports=a(68)},51:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(23),o=a.n(s),l=a(25),c=a(19),i=a(9),m=a(29),u=a.n(m),p=(a(51),function(e){var t=e.user,a=e.setIsProfileOpen;return r.a.createElement("div",{className:"ma4 mt0"},r.a.createElement(u.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150}},r.a.createElement("div",{className:"Tilt-inner pa3"},r.a.createElement("img",{onClick:function(e){a(!0)},style:{paddingTop:"5px"},alt:"logo",src:"https://robohash.org/".concat(t.name)}))))});a(52);var d=function(e){var t=e.user,a=e.setIsProfileOpen;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"flex"},r.a.createElement(p,{className:"start",user:t,setIsProfileOpen:a}),r.a.createElement("h1",{className:"f3 f2-m f1-l fw2 black-90 mv3"}," Welcome ",t.name,"! ")),r.a.createElement("div",null,"    ",r.a.createElement("h5",null," get some points by detecting faces in the smart-brain or by discover wethwhat in your faivorite cities :)"),r.a.createElement("br",null),r.a.createElement("br",null)," ",r.a.createElement("h2",null," SO WHAT ARE YOU WAITING FOR?? ")))};var h=function(e){var t=e.router,a=function(e){e.preventDefault(),t(e.target.value)};return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"fixed",padding:"15%",height:"25%",width:"100%"}}),r.a.createElement("div",{style:{fontSize:"3rem",color:"white",textAlign:"center",padding:"4%",position:"fixed",left:"0",bottom:"13%",height:"10px",width:"100%"}},r.a.createElement("nav",{className:"bt bb tc mw7 center mt4"},r.a.createElement("div",{className:"ph4"},r.a.createElement("button",{value:"SmartBrain",onClick:a,className:"pa3 f2 link dim ph3 pv2 mb2 dib white bg-purple",href:"#0"},"Smart-Brain"),r.a.createElement("button",{value:"WethWhat",onClick:a,className:"pa3 f2 link dim ph3 pv2 mb2 dib white bg-purple",href:"#0"},"WethWhat?")))," "))},b=a(26),f=a.n(b),v=a(32),g=a(14),E=a(15),w=a(17),k=a(16),N=a(18);function y(e){return function(t){function a(e){var t;return Object(g.a)(this,a),(t=Object(w.a)(this,Object(k.a)(a).call(this,e))).state={component:null},t}return Object(N.a)(a,t),Object(E.a)(a,[{key:"componentDidMount",value:function(){var t=Object(v.a)(f.a.mark(function t(){var a,n;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:a=t.sent,n=a.default,this.setState({component:n});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?r.a.createElement(e,this.props):null}}]),a}(n.Component)}var O=function(e){var t=e.user,s=e.setIsProfileOpen,o=Object(n.useState)("Home"),l=Object(i.a)(o,2),c=l[0],m=l[1],u=function(e){m(e)};switch(c){case"Home":return r.a.createElement("div",{className:"App"},r.a.createElement(d,{user:t,setIsProfileOpen:s}),r.a.createElement(h,{router:u}));case"WethWhat":var p=y(function(){return Promise.all([a.e(3),a.e(4)]).then(a.bind(null,114))});return r.a.createElement("div",{className:"App"},r.a.createElement(p,{user:t}),r.a.createElement(h,{router:u}));case"SmartBrain":var b=y(function(){return a.e(5).then(a.bind(null,115))});return r.a.createElement("div",{className:"App"},r.a.createElement(b,{user:t}),r.a.createElement(h,{router:u}));default:return r.a.createElement("h1",null," Has been error, pl refresh ")}},j=(a(33),function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(w.a)(this,Object(k.a)(t).call(this,e))).onNameChange=function(e){a.setState({name:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.saveAuthToken=function(e){window.sessionStorage.setItem("token",e)},a.onSubmitRegister=function(){fetch("http://localhost:3000/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password,name:a.state.name})}).then(function(e){return e.json()}).then(function(e){"true"===e.sucsess&&(a.saveAuthToken(e.token),a.props.fetchBackend(e.token))})},a.state={email:"",password:"",name:""},a}return Object(N.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("div",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),r.a.createElement("input",{"aria-label":"type name here",className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black",type:"text",name:"name",id:"name",onChange:this.onNameChange})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{"aria-label":"type email here",className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{"aria-label":"type secret here",className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),r.a.createElement("div",{className:""},r.a.createElement("input",{onClick:this.onSubmitRegister,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})))))}}]),t}(r.a.Component)),C=a(70),I=a(73),S=a(72),A=a(71),P=(a(54),a(37)),x=a.n(P);function T(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),s=a[0],o=a[1],c=function(e){e.preventDefault(),o(!s)};return r.a.createElement("div",{className:"pa4 tc end"},r.a.createElement(C.a,{isOpen:s,toggle:c},r.a.createElement(I.a,{tag:"span","data-toggle":"dropdown","aria-expanded":s},r.a.createElement("img",{src:x.a,className:"br-100 ba h3 w3 dib pointer custom",alt:"avatar"})),r.a.createElement(S.a,{right:!0,className:"b--transparent shadow-5"},e.isLogedIn?r.a.createElement("div",{className:"pointer"},r.a.createElement("div",{onClick:c}," ",r.a.createElement(A.a,{onClick:function(t){t.preventDefault(),e.setIsProfileOpen(!0)}},"View Profile")," "),r.a.createElement("div",{onClick:c}," ",r.a.createElement(A.a,{onClick:function(t){t.preventDefault(),e.setIsLogedIn(!1),e.setIsRegisterd(!0),e.setUser({}),window.sessionStorage.clear(),e.setIsProfileOpen(!1)}},"Sign Out")," ")):e.isRegisterd?r.a.createElement("div",{className:"pointer",onClick:c}," ",r.a.createElement(A.a,{onClick:function(t){t.preventDefault(),e.setIsRegisterd(!1)}},"Register")," "):r.a.createElement("div",{className:"pointer",onClick:c}," ",r.a.createElement(A.a,{onClick:function(t){t.preventDefault(),e.setIsRegisterd(!0)}},"Sign In")," "),r.a.createElement("div",{onClick:c}," ",r.a.createElement(A.a,{tag:l.b,exact:!0,to:"/About"},"About")," "))))}var W=a(44),R=a.n(W),L=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(w.a)(this,Object(k.a)(t).call(this,e))).saveAuthToken=function(e){window.sessionStorage.setItem("token",e)},a.onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignIn=function(){fetch("http://localhost:3000/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then(function(e){return e.json()}).then(function(e){"true"===e.sucsess&&(a.saveAuthToken(e.token),a.props.fetchBackend(e.token))})},a.state={signInEmail:"",signInPassword:""},a}return Object(N.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("div",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{"aria-label":"type email here",className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{"aria-label":"type secret here",className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),r.a.createElement("div",{className:""},r.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib hover-black",type:"submit",value:"Sign in"})),r.a.createElement("div",{className:"lh-copy mt3"}))))}}]),t}(r.a.Component),B=(a(62),document.getElementById("modal-root")),D=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(w.a)(this,Object(k.a)(t).call(this,e))).el=document.createElement("div"),a}return Object(N.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){B.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){B.removeChild(this.el)}},{key:"render",value:function(){return o.a.createPortal(this.props.children,this.el)}}]),t}(r.a.Component),U=a(45);a(63);var _=function(e){var t=e.setIsProfileOpen,a=e.user,s=e.setUser,o=Object(n.useState)("".concat(a.name)),l=Object(i.a)(o,2),c=l[0],m=l[1];return r.a.createElement("div",{className:"profile-modal"},r.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(c)}),r.a.createElement("div",null,r.a.createElement("h1",null,c),r.a.createElement("div",{className:"measure"},r.a.createElement("fieldset",{id:"user name",className:"ba b--transparent ph0 mh0"},r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"user-name"}),r.a.createElement("input",{"aria-label":"type new name here",onChange:function(e){m(e.target.value)},className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-70 hover-black",type:"text",name:"name",id:"name",placeholder:"arn't ".concat(a.name,"? change it here")}),r.a.createElement("a",{onClick:function(e){var n;e.preventDefault(),n={name:c},fetch("http://localhost:3000/profile/".concat(a.id),{method:"post",headers:{"Content-Type":"application/json",Authorization:window.sessionStorage.getItem("token")},body:JSON.stringify({formInput:n})}).then(function(e){t(!1),s(Object(U.a)({},a,n))}).catch(console.log)},className:"f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green",href:"#0"},"V")))),r.a.createElement("p",null,"Total points: ",a.entries),r.a.createElement("a",{onClick:function(e){e.preventDefault(),t(!1)},className:"f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-light-purple",href:"#0"},"X"))))};a(64);var F=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],s=t[1],o=Object(n.useState)(!1),l=Object(i.a)(o,2),c=l[0],m=l[1],u=Object(n.useState)({name:"john",entries:"1"}),p=Object(i.a)(u,2),d=p[0],h=p[1],b=Object(n.useState)(!1),f=Object(i.a)(b,2),v=f[0],g=f[1],E=function(e){fetch("http://localhost:3000/signin",{method:"post",headers:{"Content-Type":"application/json",Authorization:e}}).then(function(e){return e.json()}).then(function(t){t.id&&fetch("http://localhost:3000/profile/".concat(t.id),{method:"get",headers:{"Content-Type":"application/json",Authorization:e}}).then(function(e){return e.json()}).then(function(e){e&&(h(e),s(!0))}).catch(console.log)}).catch(console.log)};return Object(n.useEffect)(function(){var e=window.sessionStorage.getItem("token");if(e)return E(e),function(){console.log("that the way ahah aha")}},[]),r.a.createElement("div",{className:"App"},r.a.createElement(R.a,{className:"particles",params:{particles:{number:{value:65,density:{enable:!1,value_area:5e3}},color:{value:"#076407"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:10}},opacity:{value:.5,anim:{enable:!1,speed:1,opacity_min:.1}},size:{value:.8,random:!0,anim:{enable:!1,speed:40,size_min:.1}},line_linked:{enable:!0,distance:235,color:"#109d07",opacity:1,width:1.7},move:{enable:!0,speed:7.2,direction:"none",random:!0,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}},retina_detect:!0}}),r.a.createElement(T,{className:"end",setIsLogedIn:s,setIsRegisterd:m,isRegisterd:c,isLogedIn:a,setIsProfileOpen:g,setUser:h}),v&&r.a.createElement(D,null,r.a.createElement(_,{setIsProfileOpen:g,user:d,setUser:h})),a?r.a.createElement("div",null,r.a.createElement(O,{user:d,setIsProfileOpen:g})):c?r.a.createElement("div",null,r.a.createElement(L,{fetchBackend:E,setIsLogedIn:s})):r.a.createElement("div",null,r.a.createElement(j,{fetchBackend:E,setIsLogedIn:s}))," ")};var z=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("article",{class:"pa3 pa5-ns"},r.a.createElement("h1",{class:"f2"},"Title Text with Image"),r.a.createElement("img",{src:"http://tachyons.io/img/space.jpg",class:"w-100 f5 measure",alt:"Photo of outer space"}),r.a.createElement("p",{class:"measure lh-copy"},"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."),r.a.createElement("p",{class:"measure lh-copy"},"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.")))},H=function(){return r.a.createElement("section",{className:"vh-100 bg-washed-blue baskerville"},r.a.createElement("header",{className:"tc ph5 lh-copy"},r.a.createElement("h1",{className:"f1 f-headline-l code mb3 fw9 dib tracked-tight light-purple"},"404"),r.a.createElement("h2",{className:"tc f1-l fw1"},"Sorry, we can't find the page you are looking for.")),r.a.createElement("p",{className:"fw1 i tc mt4 mt5-l f4 f3-l"},"Are you looking for one of these?"),r.a.createElement("ul",{className:"list tc pl0 w-100 mt5"},r.a.createElement("li",{className:"dib"},r.a.createElement("a",{className:"f5 f4-ns link black db pv2 ph3 hover-light-purple",href:"/"},"Home")),r.a.createElement("li",{className:"dib"},r.a.createElement("a",{className:"f5 f4-ns link black db pv2 ph3 hover-light-purple",href:"/About"},"About"))))},J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(65),a(66),a(67);var M=r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:F}),r.a.createElement(c.a,{exact:!0,path:"/About",component:z}),r.a.createElement(c.a,{component:H}))));o.a.render(M,document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Async-Component",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/Async-Component","/service-worker.js");J?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):q(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):q(t,e)})}}()}},[[46,1,2]]]);
//# sourceMappingURL=main.b9856342.chunk.js.map