<script setup>
import { ref } from 'vue';
const props = defineProps(['table']);
const table = ref(props.table);
</script>
<template>
    <div class="">
        <h2 class="text-2xl font-bold my-4">3.4. Отмена платежа (Cancel).</h2>
        <p class="my-4">Данным запросом система PSP запрашивае разрешение на отмену платежа.</p>
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
                <InlineMessage class="h-80 w-full" severity="info my-3">
                    <pre>{{
                        JSON.stringify(
                            {
                                AGR_TRANS_ID: 1503642925905,
                                VENDOR_TRANS_ID: 1503642925906,
                                SIGN_TIME: 1503642926295,
                                SIGN_STRING: '5a30fbd0fab44be29310e4b493c9a287'
                            },
                            undefined,
                            2
                        )
                    }}</pre>
                </InlineMessage>
            </TabPanel>
            <TabPanel header="Пример ответа от Мерчанта:">
                <InlineMessage class="h-80 w-full" severity="info my-3">
                    <pre>{{
                        JSON.stringify(
                            {
                                ERROR: 0,
                                ERROR_NOTE: 'Success'
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
