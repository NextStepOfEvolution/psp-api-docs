import{r as o,o as i,c as r,d as t,u as _,w as n,a as e,e as m}from"./index-ff2b9fe3.js";const d=e("h2",{class:"text-2xl font-bold my-4"},"Дополнительные возможности",-1),h=e("h3",{class:"text-xl font-bold my-4"},"Web-терминал iFrame",-1),p=e("p",{class:"my-4"}," iFrame - это режим работы стандартного Web-терминала, который позволяет отобразить окно Web-терминала внутри одного фрейма на Вашем Web сайте ",-1),u=e("p",{class:"text-xl my-4"},[e("b",null,"Пример вставки iframe кода на странице.")],-1),N=`<!DOCTYPE html>
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
</html>`,b={__name:"AdditionalFeaturesPage",setup(f){const s=JSON.stringify({VENDOR_ID:"1591864",MERCHANT_TRANS_ID:"maks",MERCHANT_TRANS_AMOUNT:"12000",MERCHANT_CURRENCY:"sum",MERCHANT_TRANS_NOTE:"transaction_note_example",SIGN_TIME:1480056082732,SIGN_STRING:"2e483be74e568b4d7d4a7d9421f404fc"});return(C,T)=>{const a=o("CodeBlock"),l=o("InlineMessage"),c=o("BlockPagination");return i(),r("div",null,[d,h,p,t(a,{code:_(s),highlightjs:!0,persistentCopyButton:!0,lang:"json",theme:"atom-one-dark"},null,8,["code"]),u,t(l,{severity:"warn"},{default:n(()=>[m(" Минимальный размер iframe - 390×400. ")]),_:1}),t(a,{class:"my-4",code:N,highlightjs:!0,persistentCopyButton:!0,lang:"html",theme:"atom-one-dark"},{code:n(()=>[]),_:1}),t(c,{class:"",prev:{label:"Этап 5. Перевод в боевой режим",name:"webkassa-goto-prodiction"}},null,8,["prev"])])}}};export{b as default};
