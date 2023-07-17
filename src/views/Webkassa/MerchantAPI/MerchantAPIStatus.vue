<script setup>
import { ref } from 'vue';
const props = defineProps(['table']);
const table = ref(props.table);

const requestCode = '{"AGR_TRANS_ID": 1503642925905,"VENDOR_ID": 1503642925906,"PAYMENT_ID": 1,"SIGN_TIME": 1503642926295,"SIGN_STRING": "5a30fbd0fab44be29310e4b493c9a287"}'
const responseCode = '{"ERROR": 0,"ERROR_NOTE": "Success"}'
</script>
<template>
    <div class="">
        <h2 class="text-2xl font-bold my-4">
            3.6. Узнать статус платежа(необязательный) (Status).
        </h2>
        <p class="my-4">
            Мерчант передает данные в формате JSON для проверки статус оплаты в системе PSP по
            протоколу HTTPS, методом POST.
        </p>
        <p><b>URL: https://agr.uz/pay_api/payment_status</b></p>
        <p class="my-4"><b>Параметры запроса от Мерчанта:</b></p>
        <DataTable :rowHover="true" class="my-4" :value="table.request.data" tableStyle="min-width: 50rem">
            <Column
                v-for="(value, key, index) in table.request.columns"
                v-bind:key="index"
                :field="key"
                :header="value"
            >
            </Column>
        </DataTable>
        <p class="my-4"><b>Параметры ответа от PSP:</b></p>
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
            <TabPanel header="Пример запроса от Мерчанта:">
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
            <TabPanel header="Пример ответа от PSP:">
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
