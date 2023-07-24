<script setup>
const preparePayRequestTable = {
    data: [
        {
            property: 'vendor_form',
            type: 'OBJECT',
            required: '+',
            description: 'Форма поставщика'
        },
        {
            property: 'pay_form',
            type: 'OBJECT',
            required: '+',
            description: 'Данные плательщика для проведения оплаты'
        }
    ],
    columns: {
        property: 'Свойство',
        type: 'Тип',
        required: 'Обязательное',
        description: 'Описание'
    }
};
const vendorFormTable = {
    data: [
        {
            property: 'account',
            type: 'STRING',
            required: '+',
            description: 'Номер заказа в биллинге'
        },
        {
            property: 'total',
            type: 'INETEGER',
            required: '+',
            description: 'Сумма платежа с тийинами'
        },
        {
            property: 'vendors',
            type: 'JSON',
            required: '+',
            description: 'JSON список мерчантов и саб мерчантов'
        }
    ],
    columns: {
        property: 'Свойство',
        type: 'Тип',
        required: 'Обязательное',
        description: 'Описание'
    }
};
const vendorsTable = {
    data: [
        {
            property: 'id',
            type: 'INTEGER',
            required: '+',
            description: 'ID мерчанта в AGR'
        },
        {
            property: 'total',
            type: 'INETEGER',
            required: '+',
            description: 'Общая сумма платежа у мерчанта'
        },
        {
            property: 'subvendors',
            type: 'JSON',
            required: '+',
            description: 'JSON список саб мерчантов'
        }
    ],
    columns: {
        property: 'Свойство',
        type: 'Тип',
        required: 'Обязательное',
        description: 'Описание'
    }
};
const subvendorsTable = {
    data: [
        {
            property: 'id',
            type: 'INTEGER',
            required: '+',
            description: 'ID сабмерчанта в биллинге партнера'
        },
        {
            property: 'price',
            type: 'INETEGER',
            required: '+',
            description: 'Cумма платежа у сабмерчанта'
        }
    ],
    columns: {
        property: 'Свойство',
        type: 'Тип',
        required: 'Обязательное',
        description: 'Описание'
    }
};
const payFormTable = {
    data: [
        {
            property: 'card_number',
            type: 'INTEGER',
            required: '+',
            description: 'Номер карты(16 цифр без пробелов)'
        },
        {
            property: 'card_expire',
            type: 'INETEGER',
            required: '+',
            description: 'Срок действие карты'
        }
    ],
    columns: {
        property: 'Свойство',
        type: 'Тип',
        required: 'Обязательное',
        description: 'Описание'
    }
};
const preparePayRequestExampleCode =
'{  "id": 25,  "method": "marketplace.prepare_pay",  "params": {    "vendor_form": {      "account": "8333",      "total": "1810000",      "vendors": [        {"id": "101000","total": "1810000","subvendors": [  { "id": "12", "price": "1460000" },  { "id": "14", "price": "350000" }]        }      ]    },    "pay_form": { "card_number": "8600111122224444", "card_expire": "1220" }  }}';
const preparePayResponseExampleCode = '{"id": 1452537252,  "error": null,  "result": {    "masked_phone_number": "+99890*****11",    "time_out": 300,    "confirm_form": [      {"label": "Код подтверждения","key": "confirmation_code","element": "input","type": "int","value": "","show": 1,"mask": "######","regex": "^[0-9]{6}$","placeholder": "","size": 6,"order": 10,"is_required": 1      },      {"key": "bank_transaction_id","value": 7987819,"show": 0,"is_required": 1      }    ],    "request_method": "marketplace.confirm_pay"  }}';
</script>
<template>
    <div class="">
        <h2 class="text-2xl font-bold my-2">Подготовка к проведению оплаты</h2>
        <p class="my-4">Данный метод проводит оплаты с подтверждением</p>
        <p class="my-4">
            Название метода
            <PrimeChip>
                <ClipBoard
                    successMessage="Название метода скопированно"
                    errorMessage="Ошибка при копировании"
                    >marketplace.prepare_pay
                </ClipBoard>
            </PrimeChip>
        </p> 
        <p class="my-4"><b>Параметры запроса</b></p>
        <DataTable
            :rowHover="true"
            class="my-4"
            :value="preparePayRequestTable.data"
            tableStyle="min-width: 50rem"
        >
            <Column
                v-for="(value, key, index) in preparePayRequestTable.columns"
                v-bind:key="index"
                :field="key"
                :header="value"
            >
            </Column>
        </DataTable>
        <p class="my-4"><b>Форма поставщика(vendor_forms)</b></p>
        <DataTable
            :rowHover="true"
            class="my-4"
            :value="vendorFormTable.data"
            tableStyle="min-width: 50rem"
        >
            <Column
                v-for="(value, key, index) in vendorFormTable.columns"
                v-bind:key="index"
                :field="key"
                :header="value"
            >
            </Column>
        </DataTable>
        <p class="my-4"><b>Cписок мерчантов и сабмерчантов(vendors)</b></p>
        <DataTable
            :rowHover="true"
            class="my-4"
            :value="vendorsTable.data"
            tableStyle="min-width: 50rem"
        >
            <Column
                v-for="(value, key, index) in vendorsTable.columns"
                v-bind:key="index"
                :field="key"
                :header="value"
            >
            </Column>
        </DataTable>
        <p class="my-4"><b>Список мерчантов и саб мерчантов(subvendors)</b></p>
        <DataTable
            :rowHover="true"
            class="my-4"
            :value="subvendorsTable.data"
            tableStyle="min-width: 50rem"
        >
            <Column
                v-for="(value, key, index) in subvendorsTable.columns"
                v-bind:key="index"
                :field="key"
                :header="value"
            >
            </Column>
        </DataTable>
        <p class="my-4"><b>Данные плательщика для проведения оплаты(pay_form)</b></p>
        <DataTable
            :rowHover="true"
            class="my-4"
            :value="payFormTable.data"
            tableStyle="min-width: 50rem"
        >
            <Column
                v-for="(value, key, index) in payFormTable.columns"
                v-bind:key="index"
                :field="key"
                :header="value"
            >
            </Column>
        </DataTable> 
        <p class="my-4"><b>Пример запроса</b></p>
        <CodeBlock
            :code="preparePayRequestExampleCode"
            :highlightjs="true"
            :persistentCopyButton="true"
            lang="json"
            theme="atom-one-dark"
        >
        </CodeBlock>
        <p class="my-4"><b>Примет ответа</b></p>
        <CodeBlock
            :code="preparePayResponseExampleCode"
            :highlightjs="true"
            :persistentCopyButton="true"
            lang="json"
            theme="atom-one-dark"
        >
        </CodeBlock>
        <BlockPagination
            :prev="{ label: 'Подтверждение карты', name: 'market-pay-card-confirmation' }"
            :next="{ label: 'Подтверждение подготовленной транзакции оплаты', name: 'market-pay-proccess-confirm' }"
        />
    </div>
</template>
