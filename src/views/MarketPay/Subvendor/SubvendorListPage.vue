<script setup>
const subvendorListRequestTable = {
    data: [
        {
            property: 'subvendor_id',
            type: 'INTEGER',
            required: '-',
            description: 'ID под мерчанта в биллинге'
        },
        {
            property: 'vendor_id',
            type: 'INETEGER',
            required: '-',
            description: 'ID мерчанта маркетплейса'
        },
        {
            property: 'status',
            type: 'INTEGER',
            required: '-',
            description: 'value[0;1] 0 - не  1 - активный'
        }
    ],
    columns: {
        property: 'Свойство',
        type: 'Тип',
        required: 'Обязательное',
        description: 'Описание'
    }
};
const subvendorListResponseTable = {
    data: [
        { property: 'subvendor_id', type: 'INTEGER', description: 'ID под мерчанта в биллинге' },
        { property: 'vendor_id', type: 'INETEGER', description: 'ID мерчанта маркетплейса' },
        { property: 'org_account', type: 'STRING', description: 'Расчетный счет' },
        { property: 'org_inn', type: 'STRING', description: 'ИНН' },
        { property: 'org_mfo', type: 'STRING', description: 'МФО' },
        { property: 'org_bank', type: 'STRING', description: 'Банк' },
        { property: 'org_title', type: 'String', description: 'Названия' },
        { property: 'org_address', type: 'String', description: 'Адрес' },
        { property: 'org_phone', type: 'String', description: 'Телефон' },
        {
            property: 'vendor_commission',
            type: 'OBJECT',
            description: 'type -"procent" тип комиссии commission -Значение комиссии'
        },
        {
            property: 'user_commission',
            type: 'OBJECT',
            description: 'type -"procent" тип комиссии commission -Значение комиссии'
        },
        {
            property: 'commission_payer',
            type: 'String',
            description: 'Инфомационный параметр. Плательщик комиссии'
        }
    ],

    columns: {
        property: 'Свойство',
        type: 'Тип',
        required: 'Обязательное',
        description: 'Описание'
    }
};
const subvendorListRequestCodeExample = '{"id":25,"method":"marketplace.sub_vendors_list"}';
const subvendorListResponseCodeExample =
    '{"error": null,"result": [{"subvendor_id":10,"vendor_id":101494,"org_account":"20208033800590850000","org_inn":"490080000","org_mfo":"01100","org_bank":"Bank name","org_title":"OOО «TITLE MERCHANT»","org_address":"CHANGED STREET NAME","org_phone": "998901234567","vendor_commission":{"type":"procent","commission": 10}}],"id": 25}';
</script>
<template>
    <div class="">
        <h2 class="text-2xl font-bold my-2">Редактирование саб мерчанта</h2>
        <p class="my-4">
            Данный метод возвращает список зарегистрированных в AGR под мерчантов по заданным
            параметрам.
        </p>
        <p class="my-4">
            Название метода
            <PrimeChip>
                <ClipBoard
                    successMessage="Название метода скопированно"
                    errorMessage="Ошибка при копировании"
                    >marketplace.sub_vendors_list</ClipBoard>
            </PrimeChip>
        </p>
        <p class="my-4">Если тело params передано пустым, возвращаются все под мерчанты.</p>
        <p class="my-4"><b>Параметры запроса</b></p>
        <DataTable
            :rowHover="true"
            class="my-4"
            :value="subvendorListRequestTable.data"
            tableStyle="min-width: 50rem"
        >
            <Column
                v-for="(value, key, index) in subvendorListRequestTable.columns"
                v-bind:key="index"
                :field="key"
                :header="value"
            >
            </Column>
        </DataTable>
        <CodeBlock
            class="my-2"
            :code="subvendorListRequestCodeExample"
            :highlightjs="true"
            :persistentCopyButton="true"
            lang="json"
            theme="atom-one-dark"
        >
        </CodeBlock>
        <p class="my-4"><b>Параметры ответа</b></p>
        <DataTable
            :rowHover="true"
            class="my-4"
            :value="subvendorListResponseTable.data"
            tableStyle="min-width: 50rem"
        >
            <Column
                v-for="(value, key, index) in subvendorListResponseTable.columns"
                v-bind:key="index"
                :field="key"
                :header="value"
            >
            </Column>
        </DataTable>
        <CodeBlock
            :code="subvendorListResponseCodeExample"
            :highlightjs="true"
            :persistentCopyButton="true"
            lang="json"
            theme="atom-one-dark"
        >
        </CodeBlock>
        <BlockPagination
            :prev="{ label: 'Подтверждение саб мерчанта', name: 'market-pay-subvendor-confirm' }"
            :next="{ label: 'Сохранение карты', name: 'market-pay-card-registration' }"
        />
    </div>
</template>
