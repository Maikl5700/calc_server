(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},23:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),l=(a(28),a(12)),s=a.n(l),i=a(18),u=a(19),d=a(6),p=a(7),m=a(9),v=a(8),g=a(10),f=a(4),h=(a(17),function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.computes,t={0:"+",1:"-",2:"*",3:"/"},a=e.map(function(e,a){return r.a.createElement("div",{className:"compute_item",key:a},e.arg1+" "+t[e.action]+" "+e.arg2,"\xa0=\xa0",r.a.createElement("span",{className:"string"==typeof e.result?"error":""},e.result))});return r.a.createElement("div",{style:{padding:0},className:"container"},r.a.createElement("div",{className:"all-users-computes"},a))}}]),t}(n.Component)),E=Object(f.b)(function(e){return{computes:e.computes.computes}},null)(h),b=new WebSocket("ws://35.157.232.47:80/"),y=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={arg1:"",arg2:"",action:0,result:null,resultError:!1,pending:!1},a.handleAction=function(e){a.setState({action:e.target.selectedIndex})},a.inputValid=function(e){/^[0-9]{0,8}$/.test(e.target.value)?a.setState(Object(u.a)({},e.target.name,e.target.value)):e.target.value=a.state[e.target.name]},a.requestApi=function(){var e=Object(i.a)(s.a.mark(function e(t){var n,r,c,o,l;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=a.state,r=n.arg1,c=n.arg2,o=n.action,!r||!c){e.next=13;break}return l=JSON.stringify({type:"form_data",data:{arg1:r,arg2:c,action:o}}),e.prev=4,e.next=7,b.send(l);case 7:a.setState({pending:!0}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[4,10]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){var e=this;b.onopen=function(e){console.log("connected")},b.onmessage=function(t){var a=JSON.parse(t.data);switch(a.type){case"result":(0,e.props.update)(a.data.computes),console.log(a);var n={computes:a.data.computes,pending:!1};a.data.result&&(n.result=a.data.result),"undefined"!=typeof a.data.result&&("\u041e\u0448\u0438\u0431\u043a\u0430"===a.data.result?(n.result=a.data.result,n.resultError=!0):(n.result=a.data.result,n.resultError=!1)),e.setState(n)}}}},{key:"render",value:function(){var e=this.state,t=e.pending,a=e.resultError,n=e.result;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440"),r.a.createElement("form",{id:"form",onSubmit:this.requestApi},r.a.createElement("input",{disabled:t,required:!0,onChange:this.inputValid,type:"text",id:"arg1",name:"arg1"}),r.a.createElement("select",{onChange:this.handleAction,disabled:t,name:"action",id:"action"},r.a.createElement("option",{value:"1"},"+"),r.a.createElement("option",{value:"2"},"-"),r.a.createElement("option",{value:"3"},"X"),r.a.createElement("option",{value:"4"},"/")),r.a.createElement("input",{disabled:t,required:!0,onChange:this.inputValid,type:"text",id:"arg2",name:"arg2"}),r.a.createElement("button",{disabled:t},r.a.createElement("span",{style:{display:t?"none":"inline"}},"="),r.a.createElement("div",{style:{display:t?"block":"none"},className:"lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))),r.a.createElement("span",{id:"result",className:a?"error":""},n)),r.a.createElement(E,null))}}]),t}(n.Component),O=Object(f.b)(null,function(e){return{update:function(t){return e((a=t,function(e){e({type:"CURRENT_COMPUTES",payload:a})}));var a}}})(y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=a(2),j=a(21),k=a(22),N=a.n(k),S={computes:[]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"CURRENT_COMPUTES":return N()(e,{computes:{$set:n}});default:return e}},x=Object(w.c)({computes:C}),A=Object(w.e)(x,{},Object(w.d)(Object(w.a)(j.a)));o.a.render(r.a.createElement(f.a,{store:A},r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.430e8aae.chunk.js.map