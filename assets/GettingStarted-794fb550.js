import{r as s,o as n,c as o,a as t,F as _,b as g,d as c,w as a,e as u,t as r}from"./index-a1f6512e.js";const l="/psp-api-docs/assets/terminal-da03453e.png",k="/psp-api-docs/assets/market-pay-4cbff55d.png",b={class:""},x=t("h1",{class:"text-4xl font-bold"},"Начало работы",-1),h=t("p",{class:"my-4"}," Мы подготовили инструкции по интеграции, чтобы сделать процесс подключения к PSP, а также прием платежей, быстрым и легким. ",-1),y={class:"grid grid-cols-2 gap-4"},f=["src"],B={__name:"GettingStarted",setup(w){const i=[{title:"Web-касса",content:"Удобный способ принимать платежи.",image:l,to:{name:"webkassa-introduction"}},{title:"Web-терминал",content:"Легкий и быстрый способ начать принимать платежи от пользователей",image:l,to:{name:"web-terminal-introduce"}},{title:"MarketPay",content:"Просто способ распределения суммы платежа между участниками сделки",image:k,to:{name:"market-pay-concept"}}];return(C,P)=>{const d=s("router-link"),p=s("Card");return n(),o("div",b,[x,h,t("div",y,[(n(),o(_,null,g(i,(e,m)=>c(p,{key:m,class:"text-center dark:text-gray-200 dark:bg-gray-900 p-5"},{header:a(()=>[t("img",{class:"w-[100px] h-[100px] mx-auto",src:e.image,alt:"Web-касса"},null,8,f)]),title:a(()=>[t("b",null,[c(d,{to:e.to},{default:a(()=>[u(r(e.title),1)]),_:2},1032,["to"])])]),content:a(()=>[t("p",null,r(e.content),1)]),_:2},1024)),64))])])}}};export{B as default};