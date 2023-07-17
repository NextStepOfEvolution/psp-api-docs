<script setup>
import { ref } from 'vue';
const props = defineProps(['table']);
const table = ref(props.table);
const requestCode =
    '{ "MERCHANT_TRANS_ID": 7, "SIGN_TIME": 1503638389658,    "SIGN_STRING": "5777e5ed6eda5b5cca3f56a90cf53e96"}';
const responseCode =
    '{ "ERROR": 0,"ERROR_NOTE": "Success","PARAMETERS": {"full_name": "Test Test","balance": 1000,"email": "test@test.uz"}}';
</script>
<template>
    <div class="">
        <h2 class="text-2xl font-bold my-4">
            3.1. Получения справочной информации по платежу (Info)
        </h2>
        <p class="my-4">Данным запросом PSP запрашивает справочную информацию от Мерчанта.</p>
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
                <div class="h-60 w-full justify-start">
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
                <div class="h-60 w-full justify-start">
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
