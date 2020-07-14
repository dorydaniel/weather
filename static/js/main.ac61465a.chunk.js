(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{10:function(e,n,t){e.exports=t(18)},15:function(e,n,t){},16:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(6),c=t.n(i),o=(t(15),t(16),t(4)),l=t.n(o),u=t(7),s=t(3),m=t(1),f=t(2);function g(){var e=Object(m.a)(['\n    font-family: "Fira Sans", sans-serif;\n    font-size: 1.1rem;\n  ']);return g=function(){return e},e}function p(){var e=Object(m.a)(['\n    font-family: "Merriweather", sans-serif;\n    font-size: 1.6rem;\n  ']);return p=function(){return e},e}var d=function(e){var n=e.city,t=e.country,a=f.a.h1(p()),i=f.a.h2(g());return r.a.createElement("div",null,r.a.createElement(a,null,n),r.a.createElement(i,null,t))};function b(){var e=Object(m.a)(["\n    width: 40%;\n  "]);return b=function(){return e},e}var h=function(e){var n=e.condition,t=f.a.img(b()),a="";switch(n){case"Clouds":a="/imgs/Mostly Cloudy-2x.png";break;case"Clear":a="/imgs/Mostly Sunny-2x.png";break;case"Haze":a="/imgs/Haze-2x.png";break;case"Hail":a="/imgs/Hail-2x.png";break;case"Fog":a="/imgs/Fog-2x.png";break;case"Tornado":a="/imgs/Tornado-2x.png";break;case"Dust":a="/imgs/Dust-2x.png";break;case"Mist":a="/imgs/Fog-2x.png";break;case"Snow":a="/imgs/Snow-2x.png";break;case"Rain":a="/imgs/Rain-2x.png";break;case"Drizzle":a="/imgs/Drizzle-2x.png";break;case"Thunderstorm":a="/imgs/Severe Thunderstorm-2x.png";break;default:a="/imgs/Fog-2x.png"}return r.a.createElement(t,{src:"/weather"+a,alt:"Weather Icon"})};function v(){var e=Object(m.a)(['\n    font-family: "Merriweather", sans-serif;\n    font-size: 1.2rem;\n  ']);return v=function(){return e},e}function y(){var e=Object(m.a)(['\n    font-family: "Fira Sans", sans-serif;\n    font-size: 2rem;\n    font-weight: 200;\n  ']);return y=function(){return e},e}var E=function(e){var n=e.temp,t=e.condition,a=f.a.h1(y()),i=f.a.h3(v());return r.a.createElement(r.a.Fragment,null,r.a.createElement(a,null,n," \xb0C"),r.a.createElement(i,null,t))};function x(){var e=Object(m.a)(['\n    font-family: "Fira Sans", sans-serif;\n    height: 100%;\n    justify-content: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  ']);return x=function(){return e},e}function k(){var e=Object(m.a)(["\n    margin: 2% auto;\n    background: linear-gradient(\n      to top,\n      rgb(",", ",", ","),\n      rgb(",", ",", ",")\n    );\n    width: 200px;\n    height: 240px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    border-radius: 15px;\n  "]);return k=function(){return e},e}var w=function(e){var n,t,a=e.temp,i=e.condition,c=e.city,o=e.country,l=e.isLoading,u=e.error,s=e.resetError;t=a>12?(n=255*(1-(a-12)/28))-150:(n=255*(1-(a+20)/32))-150;var m=f.a.div(k(),a>12?255:0,n,a>12?0:255,a>12?255:0,t,a>12?0:255),g=f.a.div(x());return r.a.createElement(m,null,l?r.a.createElement("div",{className:"spinner-border"}):u?r.a.createElement(g,null,r.a.createElement("h2",null,"Invalid!"),r.a.createElement("br",null),r.a.createElement("h3",null,"Please try again"),r.a.createElement("br",null),r.a.createElement("button",{style:{padding:"0% 1%"},onClick:s},"OK")):r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{city:c,country:o}),r.a.createElement(h,{condition:i}),r.a.createElement(E,{temp:a,condition:i})))};function j(){var e=Object(m.a)(['\n    padding: 1%;\n    margin: 2%;\n    font-family: "Fira Sans", sans-serif;\n  ']);return j=function(){return e},e}var O=function(e){var n=e.location,t=f.a.button(j()),i=Object(a.useState)(n),c=Object(s.a)(i,2),o=c[0],m=c[1],g=Object(a.useState)(!1),p=Object(s.a)(g,2),d=p[0],b=p[1],h=Object(a.useState)(!1),v=Object(s.a)(h,2),y=v[0],E=v[1],x=Object(a.useState)({city:null,country:null,temp:null,condition:null}),k=Object(s.a)(x,2),O=k[0],S=k[1],F=function(){var e=Object(u.a)(l.a.mark((function e(n){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.prev=1,e.next=4,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&units=metric&APPID=d265e4ce81a183424e3f69a1dbb0bb9b"));case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,S({city:a.name,country:a.sys.country,temp:a.main.temp,condition:a.weather[0].main}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),E(!0);case 14:b(!1);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){F(n)}),[n]),r.a.createElement("div",{style:{margin:"3%",textAlign:"center",position:"relative"}},r.a.createElement(w,{temp:O.temp,condition:O.condition,city:O.city,country:O.country,isLoading:d,error:y,resetError:function(){return E(!1)}}),r.a.createElement("form",null,r.a.createElement("input",{type:"text",style:{borderRadius:"10px",padding:"2%",textAlign:"center",fontFamily:"Fira Sans, sans-serif",outline:"none",backgroundColor:"rgba(255,255,255,0.3)"},value:o,onChange:function(e){return m(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(t,{onClick:function(e){return function(e){e.preventDefault(),F(o)}(e)}},"Search")))};var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,{location:"alaska"}),r.a.createElement(O,{location:"brazil"}),r.a.createElement(O,{location:"antarktika"}),r.a.createElement(O,{location:"qatar"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.ac61465a.chunk.js.map