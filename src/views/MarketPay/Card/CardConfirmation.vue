<script setup>
const confirmTransferRequestTable = {
    data: [
        {
            property: 'card_id',
            type: 'STRING',
            required: '+',
            description: 'Идентивикатор карты(полученный в методе marketplace.card_registration).'
        },
        {
            property: 'confirmation_code',
            type: 'INTEGER',
            required: '+',
            description: 'Одноразовый код отправленный на номер телефона карто держателя.'
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
            property: 'card_token',
            type: 'STRING',
            description: 'Токен для подтверждения оплаты для метода marketplace.pay'
        },
        {
            property: 'card_number',
            type: 'INTEGER',
            description: 'номер карты'
        },
        {
            property: 'balance',
            type: 'FLOAT',
            description: 'Баланс карты'
        },
        {
            property: 'fullName',
            type: 'STRING',
            description: 'ФИО'
        },
        {
            property: 'sms',
            type: 'BOOLEAN',
            description: 'Статус смс информирования'
        },
        {
            property: 'status',
            type: 'INTEGER',
            description: 'Статус карты 0 - активен 1 - не активен'
        }
    ],
    columns: {
        property: 'Свойство',
        type: 'Тип',
        description: 'Описание'
    }
};
const confirmTransferPayRequestExampleCode =
    '{  "id": 25,  "method": "marketplace.card_confirm",  "params": {    "card_id": "eqweqwcewcecasdceasecqwceq3213123q2313",    "confirmation_code": 123456   }}';
const confirmTransferPayResponseExampleCode =
    '{ "id": 25, "error": null,  "result": {    "card_token": "dwqdqcweeqweqwcewcecasdceasecqwceq3213123q2313",    "card_number": "860011********33",     "balance": 1000,    "sms": 1,    "status": 0  }}';
</script>
<template>
    <div class="">
        <h2 class="text-2xl font-bold my-2">Подтверждение карты</h2>
        <p class="my-4">
            Метод используется для подтверждения запроса сохраняемой карты инициированный методом
            marketplace.card_registration. Кол-во попыток ограничивается 3 запросами.
        </p>
        <p class="my-4">
            Название метода
            <PrimeChip>
                <ClipBoard
                    successMessage="Название метода скопированно"
                    errorMessage="Ошибка при копировании"
                    >marketplace.card_confirm
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
            :prev="{ label: 'Запрос на регистрацию карты', name: 'market-pay-card-registration' }"
            :next="{ label: 'Проведение оплаты', name: 'market-pay-proccess-prepare' }"
        />
    </div>
</template>
