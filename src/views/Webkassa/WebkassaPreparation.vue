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
        <div class="border-t border-b border-sky-500 p-2 my-4">
            <p>Электронный адрес технической поддержки PSP: info@psp.uz</p>
        </div>
        <p class="my-4">
            Для начала технической интеграции необходимо передать Вашему менеджеру следующую
            информацию:
        </p>
        <ul class="list-disc ml-5 my-2">
            <li class="my-1">Название Вашей компании</li>
            <li class="my-1">Название Вашего сайта</li>
            <li class="my-1">Логотип Вашего сайта ( min 500x500 )</li>
        </ul>
        <p>
            <b
                >После регистрации Вашего проекта техническая поддержка сообщит Вам следующую
                информацию для доступа к кабинету:</b
            >
        </p>
        <DataTable :rowHover="true" class="my-4" :value="table" tableStyle="min-width: 50rem">
            <Column field="param" header="Параметр"></Column>
            <Column field="description" header="Описание"></Column>
        </DataTable>
        <BlockPagination
            :prev="{ label: 'Общие сведения', name: 'webkassa-introduction' }"
            :next="{ label: 'Этап 2. Открытие Web-кассы', name: 'webkassa-open' }"
        />
    </div>
</template>
<style></style>
