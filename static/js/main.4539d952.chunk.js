(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{57:function(e,t,a){e.exports=a(77)},62:function(e,t,a){},63:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),i=a.n(l),c=(a(62),a(9)),o=a(7),s=a(10),m=a(11),u=a(12),d=a(95),p=a(97),h=a(26),E=a(16),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={element:"",textIndex:0},a.createEffect(),a.resetEffect=a.resetEffect.bind(Object(E.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"resetEffect",value:function(e){var t=this;this.setState({element:"",textIndex:e},(function(){t.createEffect()}))}},{key:"createEffect",value:function(){var e=this,t=this.props.data[this.state.textIndex].split(""),a=0,n=setInterval((function(){e.setState((function(e){return{element:e.element.slice(0,-1)+t[a]+"_"}})),++a>t.length&&e.setState((function(e){return{element:e.element.slice(0,-1)}}),(function(){if(clearInterval(n),e.props.loop){var t=e.state.textIndex+1;t>=e.props.data.length&&(t=0),e.resetEffect(t)}}))}),this.props.speed)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.element)}}]),t}(n.Component),f=(a(63),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"scrolldown"},r.a.createElement("div",{className:"chevron"}),r.a.createElement("div",{className:"chevron"}),r.a.createElement("div",{className:"chevron"}))}}]),t}(n.Component)),g=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{container:!0,direction:"column",justify:"center",alignItems:"center",style:{height:"100vh",background:"linear-gradient(13deg, rgba(132,14,161,1) 24%, rgba(29,142,143,1) 83%)"}},r.a.createElement(p.a,null),r.a.createElement(d.a,{container:!0,item:!0,justify:"center"},r.a.createElement(h.a,{align:"center",component:"div",style:{color:"powderblue",border:"4px solid white",fontSize:"2rem",padding:"10px"}},"I'm Karan Chauhan ",r.a.createElement("br",null),r.a.createElement("div",{style:{fontSize:"1rem"}},"Full-Stack Application Developer"))),r.a.createElement(d.a,{container:!0,item:!0,justify:"center"},r.a.createElement(h.a,{style:{padding:"40px",color:"antiquewhite"}},r.a.createElement("br",null),r.a.createElement(b,{data:["Application Developer","Loves programming"],loop:!0,speed:200}))),r.a.createElement(d.a,{container:!0,item:!0,justify:"center",style:{bottom:"100px",position:"absolute"}},r.a.createElement(f,null)))}}]),t}(n.Component),y=a(98),v=function(e){return r.a.createElement("div",{className:"LI-profile-badge","data-version":"v1","data-size":"large","data-locale":"en_US","data-type":"vertical","data-theme":"light","data-vanity":"chauhan-karan"},r.a.createElement("a",{className:"LI-simple-link",target:"_blank",rel:"noopener noreferrer",href:"https://ca.linkedin.com/in/chauhan-karan?trk=profile-badge"},"Karan Chauhan"))},k=a(44),j=a.n(k),O=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{style:{backgroundColor:"darkslategrey",padding:"20px"}},r.a.createElement(d.a,{container:!0,justify:"center",item:!0,xs:12},r.a.createElement(h.a,{variant:"h5",style:{color:"aliceblue"}},"About me")),r.a.createElement(d.a,{container:!0,item:!0},r.a.createElement(d.a,{item:!0,container:!0,justify:"center",alignItems:"center",xs:12,md:6},r.a.createElement(v,null)),r.a.createElement(d.a,{item:!0,container:!0,justify:"center",alignItems:"center",xs:12,md:6},r.a.createElement(h.a,{variant:"body1",style:{color:"white",fontSize:"large"}},r.a.createElement("b",null,"Karan Chauhan")," ",r.a.createElement("br",null),r.a.createElement("br",null),"I am a full-stack application developer and have 3 years of hands-on experience in developing applications using different technology stacks. Although I consider myself as a full-stack developer, I do focus on backend or server side technologies more than frontend technologies.",r.a.createElement("br",null),r.a.createElement("br",null),"I love solving data structures and algorithm problems."),r.a.createElement(y.a,{"aria-label":"link"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/itsmekaran"},r.a.createElement(j.a,{style:{color:"cyan"}}))))))}}]),t}(n.Component),x=a(35),w=a.n(x),S=a(36),N=a.n(S),C=a(20),I=(a(76),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{style:{width:"100%",backgroundColor:"#e6e9ec"}},r.a.createElement(h.a,{align:"center",variant:"h5",style:{color:"darkmagenta"}},"Work Experience and Education"),r.a.createElement(C.VerticalTimeline,null,r.a.createElement(C.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"September 2019 - Present",contentArrowStyle:{borderRight:"7px solid  rgb(233, 30, 99)"},iconStyle:{background:"rgb(233, 30, 99)",color:"#fff"},icon:r.a.createElement(N.a,null)},r.a.createElement("h3",{className:"vertical-timeline-element-title"},"University of Windsor"),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"Ontario, Canada"),r.a.createElement("p",null,"Master of Applied Computing")),r.a.createElement(C.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentArrowStyle:{borderRight:"7px solid  rgb(33, 150, 243)"},date:"November 2018 - August 2019",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},icon:r.a.createElement(w.a,null)},r.a.createElement("h3",{className:"vertical-timeline-element-title"},"Software Engineer"),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"India"),r.a.createElement("p",null,"Gainsight")),r.a.createElement(C.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentArrowStyle:{borderRight:"7px solid  rgb(33, 150, 243)"},date:"December 2017 - November 2018",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},icon:r.a.createElement(w.a,null)},r.a.createElement("h3",{className:"vertical-timeline-element-title"},"Software Engineer"),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"India"),r.a.createElement("p",null,"Next Education")),r.a.createElement(C.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentArrowStyle:{borderRight:"7px solid  rgb(33, 150, 243)"},date:"August 2016 - November 2017",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},icon:r.a.createElement(w.a,null)},r.a.createElement("h3",{className:"vertical-timeline-element-title"},"Software Engineer"),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"India"),r.a.createElement("p",null,"MAQ Software")),r.a.createElement(C.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"2012 - 2016",contentArrowStyle:{borderRight:"7px solid  rgb(233, 30, 99)"},iconStyle:{background:"rgb(233, 30, 99)",color:"#fff"},icon:r.a.createElement(N.a,null)},r.a.createElement("h3",{className:"vertical-timeline-element-title"},"Lovely Professional University"),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"India"),r.a.createElement("p",null,"Bachelor of Engineering in Computer Science")),r.a.createElement(C.VerticalTimelineElement,{iconStyle:{background:"rgb(16, 204, 82)",color:"#fff"}})))}}]),t}(n.Component)),A=a(23),T=a(4),_=a(3),P=a(104),V=a(99),R=a(105),W=a(100),L=a(101),M=a(103),z=a(106),B=a(34),D=a(46),J=a.n(D),K=a(45),U=a.n(K),Y=a(47),G=a.n(Y),F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={expanded:!1},a.handleExpandClick=a.handleExpandClick.bind(Object(E.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleExpandClick",value:function(){this.setState({expanded:!this.state.expanded})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(P.a,{className:e.root},r.a.createElement(V.a,{avatar:r.a.createElement(R.a,{"aria-label":"recipe",className:e.avatar},this.props.icon),title:this.props.data.name,subheader:this.props.data.type}),r.a.createElement(W.a,null,r.a.createElement(h.a,{variant:"body2",color:"textSecondary",component:"p"},this.props.data.description)),r.a.createElement(L.a,{disableSpacing:!0},r.a.createElement(y.a,{"aria-label":"link"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:this.props.data.url},r.a.createElement(U.a,{color:"primary"}))),r.a.createElement(y.a,{className:Object(_.a)(e.expand,Object(A.a)({},e.expandOpen,this.state.expanded)),onClick:this.handleExpandClick,"aria-expanded":this.state.expanded,"aria-label":"show more"},r.a.createElement(J.a,null))),r.a.createElement(M.a,{in:this.state.expanded,timeout:"auto",unmountOnExit:!0},r.a.createElement(W.a,null,r.a.createElement(h.a,{paragraph:!0},"Technology Stack:"),this.props.data.stack.map((function(e,t){return r.a.createElement("li",{key:t,style:{float:"left",listStyle:"none"}},r.a.createElement(z.a,{icon:r.a.createElement(G.a,null),label:e}))})),";")))}}]),t}(n.Component),Q=Object(T.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:B.a[500]}}}))(F),q=a(48),H=a.n(q),Z=a(49),$=a.n(Z),X=a(50),ee=a.n(X),te=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=[{name:"Notes Application",type:"Web Application",url:"https://notes-keepitsimple.herokuapp.com/",description:"This is an application where can users can store daily notes.",stack:["Java","Spring Boot","MongoDB","React","JavaScript"]},{name:"Youngsters",type:"Web Application",url:"http://youngsters.chauh11r.myweb.cs.uwindsor.ca/",description:"Youngsters is a social network where users can make new friends and interact with them.",stack:["PHP","MYSQL","JavaScript"]},{name:"Zombie Kill Game",type:"Desktop Application",url:"https://youtu.be/SIia_VAAYfo",description:"Shooting game where main aim is to kill zombies and main boss. This includes power-ups.",stack:["Python","PyGame"]}];return r.a.createElement(d.a,{style:{padding:"20px"}},r.a.createElement(d.a,{container:!0,justify:"center",item:!0,xs:12},r.a.createElement(h.a,{variant:"h5",style:{color:"black"}},"Projects")),r.a.createElement(d.a,{container:!0,direction:"row",justify:"center",item:!0,xs:12,spacing:2},r.a.createElement(d.a,{item:!0},r.a.createElement(Q,{icon:r.a.createElement(H.a,null),data:e[0]})),r.a.createElement(d.a,{item:!0},r.a.createElement(Q,{icon:r.a.createElement($.a,null),data:e[1]})),r.a.createElement(d.a,{item:!0},r.a.createElement(Q,{icon:r.a.createElement(ee.a,null),data:e[2]}))))}}]),t}(n.Component),ae=a(102),ne=a(51),re=a.n(ne),le=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{container:!0,justify:"center",alignItems:"center",style:{padding:"20px",backgroundColor:"darkslategray",color:"white"}},r.a.createElement(d.a,{item:!0},r.a.createElement(h.a,{align:"center"},"Made with ",r.a.createElement(re.a,{style:{color:"red"}})," using\xa0",r.a.createElement(ae.a,{target:"_blank",rel:"noopener noreferrer",href:"https://reactjs.org/",style:{color:"white"}},"React"),"\xa0and\xa0",r.a.createElement(ae.a,{target:"_blank",rel:"noopener noreferrer",href:"https://material-ui.com/",style:{color:"white"}},"Material UI"),r.a.createElement("br",null),"A\xa0",r.a.createElement(ae.a,{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/itsmekaran",style:{color:"white"}},"Karan Chauhan's"),"\xa0Production 2020")))}}]),t}(n.Component);var ie=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement(O,null),r.a.createElement(I,null),r.a.createElement(te,null),r.a.createElement(le,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[57,1,2]]]);
//# sourceMappingURL=main.4539d952.chunk.js.map