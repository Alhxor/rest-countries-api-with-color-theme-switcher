(this["webpackJsonprest-countries-api-with-color-theme-switcher"]=this["webpackJsonprest-countries-api-with-color-theme-switcher"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(3),l=a.n(r),c=(a(9),a(1)),s=(a(10),{dark:{textColor:"hsl(0, 0%, 100%)",inputColor:"hsl(0, 0%, 100%)",elementColor:"hsl(209, 23%, 22%)",backgroundColor:"hsl(207, 26%, 17%)"},light:{textColor:"hsl(200, 15%, 8%)",inputColor:"hsl(0, 0%, 52%)",elementColor:"hsl(0, 0%, 100%)",backgroundColor:"hsl(0, 0%, 98%)"}});a(11);function i(e){var t=Object(o.useContext)(m).colors;return n.a.createElement("div",{className:"card",style:{color:t.textColor,backgroundColor:t.elementColor}},n.a.createElement("img",{src:e.flag,alt:"".concat(e.name,"'s flag"),className:"card__img"}),n.a.createElement("div",{className:"card__info"},n.a.createElement("p",{className:"card__title"},e.name),n.a.createElement("span",null,"Population: ",e.population),n.a.createElement("br",null),n.a.createElement("span",null,"Region: ",e.region),n.a.createElement("br",null),n.a.createElement("span",null,"Capital: ",e.capital),n.a.createElement("br",null)))}var u={darkMode:!1,colors:s.light,toggle:function(){}},m=n.a.createContext(u);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement((function(){var e=Object(o.useCallback)((function(e){e||l("http://localhost:3000/responseSample.json"),e.length<3||l("https://restcountries.eu/rest/v2/name/".concat(e)+"?fields=name;flag;population;region;capital")}),[]),t=Object(o.useState)("http://localhost:3000/responseSample.json"),a=Object(c.a)(t,2),r=a[0],l=a[1],u=function(e){var t=Object(o.useState)({status:"loading"}),a=Object(c.a)(t,2),n=a[0],r=a[1];return Object(o.useEffect)((function(){fetch(e).then((function(e){if(!e.ok){if(404===e.status)return[];throw Error(e.status.toString())}return e.json()})).then((function(e){return r({status:"loaded",payload:e})}),(function(e){return r({status:"error",error:e})}))}),[e]),n}(r),h=Object(o.useState)(!1),d=Object(c.a)(h,2),p=d[0],g=d[1],f=function(){g(!p)},E=p?s.dark:s.light;return n.a.createElement(m.Provider,{value:{darkMode:p,colors:E,toggle:f}},n.a.createElement("div",{className:"page",style:{color:E.textColor,backgroundColor:E.backgroundColor}},n.a.createElement("header",{className:"page__header",style:{backgroundColor:E.elementColor}},n.a.createElement("h1",null,"Where in the world?"),n.a.createElement("button",{onClick:f,className:"themeToggle"},"Switch theme")),n.a.createElement("main",{className:"page__content"},n.a.createElement("form",{action:"#",className:"controls"},n.a.createElement("input",{type:"text",name:"search",id:"search",placeholder:"Search for a country...",onChange:function(t){var a=t.target;return e(a.value)},className:"controls__search",style:{color:E.inputColor,backgroundColor:E.elementColor}}),n.a.createElement("select",{id:"region",name:"region",className:"controls__filter",style:{color:E.textColor,backgroundColor:E.elementColor}},n.a.createElement("option",{value:"Africa"},"Africa"),n.a.createElement("option",{value:"America"},"America"),n.a.createElement("option",{value:"Asia"},"Asia"),n.a.createElement("option",{value:"Europe"},"Europe"),n.a.createElement("option",{value:"Oceania"},"Oceania"))),"loading"===u.status&&"Loading...","loaded"===u.status&&n.a.createElement("ul",null,u.payload&&u.payload.length?u.payload.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement(i,e))})):"Nothing found."),"error"===u.status&&u.error.toString())))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.b9708869.chunk.js.map