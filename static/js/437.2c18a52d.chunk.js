"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[437],{4437:function(n,e,t){t.r(e),t.d(e,{default:function(){return an}});var r,a,i,o,s,c,d,l,x,u,p,m,h,f,b,g,Z=t(9434),j=t(1634),v=function(n){return n.filter},w=t(168),y=t(6444),P=y.ZP.label(r||(r=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  font-size: 18px;\n  font-weight: 500;\n  margin-bottom: 20px;\n"]))),C=y.ZP.input(a||(a=(0,w.Z)(["\n  width: 250px;\n  border: none;\n  border-radius: 5px;\n"]))),k=t(184),z=function(){var n=(0,Z.I0)(),e=(0,Z.v9)(v);return(0,k.jsxs)(P,{children:["Find contacts by name",(0,k.jsx)(C,{type:"text",value:e,onChange:function(e){return n((0,j.M6)(e.target.value))}})]})},L=t(4270),A=t(9439),N=t(9482),_=t(2791),F=t(3634),I=y.ZP.li(i||(i=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  &:not(:last-child) {\n    margin-bottom: 15px;\n  }\n"]))),q=y.ZP.p(o||(o=(0,w.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n"]))),S=y.ZP.span(s||(s=(0,w.Z)(["\n  margin-left: 10px;\n"]))),J=y.ZP.button(c||(c=(0,w.Z)(["\n  background-color: #d5e1d1;\n  border: none;\n  padding: 0;\n\n  &:hover {\n    color: #e84a5f;\n  }\n"]))),M=function(n){var e=n.id,t=n.name,r=n.number,a=(0,Z.I0)(),i=(0,_.useState)(!1),o=(0,A.Z)(i,2),s=o[0],c=o[1];return(0,k.jsxs)(I,{children:[(0,k.jsxs)(q,{children:[t,":",(0,k.jsx)(S,{children:r})]}),(0,k.jsx)(J,{type:"button",onClick:function(){c(!0),a((0,F._f)(e))},disabled:s&&"disabled",ariaLabel:"delete",children:(0,k.jsx)(N.uaR,{})})]})},B=y.ZP.ul(d||(d=(0,w.Z)(["\n  width: 350px;\n  margin: 0 auto;\n"]))),E=t(6916),R=function(n){return n.contacts.items},V=function(n){return n.contacts.isLoading},Y=function(n){return n.contacts.error},$=(0,E.P1)([v,R],(function(n,e){var t=n.toLowerCase();return e.filter((function(n){return n.name.toLowerCase().includes(t)}))})),D=function(){var n=(0,Z.v9)($);return(0,k.jsx)(B,{children:n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,k.jsx)(M,{id:e,name:t,number:r},e)}))})},G=t(5705),H=(0,y.ZP)(G.l0)(l||(l=(0,w.Z)(["\n  width: 330px;\n  padding: 10px 15px;\n  border: 2px solid grey;\n  margin: 0 auto;\n  margin-bottom: 15px;\n  background-color: #b1cba8;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);\n"]))),K=y.ZP.div(x||(x=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-bottom: 20px;\n"]))),O=y.ZP.label(u||(u=(0,w.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),Q=(0,y.ZP)(G.gN)(p||(p=(0,w.Z)(["\n  border: none;\n"]))),T=y.ZP.button(m||(m=(0,w.Z)(["\n  padding: 4px 5px;\n  border: none;\n  font-size: 14px;\n  font-weight: 500;\n  background-color: white;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), 0 11px 15px rgba(0, 0, 0, 0.2);\n  &:hover {\n    color: #e84a5f;\n  }\n"]))),U=function(){var n=(0,Z.v9)(R),e=(0,Z.I0)();return(0,k.jsx)(G.J9,{initialValues:{name:"",number:""},onSubmit:function(t,r){var a=r.resetForm;if(n.find((function(n){return n.name.toLowerCase()===t.name.toLowerCase()})))return alert("".concat(t.name," is already in contacts"));e((0,F.el)(t)),a()},children:(0,k.jsxs)(H,{autoComplete:"of",children:[(0,k.jsxs)(K,{children:[(0,k.jsxs)(O,{children:["Name",(0,k.jsx)(Q,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,k.jsxs)(O,{children:["Number",(0,k.jsx)(Q,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})]}),(0,k.jsx)(T,{type:"submit",children:"Add contact"})]})})},W=y.ZP.div(h||(h=(0,w.Z)(["\n  max-width: 450px;\n  margin: 0 auto;\n"]))),X=y.ZP.h1(f||(f=(0,w.Z)(["\n  text-align: center;\n  font-size: 26px;\n  margin-bottom: 20px;\n"]))),nn=y.ZP.h2(b||(b=(0,w.Z)(["\n  text-align: center;\n  font-size: 20px;\n  margin-bottom: 20px;\n"]))),en=t(5243),tn=y.ZP.div(g||(g=(0,w.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),rn=function(){return(0,k.jsx)(tn,{children:(0,k.jsx)(en.g4,{height:"80",width:"80",radius:"9",color:"#4fa94d",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})},an=function(){var n=(0,Z.I0)(),e=(0,Z.v9)(V),t=(0,Z.v9)(Y),r=(0,Z.v9)(R),a=(0,Z.v9)($);return(0,_.useEffect)((function(){n((0,F.yF)())}),[n]),(0,k.jsxs)(W,{children:[(0,k.jsx)(L.q,{children:(0,k.jsx)("title",{children:"Your contacts"})}),(0,k.jsxs)("div",{children:[(0,k.jsx)(X,{children:"Phonebook"}),(0,k.jsx)(U,{})]}),(0,k.jsxs)("div",{children:[(0,k.jsx)(nn,{children:"Contacts"}),t&&(0,k.jsx)("b",{children:t}),r.length>0&&(0,k.jsx)(z,{}),e&&(0,k.jsx)(rn,{}),a.length>0&&(0,k.jsx)(D,{})]})]})}}}]);
//# sourceMappingURL=437.2c18a52d.chunk.js.map