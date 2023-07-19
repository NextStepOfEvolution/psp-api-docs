<script setup>
const iframeCode = JSON.stringify({
    VENDOR_ID: '1591864',
    MERCHANT_TRANS_ID: 'maks',
    MERCHANT_TRANS_AMOUNT: '12000',
    MERCHANT_CURRENCY: 'sum',
    MERCHANT_TRANS_NOTE: 'transaction_note_example',
    SIGN_TIME: 1480056082732,
    SIGN_STRING: '2e483be74e568b4d7d4a7d9421f404fc'
});
const iframeHTMLCode = `<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    </head>
    <body>
        <iframe
            src="https://[адрес Терминала]/?VENDOR_ID=..."
            width="400"
            height="600"
            align="center"
            NORESIZE
            >Ваш браузер не поддерживает фреймы!
        </iframe>
    </body>
</html>`;
</script>
<template>
    <div>
        <h2 class="text-2xl font-bold my-4">Дополнительные возможности</h2>
        <h3 class="text-xl font-bold my-4">Web-терминал iFrame</h3>
        <p class="my-4">
            iFrame - это режим работы стандартного Web-терминала, который позволяет отобразить окно
            Web-терминала внутри одного фрейма на Вашем Web сайте
        </p>
        <CodeBlock
            :code="iframeCode"
            :highlightjs="true"
            :persistentCopyButton="true"
            lang="json"
            theme="atom-one-dark"
        >
        </CodeBlock>
        <p class="text-xl my-4"><b>Пример вставки iframe кода на странице.</b></p>
        <InlineMessage severity="warn"> Минимальный размер iframe - 390×400. </InlineMessage>
        <CodeBlock
            class="my-4"
            :code="iframeHTMLCode"
            :highlightjs="true"
            :persistentCopyButton="true"
            lang="html"
            theme="atom-one-dark"
        >
            <template #code> </template>
        </CodeBlock>
        <BlockPagination
            class=""
            :prev="{ label: 'Этап 5. Перевод в боевой режим', name: 'webkassa-goto-prodiction' }"
        />
    </div>
</template>
<style></style>
