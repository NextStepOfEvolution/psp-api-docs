<script setup>
import { ref } from 'vue';
const props = defineProps(['table']);
const table = ref(props.table);
const requestCode =
    '{ "AGR_TRANS_ID": 1503642925905, "TYPE": "PAYMENT", "SIGN_TIME": 1503642926295,    "SIGN_STRING": "4b9c9e9b37611e2194f67dbcefc40bb9"}';
const responseCode =
    '{ "ERROR": 0, "ERROR_NOTE": "Success", "PARAMETERS": {     "type": 0,     "phone_number": "998901234567",     "items": [{    "discount": 500.5,    "title": "Test Item",    "price": 1500.0,    "count": 1,    "code": "00012245689654",    "units": 122223,    "vat_percent": 15,    "package_code": 123456}     ] }}';
</script>
<template>
    <div class="">
        <h2 class="text-2xl font-bold my-4">Фискальные данные(необязательный) (Fiscalization).</h2>
        <p class="my-4">Данным запросом система PSP получает данные о платеже для фискализации</p>
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
                <div class="h-[32rem] w-full">
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
                <div class="h-[32rem] w-full">
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
        <p><b>PARAMETERS: </b></p>
        <DataTable :rowHover="true" class="my-4" :value="table.parameters.data" tableStyle="min-width: 50rem">
            <Column
                v-for="(value, key, index) in table.parameters.columns"
                v-bind:key="index"
                :field="key"
                :header="value"
            >
            </Column>
        </DataTable>
        <p><b>ITEM: </b></p>
        <DataTable :rowHover="true" class="my-4" :value="table.item.data" tableStyle="min-width: 50rem">
            <Column
                v-for="(value, key, index) in table.item.columns"
                v-bind:key="index"
                :field="key"
                :header="value"
            >
            </Column>
        </DataTable>
        <p><b>!!!ВАЖНО!!!</b> СУММА(price*count - discount) должна быть равна сумме платежа</p>
    </div>
</template>
<style></style>
