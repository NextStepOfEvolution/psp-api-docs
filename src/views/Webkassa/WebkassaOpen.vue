<script setup>
import webkassaOpenExample from '@/views/Webkassa/webkassa_open.js';

// import 'prism-es6/components/prism-php';
// import 'prism-es6/components/prism-markup-templating';
const table = [
    {
        param: 'VENDOR_ID',
        format: 'integer',
        is_required: 'да',
        description: 'Идентификатор сайта в системе',
        example: 1591864
    },
    {
        param: 'MERCHANT_TRANS_ID',
        format: 'string (256)',
        is_required: 'да',
        description: 'Уникальный идентификатор заказа в системе Мерчанта.',
        example: 'AB772059'
    },
    {
        param: 'MERCHANT_TRANS_AMOUNT',
        format: 'integer',
        is_required: 'да',
        description: 'Сумма платежа',
        example: 1000
    },
    {
        param: 'MERCHANT_CURRENCY',
        format: 'string (10)',
        is_required: 'да',
        description: 'Валюта покупки.',
        example: 'sum'
    },
    {
        param: 'MERCHANT_TRANS_NOTE',
        format: 'string (256)',
        is_required: 'да',
        description: 'Текстовый комментарий к проведенной операции',
        example: 'transaction_note_example'
    },
    {
        param: 'MERCHANT_TRANS_DATA',
        format: 'string (base64)',
        is_required: 'нет',
        description: 'Детали платежа для Мерчанта. Возвращается Мерчанту',
        example: 'eyJrZXkxIjoidmFsdWUxIiwia2V5MiI6InZhbHVlMiJ9'
    },
    {
        param: 'MERCHANT_TRANS_RETURN_URL',
        format: 'string',
        is_required: 'нет',
        description: 'Ссылка для возврата, cм. Возврат пользователя с Web-кассы',
        example: 'http://site.com'
    },
    {
        param: 'SIGN_TIME',
        format: 'integer',
        is_required: 'да',
        description: 'Текущее время в миллисекундах',
        example: 1480056082732
    },
    {
        param: 'SIGN_STRING',
        format: 'string(md5)',
        is_required: 'да',
        description: 'Подпись запроса, cм. Правила формирования подписи запроса',
        example: '2e483be74e568b4d7d4a7d9421f404fc'
    }
];
</script>
<template>
    <div class="">
        <h2 class="text-2xl font-bold my-4">Этап 2. Открытие Web-кассы</h2>
        <h3 class="text-xl font-bold my-4">Запрос на получение ключа для открытия Web-кассы</h3>
        <p class="my-4">
            Перед началом интеграции Вам необходимо подготовить инструмент для создания запросов на
            открытие Web-кассы. Для этого, например, можно использовать форму с кнопкой на вашем
            сайте, которая будет собирать базовые параметры и отправлять пользователя на Web-кассу.
            При нажатии на кнопку, пользователь должен быть перенаправлен POST или GET http-запросом
            на URL-адрес. Для Вашего удобства все тестирование проходит в песочнице (sandbox) нашей
            системы.
        </p>
        <InlineMessage severity="warn my-3"
            >Тестовый режим предназначен для проведения тестовых транзакций и проверки корректности
            работы системы. https://agr.uz/sandbox</InlineMessage
        >
        <p>Вы можете осуществить открытие Web-кассы в 3 этапа:</p>
        <ul class="list-disc ml-5 my-4">
            <li>собрать необходимые минимальные данные для осуществления платежа;</li>
            <li>рассчитать подпись (signature);</li>
            <li>
                перенаправить пользователя на
                <a href="https://agr.uz/sandbox"><b>https://agr.uz/sandbox</b></a>
            </li>
        </ul>
        <h3 class="text-xl font-bold my-4">Минимальный набор параметров для открытия Web-кассы.</h3>
        <p>
            Для открытия Web-кассы Вам достаточно отправлять 7 обязательных параметров:
            <PrimeChip class="m-1">VENDOR_ID</PrimeChip>, <PrimeChip class="m-1">MERCHANT_TRANS_ID</PrimeChip>,
            <PrimeChip class="m-1">MERCHANT_TRANS_AMOUNT</PrimeChip>,
            <PrimeChip class="m-1">MERCHANT_CURRENCY</PrimeChip>,
            <PrimeChip class="m-1">MERCHANT_TRANS_NOTE</PrimeChip>, <PrimeChip class="m-1">SIGN_TIME</PrimeChip>,
            <PrimeChip class="m-1">SIGN_STRING</PrimeChip>,
        </p>
        <DataTable class="my-4 leading-5" :value="table" tableStyle="min-width: 50rem">
            <Column field="param" header="Параметр"></Column>
            <Column field="format" header="Формат"></Column>
            <Column field="is_required" header="Обязательный"></Column>
            <Column field="description" header="Описание"></Column>
            <Column field="example" header="Пример"></Column>
        </DataTable>
        <h3 class="text-xl font-bold my-4">Пример запроса.</h3>
        <InlineMessage severity="info my-3">
            <div>
                <p>
                    <b>VENDOR_ID</b>=1591864 MERCHANT_TRANS_ID=AB772059 MERCHANT_TRANS_AMOUNT=1000
                </p>
                <p><b>MERCHANT_CURRENCY</b>=sum MERCHANT_TRANS_NOTE=transaction_note_example</p>
                <p><b>MERCHANT_TRANS_DATA</b>=eyJrZXkxIjoidmFsdWUxIiwia2V5MiI6InZhbHVlMiJ9</p>
                <p><b>MERCHANT_TRANS_RETURN_URL</b>=http://site.com SIGN_TIME=1480056082732</p>
                <p><b>SIGN_STRING</b>=2e483be74e568b4d7d4a7d9421f404fc</p>
            </div>
        </InlineMessage>
        <h3 class="text-xl font-bold my-4">Расчёт подписи (параметр SIGN_STRING).</h3>
        <p class="my-4">
            Подпись – 32 разрядное шестнадцатеричное число, сформированная односторонним
            кодированием. Данную строку нельзя декодировать или самостоятельно сгенерировать, не
            зная всех необходимых составляющих.
        </p>
        <p>Для формирования подписи используется MD5 - 128-битный алгоритм хеширования.</p>
        <h3 class="text-xl font-bold my-4">Алгоритм формирования подписи.</h3>

        <ul class="list-decimal ml-5">
            <li>
                <p>Формируется строка на подпись:</p>
                <p class="border-t border-b border-sky-500 p-2 my-4">
                    Параметры (SECRET_KEY, VENDOR_ID, MERCHANT_TRANS_ID, MERCHANT_TRANS_AMOUNT,
                    MERCHANT_CURRENCY, SIGN_TIME) последовательно соединяются в одну строку
                    (конкатенация) с без использованием символа-разделителя между ними.
                </p>
            </li>
            <li>
                <p>От полученной строки берется MD5 хэш.</p>
            </li>
        </ul>
        <h3 class="text-xl font-bold my-4">Правила формирования подписи.</h3>
        <ul class="list-decimal ml-5">
            <li>Кодировка подписываемой строки – UTF-8;</li>
        </ul>
        <h3 class="text-xl font-bold my-4">
            Примеры реализации запроса на языках программирования.
        </h3>
        <div v-highlight>
            <pre class="language-php">
                <code>{{ webkassaOpenExample.trim() }}</code>
            </pre>
        </div>
        <!-- <HighCode langName="php">
            {{ webkassaOpenExample.trim() }}
        </HighCode> -->
        <h3 class="text-xl font-bold my-4">Пример запроса.</h3>
        <InlineMessage severity="info my-3">
            <div>
                <p><b>VENDOR_ID</b>=1591864</p>
                <p><b>MERCHANT_TRANS_ID</b>=AB772059</p>
                <p><b>MERCHANT_TRANS_AMOUNT</b>=1000</p>
                <p><b>MERCHANT_CURRENCY</b>=sum</p>
                <p><b>MERCHANT_TRANS_NOTE</b>=transaction_note_example</p>
                <p><b>MERCHANT_TRANS_DATA</b>=eyJrZXkxIjoidmFsdWUxIiwia2V5MiI6InZhbHVlMiJ9</p>
                <p><b>MERCHANT_TRANS_RETURN_URL</b>=http://site.com</p>
                <p><b>SIGN_TIME</b>=1480056082732</p>
                <p><b>SIGN_STRING</b>=2e483be74e568b4d7d4a7d9421f404fc</p>
            </div>
        </InlineMessage>
        <p class="my-4">
            В данном примере строка для формирования подписи:
            #Feiz!ahdahweig7?Choot#3AiL6p--ooF6e1591864AB7720591000sum1480056082732
        </p>
        <p class="my-4">
            В результате MD5 хэширования этой строки - полученная подпись:
            <PrimeChip>2e483be74e568b4d7d4a7d9421f404fc</PrimeChip>
        </p>
    </div>
</template>
<style></style>
