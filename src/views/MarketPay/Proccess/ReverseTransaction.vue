<script setup>
const reverseTransactionRequestTable = {
    data: [
        {
            property: 'transaction_id',
            type: 'INTEGER',
            required: '+',
            description: 'ID транзакции'
        }
    ],
    columns: {
        property: 'Свойство',
        type: 'Тип',
        required: 'Обязательное',
        description: 'Описание'
    }
};
const reverseTransactionResponseTable = {
    data: [
        {
            property: 'status',
            type: 'INTEGER',
            description:
                'Текущий статус транзакции \n-1 - ошбика. \n0 - создано. \n2 - завершено. \n3 - отменен.'
        }
    ],
    columns: {
        property: 'Свойство',
        type: 'Тип',
        description: 'Описание'
    }
};
const reverseTransactionPayRequestExampleCode =
    '{  "id": 25,  "method": "marketplace.reverse",  "params": {    "transaction_id": "2224168"  }}';
const reverseTransactionPayResponseExampleCode =
    '{  "error": null,  "result": {    "status": 3  }}';
</script>
<template>
    <div class="">
        <h2 class="text-2xl font-bold my-2">Отмена захолдированной транзакции.</h2>
        <p class="my-4">Данный метод отменяет транзакцию.</p>
        <p class="my-4">
            Название метода
            <PrimeChip>
                <ClipBoard
                    successMessage="Название метода скопированно"
                    errorMessage="Ошибка при копировании"
                    >marketplace.reverse
                </ClipBoard>
            </PrimeChip>
        </p>
        <InlineMessage severity="warn">
            Отмена транзакции невозможна, если время холдирования истекло или применен метод
            marketplace.confirm_transfer
        </InlineMessage>
        <p class="my-4"><b>Параметры запроса</b></p>
        <DataTable
            :rowHover="true"
            class="my-4"
            :value="reverseTransactionRequestTable.data"
            tableStyle="min-width: 50rem"
        >
            <Column
                v-for="(value, key, index) in reverseTransactionRequestTable.columns"
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
            :value="reverseTransactionResponseTable.data"
            tableStyle="min-width: 50rem"
        >
            <Column
                v-for="(value, key, index) in reverseTransactionResponseTable.columns"
                v-bind:key="index"
                :field="key"
                :header="value"
            >
            </Column>
        </DataTable>
        <p class="my-4"><b>Пример запроса</b></p>
        <CodeBlock
            :code="reverseTransactionPayRequestExampleCode"
            :highlightjs="true"
            :persistentCopyButton="true"
            lang="json"
            theme="atom-one-dark"
        >
        </CodeBlock>
        <p class="my-4"><b>Пример ответа</b></p>
        <CodeBlock
            :code="reverseTransactionPayResponseExampleCode"
            :highlightjs="true"
            :persistentCopyButton="true"
            lang="json"
            theme="atom-one-dark"
        >
        </CodeBlock>
        <BlockPagination
            :prev="{
                label: 'Подтверждение захолдированной транзакции',
                name: 'market-pay-proccess-confirm-transfer'
            }" 
        />
    </div>
</template>
