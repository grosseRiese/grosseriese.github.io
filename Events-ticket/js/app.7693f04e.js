(function(t){function e(e){for(var r,o,u=e[0],s=e[1],i=e[2],l=0,f=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(e);while(f.length)f.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a={app:0},c=[];function u(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-40a93f36":"19ef6e6a","chunk-644b39bf":"54a3b176","chunk-7798c2cb":"a5e34325"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-40a93f36":1,"chunk-644b39bf":1,"chunk-7798c2cb":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-40a93f36":"887af857","chunk-644b39bf":"131a81df","chunk-7798c2cb":"4b77e54d"}[t]+".css",a=s.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===a))return e()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){i=f[u],l=i.getAttribute("data-href");if(l===r||l===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||a,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[t],p.parentNode.removeChild(p),n(c)},p.href=a;var v=document.getElementsByTagName("head")[0];v.appendChild(p)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(t);var f=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[t]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var f=0;f<i.length;f++)e(i[f]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0aeb":function(t,e,n){},"2c39":function(t,e,n){"use strict";n("6f97")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/getAllEvents"}},[t._v("Events")])],1),n("router-view")],1)},a=[],c={name:"app",beforeMount:function(){this.$store.dispatch("getAllEvents")}},u=c,s=(n("5c0b"),n("2877")),i=Object(s["a"])(u,o,a,!1,null,null,null),l=i.exports,f=(n("d3b7"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{staticClass:"responsive",attrs:{src:"https://images.unsplash.com/photo-1510924199351-4e9d94df18a6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1053&q=80",alt:""}}),n("IntroCarousel",{attrs:{msg:"Welcome to our Events ..."}})],1)},v=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),n("p",[n("small",[t._v("We have ")]),n("b",[t._v(t._s(t.eventsLength))]),t._v(" "),t._m(0),t._v(" , "),n("br"),t._v(" Check out them ")]),n("h3",{staticClass:"book-event",on:{click:function(e){return t.$router.push("/getAllEvents")}}},[t._v("Book tickts now!")])])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("small",[n("i",[t._v("events")]),t._v(" in our system")])}],m={name:"IntroCarousel",props:{msg:String},computed:{eventsLength:function(){return this.$store.getters.eventsLength}}},g=m,b=(n("df19"),Object(s["a"])(g,h,d,!1,null,"06f82e16",null)),k=b.exports,E={name:"Home",components:{IntroCarousel:k}},y=E,_=(n("2c39"),Object(s["a"])(y,p,v,!1,null,"7372d6fe",null)),w=_.exports;r["a"].use(f["a"]);var A=[{path:"/",name:"Home",component:w},{path:"/getAllEvents",name:"Events",component:function(){return n.e("chunk-40a93f36").then(n.bind(null,"aa9c"))}},{path:"/getAllEvents/:id",name:"EventInfo",component:function(){return n.e("chunk-7798c2cb").then(n.bind(null,"5f0f"))}},{path:"/ticket",name:"Ticket",component:function(){return n.e("chunk-644b39bf").then(n.bind(null,"de4b"))}}],j=new f["a"]({routes:A,mode:"history"}),x=j,O=(n("4160"),n("159b"),n("96cf"),n("1da1")),C=n("2f62"),T=n("bc3a"),M=n.n(T),S=n("9612");r["a"].use(C["a"]),r["a"].use(S["a"]);var L=new C["a"].Store({state:{apiUrl:"https://my-json-server.typicode.com/grosseRiese/mockjson/data",ticket:[],allEvents:Array,singleEvent:{},uuid:S["a"].v1()},mutations:{updateAllEventsMutation:function(t,e){t.allEvents=e},setSingleEventsMutation:function(t,e){t.singleEvent=e},setTicketMutation:function(t,e){t.ticket=e.data}},actions:{getAllEvents:function(t){try{M.a.get("".concat(t.state.apiUrl)).then((function(t){return t.data})).then((function(e){console.log("Log GET allEvents-data: ",e),t.commit("updateAllEventsMutation",e)}))}catch(e){console.log("Get All Events error: ",e)}},getAllEventsById:function(t,e){try{M.a.get("".concat(t.state.apiUrl)).then((function(t){return t.data})).then((function(n){n.forEach((function(n){if(n.ticketID===e)return t.commit("setSingleEventsMutation",n)}))}))}catch(n){console.log("Get Events by ID error: ",n)}},booktTicketAction:function(t){return Object(O["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.post("".concat(t.state.apiUrl),{id:t.state.singleEvent.ticketID,name:t.state.singleEvent.what});case 3:n=e.sent,t.commit("setTicketMutation",n),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log("Somthing went wrong: ".concat(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},getters:{eventsLength:function(t){return t.allEvents.length},getTicketGetters:function(t){return t.singleEvent},getTicketNumberGetters:function(t){return t.uuid}},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:x,store:L,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"6f97":function(t,e,n){},"9c0c":function(t,e,n){},df19:function(t,e,n){"use strict";n("0aeb")}});
//# sourceMappingURL=app.7693f04e.js.map