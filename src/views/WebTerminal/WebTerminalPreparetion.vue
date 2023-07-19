<script setup>
const table = [
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
];
</script>
<template>
    <div class="">
        <h2 class="text-2xl font-bold my-4">Этап 1. Подготовка к интеграции</h2>
        <InlineMessage severity="info">
            Электронный адрес технической поддержки PSP:
            <a href="mailto:info@psp.uz"><b>info@psp.uz</b></a>
        </InlineMessage>
        <p class="my-4">
            <b
                >Для начала технической интеграции необходимо передать Вашему менеджеру следующую
                информацию:</b
            >
        </p>
        <ul class="list-disc">
            <li class="ml-10">Название Вашей компании</li>
            <li class="ml-10">Название Вашего сайта</li>
            <li class="ml-10">Логотип Вашего сайта ( 500x500 )</li>
        </ul>
        <p class="my-4">
            <b
                >После регистрации Вашего проекта техническая поддержка сообщит Вам следующую
                информацию для доступа к кабинету:</b
            >
        </p>
        <DataTable :rowHover="true" class="my-4" :value="table">
            <Column field="param" header="Параметр"></Column>
            <Column field="description" header="Описание"></Column>
        </DataTable>
        <BlockPagination
            :prev="{ label: 'Общие сведения', name: 'web-terminal-introduce' }"
            :next="{ label: 'Этап 2. Открытие платежного Web-терминала', name: 'web-terminal-opening' }"
        />
    </div>
</template>
<style></style>
