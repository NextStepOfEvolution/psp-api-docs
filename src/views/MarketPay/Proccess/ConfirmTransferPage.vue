<script setup>
const confirmTransferRequestTable = {
    data: [
        {
            property: 'transaction_id',
            type: 'INTEGER',
            required: '+',
            description:
                'ID транзакции, переданный в ответе метода marketplace.pay или marketplace.confirm_pay'
        },
        {
            property: 'org_account',
            type: 'STRING',
            required: '+',
            description: 'Банковский р/с под мерчанта'
        },
        {
            property: 'org_mfo',
            type: 'STRING',
            required: '+',
            description: 'МФО банка под мерчанта'
        }
    ],
    columns: {
        property: 'Свойство',
        type: 'Тип',
        required: 'Обязательное',
        description: 'Описание'
    }
};
const confirmTransferResponseTable = {
    data: [
        {
            property: 'payment_number',
            type: 'INTEGER',
            required: '+',
            description: 'Номер реквизитной транзакции'
        },
        {
            property: 'payment_status',
            type: 'INTEGER',
            required: '+',
            description:
                'Статус реквизитной транзакции -1 - ошбика. Обратитесь в службу поддержки PSP. 1 - в ожидании. Будет автоматически проведена повторная попытка перевода. 2 - завершено.'
        },
        {
            property: '1629000',
            type: 'INTEGER',
            required: '+',
            description: 'Сумма поступления на счет под мерчанта в тийинах.'
        }
    ],
    columns: {
        property: 'Свойство',
        type: 'Тип',
        required: 'Обязательное',
        description: 'Описание'
    }
};
const confirmTransferPayRequestExampleCode =
    '{  "id": 25,  "method": "marketplace.confirm_transfer",  "params": {    "transaction_id": "2224168",    "org_account": "20208033800590850000",    "org_mfo": "01100"  }}';
const confirmTransferPayResponseExampleCode =
    '{  "error": null,  "result": {    "details": {      "payment_number": "f90046713473982df67b7874c1ad0fa3",      "payment_status": 2,      "amount": "1629000"    }  }}';
</script>
<template>
    <div class="">
        <h2 class="text-2xl font-bold my-2">Подтверждение захолдированной транзакции.</h2>
        <p class="my-4">
            Данный метод подтверждает перевод захолдированной транзакции под мерчанту
        </p>
        <p class="my-4">
            Название метода
            <PrimeChip>
                <ClipBoard
                    successMessage="Название метода скопированно"
                    errorMessage="Ошибка при копировании"
                    >marketplace.confirm_transfer
                </ClipBoard>
            </PrimeChip>
        </p>
        <p class="my-4"><b>Параметры запроса</b></p>
        <DataTable
            :rowHover="true"
            class="my-4"
            :value="confirmTransferRequestTable.data"
            tableStyle="min-width: 50rem"
        >
            <Column
                v-for="(value, key, index) in confirmTransferRequestTable.columns"
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
            :value="confirmTransferResponseTable.data"
            tableStyle="min-width: 50rem"
        >
            <Column
                v-for="(value, key, index) in confirmTransferResponseTable.columns"
                v-bind:key="index"
                :field="key"
                :header="value"
            >
            </Column>
        </DataTable>
        <p class="my-4"><b>Пример запроса</b></p>
        <CodeBlock
            :code="confirmTransferPayRequestExampleCode"
            :highlightjs="true"
            :persistentCopyButton="true"
            lang="json"
            theme="atom-one-dark"
        >
        </CodeBlock>
        <p class="my-4"><b>Пример ответа</b></p>
        <CodeBlock
            :code="confirmTransferPayResponseExampleCode"
            :highlightjs="true"
            :persistentCopyButton="true"
            lang="json"
            theme="atom-one-dark"
        >
        </CodeBlock>
        <BlockPagination
            :prev="{
                label: 'Оплата с сохраненной картой',
                name: 'market-pay-proccess-pay'
            }"
            :next="{
                label: 'Отмена захолдированной транзакции',
                name: 'market-pay-proccess-reverse'
            }"
        />
    </div>
</template>
