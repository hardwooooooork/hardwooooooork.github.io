(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(8),l=n.n(r),o=(n(15),n(16),n(1)),s=n(2),c=n(4),u=n(3),f=n(5);n(7);function d(e){var t=e.fieldset;return a.a.createElement("div",{id:"SetField"},a.a.createElement("h1",null,"\uc9c0\ub8b0\ub97c \uc120\ud0dd\ud558\uc138\uc694."),a.a.createElement("p",null,"\ud604\uc7ac \uc9c0\ub8b0\uc218 : ",e.getTotalMineNum()),a.a.createElement("div",{className:"form-wrap"},a.a.createElement("div",{className:"mine-field"},t.map(function(t,n){return a.a.createElement("div",{className:"mine",key:n},a.a.createElement("label",{className:t?"is-mine":"not-mine",onClick:function(){return e.onClickHandeler(n)}}))}))),a.a.createElement("div",{className:"btn-area"},a.a.createElement("button",{onClick:e.findMine,disabled:e.getTotalMineNum()<e.maxMineNum},"Find mine")))}function m(e){var t=e.resultset,n=e.fieldset;return a.a.createElement("div",{id:"SetField"},a.a.createElement("h1",null,"\uc9c0\ub8b0 \ucc3e\uae30"),a.a.createElement("p",null,"\uacc4\uc0b0 \uacb0\uacfc"),a.a.createElement("div",{className:"form-wrap"},a.a.createElement("div",{className:"mine-field"},t.map(function(e,t){return a.a.createElement("div",{className:"mine",key:t},a.a.createElement("label",{className:(e>=0?"find-mine-".concat(e):"is-mine")+(n[t]?" this-is-mine":"")}))}))),a.a.createElement("div",{className:"btn-area"},a.a.createElement("button",{onClick:e.resetField},"Reset")))}var h=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.resultFlag?m:d;return a.a.createElement(e,this.props)}}]),t}(i.Component),v=10,M=10,E=function(e){function t(){var e,n;Object(o.a)(this,t);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={fieldset:new Array(v*M).fill(!1),resultset:new Array(v*M).fill(0),resultFlag:!1,maxMineNum:10},n.resetField=function(){var e=new Array(v*M).fill(!1),t=new Array(v*M).fill(0);n.setState({fieldset:e,resultset:t,resultFlag:!1})},n.onClickHandeler=function(e){var t=n.state,i=t.fieldset,a=t.maxMineNum;i[e]=!i[e],a>=i.filter(function(e){return e}).length&&n.setState(i)},n.getTotalMineNum=function(){return n.state.fieldset.filter(function(e){return e}).length},n.findMine=function(){var e=n.state.fieldset.map(function(e,t){var i=0;return n.findMineEast(t)&&(i+=n.findMineEast(t)),n.findMineNorth(t)&&(i+=n.findMineNorth(t)),n.findMineSouth(t)&&(i+=n.findMineSouth(t)),n.findMineWest(t)&&(i+=n.findMineWest(t)),n.findMineNorthEast(t)&&(i+=n.findMineNorthEast(t)),n.findMineNorthWest(t)&&(i+=n.findMineNorthWest(t)),n.findMineSouthEast(t)&&(i+=n.findMineSouthEast(t)),n.findMineSouthWest(t)&&(i+=n.findMineSouthWest(t)),i});n.setState({resultset:e,resultFlag:!0})},n.findMineNorth=function(e){var t=n.state.fieldset;if(!0===t[e])return!1;if(e<M)return!1;try{return t[e-M]?1:0}catch(i){console.log(i)}},n.findMineSouth=function(e){var t=n.state.fieldset;if(e>=(v-1)*M)return!1;try{return t[e+M]?1:0}catch(i){console.log(i)}},n.findMineEast=function(e){var t=n.state.fieldset;if(e%M===M-1)return!1;try{return t[e+1]?1:0}catch(i){console.log(i)}},n.findMineWest=function(e){var t=n.state.fieldset;if(e%M===0)return!1;try{return t[e-1]?1:0}catch(i){console.log(i)}},n.findMineNorthEast=function(e){var t=n.state.fieldset;if(e%M===M-1||e<M)return!1;try{return t[e-(M-1)]?1:0}catch(i){console.log(i)}},n.findMineNorthWest=function(e){var t=n.state.fieldset;if(e%M===0||e<M)return!1;try{return t[e-(M+1)]?1:0}catch(i){console.log(i)}},n.findMineSouthEast=function(e){var t=n.state.fieldset;if(e%M===M-1||e>=(v-1)*M)return!1;try{return t[e+(M+1)]?1:0}catch(i){console.log(i)}},n.findMineSouthWest=function(e){var t=n.state.fieldset;if(e%M===0||e>=(v-1)*M)return!1;try{return t[e+(M-1)]?1:0}catch(i){console.log(i)}},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(h,Object.assign({onClickHandeler:this.onClickHandeler,getTotalMineNum:this.getTotalMineNum,findMine:this.findMine,resetField:this.resetField},this.state))}}]),t}(i.Component);var N=function(){return a.a.createElement(E,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,n){},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.9c6f1041.chunk.js.map