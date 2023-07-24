<script setup>
const updateSubvendorRequestCode =
    '{"id":25,"method":"marketplace.update_sub_vendor","params":{"subvendor_id":10,"vendor_id":101494,"org_address":"CHANGED STREET NAME","vendor_commission":{"type":"procent","commission": 10}}}';
const updateSubvendorResponseCode =
    '{  "error": null,  "result": {    "subvendor_id": 10,    "vendor_id": 101494,    "org_account": "20208033800590850000",    "org_inn": "490080000",    "org_mfo": "01100",    "org_bank": "Bank name",    "org_title": "OOО «TITLE MERCHANT»",    "org_address": "CHANGED STREET NAME",    "org_phone": "998901234567",    "user_commission": {      "type": "procent",      "commission": 5    },    "commission_payer": "vendor"  },  "id": 25}';
const updateSubvendorRequestTable = {
    data: [
        {
            property: 'subvendor_id',
            type: 'Integer',
            isRequired: '+',
            description: 'ID под мерчанта в биллинге'
        },
        {
            property: 'vendor_id',
            type: 'Integer',
            isRequired: '-',
            description: 'ID мерчанта маркетплейса'
        },
        { property: 'org_account', type: 'String', isRequired: '-', description: 'Расчетный счет' },
        { property: 'org_inn', type: 'String', isRequired: '-', description: 'ИНН' },
        { property: 'org_mfo', type: 'String', isRequired: '-', description: 'МФО' },
        { property: 'org_bank', type: 'String', isRequired: '-', description: 'Банк' },
        { property: 'org_title', type: 'String', isRequired: '-', description: 'Названия' },
        { property: 'org_address', type: 'String', isRequired: '-', description: 'Адрес' },
        { property: 'org_phone', type: 'String', isRequired: '-', description: 'Телефон' },
        {
            property: 'vendor_commission',
            type: 'OBJECT',
            isRequired: '+',
            description: "type - ['procent', 'fix'] тип комиссий commission - Значение комиссий"
        },
        {
            property: 'user_commission',
            type: 'OBJECT',
            isRequired: '+',
            description: "type - ['procent', 'fix'] тип комиссий commission - Значение комиссий"
        }
    ],
    columns: {
        property: 'Свойство',
        type: 'Тип',
        isRequired: 'Обязательный свойство',
        description: 'Описание'
    }
};
const updateSubvendorResponseTable = {
    data: [
        { property: 'agr_sub_vendor_id', type: 'Integer', description: 'ID мерчанта' },
        {
            property: 'commission_payer',
            type: 'String',
            description: 'Инфомационный параметр. Плательщик комиссии'
        }
    ],
    columns: {
        property: 'Свойство',
        type: 'Тип',
        description: 'Описание'
    }
};
</script>
<template>
    <div class="">
        <h2 class="text-2xl font-bold my-2">Редактирование саб мерчанта</h2>
        <p class="my-4">Данный метод изменяет данные зарегистированного под мерчанта.</p>
        <p class="my-4">
            Название метода
            <PrimeChip
                ><ClipBoard
                    successMessage="Название метода скопированно"
                    errorMessage="Ошибка при копировании"
                    >marketplace.update_sub_vendor</ClipBoard
                ></PrimeChip
            >
        </p>
        <p class="my-4"><b>Параметры запроса:</b></p>
        <DataTable
            :rowHover="true"
            class="my-4"
            :value="updateSubvendorRequestTable.data"
            tableStyle="min-width: 50rem"
        >
            <Column
                v-for="(value, key, index) in updateSubvendorRequestTable.columns"
                v-bind:key="index"
                :field="key"
                :header="value"
            >
            </Column>
        </DataTable>
        <p class="my-4"><b>Параметры ответа:</b></p>
        <DataTable
            :rowHover="true"
            class="my-4"
            :value="updateSubvendorResponseTable.data"
            tableStyle="min-width: 50rem"
        >
            <Column
                v-for="(value, key, index) in updateSubvendorResponseTable.columns"
                v-bind:key="index"
                :field="key"
                :header="value"
            >
            </Column>
        </DataTable>
        <p class="my-4"><b>Пример запроса:</b></p>
        <CodeBlock
            :code="updateSubvendorRequestCode"
            :highlightjs="true"
            :persistentCopyButton="true"
            lang="json"
            theme="atom-one-dark"
        >
        </CodeBlock>
        <p class="my-4"><b>Пример ответа:</b></p>
        <CodeBlock
            :code="updateSubvendorResponseCode"
            :highlightjs="true"
            :persistentCopyButton="true"
            lang="json"
            theme="atom-one-dark"
        >
        </CodeBlock>
        <BlockPagination
            :prev="{ label: 'Управление саб мерчантами', name: 'market-pay-subvendor-register' }"
            :next="{ label: 'Подтверждение саб мерчанта', name: 'market-pay-subvendor-confirm' }"
        />
    </div>
</template>
