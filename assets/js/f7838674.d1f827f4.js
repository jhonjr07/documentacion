"use strict";(self.webpackChunkfastura=self.webpackChunkfastura||[]).push([[229],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>f});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function d(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),p=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},u=function(e){var a=p(e.components);return t.createElement(l.Provider,{value:a},e.children)},o="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),o=p(n),m=r,f=o["".concat(l,".").concat(m)]||o[m]||c[m]||i;return n?t.createElement(f,s(s({ref:a},u),{},{components:n})):t.createElement(f,s({ref:a},u))}));function f(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var d={};for(var l in a)hasOwnProperty.call(a,l)&&(d[l]=a[l]);d.originalType=e,d[o]="string"==typeof e?e:r,s[1]=d;for(var p=2;p<i;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77172:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var t=n(87462),r=(n(67294),n(3905));const i={},s="Respuestas predefinidas",d={unversionedId:"configuracion-adicional/Respuestas-predefinidas",id:"configuracion-adicional/Respuestas-predefinidas",title:"Respuestas predefinidas",description:'Las respuestas predefinidas son plantillas de respuesta guardadas que se utilizan para enviar un mensaje a una conversaci\xf3n r\xe1pidamente. Puede utilizar las respuestas predefinidas para guardar las respuestas a las preguntas m\xe1s frecuentes, lo que ayudar\xe1 a reducir el tiempo de respuesta y la productividad de un agente. Un agente puede acceder a las respuestas predefinidas en el chat escribiendo "/" seguido por la palabra clave.',source:"@site/docs/configuracion-adicional/Respuestas-predefinidas.md",sourceDirName:"configuracion-adicional",slug:"/configuracion-adicional/Respuestas-predefinidas",permalink:"/documentacion/configuracion-adicional/Respuestas-predefinidas",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"M\xf3dulo Help Center",permalink:"/documentacion/configuracion-adicional/Modulo-help-center"},next:{title:"Variables de respuestas predefinidas",permalink:"/documentacion/configuracion-adicional/Variables-de-Plantilla"}},l={},p=[{value:"Usar una respuesta predefinida en una conversaci\xf3n",id:"usar-una-respuesta-predefinida-en-una-conversaci\xf3n",level:2},{value:"A\xf1adir una nueva respuesta predefinida",id:"a\xf1adir-una-nueva-respuesta-predefinida",level:2},{value:"Modificar respuesta predefinida",id:"modificar-respuesta-predefinida",level:2},{value:"Eliminar respuesta predefinida",id:"eliminar-respuesta-predefinida",level:2}],u={toc:p},o="wrapper";function c(e){let{components:a,...i}=e;return(0,r.kt)(o,(0,t.Z)({},u,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"respuestas-predefinidas"},"Respuestas predefinidas"),(0,r.kt)("p",null,"Las respuestas predefinidas son plantillas de respuesta guardadas que se utilizan para enviar un mensaje a una conversaci\xf3n r\xe1pidamente. Puede utilizar las respuestas predefinidas para guardar las respuestas a las preguntas m\xe1s frecuentes, lo que ayudar\xe1 a reducir el tiempo de respuesta y la productividad de un agente. Un agente puede acceder a las respuestas predefinidas en el chat escribiendo ",(0,r.kt)("strong",{parentName:"p"},'"/"')," seguido por la palabra clave."),(0,r.kt)("h2",{id:"usar-una-respuesta-predefinida-en-una-conversaci\xf3n"},"Usar una respuesta predefinida en una conversaci\xf3n"),(0,r.kt)("p",null,"Todas las respuestas predefinidas est\xe1n disponibles para todos los agentes de la cuenta."),(0,r.kt)("p",null,"Para acceder a las respuestas predefinidas mientras chatea con un cliente, introduzca ",(0,r.kt)("strong",{parentName:"p"},'"/"')," seguido de la palabra clave en el editor de texto que se muestra a continuaci\xf3n, que resaltar\xe1 la respuesta predefinidas con la palabra clave. Entonces, presione enter y se actualizar\xe1 el editor con la respuesta."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:n(53213).Z,width:"456",height:"965"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:n(8360).Z,width:"456",height:"961"})),(0,r.kt)("h2",{id:"a\xf1adir-una-nueva-respuesta-predefinida"},"A\xf1adir una nueva respuesta predefinida"),(0,r.kt)("p",null,"Cualquier agente/administrador en la cuenta puede ",(0,r.kt)("strong",{parentName:"p"},"crear/modificar")," una respuesta predefinida."),(0,r.kt)("p",null,"Para agregar una nueva respuesta predefinidas, vaya a la configuraci\xf3n de respuesta predefinidas haciendo clic en ",(0,r.kt)("strong",{parentName:"p"},"Configuraci\xf3n \u2192"),"  Respuestas predefinidas desde la barra lateral. Por defecto, no hay respuestas predefinidas disponibles en la cuenta."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:n(58147).Z,width:"1411",height:"677"})),(0,r.kt)("p",null,"Haga clic en el bot\xf3n ",(0,r.kt)("strong",{parentName:"p"},"Agregar respuesta predefinida")," disponible en la esquina superior derecha de la p\xe1gina, que abrir\xe1 una ventana emergente como se muestra a continuaci\xf3n."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:n(12524).Z,width:"649",height:"519"})),(0,r.kt)("p",null,"Los campos mostrados en la ventana emergente se describen a continuaci\xf3n."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nombre del campo"),(0,r.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Palabra clave")),(0,r.kt)("td",{parentName:"tr",align:null},"Introduzca una palabra clave - longitud m\xednima de 2 caracteres. La palabra clave es \xfanico. No se puede crear una respuesta predefinida con la misma palabra dos veces en la cuenta.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Contenido")),(0,r.kt)("td",{parentName:"tr",align:null},"Escriba el mensaje que desea enviar cuando la palabra clave se introduce en el chat.")))),(0,r.kt)("p",null,"Una vez que ingrese los detalles, haga clic en el bot\xf3n ",(0,r.kt)("strong",{parentName:"p"},"Enviar"),". Si la solicitud es correcta, se mostrar\xe1 un mensaje ",(0,r.kt)("strong",{parentName:"p"},'"Respuesta predefinidas agregada correctamente".')),(0,r.kt)("admonition",{title:"IMPORTANTE:",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Las respuestas predefinidas son creadas por un agente que est\xe1 disponible para todos los agentes/administradores de la cuenta.")),(0,r.kt)("h2",{id:"modificar-respuesta-predefinida"},"Modificar respuesta predefinida"),(0,r.kt)("p",null,"Para actualizar una respuesta predefinida, abra la lista de respuestas predefinidas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Configuraci\xf3n")," \u2192  Respuestas predefinidas. Todas las respuestas predefinidas en su cuenta estar\xe1n disponibles all\xed."),(0,r.kt)("li",{parentName:"ul"},"Haga clic en el bot\xf3n de edici\xf3n como se muestra a continuaci\xf3n, que abrir\xe1 una ventana emergente con informaci\xf3n prefijada."),(0,r.kt)("li",{parentName:"ul"},"Puede editar tanto la palabra clave como el mensaje."),(0,r.kt)("li",{parentName:"ul"},"Haga clic en ",(0,r.kt)("strong",{parentName:"li"},"Enviar")," para guardar los cambios."),(0,r.kt)("li",{parentName:"ul"},"Y clic en ",(0,r.kt)("strong",{parentName:"li"},"Cancelar")," si desea descartar los cambios.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:n(78423).Z,width:"662",height:"797"})),(0,r.kt)("h2",{id:"eliminar-respuesta-predefinida"},"Eliminar respuesta predefinida"),(0,r.kt)("p",null,"Para eliminar una respuesta predefinida:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Seleccione el ",(0,r.kt)("strong",{parentName:"li"},"bot\xf3n borrar")," como se muestra a continuaci\xf3n. Se mostrar\xe1 una ventana emergente de confirmaci\xf3n."),(0,r.kt)("li",{parentName:"ul"},"Haga clic en ",(0,r.kt)("strong",{parentName:"li"},"S\xed"),", para eliminar la respuesta predefinida.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:n(90278).Z,width:"662",height:"301"})))}c.isMDXComponent=!0},53213:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/Respuestas-predefinidas_01-e899431a6a180c62a92163ae541162da.png"},8360:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/Respuestas-predefinidas_02-b6df4bc8406b0c52d7849915508a4d18.png"},58147:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/Respuestas-predefinidas_03-6f831b3e550549d3c79e0a64d2025c24.jpg"},12524:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/Respuestas-predefinidas_04-5e1b672ab3c2156f6253965ce9b82f1b.jpg"},78423:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/Respuestas-predefinidas_05-d535c947eb7bcc514dd3b0f3900d0909.jpg"},90278:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/Respuestas-predefinidas_06-b08af3bcde98a3c82d71ade448e83302.jpg"}}]);