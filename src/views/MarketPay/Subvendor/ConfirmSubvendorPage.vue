<script setup>
const authHeader = '//HEADER \n$auth = sha1($service_id.$secret_key);';
const subvendorConfirmCode = '{"subvendor_id":10255, "status":1}';
const confirmSubvendorRequest = {
    data: [
        { property: 'subvendor_id', type: 'Integer', description: 'ID саб мерчанта' },
        {
            property: 'status',
            type: 'Integer',
            description: 'value[0;1] 0 - не 1 - активный'
        }
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
        <h2 class="text-2xl font-bold my-2">Подтверждение саб мерчанта</h2>
        <p class="my-4">
            Данный метод подтверждает саб мерчанта, в случае передачи некорректного параметра, метод
            возвращает ошибку. Заголовок запроса содержит ключ <PrimeChip>Auth sha1(SERVICE_ID + SECRET_KEY)</PrimeChip>.
        </p>
        <InlineMessage severity="info"> 
            Биллинг должен дать url где будет принимать запрос на подтверждение.
        </InlineMessage>
        <DataTable
            :rowHover="true"
            class="my-4"
            :value="confirmSubvendorRequest.data"
            tableStyle="min-width: 50rem"
        >
            <Column
                v-for="(value, key, index) in confirmSubvendorRequest.columns"
                v-bind:key="index"
                :field="key"
                :header="value"
            >
            </Column>
        </DataTable>
        <p class="my-4"><b>Пример запроса:</b></p>
        <CodeBlock
            class="my-2"
            :code="authHeader"
            :highlightjs="true"
            :persistentCopyButton="true"
            lang="php"
            theme="atom-one-dark"
        >
        </CodeBlock>
        <CodeBlock
            :code="subvendorConfirmCode"
            :highlightjs="true"
            :persistentCopyButton="true"
            lang="json"
            theme="atom-one-dark"
        >
        </CodeBlock>
        <BlockPagination
            :prev="{ label: 'Редактирование саб мерчанта', name: 'market-pay-subvendor-update' }"
            :next="{ label: 'Получение списка саб мерчантов', name: 'market-pay-subvendor-list' }"
        />
    </div>
</template>
