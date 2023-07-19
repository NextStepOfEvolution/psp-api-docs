import{r as o,o as c,c as u,b as l,w as a,a as e,d as t,u as N,e as i}from"./index-afd8048a.js";const R=`<?php 
// Generator of a terminal request URL as HTML button. PHP example.
const URL = 'https://agr.uz/sandbox'; // Request target URL
const SECRET_KEY = '#Feiz!ahdahweig7?Choot#3AiL6p--ooF6e'; // Your site SECRET_KEY

// Array of input parameters
$params = array(
    'VENDOR_ID' => '1591864',
    'MERCHANT_TRANS_ID' => 'AB772059',
    'MERCHANT_TRANS_AMOUNT' => '1000',
    'MERCHANT_CURRENCY' => 'sum',
    'MERCHANT_TRANS_NOTE' => 'transaction_note_example',
    'SIGN_TIME' => '1480056082732',
 );
$params['SIGN_STRING'] = md5(SECRET_KEY . $params['VENDOR_ID'] . $params['MERCHANT_TRANS_ID'] . $params['MERCHANT_TRANS_AMOUNT'] . $params['MERCHANT_CURRENCY'] . $params['SIGN_TIME']); // Signature adding


// Choose one of two options below

// GET request option. It may not work in IE with more than 2kb transfered data
$url = URL .'?'. http_build_query($params);
echo "<button onclick="location.href='{$url}';">Send</button>";

// POST request option
?>
<form method="post" action="<?=URL;?>">
<?php foreach ($params as $name => $value): ?>
    <input type="hidden" name="<?=$name; ?>" value="<?=$value;?>">
<?php endforeach;?>
    <button type="submit">Send</button>
</form>`,T={class:""},b=e("h2",{class:"text-2xl font-bold my-4"},"Этап 2. Открытие платежного Web-терминала",-1),E=e("h3",{class:"text-xl font-bold my-2"},"Запрос на открытие Web-терминала",-1),h=e("p",{class:"my-4"}," Перед началом интеграции Вам необходимо подготовить инструмент для создания запросов на открытие Web-терминала. Для этого, например, можно использовать форму с кнопкой на вашем сайте, которая будет собирать базовые параметры и отправлять пользователя на платежный Web-терминал. При нажатии на кнопку, пользователь должен быть перенаправлен POST или GET http-запросом на URL-адрес. ",-1),A=e("p",{class:"my-4"}," Для Вашего удобства все тестирование проходит в песочнице (sandbox) нашей системы. ",-1),C=e("a",{href:"https://agr.uz/sandbox"},[e("b",null,"https://agr.uz/sandbox")],-1),f=i('<p class="my-4">Вы можете осуществить открытие Web-терминала в 3 этапа:</p><ul class="list-disc"><li class="ml-10">собрать необходимые минимальные данные для осуществления платежа;</li><li class="ml-10">рассчитать подпись (signature);</li><li class="ml-10">перенаправить пользователя на https://agr.uz/sandbox</li></ul>',2),M=e("h3",{class:"text-xl font-bold my-2"}," Минимальный набор параметров для открытия Web-терминала. ",-1),S=e("p",{class:"my-4"}," Все транзакции проводятся в рамках какого-либо заказа. Если при открытии Web-терминала запроса на создание заказа не поступало, он будет создан автоматически. Если же заказ был предварительно создан, то важно, чтобы сумма и валюта в запросе на открытие Web-терминала совпадали с соответствующими параметрами в созданном заказе. ",-1),I=e("h3",{class:"text-xl font-bold my-2"},"Пример запроса",-1),x=e("div",null,[e("p",null,[e("b",null,"VENDOR_ID"),t("=1591864")]),e("p",null,[e("b",null,"MERCHANT_TRANS_ID"),t("=AB772059")]),e("p",null,[e("b",null,"MERCHANT_TRANS_AMOUNT"),t("=1000")]),e("p",null,[e("b",null,"MERCHANT_CURRENCY"),t("=sum")]),e("p",null,[e("b",null,"MERCHANT_TRANS_NOTE"),t("=transaction_note_example")]),e("p",null,[e("b",null,"MERCHANT_TRANS_RETURN_URL"),t("=http://site.com")]),e("p",null,[e("b",null,"SIGN_TIME"),t("=1480056082732")]),e("p",null,[e("b",null,"SIGN_STRING"),t("=2e483be74e568b4d7d4a7d9421f404fc")])],-1),y=i('<h3 class="text-xl font-bold my-2">Расчёт подписи (параметр SIGN_STRING).</h3><p class="my-4"> Подпись – 32 разрядное шестнадцатеричное число, сформированная односторонним кодированием. Данную строку нельзя декодировать или самостоятельно сгенерировать, не зная всех необходимых составляющих. </p><p class="my-4"> Для формирования подписи используется MD5 - 128-битный алгоритм хеширования. </p><h3 class="text-xl font-bold my-2">Алгоритм формирования подписи.</h3><ul class="list-decimal ml-5"><li><p>Формируется строка на подпись:</p><p class="border-t border-b border-sky-500 p-2 my-4"> Параметры (SECRET_KEY, VENDOR_ID, MERCHANT_TRANS_ID, MERCHANT_TRANS_AMOUNT, MERCHANT_CURRENCY, SIGN_TIME) последовательно соединяются в одну строку (конкатенация) с без использованием символа-разделителя между ними. </p></li><li><p>От полученной строки берется MD5 хэш.</p></li></ul><h3 class="text-xl font-bold my-4">Правила формирования подписи.</h3><ul class="list-decimal ml-5"><li>Кодировка подписываемой строки – UTF-8;</li></ul><h3 class="text-xl font-bold my-4"> Примеры реализации запроса на языках программирования. </h3>',8),H=e("h3",{class:"text-xl font-bold my-2"},"Пример запроса",-1),U=e("div",null,[e("p",null,[e("b",null,"VENDOR_ID"),t("=1591864")]),e("p",null,[e("b",null,"MERCHANT_TRANS_ID"),t("=AB772059")]),e("p",null,[e("b",null,"MERCHANT_TRANS_AMOUNT"),t("=1000")]),e("p",null,[e("b",null,"MERCHANT_CURRENCY"),t("=sum")]),e("p",null,[e("b",null,"MERCHANT_TRANS_NOTE"),t("=transaction_note_example")]),e("p",null,[e("b",null,"MERCHANT_TRANS_RETURN_URL"),t("=http://site.com")]),e("p",null,[e("b",null,"SIGN_TIME"),t("=1480056082732")]),e("p",null,[e("b",null,"SIGN_STRING"),t("=2e483be74e568b4d7d4a7d9421f404fc")])],-1),g=e("p",{class:"my-2"},[t(" В данном примере строка для формирования подписи: "),e("b",null,"#Feiz!ahdahweig7?Choot#3AiL6p--ooF6e1591864AB7720591000sum1480056082732")],-1),D=e("p",{class:"my-2"},[t(" В результате MD5 хэширования этой строки - полученная подпись: "),e("b",null,"2e483be74e568b4d7d4a7d9421f404fc")],-1),v={__name:"WebTerminalOpening",setup(O){const r=[{param:"VENDOR_ID",format:"integer",is_required:"да",description:"Идентификатор сайта в системе",example:"1591864"},{param:"MERCHANT_TRANS_ID",format:"string (256)",is_required:"да",description:"Уникальный идентификатор заказа в системе Мерчанта.",example:"AB772059"},{param:"MERCHANT_TRANS_AMOUNT",format:"integer",is_required:"да",description:"Сумма платежа",example:"1000"},{param:"MERCHANT_CURRENCY",format:"string (10)",is_required:"да",description:"Валюта покупки.",example:"sum"},{param:"MERCHANT_TRANS_NOTE",format:"string",is_required:"да",description:"Текстовый комментарий к проведенной операции",example:"transaction_note_example"},{param:"MERCHANT_TRANS_DATA",format:"string (base64)",is_required:"нет",description:"Детали платежа для Мерчанта. Возвращается Мерчанту",example:"eyJrZXkxIjoidmFsdWUxIiwia2V5MiI6InZhbHVlMiJ9"},{param:"MERCHANT_TRANS_RETURN_URL",format:"string",is_required:"нет",description:"Ссылка для возврата, cм. Возврат пользователя с Web-терминала",example:"http://site.com"},{param:"SIGN_TIME",format:"integer",is_required:"да",description:"Текущее время в миллисекундах",example:"1480056082732"},{param:"SIGN_STRING",format:"string (md5)",is_required:"да",description:"Подпись запроса, cм. Правила формирования подписи запроса",example:"2e483be74e568b4d7d4a7d9421f404fc"}];return(G,q)=>{const _=o("InlineMessage"),n=o("Column"),p=o("DataTable"),s=o("PrimeChip"),m=o("CodeBlock"),d=o("BlockPagination");return c(),u("div",T,[b,E,h,A,l(_,{severity:"warn"},{default:a(()=>[t(" Тестовый режим предназначен для проведения тестовых транзакций и проверки корректности работы системы. "),C]),_:1}),f,l(p,{rowHover:!0,class:"my-4",value:r},{default:a(()=>[l(n,{field:"param",header:"Параметр"}),l(n,{field:"format",header:"Формат"}),l(n,{field:"is_required",header:"Обязательное"}),l(n,{field:"description",header:"Описание"}),l(n,{field:"example",header:"Пример"})]),_:1}),M,e("p",null,[t(" Для открытия Web-терминала Вам достаточно отправлять 7 обязательных параметров: "),l(s,{class:"my-1"},{default:a(()=>[t("VENDOR_ID")]),_:1}),t(", "),l(s,{class:"my-1"},{default:a(()=>[t("MERCHANT_TRANS_ID")]),_:1}),t(", "),l(s,{class:"my-1"},{default:a(()=>[t("MERCHANT_TRANS_AMOUNT")]),_:1}),t(", "),l(s,{class:"my-1"},{default:a(()=>[t("MERCHANT_CURRENCY")]),_:1}),t(", "),l(s,{class:"my-1"},{default:a(()=>[t("MERCHANT_TRANS_NOTE")]),_:1}),t(", "),l(s,{class:"my-1"},{default:a(()=>[t("SIGN_TIME")]),_:1}),t(", "),l(s,{class:"my-1"},{default:a(()=>[t("SIGN_STRING")]),_:1}),t(". ")]),S,I,l(_,{severity:"info my-2"},{default:a(()=>[x]),_:1}),y,l(m,{code:N(R),highlightjs:!0,persistentCopyButton:!0,lang:"php",theme:"atom-one-dark"},null,8,["code"]),H,l(_,{severity:"info my-2"},{default:a(()=>[U]),_:1}),g,D,l(d,{prev:{label:"Этап 1. Подготовка к интеграции",name:"web-terminal-preparation"},next:{label:"Дополнительные возможности",name:"web-terminal-additional-features"}},null,8,["prev"])])}}};export{v as default};
