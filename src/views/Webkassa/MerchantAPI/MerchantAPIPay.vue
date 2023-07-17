<script setup>
import { ref } from 'vue';
const props = defineProps(['table']);
const table = ref(props.table);
const requestCode =
    '{"ENVIRONMENT": "sandbox","VENDOR_ID": 902345,"PAYMENT_ID": 9,"PAYMENT_NAME": "uzcard","AGR_TRANS_ID": 1503639319870,"MERCHANT_TRANS_ID": 7,"MERCHANT_TRANS_AMOUNT": 1000,"MERCHANT_TRANS_DATA":    "eyJwYXJhbV9rZXlfMSI6InBhcmFtX3ZhbHVlXzEiLCJwYXJhbV9rZXlfMiI6InBhcmFtX3ZhbHVlXzIifQ==",    "SIGN_TIME": 1503639320833,    "SIGN_STRING": "87efeefc53bb259c11e21ab0223ef2df"}';
const responseCode = '{"ERROR": 0,"ERROR_NOTE": "Success","VENDOR_TRANS_ID": 99987262}';
</script>
<template>
    <div class="">
        <h2 class="text-2xl font-bold my-4">
            3.2. Получение подтверждения по платежу с последующей оплатой (Pay).
        </h2>
        <p class="my-4">
            Данным запросом PSP подтверждает ранее сформированный платеж. В случае успешного ответа,
            PSP осуществляет оплату автоматический.
        </p>
        <p class="my-4"><b>Параметры запроса от PSP:</b></p>
        <DataTable :rowHover="true" class="my-4" :value="table.request.data" tableStyle="min-width: 50rem">
            <Column
                v-for="(value, key, index) in table.request.columns"
                v-bind:key="index"
                :field="key"
                :header="value"
            >
            </Column>
        </DataTable>
        <p class="my-4"><b>Параметры ответа от Мерчанта:</b></p>
        <DataTable :rowHover="true" class="my-4" :value="table.response.data" tableStyle="min-width: 50rem">
            <Column
                v-for="(value, key, index) in table.response.columns"
                v-bind:key="index"
                :field="key"
                :header="value"
            >
            </Column>
        </DataTable>
        <TabView>
            <TabPanel header="Пример запроса от PSP:">
                <div class="h-80 w-full">
                    <CodeBlock
                        :code="requestCode"
                        :highlightjs="true"
                        :persistentCopyButton="true"
                        lang="json"
                        theme="atom-one-dark"
                    >
                    </CodeBlock>
                </div>
            </TabPanel>
            <TabPanel header="Пример ответа от Мерчанта:">
                <div class="h-80 w-full">
                    <CodeBlock
                        :code="responseCode"
                        :highlightjs="true"
                        :persistentCopyButton="true"
                        lang="json"
                        theme="atom-one-dark"
                    >
                    </CodeBlock>
                </div>
            </TabPanel>
        </TabView>
    </div>
</template>
<style></style>
