<script setup>
const paymentGatewayPreparationTable = {
    data: [
        {
            param: 'URL',
            description: 'https://agr.uz'
        },
        {
            param: 'Логин',
            description: 'Имя (идентификатор) учётной записи пользователя в системе PSP'
        },
        {
            param: 'Пароль',
            description:
                'Условное слово или набор знаков, предназначенный для подтверждения личности или полномочий.'
        }
    ],
    columns: {
        param: 'Параметр',
        description: 'Описание'
    }
};
</script>
<template>
    <div class="">
        <h2 class="text-2xl font-bold my-4">Этап 1. Подготовка к интеграции</h2>
        <p class="my-4">
            Платежный шлюз PSP представляет набор адресов и параметров, позволяющих осуществлять
            запросы напрямую согласно API
        </p>
        <div class="border-t border-b border-sky-500 p-2 my-4">
            <p>Электронный адрес технической поддержки PSP: info@psp.uz</p>
        </div>
        <InlineMessage severity="info">
            Электронный адрес технической поддержки PSP: <a href="mailto:support@PSP.uz"><b>support@PSP.uz</b></a>
        </InlineMessage>
        <p class="my-4">
            Для начала технической интеграции необходимо передать Вашему менеджеру следующую
            информацию:
        </p>
        <ul class="list-disc ml-5 my-2">
            <li class="my-1">Название Вашей компании</li>
            <li class="my-1">Название Вашего сайта</li>
            <li class="my-1">Логотип Вашего сайта ( min 500x500 )</li>
        </ul>
        <p class="my-4">
            <b>
                После регистрации Вашего проекта техническая поддержка сообщит Вам следующую
                информацию для доступа к кабинету:
            </b>
        </p> 
        <DataTable :rowHover="true" class="my-4" :value="paymentGatewayPreparationTable.data" tableStyle="min-width: 50rem">
            <Column
                v-for="(value, key, index) in paymentGatewayPreparationTable.columns"
                v-bind:key="index"
                :field="key"
                :header="value"
            >
            </Column>
        </DataTable>
        <BlockPagination
            :prev="{ label: 'Этап 1. Подготовка к интеграции', name: 'payment-gateway-preparation' }"
            :next="{ label: 'Этап 2. Отправка запроса на Платежный шлюз', name: 'payment-gateway-sending-request' }"
        />
    </div>
</template>
<style></style>
