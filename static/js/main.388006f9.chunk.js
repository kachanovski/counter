(this["webpackJsonpcounter-ts"]=this["webpackJsonpcounter-ts"]||[]).push([[0],{192:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(38),o=n.n(c);n(91),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(9),u=n(5),s=n(7),l={start:null,max:0,count:0,isHide:!1},m=function(e){return{type:"DISABLE_BUTTON",isHide:e}},E=n(195),d=Object(u.b)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e.count<e.max?Object(s.a)(Object(s.a)({},e),{},{count:e.count+1}):Object(s.a)(Object(s.a)({},e),{},{start:e.start});case"RESET_START_VALUE":return Object(s.a)(Object(s.a)({},e),{},{count:e.start});case"SET_START_VALUE":return Object(s.a)(Object(s.a)({},e),{},{start:t.start,count:t.start});case"SET_MAX_VALUE":return Object(s.a)(Object(s.a)({},e),{},{max:t.max});case"DISABLE_BUTTON":return Object(s.a)(Object(s.a)({},e),{},{isHide:t.isHide})}return e},form:E.a}),b=Object(u.c)(d),p=b;window.store=b;n(53);var v=n(194),f=n(193),T=n(18),S=n(27),j=n.n(S),O=function(e){var t=e.input,n=e.meta,a=(e.onChange,Object(T.a)(e,["input","meta","onChange"]));return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",null,n.touched&&n.error?r.a.createElement("span",{className:j.a.tooltip},n.error):"")),r.a.createElement("div",null,r.a.createElement("input",Object.assign({className:j.a.inputForm},t,a))))},_=n(84),N=n.n(_),x=function(e){var t=e.button,n=(e.meta,Object(T.a)(e,["button","meta"]));return r.a.createElement("div",null,r.a.createElement("button",Object.assign({className:N.a.neonButton},t,n),n.title))},A=Object(f.a)({form:"settingsForm",validate:function(e){var t={},n=parseInt(e.start),a=parseInt(e.max);return n?a?n>a?t.start="start value more than max value":n<=0?t.start="start values just more than 0":a<0?t.max=" max values just more than 0":n>a?t.start="start value more than max value":n===a&&(t.max="identical values"):t.max="incorrect value":t.start="incorrect value",t},onChange:function(e,t,n){e!==n&&t(m(!1))}})((function(e){var t=Object(i.d)((function(e){return e.counter}));return r.a.createElement("form",{className:"container",onSubmit:e.handleSubmit},r.a.createElement("span",{className:"text"},"START"),r.a.createElement(v.a,{name:"start",component:O,type:"number"}),r.a.createElement("span",{className:"text"},"MAX"),r.a.createElement(v.a,{name:"max",component:O,type:"number"}),t.isHide?r.a.createElement("div",{className:"text"},"CHANGE VALUES AND CLICK SET SETTINGS"):r.a.createElement(x,{disabled:e.invalid,title:"Set Settings"}))})),h=function(e){var t=e.input,n=Object(T.a)(e,["input"]);return r.a.createElement("div",null,r.a.createElement("input",Object.assign({readOnly:!0,className:j.a.inputForm},t,n)))},I=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement(h,{value:e.value}),r.a.createElement("div",null,r.a.createElement(x,{disabled:e.disableButtonIncrement(),onClick:e.onClickIncrement,title:"count"}),r.a.createElement(x,{disabled:e.disableButtonReset(),onClick:e.onClickReset,title:"RESET"})))},C=function(){return r.a.createElement("div",{className:"emptyComponent"},"CHANGE VALUES AND CLICK SET SETTINGS")};var g=function(){var e=Object(i.d)((function(e){return e.counter})),t=Object(i.c)();return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"box"},r.a.createElement(A,{onSubmit:function(e){t({type:"SET_START_VALUE",start:parseInt(e.start)}),t({type:"SET_MAX_VALUE",max:parseInt(e.max)}),t(m(!0))}})),r.a.createElement("div",{className:"box"},e.start&&e.isHide?r.a.createElement(I,{value:e.count,disableButtonReset:function(){return e.start===e.count},disableButtonIncrement:function(){return e.max===e.count},onClickIncrement:function(){t({type:"INCREMENT"})},onClickReset:function(){t({type:"RESET_START_VALUE"})}}):r.a.createElement(C,null)," "))};o.a.render(r.a.createElement(i.a,{store:p},r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},27:function(e,t,n){e.exports={inputForm:"Input_inputForm__2aZ8y",tooltip:"Input_tooltip__1jI-K"}},53:function(e,t,n){},84:function(e,t,n){e.exports={neonButton:"Button_neonButton__3CVST","border-flicker":"Button_border-flicker__15yfX"}},86:function(e,t,n){e.exports=n(192)},91:function(e,t,n){}},[[86,1,2]]]);
//# sourceMappingURL=main.388006f9.chunk.js.map