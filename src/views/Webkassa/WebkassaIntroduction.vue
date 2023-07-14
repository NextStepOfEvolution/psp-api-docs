<script setup>
import Card from 'primevue/card';
import Galleria from 'primevue/galleria';
import { ref } from 'vue';
import WebkassaIMap from './WebkassaIMap.vue'
const images = [
    {
        itemImageSrc: '/images/webkassa-steps/terminal_redirect_open.png',
        thumbnailImageSrc: '/images/webkassa-steps/terminal_redirect_open.png',
        title: 'Форма ввода карточных данных',
        alt: '#'
    },
    {
        itemImageSrc: '/images/webkassa-steps/terminal_redirect_card.png',
        thumbnailImageSrc: '/images/webkassa-steps/terminal_redirect_card.png',
        title: 'Форма ввода кода подтверждения',
        alt: '#'
    },
    {
        itemImageSrc: '/images/webkassa-steps/terminal_redirect_success.png',
        thumbnailImageSrc: '/images/webkassa-steps/terminal_redirect_success.png',
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
        <WebkassaIMap/>
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
            <Card v-for="(image, index) of images" :key="index" class="text-center">
                <template #header>
                    <img
                        :src="image.thumbnailImageSrc"
                        :alt="image.alt"
                        style="cursor: pointer"
                        class="w-full h-full object-contain m-2"
                        @click="imageClick(index)"
                    />
                </template>
                <template #title></template>
                <template #content>
                    <p>{{ image.title }}</p>
                </template>
            </Card>
        </div>
    </div> 
</template>
<style></style>
