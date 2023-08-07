<script setup>
import { ref } from 'vue';
import billListImage from '@/assets/images/web-terminal/billing_list.png';
import createBillImage from '@/assets/images/web-terminal/create_bill.png';
import createBillSuccessImage from '@/assets/images/web-terminal/bill_create_success.png';

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

const billActiveIndex = ref(0);
const displaybillCustom = ref(false);

const billStepsImages = [
    {
        itemImageSrc: billListImage,
        thumbnailImageSrc: billListImage,
        title: 'Список выставленных счетов',
        alt: '#'
    },
    {
        itemImageSrc: createBillImage,
        thumbnailImageSrc: createBillImage,
        title: 'Форма выставления счета',
        alt: '#'
    },
    {
        itemImageSrc: createBillSuccessImage,
        thumbnailImageSrc: createBillSuccessImage,
        title: 'Счет успешно выставлен',
        alt: '#'
    }
];
const responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

function imageClick(index) {
    billActiveIndex.value = index;
    displaybillCustom.value = true;
}
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
        <h3 class="text-xl font-bold my-4">Выставление счетов</h3>
        <p class="my-4">
            Данная функция позволяет отправить смс на номер телефона клиента сообщение с ссылкой на
            оплату. Для высталвения счета необходимо перейти на страницу выставления счетов. Выбрать
            платежную, ввести номер телефона, сумму и примечание к оплате. Далее нажать на кнопку
            "Выставить счет". После чего на введенный номер телефона отправиться сообщение с
            ссылкой. 
        </p>
        <Galleria
            v-model:activeIndex="billActiveIndex"
            v-model:visible="displaybillCustom"
            :value="billStepsImages"
            :responsiveOptions="responsiveOptions"
            :numVisible="7"
            containerStyle="max-width: 850px"
            :circular="true"
            :fullScreen="true"
            :showItemNavigators="true"
            :showThumbnails="false"
        >
            <template #item="slotProps">
                <img
                    :src="slotProps.item.itemImageSrc"
                    :alt="slotProps.item.alt"
                    style="width: 100%; display: block"
                />
            </template>
            <template #thumbnail="slotProps">
                <img
                    :src="slotProps.item.thumbnailImageSrc"
                    :alt="slotProps.item.alt"
                    style="display: block"
                />
            </template>
        </Galleria>
        <div v-if="billStepsImages" class="grid grid-cols-2 gap-4">
            <Card
                v-for="(image, index) of billStepsImages"
                :key="index"
                class="text-center dark:text-gray-200 dark:bg-gray-900"
            >
                <template #header>
                    <div class="m-2">
                        <img
                            :src="image.thumbnailImageSrc"
                            :alt="image.alt"
                            style="cursor: pointer"
                            class="w-full h-full object-contain w-full"
                            @click="imageClick(index)"
                        />
                    </div>
                </template>
                <template #title>
                    <p class="text-lg">{{ image.title }}</p></template
                >
            </Card>
        </div>
        <BlockPagination
            class=""
            :prev="{
                label: 'Этап 2. Открытие платежного Web-терминала',
                name: 'web-terminal-opening'
            }"
        />
    </div>
</template>
<style></style>
