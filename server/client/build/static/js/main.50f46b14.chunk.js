(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{234:function(e,t,n){},235:function(e,t,n){},236:function(e,t,n){},264:function(e,t){},266:function(e,t){},273:function(e,t,n){},275:function(e,t,n){},435:function(e,t,n){},438:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(206),s=n.n(a),i=(n(234),n(235),n(227)),o=n(7),u=n(17),l=(n(236),n(440)),d=n(98),j=(n(240),n(1));d.a.connect("http://localhost:3001");var b=function(e){var t=Object(c.useState)(""),n=Object(u.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),i=Object(u.a)(s,2),o=i[0],d=i[1];return Object(j.jsxs)("div",{className:"joinRoom",children:[Object(j.jsx)("h1",{children:" Enter Room Details "}),Object(j.jsx)("input",{id:"input-name",type:"text",placeholder:"Enter Your Name...",onChange:function(e){return a(e.target.value)}}),Object(j.jsx)("input",{id:"input-room",type:"text",placeholder:"Enter Room ID...",onChange:function(e){return d(e.target.value)}}),Object(j.jsx)("button",{type:"submit",onClick:function(t){return function(t){t.preventDefault(),""!==r&&""!==o?(document.getElementById("input-name").value="",document.getElementById("input-room").value="",e.history.push("/room/".concat(o))):alert("Please enter valid values")}(t)},children:" Join a room "}),Object(j.jsx)("button",{onClick:function(t){return function(t){if(t.preventDefault(),""!==r){document.getElementById("input-name").value="",document.getElementById("input-room").value="";var n=Object(l.a)();e.history.push("/room/".concat(n))}else alert("Please enter a name")}(t)},children:" Create new room "})]})},m=n(210),f=n(138),v=n.n(f),O=(n(273),n(211)),h=n.n(O),x=n(224),p=n(64),g=n.n(p),y=n(144),N=n(96),D=(n(275),n(229));var I=function(e){var t=e.socket,n=e.room,r=e.name,a=Object(c.useState)([]),s=Object(u.a)(a,2),i=s[0],o=s[1],l=Object(c.useState)(""),d=Object(u.a)(l,2),b=d[0],m=d[1],f=function(){var e=Object(N.a)(g.a.mark((function e(c){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),""!==b){e.next=4;break}return alert("Please enter a valid message"),e.abrupt("return");case 4:return a={room:n,sender:r,message:b,time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes()},e.next=7,t.emit("send message",a);case 7:o((function(e){return[].concat(Object(y.a)(e),[a])})),m(""),document.getElementById("input").value="";case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){t.on("receive message",(function(e){o((function(t){return[].concat(Object(y.a)(t),[e])}))}))}),[t]),Object(j.jsx)("div",{className:"chatbox",children:Object(j.jsxs)("div",{className:"chat",children:[Object(j.jsx)("div",{className:"chat-header",children:" Live Chat "}),Object(j.jsx)("div",{className:"chat-body",children:Object(j.jsx)(D.a,{className:"message-container",children:i.map((function(e){return Object(j.jsx)("div",{className:"message",children:e.sender===t.id?Object(j.jsx)("div",{className:"message-sent",children:Object(j.jsxs)("div",{className:"message-sender",children:[Object(j.jsx)("div",{className:"sender-name",children:Object(j.jsxs)("div",{className:"sender-send",children:[" ",e.sender," "]})}),Object(j.jsxs)("div",{className:"content-box",children:[Object(j.jsxs)("div",{className:"text",children:[" ",e.message," "]}),Object(j.jsxs)("div",{className:"time",children:[" ",e.time," "]})]})]})}):Object(j.jsx)("div",{className:"message-received",children:Object(j.jsxs)("div",{className:"message-receiver",children:[Object(j.jsxs)("div",{className:"sender-received",children:[" ",e.sender," "]}),Object(j.jsx)("div",{className:"content-reciever",children:Object(j.jsxs)("div",{className:"content-box",children:[Object(j.jsxs)("div",{className:"text",children:[" ",e.message," "]}),Object(j.jsxs)("div",{className:"time",children:[" ",e.time," "]})]})})]})})})}))})}),Object(j.jsxs)("div",{className:"chat-footer",children:[Object(j.jsx)("input",{className:"message-input",id:"input",type:"text",placeholder:"Type Message Here...",onChange:function(e){return m(e.target.value)}}),Object(j.jsx)("button",{className:"send-message",onClick:function(e){return f(e)},children:"\u25ba"})]})]})})};n(435);var k,w=d.a.connect("http://localhost:3001"),C=x.a.video(k||(k=Object(m.a)(["\n    height: 300px;\n    width: 300px;\n"]))),E=function(e){var t=Object(c.useRef)();return Object(c.useEffect)((function(){console.log(e.peer),t.current.srcObject=e.peer.streams[0]}),[]),Object(j.jsx)(C,{playsInline:!0,autoPlay:!0,ref:t})};var S=function(e){var t=Object(c.useState)(""),n=Object(u.a)(t,2),r=(n[0],n[1],Object(c.useState)(!0)),a=Object(u.a)(r,2),s=(a[0],a[1],Object(c.useState)(!0)),i=Object(u.a)(s,2),o=(i[0],i[1],Object(c.useState)(!1)),l=Object(u.a)(o,2),d=(l[0],l[1],Object(c.useState)([])),b=Object(u.a)(d,2),m=b[0],f=b[1],O=Object(c.useState)([]),x=Object(u.a)(O,2),p=x[0],g=x[1],y=Object(c.useRef)(),N=Object(c.useRef)([]),D=(Object(c.useRef)([]),e.match.params.roomID);Object(c.useEffect)((function(){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){y.current.srcObject=e,w.emit("join room",D),w.on("all users",(function(t){t.forEach((function(t){var n=k(t,w.id,e);N.current.push({peerID:t,peer:n})}))})),w.on("user joined",(function(t){var n=S(t.signal,t.callerID,e);N.current.push({peerID:t.callerID,peer:n})})),w.on("receiving returned signal",(function(e){N.current.find((function(t){return t.peerID===e.id})).peer.signal(e.signal)})),w.on("user left",(function(e){var t=N.current.find((function(t){return t.peerID===e}));t&&t.peer.destroy();var n=N.current.filter((function(t){return t.peerID!==e})),c=m.filter((function(t){return t.peerID!==e}));N.current=n,f(c)}))}))}),[]);var k=function(e,t,n){var c=new v.a({initiator:!0,trickle:!1,stream:n});return c.on("signal",(function(n){w.emit("sending signal",{userToSignal:e,callerID:t,signal:n})})),c},S=function(e,t,n){var c=new v.a({initiator:!1,trickle:!1,stream:n});return c.on("signal",(function(e){w.emit("returning signal",{signal:e,callerID:t})})),c.signal(e),c};Object(c.useEffect)((function(){w.on("receive move",(function(e){g(e.all);for(var t={},n=0;n<e.all.length;n++)if(e.all[n].id===w.id){t=e.all[n];break}for(var c=[],r=0;r<e.all.length;r++)if(e.all[r].id!==w.id&&R(e.all[r],t))for(var a=0;a<N.current.length;a++)N.current[a].peerID===e.all[r].id&&c.push(N.current[a]);f(c)}))}),[w]);var R=function(e,t){return(e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y)<=1e4};return Object(j.jsxs)("div",{className:"room",children:[Object(j.jsxs)("div",{className:"video-canvas",children:[Object(j.jsxs)("div",{className:"buttonbox",children:[Object(j.jsx)("button",{type:"button",className:"mute",onClick:function(e){return function(e){var t=y.current.srcObject.getAudioTracks()[0].enabled;y.current.srcObject.getAudioTracks()[0].enabled=!t}()},children:" Mute "}),Object(j.jsx)("button",{type:"button",className:"camera",onClick:function(e){return function(e){var t=y.current.srcObject.getVideoTracks()[0].enabled;y.current.srcObject.getVideoTracks()[0].enabled=!t}()},children:" Camera "}),Object(j.jsx)("button",{type:"button",className:"screenshare",onClick:function(e){},children:" ScreenShare "}),Object(j.jsx)("button",{type:"button",className:"debug",onClick:function(e){return console.log(N.current)},children:" Debug "})]}),Object(j.jsxs)("div",{className:"videobox",children:[Object(j.jsx)(C,{muted:!0,ref:y,autoPlay:!0,playsInline:!0}),m.map((function(e){return Object(j.jsx)(E,{peer:e.peer})}))]}),Object(j.jsx)(h.a,{setup:function(e,t){e.createCanvas(800,600).parent(t);var n=[];n.push({id:w.id,room:D,x:400,y:100}),g(n)},draw:function(e){e.background("rgb(255, 255, 255)");var t=p.findIndex((function(e){return e.id===w.id}));if(-1!==t){var n=p;(e.keyIsDown(87)||e.keyIsDown(38))&&(n[t].y=n[t].y-2),(e.keyIsDown(65)||e.keyIsDown(37))&&(n[t].x=n[t].x-2),(e.keyIsDown(83)||e.keyIsDown(40))&&(n[t].y=n[t].y+2),(e.keyIsDown(68)||e.keyIsDown(39))&&(n[t].x=n[t].x+2),g(n);var c={id:w.id,room:D,x:n[t].x,y:n[t].y};w.emit("send move",c)}for(var r=0;r<p.length;r++)e.circle(p[r].x,p[r].y,16)},className:"canvas"})]}),Object(j.jsx)(I,{className:"chat",socket:w,room:D})]})};var R=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/",exact:!0,component:b}),Object(j.jsx)(o.a,{path:"/room/:roomID",component:S})]})})};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(R,{})}),document.getElementById("root"))}},[[438,1,2]]]);
//# sourceMappingURL=main.50f46b14.chunk.js.map