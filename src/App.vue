<script setup>
import SideBar from '@/components/SideBar.vue';

import ContentBlock from '@/components/ContentBlock.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { onMounted, ref } from 'vue';
import { useDark } from '@vueuse/core'
import PrimeSidebar from 'primevue/sidebar';

const mobileMenuIsActive = ref(false);
const isLoaded = ref(false); 
const darkMode = useDark();

// darkMode.value = localStorage.getItem('mode') == 'dark' ? true : false;
onMounted(() => {
    document.title = 'PSP API DOCS';
    setTimeout(() => {
        isLoaded.value = true;
    }, 800);
});
// watchEffect(() => {
//     localStorage.setItem('mode', darkMode.value ? 'dark' : 'light');
// });
</script>
<template>
    <Toast></Toast>
    <div v-if="isLoaded" :class="{ dark: darkMode }">
        <section class="dark:bg-gray-950 min-h-screen">
            <HeaderComponent></HeaderComponent>
            <div
                class="min-h-[calc(100vh-73px)] max-w-screen-xl flex justify-center mx-auto overscroll-x-none dark:bg-gray-800 text-gray-900 dark:text-gray-300"
            >
                <SideBar
                    class="md:block hidden w-full md:w-1/4 hidden md:block dark:bg-gray-700 border-r-4 border-gray-100 pr-2 py-2 px-1 h-100"
                />
                <PrimeSidebar
                    class="block md:hidden"
                    v-model:visible="mobileMenuIsActive"
                    :position="'full'"
                >
                    <SideBar
                        class="w-full dark:bg-gray-700 border-r-4 border-gray-100 pr-2 py-2 px-1 h-100"
                    />
                </PrimeSidebar>
                <ContentBlock
                    :class="[
                        'w-full md:w-3/4 p-5 w-100',
                        mobileMenuIsActive ? 'overflow-hiddem' : ''
                    ]"
                />
            </div>
            <FooterComponent></FooterComponent>
        </section>
    </div>
    <LoaderComponent v-else />
</template>
<style>
.p-menubar {
    border-top: none !important;
    border-right: none !important;
    border-left: none !important;
}
@keyframes bounce {
    from {
        transform: translate3d(0, 0, 0);
    }
    to {
        transform: translate3d(0, 15px, 0);
    }
}
.psp-logo {
    transition: all ease;
}
.psp-logo:hover {
    animation: bounce 1s;
    animation-direction: alternate;
    animation-timing-function: cubic-bezier(0.5, 0.05, 1, 0.5);
    animation-iteration-count: infinite;
}
</style>
