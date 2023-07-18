<script setup>
import Card from 'primevue/card';
import Galleria from 'primevue/galleria';
import { ref } from 'vue';
import WebkassaIMap from './WebkassaIMap.vue';
import inputCardDetailsImage from '@/assets/images/webkassa-steps/terminal_redirect_open.png';
import inputConfirmationCodeImage from '@/assets/images/webkassa-steps/terminal_redirect_card.png';
import successPaymentImage from '@/assets/images/webkassa-steps/terminal_redirect_success.png';
const images = [
    {
        itemImageSrc: inputCardDetailsImage,
        thumbnailImageSrc: inputCardDetailsImage,
        title: 'Форма ввода карточных данных',
        alt: '#'
    },
    {
        itemImageSrc: inputConfirmationCodeImage,
        thumbnailImageSrc: inputConfirmationCodeImage,
        title: 'Форма ввода кода подтверждения',
        alt: '#'
    },
    {
        itemImageSrc: successPaymentImage,
        thumbnailImageSrc: successPaymentImage,
        title: 'Страница успешной оплаты#',
        alt: '#'
    }
];
const activeIndex = ref(0);
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
const displayCustom = ref(false);
function imageClick(index) {
    activeIndex.value = index;
    displayCustom.value = true;
}
</script>
<template>
    <div class="">
        <WebkassaIMap />
        <h2 class="text-2xl font-bold my-4">Обзор проведения платежа</h2>
        <Galleria
            v-model:activeIndex="activeIndex"
            v-model:visible="displayCustom"
            :value="images"
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
        <div v-if="images" class="grid grid-cols-2 gap-4">
            <Card
                v-for="(image, index) of images"
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
        <BlockPagination :next="{ label: 'Этап 1. Подготовка к интеграции', name: 'webkassa-preparation' }" />
    </div>
</template>
<style></style>
