/*! For license information please see index.js.LICENSE.txt */
(()=>{var e={500:(e,t)=>{var a;!function(){"use strict";var s={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var a=arguments[t];a&&(e=i(e,r(a)))}return e}function r(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var a in e)s.call(e,a)&&e[a]&&(t=i(t,a));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()}},t={};function a(s){var n=t[s];if(void 0!==n)return n.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.element;var t=a(500),s=a.n(t);const n=window.wp.i18n;var r={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function i(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function o(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function c(e,t){var a,s,n,l,p,_=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,d=[],m="",u=t||{},h=0;function g(e){var t=r[e[1]||""],a=d[d.length-1]==e;return t?t[1]?(a?d.pop():d.push(e),t[0|a]):t[0]:e}function E(){for(var e="";d.length;)e+=g(d[d.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,a){return u[t.toLowerCase()]=a,""})).replace(/^\n+|\n+$/g,"");n=_.exec(e);)s=e.substring(h,n.index),h=_.lastIndex,a=n[0],s.match(/[^\\](\\\\)*\\$/)||((p=n[3]||n[4])?a='<pre class="code '+(n[4]?"poetry":n[2].toLowerCase())+'"><code'+(n[2]?' class="language-'+n[2].toLowerCase()+'"':"")+">"+i(o(p).replace(/^\n+|\n+$/g,""))+"</code></pre>":(p=n[6])?(p.match(/\./)&&(n[5]=n[5].replace(/^\d+/gm,"")),l=c(i(n[5].replace(/^\s*[>*+.-]/gm,""))),">"==p?p="blockquote":(p=p.match(/\./)?"ol":"ul",l=l.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),a="<"+p+">"+l+"</"+p+">"):n[8]?a='<img src="'+o(n[8])+'" alt="'+o(n[7])+'">':n[10]?(m=m.replace("<a>",'<a href="'+o(n[11]||u[s.toLowerCase()])+'">'),a=E()+"</a>"):n[9]?a="<a>":n[12]||n[14]?a="<"+(p="h"+(n[14]?n[14].length:n[13]>"="?1:2))+">"+c(n[12]||n[15],u)+"</"+p+">":n[16]?a="<code>"+o(n[16])+"</code>":(n[17]||n[1])&&(a=g(n[17]||"--"))),m+=s,m+=a;return(m+e.substring(h)+E()).replace(/^\n+|\n+$/g,"")}const l=()=>{const e=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),t=window.matchMedia("(pointer:coarse)");return t&&t.matches&&e},p=e=>!("hide"===e||"desktop"===e&&l()||"mobile"===e&&!l());function _(e){return c(e)}const{assistants:d}=aicpFrontendChatbot,m=()=>{let e=(new Date).getTime();const t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(t=>{const a=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?a:3&a|8).toString(16)}));return t},u="persist:ai-copilot/chatbot",h={id:"",source:"user",text:"",status:""},g={assistantId:null,assistantsConversation:{},assistantResponseIsLoading:!1};function E(e,t){const a={};return new Set([...Object.keys(e),...Object.keys(t)]).forEach((s=>{e.hasOwnProperty(s)&&t.hasOwnProperty(s)?!function(e){const t=typeof e;return null!=e&&("object"==t||"function"==t)}(e[s])||Array.isArray(e[s])?a[s]=t[s]:a[s]=E(e[s],t[s]):e.hasOwnProperty(s)?a[s]=e[s]:t.hasOwnProperty(s)&&(a[s]=t[s])})),a}const{chatbot:v}=aicpFrontendChatbot,b=(()=>{const e=1===Object.values(d).length;return Object.values(d).reduce(((t,a)=>((p(a.visibility.devices)||e)&&a.openai_id&&(t[a.openai_id]=a),t)),{})})(),S=(0,e.createContext)(),A=(e=g,t)=>{switch(t.type){case"PERSIST_STATE":return((e,t,a=30)=>{let s=localStorage.getItem(e);if(s)s=JSON.parse(s),s.value=t;else{const e=new Date;s={value:t,expiration:new Date(e.getTime()+24*a*60*60*1e3).getTime()}}localStorage.setItem(e,JSON.stringify(s))})(u,e),e;case"HYDRATE_STATE":const a=(e=>{const t=localStorage.getItem(e);if(t){const a=JSON.parse(t);return(new Date).getTime()>a.expiration?(localStorage.removeItem(e),null):a.value}return null})(u);return a?(b[a.assistantId]||(a.assistantId=null),{...a}):e;case"SET_ASSISTANT_ID":const s=t.payload;if(null===s)return{...e,assistantId:null};const r=b[s].assistant_first_message;return e.assistantsConversation[s]?{...e,assistantId:s}:E(e,{assistantId:s,assistantsConversation:{[s]:{messageListArray:""!==r?[{id:"",source:"agent",text:r,status:""}]:[],threadOpenaiId:""}}});case"SET_ASSISTANT_CONVERSATION_THREAD_OPENAI_ID":return E(e,{assistantsConversation:{[e.assistantId]:{threadOpenaiId:t.payload}}});case"SET_ASSISTANT_CONVERSATION_MESSAGE":const i=[...e.assistantsConversation[e.assistantId]?.messageListArray||[],{...t.payload}];return E(e,{assistantsConversation:{[e.assistantId]:{messageListArray:i}}});case"SET_ASSISTANT_CONVERSATION_RESPONSE_IS_LOADING":return E(e,{assistantResponseIsLoading:t.payload});case"UPDATE_ASSISTANT_CONVERSATION_MESSAGE":const{id:o,message:c}=t.payload,l=e.assistantsConversation[e.assistantId].messageListArray.findIndex((e=>e.id===o)),p=E(e.assistantsConversation[e.assistantId].messageListArray[l],c),_=[...e.assistantsConversation[e.assistantId].messageListArray];return _.splice(l,1,p),E(e,{assistantsConversation:{[e.assistantId]:{messageListArray:_}}});case"RESET_ASSISTANT_CONVERSATION":return window.confirm((0,n.__)("Do you really want to reset the conversation?","ai-copilot"))?E(e,{assistantsConversation:{[e.assistantId]:{messageListArray:[],threadOpenaiId:""}}}):e}return e},x=()=>(0,e.useContext)(S),y=({children:t})=>{const[a,s]=(0,e.useReducer)(A,g);return(0,e.useEffect)((()=>{s({type:"HYDRATE_STATE"})}),[]),(0,e.useEffect)((()=>{s({type:"PERSIST_STATE"})}),[a]),(0,e.createElement)(S.Provider,{value:{...a,assistants:b,chatbot:v,setAssistantId:e=>{s({type:"SET_ASSISTANT_ID",payload:e})},setAssistantConversationThreadOpenaiId:e=>{s({type:"SET_ASSISTANT_CONVERSATION_THREAD_OPENAI_ID",payload:e})},setAssistantConversationMessageUser:e=>{const t=m();return s({type:"SET_ASSISTANT_CONVERSATION_MESSAGE",payload:{...h,...e,source:"user",id:t}}),t},setAssistantConversationMessageAgent:e=>{const t=m();return s({type:"SET_ASSISTANT_CONVERSATION_MESSAGE",payload:{...h,...e,source:"agent",id:t}}),t},setAssistantConversationResponseIsLoading:e=>{const t=m();return s({type:"SET_ASSISTANT_CONVERSATION_RESPONSE_IS_LOADING",payload:e}),t},updateAssistantConversationMessage:e=>{s({type:"UPDATE_ASSISTANT_CONVERSATION_MESSAGE",payload:e})},resetAssistantConversation:()=>{s({type:"RESET_ASSISTANT_CONVERSATION"})}}},t)},N=()=>(0,e.createElement)("svg",{version:"1.1",viewBox:"0 0 43.7 38.4",xmlSpace:"preserve"},(0,e.createElement)("g",null,(0,e.createElement)("path",{className:"st0",d:"M32.1,13.2h-9V9c1.9-0.6,3.3-2.3,3.3-4.4c0-2.5-2.1-4.6-4.6-4.6c-2.5,0-4.6,2.1-4.6,4.6c0,2.1,1.4,3.9,3.4,4.4 v4.2h-9C5.2,13.2,0,18.4,0,24.8v2c0,6.4,5.2,11.6,11.6,11.6h20.5c6.4,0,11.6-5.2,11.6-11.6v-2C43.7,18.4,38.5,13.2,32.1,13.2z M41.2,26.8c0,5-4.1,9.1-9.1,9.1H11.6c-5,0-9.1-4.1-9.1-9.1v-2c0-5,4.1-9.1,9.1-9.1h20.5c5,0,9.1,4.1,9.1,9.1V26.8z"}),(0,e.createElement)("path",{className:"st0",d:"M13.9,21c-2.7,0-4.8,2.1-4.8,4.8c0,2.7,2.2,4.8,4.8,4.8c2.7,0,4.8-2.1,4.8-4.8C18.7,23.1,16.5,21,13.9,21z M13.9,28.1c-1.3,0-2.3-1-2.3-2.3c0-1.3,1.1-2.3,2.3-2.3c1.3,0,2.3,1,2.3,2.3C16.2,27.1,15.2,28.1,13.9,28.1z"}),(0,e.createElement)("path",{className:"st0",d:"M29.8,21c-2.7,0-4.8,2.1-4.8,4.8c0,2.7,2.2,4.8,4.8,4.8c2.6,0,4.8-2.1,4.8-4.8C34.6,23.1,32.5,21,29.8,21z M29.8,28.1c-1.3,0-2.3-1-2.3-2.3c0-1.3,1.1-2.3,2.3-2.3s2.3,1,2.3,2.3C32.1,27.1,31.1,28.1,29.8,28.1z"}))),T=function({onToggle:t}){const{chatbot:a}=x();return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("a",{className:"aicp__chatbot__toggle",role:"button",tabIndex:"0",onClick:t},(0,e.createElement)("div",{className:"aicp__chatbot-icon"},(0,e.createElement)(N,null)),a.chatbot_button_text&&(0,e.createElement)("span",{className:"aicp__chatbot-text"},a.chatbot_button_text)))},f=window.aicp.helpers,I=()=>(0,e.createElement)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32"},(0,e.createElement)("path",{d:"M20.563 22.104l-1.875 1.875-8-8 8-8 1.875 1.875-6.125 6.125z"})),w=({onClose:t,onPrevious:a})=>{const{assistantId:n,assistants:r,chatbot:i,assistantResponseIsLoading:o}=x();return(0,e.createElement)("div",{className:"aicp__chatbot__header"},(0,e.createElement)("div",{className:"aicp__chatbot-carousel"},(0,e.createElement)("div",{className:"aicp__chatbot-slide"},(0,e.createElement)("i",{className:"aicp__chatbot-close",onClick:t},"×"),i.chatbot_header_text&&(0,e.createElement)("div",{className:"aicp__chatbot__header__description",dangerouslySetInnerHTML:{__html:i.chatbot_header_text}})),(0,e.createElement)("div",{className:"aicp__chatbot-slide"},(0,e.createElement)("div",{className:"aicp__chatbot-contact"},(0,e.createElement)("a",{className:s()("aicp__chatbot-previous",o&&"aicp__chatbot-previous--disabled"),onClick:a},(0,e.createElement)(I,null)),(0,e.createElement)("div",{className:"aicp__chatbot-info"},(0,e.createElement)("span",{className:"aicp__chatbot-label"},(0,f.limitStringLength)(r[n]?.assistant_label,25)),(0,e.createElement)("span",{className:"aicp__chatbot-description"},(0,f.limitStringLength)(r[n]?.assistant_description,75))),(0,e.createElement)("div",{className:"aicp__chatbot-avatar"},(0,e.createElement)("div",{className:"aicp__chatbot-avatar-container"},(0,e.createElement)(N,null)))))))},C=window.aicp["api-assistant-threads"],O=window.aicp["api-assistant-messages"],M=()=>(0,e.createElement)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32"},(0,e.createElement)("path",{d:"M2.776 31.54c-1.954 1.036-3.144 0.122-2.658-2.038l2.066-9.17c0.246-1.086 1.318-2.068 2.432-2.2l12.39-1.44c3.296-0.38 3.308-0.996 0-1.374l-12.39-1.416c-1.1-0.126-2.18-1.080-2.424-2.17l-2.080-9.264c-0.486-2.146 0.704-3.046 2.662-2.006l25.7 13.658c1.956 1.038 1.96 2.72 0 3.76l-25.7 13.66z"})),R=()=>(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},(0,e.createElement)("path",{fill:"currentColor",d:"M12 16c1.671 0 3-1.331 3-3s-1.329-3-3-3s-3 1.331-3 3s1.329 3 3 3"}),(0,e.createElement)("path",{fill:"currentColor",d:"M20.817 11.186a8.94 8.94 0 0 0-1.355-3.219a9.053 9.053 0 0 0-2.43-2.43a8.95 8.95 0 0 0-3.219-1.355a9.028 9.028 0 0 0-1.838-.18V2L8 5l3.975 3V6.002c.484-.002.968.044 1.435.14a6.961 6.961 0 0 1 2.502 1.053a7.005 7.005 0 0 1 1.892 1.892A6.967 6.967 0 0 1 19 13a7.032 7.032 0 0 1-.55 2.725a7.11 7.11 0 0 1-.644 1.188a7.2 7.2 0 0 1-.858 1.039a7.028 7.028 0 0 1-3.536 1.907a7.13 7.13 0 0 1-2.822 0a6.961 6.961 0 0 1-2.503-1.054a7.002 7.002 0 0 1-1.89-1.89A6.996 6.996 0 0 1 5 13H3a9.02 9.02 0 0 0 1.539 5.034a9.096 9.096 0 0 0 2.428 2.428A8.95 8.95 0 0 0 12 22a9.09 9.09 0 0 0 1.814-.183a9.014 9.014 0 0 0 3.218-1.355a8.886 8.886 0 0 0 1.331-1.099a9.228 9.228 0 0 0 1.1-1.332A8.952 8.952 0 0 0 21 13a9.09 9.09 0 0 0-.183-1.814"})),L=()=>{const{chatbot:t}=x(),[a,r]=(0,e.useState)(""),i=(0,e.useRef)(),{assistants:o,assistantId:c,assistantsConversation:l,assistantResponseIsLoading:p,setAssistantConversationMessageUser:_,setAssistantConversationMessageAgent:d,setAssistantConversationResponseIsLoading:m,setAssistantConversationThreadOpenaiId:u,updateAssistantConversationMessage:h,resetAssistantConversation:g}=x(),E=!a.trim()||p,v=0===l[c]?.messageListArray.length,b=async()=>{_({text:a}),m(!0),r(""),S(!0);const e=d({status:"waiting"}),t=await A();t.error&&(h({id:e,message:{text:t.error,status:"error"}}),m(!1));const{thread_openai_id:s}=t,i=await(0,O.fetchServicesAssistantMessagesOpenAi)("create",{thread_openai_id:s,message_content:a,assistant_id:o[c].assistant_id,openai_id:o[c].openai_id});if(!i)return h({id:e,message:{text:(0,n.__)("There was an error with the response. Please try again.","ai-copilot"),status:"error"}}),void m(!1);const{openai_id:l}=i,p=await(0,O.fetchServicesAssistantMessagesOpenAi)("messages",{thread_openai_id:s,openai_id:l});if(!p)return h({id:e,message:{text:(0,n.__)("There was an error getting the messages. Please try again.","ai-copilot"),status:"error"}}),void m(!1);h({id:e,message:{text:p[0].message,status:"success"}}),m(!1)},S=(e=!1)=>{const t=i.current;t&&(t.style.height="",e||""!==!a||(t.style.height=`${t.scrollHeight}px`))},A=async()=>{if(l[c]?.threadOpenaiId)return{thread_openai_id:l[c]?.threadOpenaiId};try{const e=await(0,C.fetchServicesAssistantThreadsOpenAi)({assistant_id:o[c].assistant_id,openai_id:o[c].openai_id});return e?(u(e.openai_id),{thread_openai_id:e.openai_id}):{error:(0,n.__)("There was an error with the chatbot. Please try again.","ai-copilot")}}catch(e){return{error:(0,n.__)("An error occurred while fetching data. Please try again.","ai-copilot")}}};return(0,e.createElement)(e.Fragment,null,t.chatbot_footer_text&&(0,e.createElement)("div",{className:"aicp__chatbot-footer",dangerouslySetInnerHTML:{__html:t.chatbot_footer_text}}),(0,e.createElement)("div",{className:"aicp__chatbot-response"},(0,e.createElement)("pre",null,a),(0,e.createElement)("textarea",{ref:i,maxLength:"300",onChange:e=>{e.preventDefault(),r(e.target.value),S()},onKeyDown:e=>{p||e.shiftKey&&"Enter"===e.key||"Enter"!==e.key||E||(e.preventDefault(),b(),S())},value:a,placeholder:t.chatbot_message_placeholder,"aria-label":t.chatbot_message_placeholder,tabIndex:"0"}),(0,e.createElement)("div",{className:"aicp__chatbot--buttons"},(0,e.createElement)("a",{className:s()("aicp__chatbot-reply",(p||v)&&"aicp__chatbot-reply--disabled"),role:"button",tabIndex:"0",title:(0,n.__)("Reset conversation","ai-copilot"),onClick:()=>g()},(0,e.createElement)(R,null)),(0,e.createElement)("a",{className:s()("aicp__chatbot-reply",E&&"aicp__chatbot-reply--disabled"),role:"button",tabIndex:"0",onClick:e=>{e.preventDefault(),b()}},(0,e.createElement)(M,null)))))},D=({onClick:t,assistant:a})=>(0,e.createElement)("a",{className:"aicp__chatbot__assistant",onClick:t,role:"button",tabIndex:"0",target:"_blank"},(0,e.createElement)("div",{className:"aicp__chatbot-avatar"},(0,e.createElement)("div",{className:"aicp__chatbot-avatar-container"},(0,e.createElement)(N,null))),(0,e.createElement)("div",{className:"aicp__chatbot-info"},(0,e.createElement)("span",{className:"aicp__chatbot-label"},a?.assistant_label),(0,e.createElement)("span",{className:"aicp__chatbot-description"},a?.assistant_description))),P=({handleBoxTranstionClass:t})=>{const{assistants:a,setAssistantId:s}=x(),r=Object.values(a),i=e=>a=>{a.preventDefault(),t("aicp__chatbot-modal--opening"),s(e.openai_id)};return(0,e.createElement)("div",{className:"aicp__chatbot__assistant-list"},r?.length?(0,e.createElement)(e.Fragment,null,r.map((t=>(0,e.createElement)(D,{key:t.openai_id,assistant:t,onClick:i(t)})))):(0,e.createElement)("p",null,(0,n.__)("No assistants","ai-copilot")))},k=()=>(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 9 24 6"},(0,e.createElement)("circle",{cx:18,cy:12,r:0,fill:"currentColor"},(0,e.createElement)("animate",{attributeName:"r",begin:.67,calcMode:"spline",dur:"1.5s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",repeatCount:"indefinite",values:"0;2;0;0"})),(0,e.createElement)("circle",{cx:12,cy:12,r:0,fill:"currentColor"},(0,e.createElement)("animate",{attributeName:"r",begin:.33,calcMode:"spline",dur:"1.5s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",repeatCount:"indefinite",values:"0;2;0;0"})),(0,e.createElement)("circle",{cx:6,cy:12,r:0,fill:"currentColor"},(0,e.createElement)("animate",{attributeName:"r",begin:0,calcMode:"spline",dur:"1.5s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",repeatCount:"indefinite",values:"0;2;0;0"}))),$=({text:t,status:a,source:n})=>{const r={__html:t=(t=_(t)).replace(/【.*?source】/g,"")};return(0,e.createElement)("div",{className:s()("aicp__chatbot__message",`aicp__chatbot__message--${n}`,`aicp__chatbot__message--${a}`)},"waiting"===a?(0,e.createElement)("span",{className:"aicp__chatbot__message--spinner"},(0,e.createElement)(k,null)):(0,e.createElement)("div",{dangerouslySetInnerHTML:r}))},V=()=>{const t=(0,e.useRef)(null),{assistantId:a,assistantsConversation:s}=x(),{messageListArray:n}=s[a];return(0,e.useEffect)((()=>{t.current&&n.length>0&&setTimeout((()=>{t.current.scrollIntoView({behavior:"smooth"})}),[700])}),[n]),(0,e.createElement)("div",{className:"aicp__chatbot__message-list"},(0,e.createElement)("span",null),n.map((({id:t,text:a,status:s,source:n})=>a.length>100?a.split(/(?<!\d)\.\s+/g).map(((a,r)=>(0,e.createElement)($,{key:`${t}-${r}`,text:a,status:s,source:n}))):(0,e.createElement)($,{key:t,text:a,status:s,source:n}))),(0,e.createElement)("span",{ref:t}))},B=({props:t})=>{const{boxTransitionClass:a,setBoxTransitionClass:n,handleBoxClose:r}=t,{assistantId:i,setAssistantId:o}=x(),c=null!==i,l=e=>{n(`${a} ${e}`),setTimeout((()=>{n(a.replace(e,""))}),300)};return(0,e.createElement)("div",{className:s()("aicp__chatbot-modal",c&&"aicp__chatbot-modal--response",a)},(0,e.createElement)(w,{onClose:r,onPrevious:e=>{e.preventDefault(),l("aicp__chatbot-modal--closing"),setTimeout((()=>{o(null)}),[300])}}),(0,e.createElement)("div",{className:"aicp__chatbot-body"},(0,e.createElement)("div",{className:"aicp__chatbot-carousel"},(0,e.createElement)("div",{className:"aicp__chatbot-slide"},(0,e.createElement)(P,{handleBoxTranstionClass:l})),(0,e.createElement)("div",{className:"aicp__chatbot-slide"},null!==i&&(0,e.createElement)(V,null)))),(0,e.createElement)(L,null))},j=()=>{const t=(0,e.useRef)(null),[a,n]=(0,e.useState)(!1),[r,i]=(0,e.useState)("aicp__chatbot-modal--open"),{chatbot:o}=x();(0,e.useEffect)((()=>{function e(e){a&&!t?.current.contains(e.target)&&c()}return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}}),[a]);const c=e=>{e?.preventDefault(),i("aicp__chatbot-modal--close"),setTimeout((()=>{n(!1),i("aicp__chatbot-modal--open")}),300)};return(0,e.createElement)("div",{ref:t,id:"aicp__chatbot",className:s()("aicp__chatbot",`aicp__chatbot--${o.chatbot_layout}`,`aicp__chatbot--${o.chatbot_position}`,`aicp__chatbot--${o.chatbot_style}`,a&&"aicp__chatbot--show")},(0,e.createElement)("div",{className:"aicp__chatbot-container"},a&&(0,e.createElement)(B,{props:{boxTransitionClass:r,setBoxTransitionClass:i,handleBoxClose:c}}),(0,e.createElement)(T,{onToggle:e=>(e.preventDefault(),a?c():void n(!0))})))},H=()=>{const{chatbot:t}=x();return p(t?.visibility?.devices)?(0,e.createElement)(j,null):null};document.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelector("#aicp__app");t?e.createRoot?(0,e.createRoot)(t).render((0,e.createElement)(y,null,(0,e.createElement)(H,null))):(0,e.render)((0,e.createElement)(y,null,(0,e.createElement)(H,null)),t):console.error("No #aicp__app container found")}))})()})();