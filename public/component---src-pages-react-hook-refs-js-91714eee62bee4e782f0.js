(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Bmh9:function(e,t,n){"use strict";n.r(t);var a=n("1OyB"),c=n("vuIU"),r=n("md7G"),u=n("foSv"),l=n("JX7q"),i=n("Ji7U"),o=n("ODXe"),f=n("q1tI"),b=n.n(f),s=n("IRuU"),m=function(){var e=Object(f.useState)(0),t=Object(o.a)(e,2),n=t[0],a=t[1];return b.a.createElement("div",null,n,b.a.createElement("button",{onClick:function(){a(n+1)}},"点击"))},O=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).go=n.go.bind(Object(l.a)(n)),n}return Object(i.a)(t,e),Object(c.a)(t,[{key:"go",value:function(){console.log("我被执行了")}},{key:"render",value:function(){return b.a.createElement("div",null,"我是div")}}]),t}(b.a.Component),j=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).myRef=Object(f.createRef)(0),n.secondRef=Object(f.createRef)(1),n.getText=n.getText.bind(Object(l.a)(n)),n}return Object(i.a)(t,e),Object(c.a)(t,[{key:"getText",value:function(){this.myRef.current.go()}},{key:"render",value:function(){return b.a.createElement(b.a.Fragment,null,b.a.createElement(O,{ref:this.myRef}),b.a.createElement(m,{ref:this.secondRef}),b.a.createElement("button",{onClick:this.getText},"点击"))}}]),t}(b.a.Component);t.default=function(){return b.a.createElement(s.a,null,b.a.createElement("div",null,"ref"),b.a.createElement(j,null))}}}]);
//# sourceMappingURL=component---src-pages-react-hook-refs-js-91714eee62bee4e782f0.js.map