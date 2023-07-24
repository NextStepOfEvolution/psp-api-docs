<script setup>
const confirmPayPayRequestTable = {
    data: [
        {
            property: 'confirmation_code',
            type: 'INTEGER',
            required: '+',
            description: 'Код смс подтверждения'
        },
        {
            property: 'bank_transaction_id',
            type: 'INTEGER',
            required: '+',
            description: 'ID транзакции в банке'
        }
    ],
    columns: {
        property: 'Свойство',
        type: 'Тип',
        required: 'Обязательное',
        description: 'Описание'
    }
};
const confirmPayRequestCodeExample =
    '{  "id": 25,  "method": "marketplace.confirm_pay",  "params": {    "confirm_form": {      "confirmation_code": 123456,      "bank_transaction_id": 987456321    }  }}';
const confirmPayResponseCodeExample =
    '{  "id": 25, "error": null,  "result": {    "details": {      "id": 46894165546123,      "masked_card_number": "86003*******1111",      "transaction_id": 2224168,      "bank_transaction_id": 97986541644,      "reference_number": "069878466747",      "amount": 1810000,      "merchantId": "a9f7BAS",      "terminalId": "172034PFA",      "date": 1602579976    }  }}';
</script>
<template>
    <div class="">
        <h2 class="text-2xl font-bold my-2">Подтверждение подготовленной транзакции оплаты</h2>
        <p class="my-4">Данный метод подтверждает оплату подготовленную транзакцию оплаты.</p>
        <p class="my-4">
            Название метода
            <PrimeChip>
                <ClipBoard
                    successMessage="Название метода скопированно"
                    errorMessage="Ошибка при копировании"
                    >marketplace.confirm_pay
                </ClipBoard>
            </PrimeChip>
        </p>
        <p class="my-4"><b>Параметры запроса</b></p>
        <DataTable
            :rowHover="true"
            class="my-4"
            :value="confirmPayPayRequestTable.data"
            tableStyle="min-width: 50rem"
        >
            <Column
                v-for="(value, key, index) in confirmPayPayRequestTable.columns"
                v-bind:key="index"
                :field="key"
                :header="value"
            >
            </Column>
        </DataTable>
        <p class="my-4"><b>Пример запроса</b></p>
        <CodeBlock
            :code="confirmPayRequestCodeExample"
            :highlightjs="true"
            :persistentCopyButton="true"
            lang="json"
            theme="atom-one-dark"
        >
        </CodeBlock>
        <p class="my-4"><b>Примет ответа</b></p>
        <CodeBlock
            :code="confirmPayResponseCodeExample"
            :highlightjs="true"
            :persistentCopyButton="true"
            lang="json"
            theme="atom-one-dark"
        >
        </CodeBlock>
        <BlockPagination
            :prev="{
                label: 'Подготовка транзакции оплаты',
                name: 'market-pay-proccess-prepare'
            }"
            :next="{ label: 'Оплата с сохраненной картой', name: 'market-pay-proccess-pay' }"
        />
    </div>
</template>
