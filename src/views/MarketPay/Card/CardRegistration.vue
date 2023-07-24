<script setup>
const confirmTransferRequestTable = {
    data: [
        {
            property: 'phone_number',
            type: 'INTEGER',
            required: '+',
            description: 'Номер телефона'
        },
        {
            property: 'card_number',
            type: 'STRING',
            required: '+',
            description: 'Номер карты'
        },
        {
            property: 'card_expire',
            type: 'STRING',
            required: '+',
            description: 'Срок действия карты'
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
            property: 'card_id',
            type: 'STRING',
            description: 'Токенезированный идентификатор карты'
        },
        {
            property: 'card_number',
            type: 'INTEGER',
            description: 'Номер карты'
        },
        {
            property: 'masked_phone_number',
            type: 'STRING',
            description: 'Замаскированный номер телефона'
        },
        {
            property: 'time_out',
            type: 'INTEGER',
            description: 'Время действие кода подтверждения'
        }
    ],
    columns: {
        property: 'Свойство',
        type: 'Тип',
        description: 'Описание'
    }
};
const confirmTransferPayRequestExampleCode =
    '{  "id": 25,  "method": "marketplace.card_registration",  "params": {    "phone_number": 998999999999,    "card_number": "8600111122223333",    "card_expire": "1249"  }}';
const confirmTransferPayResponseExampleCode =
    '{  "error": null,  "result": { "card_id": "eqweqwcewcecasdceasecqwceq3213123q2313", "card_number": "860011********33", "masked_phone_number": "998999****99", "time_out": 120 }}';
</script>
<template>
    <div class="">
        <h2 class="text-2xl font-bold my-2">Запрос на регистрацию карты</h2>
        <p class="my-4">
            Данный метод дает запрос на сохранение карты путем отправления смс кода на телефона
            карта держателя. При успешном запросе на номер телефона подключенного к
            смс-информированию отправляется код подтверждения.
        </p>
        <p class="my-4">
            Название метода
            <PrimeChip>
                <ClipBoard
                    successMessage="Название метода скопированно"
                    errorMessage="Ошибка при копировании"
                    >marketplace.card_registration
                </ClipBoard>
            </PrimeChip>
        </p>
        <InlineMessage severity="warn">
            Отправляемый в параметрах номер телефона должен совпадать с номером подключенного к
            смс-информированию карты. В противном случаи в ответе не будет возвращен Card Token
            позволяющий проводить оплаты с сохраненной карты.
        </InlineMessage>
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
            :prev="{ label: 'Получение списка саб мерчантов', name: 'market-pay-subvendor-list' }"
            :next="{ label: 'Подтверждение карты', name: 'market-pay-card-confirmation' }"
        />
    </div>
</template>
