<script setup>

const registerSubvendorRequestCode = '{"id":25,"method":"marketplace.register_sub_vendor","params":{"subvendor_id":10,"vendor_id":101494,"org_account":"20208033800590850000","org_inn":"490080000","org_mfo":"01100","org_bank":"Bank name","org_title":"OOО «TITLE MERCHANT»","org_address":"STREET NAME","org_phone": "998901234567","vendor_commission":{"type":"procent","commission": 5},"user_commission":{"type":"fix","commission": 500000}}}';
const registerSubvendorResponseCode = '{"error": null,"result": {"agr_sub_vendor_id": 10,"commission_payer": "user"},"id": 25,"mx_id": "b94312ac5772e39389ba8c50c205ff33"}';
const registerSubvendorRequestTable = {
    data: [
        { property: 'vendor_id', type: 'Integer', isRequired: '+', description: 'ID мерчанта' },
        { property: 'org_account', type: 'String', isRequired: '+', description: 'Расчетный счет' },
        { property: 'org_inn', type: 'String', isRequired: '+', description: 'ИНН' },
        { property: 'org_mfo', type: 'String', isRequired: '+', description: 'МФО' },
        { property: 'org_bank', type: 'String', isRequired: '-', description: 'Банк' },
        { property: 'org_title', type: 'String', isRequired: '+', description: 'Названия' },
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
const registerSubvendorResponseTable = {
    data: [
        { property: 'agr_sub_vendor_id', type: 'Integer', description: 'ID мерчанта' }, 
        { property: 'commission_payer', type: 'String', description: 'Инфомационный параметр. Плательщик комиссии' }, 
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
        <h2 class="text-2xl font-bold my-2">Регистрации саб мерчанта</h2> 
        <p class="my-4">
            Данный метод регистрирует под мерчанта, в случае передачи некорректного параметра, метод
            возвращает ошибку.
        </p>
        <p class="my-4">
            Название метода
            <PrimeChip
                ><ClipBoard
                    successMessage="Название метода скопированно"
                    errorMessage="Ошибка при копировании"
                    >marketplace.register_sub_vendor</ClipBoard
                ></PrimeChip
            >
        </p>
        <p class="my-4"><b>Параметры запроса:</b></p>
        <DataTable
            :rowHover="true"
            class="my-4"
            :value="registerSubvendorRequestTable.data"
            tableStyle="min-width: 50rem"
        >
            <Column
                v-for="(value, key, index) in registerSubvendorRequestTable.columns"
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
            :value="registerSubvendorResponseTable.data"
            tableStyle="min-width: 50rem"
        >
            <Column
                v-for="(value, key, index) in registerSubvendorResponseTable.columns"
                v-bind:key="index"
                :field="key"
                :header="value"
            >
            </Column>
        </DataTable>
        <p class="my-4"><b>Пример запроса:</b></p>
        <CodeBlock
            :code="registerSubvendorRequestCode"
            :highlightjs="true"
            :persistentCopyButton="true"
            lang="json"
            theme="atom-one-dark"
        >
        </CodeBlock>
        <p class="my-4"><b>Пример ответа:</b></p>
        <CodeBlock
            :code="registerSubvendorResponseCode"
            :highlightjs="true"
            :persistentCopyButton="true"
            lang="json"
            theme="atom-one-dark"
        >
        </CodeBlock>
        <BlockPagination
            :prev="{ label: 'Конценп API', name: 'market-pay-concept' }"
            :next="{ label: 'Редактирование саб мерчанта', name: 'market-pay-subvendor-update' }"
        />
    </div>
</template>
