(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(3),m=a.n(i),c=a(23),l=a(66),o=a(152),s=a(154),u=a(155),p=a(153),f=a(10),E=a.n(f),d=(a(98),a(82)),O=a.n(d);function g(e){var t=e.time;return r.a.createElement("div",{style:{margin:"10px"}},r.a.createElement(s.a,null,r.a.createElement(u.a,{span:12,offset:6},r.a.createElement(s.a,{style:{border:"1px solid #D7FCD4",borderRadius:"5px"}},r.a.createElement("div",{style:{height:"10px"}}),r.a.createElement(u.a,{span:6},r.a.createElement("h1",{style:{color:"#D7FCD4",fontSize:"5vw"}},t.format("HH"))),r.a.createElement(u.a,{span:3},r.a.createElement("h1",{style:{color:"#D7FCD4",fontSize:"5vw"}},":")),r.a.createElement(u.a,{span:6},r.a.createElement("h1",{style:{color:"#D7FCD4",fontSize:"5vw"}},t.format("mm"))),r.a.createElement(u.a,{span:3},r.a.createElement("h1",{style:{color:"#D7FCD4",fontSize:"5vw"}},":")),r.a.createElement(u.a,{span:6},r.a.createElement("h1",{style:{color:"#D7FCD4",fontSize:"5vw"}},t.format("ss")))))))}var y=function(){var e=E()().utcOffset(0);e.set({hour:0,minute:0,second:0,millisecond:0}),e.toISOString(),e.format();var t=Object(n.useState)(new Audio(O.a)),a=Object(l.a)(t,1)[0],i=Object(n.useState)({time:e,timeString:"00:00:00",timerOn:!1}),m=Object(l.a)(i,2),f=m[0],d=m[1];if(f.timerOn)if("00:00:00"===f.timeString)a.currentTime=0,a.play(),d(Object(c.a)({},f,{timerOn:!1}));else var y=setTimeout(function(){d(Object(c.a)({},f,{timerOn:f.timerOn,time:f.time.clone().subtract(1,"seconds"),timeString:f.time.clone().subtract(1,"seconds").format("HH:mm:ss")}))},1e3);return console.log(f),r.a.createElement("div",{className:"App"},r.a.createElement("div",{style:{marginTop:"200px"}}),r.a.createElement(g,{time:f.time}),r.a.createElement(s.a,{style:{marginTop:"100px"}},r.a.createElement(u.a,null,r.a.createElement(o.a,{onChange:function(t,a){d(t&&""!==a?Object(c.a)({},f,{time:t,timeString:a}):Object(c.a)({},f,{time:e,timeString:"00:00:00"}))},defaultOpenValue:E()("00:00:00","HH:mm:ss")}))),r.a.createElement(s.a,null,r.a.createElement(u.a,null,r.a.createElement(p.a,{type:"primary",style:{marginTop:"10px"},onClick:function(){"00:00:00"===f.timeString||f.timerOn||(a.currentTime=0,a.play(),d(Object(c.a)({},f,{timerOn:!0})))}},"Begin"),r.a.createElement(p.a,{type:"default",style:{marginTop:"10px"},onClick:function(){clearTimeout(y),a.pause(),d(Object(c.a)({},f,{timerOn:!1}))}},"Stop"))))};m.a.render(r.a.createElement(y,null),document.getElementById("root"))},82:function(e,t,a){e.exports=a.p+"static/media/singingBowl.182ba018.wav"},92:function(e,t,a){e.exports=a(151)},98:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.5edbe8d3.chunk.js.map