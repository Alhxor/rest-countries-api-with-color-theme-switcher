(this["webpackJsonprest-countries-api-with-color-theme-switcher"]=this["webpackJsonprest-countries-api-with-color-theme-switcher"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),l=a.n(r),c=(a(9),a(1));a(10);var s={dark:{textColor:"hsl(0, 0%, 100%)",inputColor:"hsl(0, 0%, 100%)",elementColor:"hsl(209, 23%, 22%)",backgroundColor:"hsl(207, 26%, 17%)"},light:{textColor:"hsl(200, 15%, 8%)",inputColor:"hsl(0, 0%, 52%)",elementColor:"hsl(0, 0%, 100%)",backgroundColor:"hsl(0, 0%, 98%)"}},i=o.a.createContext({darkMode:!1,colors:s.light,toggle:function(){}}),u=function(e){var t=e.children,a=Object(n.useState)(!1),r=Object(c.a)(a,2),l=r[0],u=r[1],m=l?s.dark:s.light;return o.a.createElement(i.Provider,{value:{darkMode:l,colors:m,toggle:function(){u(!l)}}},t)},m=function(e){var t=e.children,a=Object(n.useContext)(i),r=a.colors,l=a.toggle;return o.a.createElement("div",{className:"page",style:{color:r.textColor,backgroundColor:r.backgroundColor}},o.a.createElement("header",{className:"page__header",style:{backgroundColor:r.elementColor}},o.a.createElement("h1",null,"Where in the world?"),o.a.createElement("button",{onClick:l,className:"themeToggle"},"Switch theme")),o.a.createElement("main",{className:"page__content"},t))},h=(a(11),function(e){var t=Object(n.useContext)(i).colors;return o.a.createElement("div",{className:"card",style:{color:t.textColor,backgroundColor:t.elementColor}},o.a.createElement("img",{src:e.flag,alt:"".concat(e.name,"'s flag"),className:"card__img"}),o.a.createElement("div",{className:"card__info"},o.a.createElement("p",{className:"card__title"},e.name),o.a.createElement("span",null,"Population: ",e.population),o.a.createElement("br",null),o.a.createElement("span",null,"Region: ",e.region),o.a.createElement("br",null),o.a.createElement("span",null,"Capital: ",e.capital),o.a.createElement("br",null)))}),d=function(e){var t=e.onChange,a=Object(n.useContext)(i).colors;return o.a.createElement("input",{type:"text",name:"search",id:"search",placeholder:"Search for a country...",onChange:function(e){var a=e.target;return t(a.value)},className:"controls__search",style:{color:a.inputColor,backgroundColor:a.elementColor}})},g=function(e){var t=Object(n.useContext)(i).colors;return o.a.createElement("select",{id:"region",name:"region",className:"controls__filter",style:{color:t.textColor,backgroundColor:t.elementColor}},o.a.createElement("option",{value:"Africa"},"Africa"),o.a.createElement("option",{value:"America"},"America"),o.a.createElement("option",{value:"Asia"},"Asia"),o.a.createElement("option",{value:"Europe"},"Europe"),o.a.createElement("option",{value:"Oceania"},"Oceania"))},p=function(){var e=Object(n.useCallback)((function(e){e||l("http://localhost:3000/responseSample.json"),e.length<3||l("https://restcountries.eu/rest/v2/name/".concat(e)+"?fields=name;flag;population;region;capital")}),[]),t=Object(n.useState)("responseSample.json"),a=Object(c.a)(t,2),r=a[0],l=a[1],s=function(e){var t=Object(n.useState)({status:"loading"}),a=Object(c.a)(t,2),o=a[0],r=a[1];return Object(n.useEffect)((function(){fetch(e).then((function(e){if(!e.ok){if(404===e.status)return[];throw Error(e.status.toString())}return e.json()})).then((function(e){return r({status:"loaded",payload:e})}),(function(e){return r({status:"error",error:e})}))}),[e]),o}(r);return o.a.createElement(u,null,o.a.createElement(m,null,o.a.createElement("form",{action:"#",className:"controls"},o.a.createElement(d,{onChange:e}),o.a.createElement(g,null)),"loading"===s.status&&"Loading...","loaded"===s.status&&o.a.createElement("ul",null,s.payload&&s.payload.length?s.payload.map((function(e,t){return o.a.createElement("li",{key:t},o.a.createElement(h,e))})):"Nothing found."),"error"===s.status&&s.error.toString()))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.697010f1.chunk.js.map