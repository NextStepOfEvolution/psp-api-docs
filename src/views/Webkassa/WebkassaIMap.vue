<script setup>
import { ref } from "vue"; 
import Galleria from 'primevue/galleria'; 
import Card from 'primevue/card'; 
import paymentProcessDiogram from '@/assets/images/webkassa-steps/treasure_diagram.png';
const images = [
    {
        itemImageSrc: paymentProcessDiogram,
        thumbnailImageSrc: paymentProcessDiogram,
        title: 'Диограмма порядка проведения платежа',
        alt: '#'
    }, 
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
        <h2 class="text-2xl font-bold my-4">Порядок проведения платежа</h2>
        <div class="text-center">
            <img src="" alt="" />
        </div>
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
