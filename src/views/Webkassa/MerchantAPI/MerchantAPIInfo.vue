<script setup> 
import { ref } from 'vue';  
const props = defineProps([
    'table'
]);
const table = ref(props.table) 
</script>
<template>
    <div class=""> 
        <h2 class="text-2xl font-bold my-4">
            3.1. Получения справочной информации по платежу (Info)
        </h2>
        <p class="my-4">Данным запросом PSP запрашивает справочную информацию от Мерчанта.</p>
        <p class="my-4"><b>Параметры запроса от PSP:</b></p>
        <DataTable class="my-4" :value="table.request.data" tableStyle="min-width: 50rem">
            <Column
                v-for="(value, key, index) in table.request.columns"
                v-bind:key="index"
                :field="key"
                :header="value"
            >
            </Column>
        </DataTable>
        <p class="my-4"><b>Параметры ответа от Мерчанта:</b></p>
        <DataTable class="my-4" :value="table.response.data" tableStyle="min-width: 50rem">
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
                <InlineMessage class="h-60 w-full justify-start bg-gray-800 text-white" severity=" my-3">
                    <pre>{{
                        JSON.stringify(
                            {
                                MERCHANT_TRANS_ID: '7',
                                SIGN_TIME: 1503638389658,
                                'SIGN_STRING ': '5777e5ed6eda5b5cca3f56a90cf53e96'
                            },
                            undefined,
                            2
                        )
                    }}</pre>
                </InlineMessage>
            </TabPanel>
            <TabPanel header="Пример ответа от Мерчанта:">
                <InlineMessage class="h-60 w-full justify-start" severity="info my-3">
                    <pre>{{
                        JSON.stringify(
                            {
                                ERROR: 0,
                                ERROR_NOTE: 'Success',
                                PARAMETERS: {
                                    full_name: 'Test Test',
                                    balance: '1000',
                                    email: 'test@test.uz'
                                }
                            },
                            undefined,
                            2
                        )
                    }}</pre>
                </InlineMessage>
            </TabPanel>
        </TabView> 
    </div>
</template>
<style></style>
