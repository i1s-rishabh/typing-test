(this["webpackJsonptyping-test"]=this["webpackJsonptyping-test"]||[]).push([[0],{16:function(e,t,r){},17:function(e,t,r){},19:function(e,t,r){},20:function(e,t,r){},21:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r.n(n),o=r(9),a=r.n(o),c=(r(16),r(10)),i=r(11),l=r(2),d=r(3),h=r(5),u=r(4),m=(r(17),r(0)),b=function(e){Object(h.a)(r,e);var t=Object(u.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){var e=this.props.data,t=e.correctChars,r=e.correctWords,n=e.incorrectChars,s=e.incorrectWords,o=e.timeLimit;return Object(m.jsx)("div",{className:"result",children:Object(m.jsx)("table",{children:Object(m.jsxs)("tbody",{children:[Object(m.jsx)("tr",{children:Object(m.jsx)("td",{colSpan:"2",align:"center",children:Object(m.jsx)("h1",{children:Math.round(60*(t+this.props.spaces)/o/5)+" wpm"})})}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Correct Words:"}),Object(m.jsxs)("td",{children:[r," (",t,")"]})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Incorrect Words:"}),Object(m.jsxs)("td",{children:[s," (",n,")"]})]}),Object(m.jsx)("tr",{children:Object(m.jsx)("td",{colSpan:"2",align:"center",children:Object(m.jsx)("button",{onClick:this.props.resetTest,children:"Restart"})})})]})})})}}]),r}(s.a.Component),p=(r(19),function(e){Object(h.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).hideTimer=function(e){e.target.style.opacity="0"===e.target.style.opacity?1:0},e}return Object(d.a)(r,[{key:"componentDidMount",value:function(){document.getElementsByClassName("word")[0].scrollIntoView({behavior:"smooth",block:"center"})}},{key:"render",value:function(){var e=this,t=this.props,r=t.typedWord,n=t.currWord,s=t.timer,o=t.words,a=r.slice(n.length).split("");return Object(m.jsxs)("div",{className:"test",children:[Object(m.jsx)("div",{className:"timer",onClick:function(t){e.hideTimer(t)},children:s}),Object(m.jsx)("div",{className:"box",children:o.map((function(e,t){return Object(m.jsxs)("div",{className:"word",id:n===e?"active":"",children:[n===e?Object(m.jsx)("span",{id:"caret",className:"blink",style:{translate:14.5833*r.length},children:"|"}):null,e.split("").map((function(e,t){return Object(m.jsx)("span",{children:e},e+t)})),n===e?a.map((function(e,t){return Object(m.jsx)("span",{className:"wrong",children:e},e+t)})):null]},e+t)}))})]})}}]),r}(s.a.Component)),j=(r(20),{time:[15,30,45,60],theme:["default","mkbhd","peachy","beachy"]}),g=function(e){Object(h.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={currWord:"",typedWord:"",timer:60,correctWords:0,incorrectWords:0,correctChars:0,incorrectChars:0,setTimer:null,timeLimit:60},e.words=["the","be","of","and","a","to","in","he","have","it","that","for","they","I","with","as","not","on","she","at","by","this","we","you","do","but","from","or","which","one","would","all","will","there","say","who","make","when","can","more","if","no","man","out","other","so","what","time","up","go","about","than","into","could","state","only","new","year","some","take","come","these","know","see","use","get","like","then","first","any","work","now","may","such","give","over","think","most","even","find","day","also","after","way","many","must","look","before","great","back","through","long","where","much","should","well","people","down","own","just","because","good","each","those","feel","seem","how","high","too","place","little","world","very","still","nation","hand","old","life","tell","write","become","here","show","house","both","between","need","mean","call","develop","under","last","right","move","thing","general","school","never","same","another","begin","while","number","part","turn","real","leave","might","want","point","form","off","child","few","small","since","against","ask","late","home","interest","large","person","end","open","public","follow","during","present","without","again","hold","govern","around","possible","head","consider","word","program","problem","however","lead","system","set","order","eye","plan","run","keep","face","fact","group","play","stand","increase","early","course","change","help","line"],e.recordTest=function(t){var r=e.state,n=r.typedWord,s=r.currWord,o=r.correctChars,a=r.correctWords,c=r.incorrectChars,i=r.incorrectWords,l=r.timer,d=r.setTimer;if(l>0){if(null===d){var h=setInterval((function(){e.setState({timer:e.state.timer-1},(function(){0===e.state.timer&&(clearInterval(e.state.setTimer),e.setState({setTimer:null}))}))}),1e3);e.setState({setTimer:h})}var u=e.words.indexOf(s),m=document.getElementById("active");m.scrollIntoView({behavior:"smooth",block:"center"});var b=document.getElementById("caret");switch(b.classList.remove("blink"),setTimeout((function(){return b.classList.add("blink")}),500),t.key){case" ":if(""===n)return;s===n?e.setState({correctWords:a+1,correctChars:o+s.length}):e.setState({incorrectWords:i+1,incorrectChars:c+s.length}),m.classList.add(n!==s?"wrong":"right"),e.setState({typedWord:"",currWord:e.words[u+1]});break;case"Backspace":t.ctrlKey?(e.setState({typedWord:""}),m.childNodes.forEach((function(e){e.classList.remove("wrong","right")}))):e.setState({typedWord:n.slice(0,n.length-1)},(function(){var t=e.state.typedWord.length;t<s.length&&m.children[t+1].classList.remove("wrong","right")}));break;default:e.setState({typedWord:n+t.key},(function(){var t=e.state.typedWord,r=t.length-1;m.children[r+1].classList.add(s[r]!==t[r]?"wrong":"right")}))}}},e.resetTest=function(){document.querySelectorAll(".wrong, .right").forEach((function(e){return e.classList.remove("wrong","right")})),e.words=e.words.sort((function(){return Math.random()-.5})),clearInterval(e.state.setTimer),e.setState({timer:e.state.timeLimit,currWord:e.words[0],typedWord:"",correctChars:0,correctWords:0,incorrectWords:0,incorrectChars:0,setTimer:null})},e.handleOptions=function(t){var r;switch(t.target.dataset.option){case"theme":(r=document.getElementById("root").classList).remove.apply(r,Object(i.a)(j.theme)),document.getElementById("root").classList.add(t.target.value);break;case"time":e.setState({timer:t.target.value,timeLimit:t.target.value})}localStorage.setItem(t.target.dataset.option,t.target.value),document.querySelectorAll(".".concat(t.target.dataset.option," button")).forEach((function(e){e.classList.remove("selected")})),t.target.classList.add("selected")},e}return Object(d.a)(r,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("theme"),r=+localStorage.getItem("time"),n=document.querySelectorAll('button[value="'.concat(r,'"], button[value="').concat(t,'"]'));t&&document.getElementById("root").classList.add(t),r&&this.setState({timer:r,timeLimit:r}),n&&n.forEach((function(e){return e.classList.add("selected")})),this.words=this.words.sort((function(){return Math.random()-.5})),this.setState({currWord:this.words[0]}),document.body.onkeydown=function(t){"Tab"===t.key?((e.state.timer<60||e.state.setTimer)&&(e.resetTest(),document.getElementsByClassName("word")[0].scrollIntoView()),t.preventDefault()):1!==t.key.length&&"Backspace"!==t.key||e.recordTest(t)}}},{key:"componentWillUnmount",value:function(){document.body.onkeydown=null}},{key:"render",value:function(){var e=this,t=this.state,r=t.setTimer,n=t.timer;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("header",{className:null!==r?"hidden":"",children:[Object(m.jsx)("a",{href:".",children:"Cool Title"}),Object(m.jsx)("div",{className:"buttons",children:Object.entries(j).map((function(t){var r=Object(c.a)(t,2),n=r[0],s=r[1];return Object(m.jsxs)("div",{className:n,children:[n,":",s.map((function(t){return Object(m.jsx)("button",{className:"mini","data-option":n,value:t,onClick:e.handleOptions,children:t},t)}))]},n)}))})]}),0!==n?Object(m.jsx)(p,{words:this.words,currWord:this.state.currWord,typedWord:this.state.typedWord,setTimer:this.state.setTimer,timer:this.state.timer}):Object(m.jsx)(b,{data:this.state,spaces:this.words.indexOf(this.state.currWord),resetTest:function(){return e.resetTest()}}),Object(m.jsxs)("footer",{className:null!==r?"hidden":"",children:[Object(m.jsxs)("a",{href:"https://www.github.com/salmannotkhan/Typing-Test",children:[Object(m.jsx)("span",{children:"</>"}),"github"]}),Object(m.jsxs)("span",{children:["created by"," ",Object(m.jsx)("a",{href:"https://www.github.com/salmannotkhan",children:"@salmannotkhan"})]})]})]})}}]),r}(s.a.Component),f=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,22)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,a=t.getTTFB;r(e),n(e),s(e),o(e),a(e)}))};a.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root")),f()}},[[21,1,2]]]);
//# sourceMappingURL=main.0326eb2c.chunk.js.map