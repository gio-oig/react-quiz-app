(this["webpackJsonpreact-quiz-app"]=this["webpackJsonpreact-quiz-app"]||[]).push([[0],{12:function(e,t,a){e.exports=a(21)},17:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),u=(a(17),a(1)),o=a(2),s=a.n(o),i=a(4),m=a(3),f=a(11),p=function(e){e.question;var t=e.answers,a=e.callback,n=e.userAnswer,c=e.questionNr,l=e.totalQuestions;return r.a.createElement("div",null,r.a.createElement("p",{className:"number"},c," / ",l),r.a.createElement("p",null,"question "),r.a.createElement("div",null,t.map((function(e){return r.a.createElement("div",{key:e},r.a.createElement("button",{disabled:!!n,value:e,onClick:a},r.a.createElement("span",null,e)))}))))},b=a(8),d=function(){var e=Object(i.a)(s.a.mark((function e(t,a){var n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://opentdb.com/api.php?amount=10&difficulty=".concat(t,"&type=").concat("any"===a?"":a),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,e.abrupt("return",c.results.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{answers:(t=[].concat(Object(u.a)(e.incorrect_answers),[e.correct_answer]),t.sort((function(){return Math.random()-.5})))});var t})));case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();a(19);var v=function(e){var t=e.text,a=e.invert;return r.a.createElement("div",{className:"btn-wrapper"},r.a.createElement("button",{style:{background:a?"#fff":"#005375",color:a?"#005375":"#fff"}},t))};a(20);var E=function(){var e=Object(f.a)(),t=e.register,a=e.handleSubmit,c=Object(n.useState)(!1),l=Object(m.a)(c,2),o=l[0],b=l[1],E=Object(n.useState)([]),y=Object(m.a)(E,2),j=y[0],h=y[1],w=Object(n.useState)(0),O=Object(m.a)(w,2),q=O[0],S=O[1],N=Object(n.useState)([]),g=Object(m.a)(N,2),k=g[0],x=g[1],Q=Object(n.useState)(0),A=Object(m.a)(Q,2),_=A[0],C=A[1],F=Object(n.useState)(!0),I=Object(m.a)(F,2),z=I[0],J=I[1],M=function(){var e=Object(i.a)(s.a.mark((function e(t,a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),J(!1),e.next=4,d(t,a);case 4:n=e.sent,h(n),C(0),x([]),S(0),b(!1),console.log(n);case 11:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("section",{id:"main"},z&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"heading"},"QUIZIZ"),r.a.createElement("form",{onSubmit:a((function(e){var t=e.difficulty,a=e.type;M(t,a)}))},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"difficulty"},"Select Difficulty:"),r.a.createElement("select",{name:"difficulty",id:"difficulty",ref:t({required:!0})},r.a.createElement("option",{value:"easy"},"easy"),r.a.createElement("option",{value:"easy"},"medium"),r.a.createElement("option",{value:"easy"},"hard"))),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"type"},"Select Type:"),r.a.createElement("select",{name:"type",id:"type",ref:t({required:!0})},r.a.createElement("option",{value:"any"},"any"),r.a.createElement("option",{value:"multiple"},"multiple Chioce"),r.a.createElement("option",{value:"boolean"},"true / false"))),r.a.createElement(v,{text:"Start"}))),z?null:r.a.createElement("p",{className:"score"},"score: ",_),o&&r.a.createElement("p",null,"Loading Questions...."),o||z?null:r.a.createElement(p,{question:j[q].question,answers:j[q].answers,callback:function(e){if(!z){var t=e.currentTarget.value,a=j[q].correct_answer===t;console.log(t),a&&C((function(e){return e+1}));var n={question:j[q].question,answer:t,correct:a,correctAnswer:j[q].correct_answer};x((function(e){return[].concat(Object(u.a)(e),[n])}))}},userAnswer:k?k[q]:void 0,questionNr:q+1,totalQuestions:10}),o||z||k.length!==q+1||9===q?null:r.a.createElement("button",{className:"next",onClick:function(){var e=q+1;10===e?J(!0):S(e)}},"Next Question")))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.50adf5c2.chunk.js.map