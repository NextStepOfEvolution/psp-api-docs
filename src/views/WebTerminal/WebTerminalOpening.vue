<script setup>
import webterminalOpenCode from './webterminal_open_code.js';
const table = [
    {
        param: 'VENDOR_ID',
        format: 'integer',
        is_required: 'да',
        description: 'Идентификатор сайта в системе',
        example: '1591864'
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
        example: '1000'
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
        format: 'string',
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
        description: 'Ссылка для возврата, cм. Возврат пользователя с Web-терминала',
        example: 'http://site.com'
    },
    {
        param: 'SIGN_TIME',
        format: 'integer',
        is_required: 'да',
        description: 'Текущее время в миллисекундах',
        example: '1480056082732'
    },
    {
        param: 'SIGN_STRING',
        format: 'string (md5)',
        is_required: 'да',
        description: 'Подпись запроса, cм. Правила формирования подписи запроса',
        example: '2e483be74e568b4d7d4a7d9421f404fc'
    }
];
</script>
<template>
    <div class="">
        <h2 class="text-2xl font-bold my-4">Этап 2. Открытие платежного Web-терминала</h2>
        <h3 class="text-xl font-bold my-2">Запрос на открытие Web-терминала</h3>
        <p class="my-4">
            Перед началом интеграции Вам необходимо подготовить инструмент для создания запросов на
            открытие Web-терминала. Для этого, например, можно использовать форму с кнопкой на вашем
            сайте, которая будет собирать базовые параметры и отправлять пользователя на платежный
            Web-терминал. При нажатии на кнопку, пользователь должен быть перенаправлен POST или GET
            http-запросом на URL-адрес.
        </p>
        <p class="my-4">
            Для Вашего удобства все тестирование проходит в песочнице (sandbox) нашей системы.
        </p>
        <InlineMessage severity="warn">
            Тестовый режим предназначен для проведения тестовых транзакций и проверки корректности
            работы системы.
            <a href="https://agr.uz/sandbox"><b>https://agr.uz/sandbox</b></a>
        </InlineMessage>
        <p class="my-4">Вы можете осуществить открытие Web-терминала в 3 этапа:</p>
        <ul class="list-disc">
            <li class="ml-10">собрать необходимые минимальные данные для осуществления платежа;</li>
            <li class="ml-10">рассчитать подпись (signature);</li>
            <li class="ml-10">перенаправить пользователя на https://agr.uz/sandbox</li>
        </ul>
        <DataTable :rowHover="true" class="my-4" :value="table">
            <Column field="param" header="Параметр"></Column>
            <Column field="format" header="Формат"></Column>
            <Column field="is_required" header="Обязательное"></Column>
            <Column field="description" header="Описание"></Column>
            <Column field="example" header="Пример"></Column>
        </DataTable>
        <h3 class="text-xl font-bold my-2">
            Минимальный набор параметров для открытия Web-терминала.
        </h3>
        <p>
            Для открытия Web-терминала Вам достаточно отправлять 7 обязательных параметров:
            <PrimeChip class="my-1">VENDOR_ID</PrimeChip>,
            <PrimeChip class="my-1">MERCHANT_TRANS_ID</PrimeChip>,
            <PrimeChip class="my-1">MERCHANT_TRANS_AMOUNT</PrimeChip>,
            <PrimeChip class="my-1">MERCHANT_CURRENCY</PrimeChip>,
            <PrimeChip class="my-1">MERCHANT_TRANS_NOTE</PrimeChip>,
            <PrimeChip class="my-1">SIGN_TIME</PrimeChip>,
            <PrimeChip class="my-1">SIGN_STRING</PrimeChip>.
        </p>
        <p class="my-4">
            Все транзакции проводятся в рамках какого-либо заказа. Если при открытии Web-терминала
            запроса на создание заказа не поступало, он будет создан автоматически. Если же заказ
            был предварительно создан, то важно, чтобы сумма и валюта в запросе на открытие
            Web-терминала совпадали с соответствующими параметрами в созданном заказе.
        </p>
        <h3 class="text-xl font-bold my-2">Пример запроса</h3>
        <InlineMessage severity="info my-2">
            <div>
                <p><b>VENDOR_ID</b>=1591864</p>
                <p><b>MERCHANT_TRANS_ID</b>=AB772059</p>
                <p><b>MERCHANT_TRANS_AMOUNT</b>=1000</p>
                <p><b>MERCHANT_CURRENCY</b>=sum</p>
                <p><b>MERCHANT_TRANS_NOTE</b>=transaction_note_example</p>
                <p><b>MERCHANT_TRANS_RETURN_URL</b>=http://site.com</p>
                <p><b>SIGN_TIME</b>=1480056082732</p>
                <p><b>SIGN_STRING</b>=2e483be74e568b4d7d4a7d9421f404fc</p>
            </div>
        </InlineMessage>
        <!-- <div class="flex justify-center"> 
            <Card>
                <template #content>
                    <form class="" action="#">
                        <div class="flex flex-wrap align-items-center mb-3 gap-2">
                            <label for="VENDOR_ID" class="p-sr-only">VENDOR_ID</label>
                            <InputText id="VENDOR_ID" placeholder="VENDOR_ID" class="p-invalid" />
                            <InlineMessage>VENDOR_ID</InlineMessage>
                        </div>
                        <div class="flex flex-wrap align-items-center mb-3 gap-2">
                            <label for="MERCHANT_TRANS_ID" class="p-sr-only">MERCHANT_TRANS_ID</label>
                            <InputText
                                id="MERCHANT_TRANS_ID"
                                placeholder="MERCHANT_TRANS_ID"
                                class="p-invalid"
                            />
                            <InlineMessage>MERCHANT_TRANS_ID</InlineMessage>
                        </div>
                        <div class="flex flex-wrap align-items-center mb-3 gap-2">
                            <label for="MERCHANT_TRANS_AMOUNT" class="p-sr-only"
                                >MERCHANT_TRANS_AMOUNT</label
                            >
                            <InputText
                                id="MERCHANT_TRANS_AMOUNT"
                                placeholder="MERCHANT_TRANS_AMOUNT"
                                class="p-invalid"
                            />
                            <InlineMessage>MERCHANT_TRANS_AMOUNT</InlineMessage>
                        </div>
                        <div class="flex flex-wrap align-items-center mb-3 gap-2">
                            <label for="MERCHANT_CURRENCY" class="p-sr-only">MERCHANT_CURRENCY</label>
                            <InputText
                                id="MERCHANT_CURRENCY"
                                placeholder="MERCHANT_CURRENCY"
                                class="p-invalid"
                            />
                            <InlineMessage>MERCHANT_CURRENCY</InlineMessage>
                        </div>
                        <div class="flex flex-wrap align-items-center mb-3 gap-2">
                            <label for="MERCHANT_TRANS_NOTE" class="p-sr-only"
                                >MERCHANT_TRANS_NOTE</label
                            >
                            <InputText
                                id="MERCHANT_TRANS_NOTE"
                                placeholder="MERCHANT_TRANS_NOTE"
                                class="p-invalid"
                            />
                            <InlineMessage>MERCHANT_TRANS_NOTE</InlineMessage>
                        </div>
                        <div class="flex flex-wrap align-items-center mb-3 gap-2">
                            <label for="SIGN_TIME" class="p-sr-only">SIGN_TIME</label>
                            <InputText id="SIGN_TIME" placeholder="SIGN_TIME" class="p-invalid" />
                            <InlineMessage>SIGN_TIME</InlineMessage>
                        </div>
                        <div class="flex flex-wrap align-items-center mb-3 gap-2">
                            <label for="SIGN_STRING" class="p-sr-only">SIGN_STRING</label>
                            <InputText id="SIGN_STRING" placeholder="SIGN_STRING" class="p-invalid" />
                            <InlineMessage>SIGN_STRING</InlineMessage>
                        </div>
                        <Button type="submit">Открыть</Button>
                    </form>
                </template>
            </Card>
        </div> -->
        <h3 class="text-xl font-bold my-2">Расчёт подписи (параметр SIGN_STRING).</h3>
        <p class="my-4">
            Подпись – 32 разрядное шестнадцатеричное число, сформированная односторонним
            кодированием. Данную строку нельзя декодировать или самостоятельно сгенерировать, не
            зная всех необходимых составляющих.
        </p>
        <p class="my-4">
            Для формирования подписи используется MD5 - 128-битный алгоритм хеширования.
        </p>
        <h3 class="text-xl font-bold my-2">Алгоритм формирования подписи.</h3>
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
        <CodeBlock
            :code="webterminalOpenCode"
            :highlightjs="true"
            :persistentCopyButton="true"
            lang="php"
            theme="atom-one-dark"
        />
        <h3 class="text-xl font-bold my-2">Пример запроса</h3>
        <InlineMessage severity="info my-2">
            <div>
                <p><b>VENDOR_ID</b>=1591864</p>
                <p><b>MERCHANT_TRANS_ID</b>=AB772059</p>
                <p><b>MERCHANT_TRANS_AMOUNT</b>=1000</p>
                <p><b>MERCHANT_CURRENCY</b>=sum</p>
                <p><b>MERCHANT_TRANS_NOTE</b>=transaction_note_example</p>
                <p><b>MERCHANT_TRANS_RETURN_URL</b>=http://site.com</p>
                <p><b>SIGN_TIME</b>=1480056082732</p>
                <p><b>SIGN_STRING</b>=2e483be74e568b4d7d4a7d9421f404fc</p>
            </div>
        </InlineMessage>
        <p class="my-2">
            В данном примере строка для формирования подписи:
            <b>#Feiz!ahdahweig7?Choot#3AiL6p--ooF6e1591864AB7720591000sum1480056082732</b>
        </p>
        <p class="my-2">
            В результате MD5 хэширования этой строки - полученная подпись:
            <b>2e483be74e568b4d7d4a7d9421f404fc</b>
        </p>
        <BlockPagination
            :prev="{
                label: 'Этап 1. Подготовка к интеграции',
                name: 'web-terminal-preparation'
            }"
            :next="{
                label: 'Дополнительные возможности',
                name: 'web-terminal-additional-features'
            }"
        />
    </div>
</template>
<style></style>
