<script setup>
const paymentGatewayInfoRequest = {
    data: [
        {
            param: 'VENDOR_ID',
            format: 'INTEGER',
            description: 'ID Мерчанта в системе PaySys'
        },
        {
            param: 'SIGN_TIME',
            format: 'INTEGER',
            description: 'Текущее время в миллисекундах'
        },
        {
            param: 'SIGN_STRING',
            format: 'STRING',
            description:
                'Проверочная строка, подтверждающая подлинность отправляемого запроса. ХЭШ MD5 из следующих параметров: md5( SECRET_KEY . VENDOR_ID . SIGN_TIME ) SECRET_KEY – уникальная строка, выдаваемая Мерчанту при подключении.'
        }
    ],
    columns: {
        param: 'Параметр',
        format: 'Формат',
        description: 'Описание'
    }
};
const paymentGatewayInfoResponse = {
    data: [
        {
            param: 'ERROR',
            format: 'INTEGER',
            description: 'Код статуса. 0 – успешно. В случае ошибки возвращается код ошибки.'
        },
        {
            param: 'ERROR_NOTE',
            format: 'STRING',
            description: 'Описание кода.'
        },
        {
            param: 'VENDOR',
            format: 'OBJECT',
            description: 'Информации о Мерчанта.'
        }
    ],
    columns: {
        param: 'Параметр',
        format: 'Формат',
        description: 'Описание'
    }
};
const infoRequestCode = '{  "VENDOR_ID": 346272,  "SIGN_TIME": 1503638389658,  "SIGN_STRING": "5777e5ed6eda5b5cca3f56a90cf53e96"}';
const infoResponseCode = '{  "ERROR": "0",  "ERROR_NOTE": "success",  "VENDOR": {    "id": "346272",    "name": "SiteName",    "url": "https://site.uz/",    "logo": "https://agr.uz/img/site.png",    "description": "",    "status": "1",   "transaction_note": "Оплата услуг на сайте Site.uz"  }}';
</script>
<template>
    <div class="">
        <h2 class="text-2xl font-bold my-4">Этап 2. Отправка запроса на Платежный шлюз</h2>

        <p class="my-4">
            На сайте Мерчанта Пользователь выбирает оплату по банковской карте и заполняет данные
            карты. Система Мерчанта собирает эти данные, формирует и отправляет HTTP POST запрос на
            Платежный шлюз. Запрос передается в JSON формате.
        </p>
        <h2 class="text-xl font-bold my-4">Получения информации о Мерчанта</h2>
        <p class="my-4">
            URL Запроса
            <PrimeChip>
                <clip-board
                    :successMessage="'Ссылка успешно скопированна'"
                    :errorMessage="'Не удалось скопировать'"
                    >https://agr.uz/payment_gateway_api/get_vendor
                </clip-board>
            </PrimeChip>
        </p>
        <p class="my-4"><b>Параметры запроса</b></p>
        <DataTable
            :rowHover="true"
            class="my-4"
            :value="paymentGatewayInfoRequest.data"
            tableStyle="min-width: 50rem"
        >
            <Column
                v-for="(value, key, index) in paymentGatewayInfoRequest.columns"
                v-bind:key="index"
                :field="key"
                :header="value"
            >
            </Column>
        </DataTable>
        <p class="my-4"><b>Параметры ответа</b></p>
        <DataTable
            :rowHover="true"
            class="my-4"
            :value="paymentGatewayInfoResponse.data"
            tableStyle="min-width: 50rem"
        >
            <Column
                v-for="(value, key, index) in paymentGatewayInfoResponse.columns"
                v-bind:key="index"
                :field="key"
                :header="value"
            >
            </Column>
        </DataTable>
        <p class="my-4">
            <b>Пример запроса от Мерчанта:</b>
        </p>
        <CodeBlock
            :code="infoRequestCode"
            :persistentCopyButton="true"
            :highlightjs="true"
            lang="json"
            theme="atom-one-dark"
        >
        </CodeBlock>
        <p class="my-4">
            <b>Пример ответа от PSP:</b>
        </p> 
        <CodeBlock
            :code="infoResponseCode"
            :persistentCopyButton="true"
            :highlightjs="true"
            lang="json"
            theme="atom-one-dark"
        >
        </CodeBlock>
        <BlockPagination
            :prev="{ label: 'Этап 1. Подготовка к интеграции', name: 'payment-gateway-preparation' }" 
        />
    </div>
</template>
<style></style>
