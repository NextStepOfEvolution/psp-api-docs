import{e as y,r as a,o as s,c as u,b as t,w as o,a as e,F as h,f as p,k as b}from"./index-e13b11fc.js";const C={class:""},R=e("h2",{class:"text-2xl font-bold my-4"},"3.4. Отмена платежа (Cancel).",-1),S=e("p",{class:"my-4"},"Данным запросом система PSP запрашивае разрешение на отмену платежа.",-1),T=e("p",{class:"my-4"},[e("b",null,"Параметры запроса от PSP:")],-1),k=e("p",{class:"my-4"},[e("b",null,"Параметры ответа от Мерчанта:")],-1),N={class:"h-48 w-full"},P={class:"h-48 w-full"},w='{ "AGR_TRANS_ID": 1503642925905, "VENDOR_TRANS_ID": 1503642925906, "SIGN_TIME": 1503642926295, "SIGN_STRING": "5a30fbd0fab44be29310e4b493c9a287"}',B='{ "ERROR": 0, "ERROR_NOTE": "Success" }',D={__name:"MerchantAPICancel",props:["table"],setup(f){const l=y(f.table);return(I,E)=>{const d=a("Column"),_=a("DataTable"),i=a("CodeBlock"),m=a("TabPanel"),v=a("TabView");return s(),u("div",C,[R,S,T,t(_,{class:"my-4",value:l.value.request.data,tableStyle:"min-width: 50rem"},{default:o(()=>[(s(!0),u(h,null,p(l.value.request.columns,(n,c,r)=>(s(),b(d,{key:r,field:c,header:n},null,8,["field","header"]))),128))]),_:1},8,["value"]),k,t(_,{class:"my-4",value:l.value.response.data,tableStyle:"min-width: 50rem"},{default:o(()=>[(s(!0),u(h,null,p(l.value.response.columns,(n,c,r)=>(s(),b(d,{key:r,field:c,header:n},null,8,["field","header"]))),128))]),_:1},8,["value"]),t(v,null,{default:o(()=>[t(m,{header:"Пример запроса от PSP:"},{default:o(()=>[e("div",N,[t(i,{code:w,persistentCopyButton:!0,highlightjs:!0,lang:"json",theme:"atom-one-dark"})])]),_:1}),t(m,{header:"Пример ответа от Мерчанта:"},{default:o(()=>[e("div",P,[t(i,{code:B,persistentCopyButton:!0,highlightjs:!0,lang:"json",theme:"atom-one-dark"})])]),_:1})]),_:1})])}}};export{D as default};
