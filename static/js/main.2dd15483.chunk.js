(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(7),o=n.n(c),a=n(2),r=n(3),i=n(5),s=n(4),l=n(1),u=n.n(l),b=(n(13),n(8)),h=n.n(b),m=n(0),k=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).timerId=void 0,t.state={currentDate:new Date},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){t.setState({currentDate:new Date}),console.log(t.state.currentDate.toLocaleTimeString())}),1e3)}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.state.currentDate;return Object(m.jsx)("div",{className:h.a.currentTime,children:t.toLocaleTimeString()})}}]),n}(u.a.Component),j=k,d=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={isClockVisible:!0,clockName:Math.floor(100*Math.random())},t.showClock=function(){return t.setState({isClockVisible:!0})},t.hideClock=function(){return t.setState({isClockVisible:!1})},t.renameClock=function(){return t.setState({clockName:Math.floor(100*Math.random())})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state,e=t.isClockVisible,n=t.clockName;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),e&&Object(m.jsx)(j,{clockName:n}),Object(m.jsxs)("div",{className:"buttons",children:[Object(m.jsx)("button",{className:"buttons__btn",type:"button",onClick:this.showClock,children:"Show Clock"}),Object(m.jsx)("button",{className:"buttons__btn",type:"button",onClick:this.hideClock,children:"Hide Clock"}),Object(m.jsx)("button",{className:"buttons__btn",type:"button",onClick:this.renameClock,children:"Rename Clock"})]})]})}}]),n}(u.a.Component),v=d;o.a.render(Object(m.jsx)(v,{}),document.getElementById("root"))},8:function(t,e,n){t.exports={currentTime:"Clock_currentTime__4j_H4"}}},[[15,1,2]]]);
//# sourceMappingURL=main.2dd15483.chunk.js.map