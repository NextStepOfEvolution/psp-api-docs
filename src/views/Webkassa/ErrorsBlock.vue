<script setup>
import { ref } from 'vue';

const pspErrorsTable = ref([
    { error: 0, error_note: 'Success', description: 'Успешный запрос' },
    { error: '< 0', error_note: 'Описание ошибки', description: 'Ошибка' }
]);
const merchantErrorsTable = ref([
    { error: 0, error_note: 'Success', description: 'Успешный запрос' },
    { error: -1, error_note: 'SIGN CHECK FAILED!', description: 'Ошибка проверки подписи' },
    { error: -2, error_note: 'Incorrect parameter amount', description: 'Неверная сумма оплаты' },
    { error: -3, error_note: 'Action not found', description: 'Запрашиваемое действие не найдено' },
    {
        error: -4,
        error_note: 'Already paid',
        description:
            'Транзакция ранее была подтверждена (при попытке подтвердить или отменить ранее подтвержденную транзакцию)'
    },
    {
        error: -5,
        error_note: 'User does not exist',
        description: 'Не найден пользователь/заказ (проверка параметра merchant_trans_id)'
    },
    {
        error: -6,
        error_note: 'Transaction does not exist',
        description: 'Не найдена транзакция (проверка параметра merchant_prepare_id)'
    },
    {
        error: -7,
        error_note: 'Failed to update user',
        description: 'Ошибка при изменении данных пользователя (изменение баланса счета и т.п.)'
    },
    {
        error: -8,
        error_note: 'Error in request from PSP',
        description: 'Ошибка в запросе от PSP (переданы не все параметры и т.п.)'
    },
    {
        error: -9,
        error_note: 'Transaction cancelled',
        description:
            'Транзакция ранее была отменена (При попытке подтвердить или отменить ранее отмененную транзакцию)'
    },
    {
        error: -10,
        error_note: 'The vendor is not found',
        description: 'Поставщик не найден в системе'
    },
    {
        error: -11,
        error_note: 'Transaction type is not correct',
        description: 'Не правильный тип транзакции'
    }
]);
</script>
<template>
    <div>
        <h2 class="text-2xl font-bold my-4">Ошибки</h2>
        <InlineMessage severity="warn">
            Если Вы не смогли устранить ошибку самостоятельно, Вам необходимо обратиться в службу
            технической поддержки PSP по адресу: <a href="mailto:info@psp.uz">info@psp.uz</a>.
        </InlineMessage>
        <h2 class="text-xl font-bold my-4">Коды ошибок возвращаемые системой PSP</h2>
        <DataTable
            :rowHover="true"
            class="my-4 leading-5"
            :value="pspErrorsTable"
            tableStyle="min-width: 50rem"
        >
            <Column field="error" header="Номер ошибки"></Column>
            <Column field="error_note" header="Примечание об ошибке"></Column>
            <Column field="description" header="Описание"></Column>
        </DataTable>
        <h2 class="text-2xl font-bold my-4">Коды ошибок возвращаемые системой Мерчанта</h2>
        <DataTable
            :rowHover="true"
            class="my-4 leading-5"
            :value="merchantErrorsTable"
            tableStyle="min-width: 50rem"
        >
            <Column field="error" header="Номер ошибки"></Column>
            <Column field="error_note" header="Примечание об ошибке"></Column>
            <Column field="description" header="Описание"></Column>
        </DataTable>
        <BlockPagination class=""
            :prev="{ label: 'Дополнительные возможности', name: 'webkassa-additional-features' }" 
        />
    </div>
</template>
<style></style>
