<script setup>
import { ref } from 'vue';
const props = defineProps(['table']);
const table = ref(props.table);
const requestCode =
    '{"FROM": 1503644593249,"TO": 1503644893249,"SIGN_TIME": 1503644593249,"SIGN_STRING": "9ebd383b64eba725ef323e18fcfe9d2f"}';
const responseCode =
    '{"ERROR": 0,"ERROR_NOTE": "Success","TRANSACTIONS": [{    "ENVIRONMENT": "live",    "AGR_TRANS_ID": "345264652",    "VENDOR_TRANS_ID": 67879769,    "MERCHANT_TRANS_ID": "7",    "MERCHANT_TRANS_AMOUNT": "1000",    "STATE": 2,    "DATE": 1480056082732},{    "ENVIRONMENT": "sandbox",    "AGR_TRANS_ID": 775264652,    "VENDOR_TRANS_ID": 52879769,    "MERCHANT_TRANS_ID": 7,    "MERCHANT_TRANS_AMOUNT": 2000,    "STATE": 3,    "DATE": "1480076082732"}]}';
</script>
<template>
    <div class="">
        <h2 class="text-2xl font-bold my-4">3.5. Отчет о платежах (Statement).</h2>
        <p class="my-4">Данным запросом система PSP ежемесячно осуществляет сверку платежей.</p>
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
                <div class="h-[38rem] w-full">
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
                <div class="h-[38rem] w-full">
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
