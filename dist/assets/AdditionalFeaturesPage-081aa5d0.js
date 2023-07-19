import{r as o,o as r,c as i,b as t,u as m,w as s,a as e,d as _}from"./index-afd8048a.js";const d=e("h2",{class:"text-2xl font-bold my-4"},"Дополнительные возможности",-1),h=e("h3",{class:"text-xl font-bold my-4"},"Web-касса iFrame",-1),p=e("p",{class:"my-4"}," iFrame - это режим работы стандартной Web-кассы, который позволяет отобразить окно Web-кассы внутри одного фрейма на Вашем Web сайте. ",-1),u=e("p",{class:"text-xl my-4"},[e("b",null,"Пример вставки iframe кода на странице.")],-1),N=`<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    </head>
    <body>
        <iframe
            src="https://[адрес Терминала]/?VENDOR_ID=..."
            width="400"
            height="600"
            align="center"
            NORESIZE
            >Ваш браузер не поддерживает фреймы!
        </iframe>
    </body>
</html>`,g={__name:"AdditionalFeaturesPage",setup(b){const n=JSON.stringify({VENDOR_ID:"1591864",MERCHANT_TRANS_ID:"maks",MERCHANT_TRANS_AMOUNT:"12000",MERCHANT_CURRENCY:"sum",MERCHANT_TRANS_NOTE:"transaction_note_example",SIGN_TIME:1480056082732,SIGN_STRING:"2e483be74e568b4d7d4a7d9421f404fc"});return(f,C)=>{const a=o("CodeBlock"),l=o("InlineMessage"),c=o("BlockPagination");return r(),i("div",null,[d,h,p,t(a,{code:m(n),highlightjs:!0,persistentCopyButton:!0,lang:"json",theme:"atom-one-dark"},null,8,["code"]),u,t(l,{severity:"warn"},{default:s(()=>[_(" Минимальный размер iframe - 390×400. ")]),_:1}),t(a,{class:"my-4",code:N,highlightjs:!0,persistentCopyButton:!0,lang:"html",theme:"atom-one-dark"},{code:s(()=>[]),_:1}),t(c,{class:"",prev:{label:"Этап 5. Перевод в боевой режим",name:"webkassa-goto-prodiction"},next:{label:"Ошибки",name:"webkassa-errors"}},null,8,["prev"])])}}};export{g as default};
