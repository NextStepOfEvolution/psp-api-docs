<script setup>
const authHeader = '//HEADER \n$auth = sha1($service_id.$secret_key);';
const subvendorConfirmCode = '{"subvendor_id":10255, "status":1}';
</script>
<template>
    <div class="">
        <h2 class="text-2xl font-bold my-2">Редактирование саб мерчанта</h2>
        <p class="my-4">
            Данный метод подтверждает саб мерчанта, в случае передачи некорректного параметра, метод
            возвращает ошибку. Биллинг должен дать url где будет принимать запрос на подтверждение.
        </p>
        <p class="my-4"><b>Пример ответа:</b></p>
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
