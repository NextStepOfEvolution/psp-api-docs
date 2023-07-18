<script setup>
import SideBar from '@/components/SideBar.vue';
import Menubar from 'primevue/menubar';
import ContentBlock from '@/components/ContentBlock.vue';
import { onMounted, reactive, ref, watchEffect } from 'vue';
import ToggleButton from 'primevue/togglebutton';
import logoWhite from '@/assets/images/logo-white.png';
import logoDefault from '@/assets/images/logo-blue.png';
import sideBarItems from '@/router/sidebaritems.js';
import PrimeSidebar from 'primevue/sidebar';

const darkMode = ref(false);
const pt = reactive({
    root: { class: 'bg-purple-800' },
    icon: { class: { 'text-white': darkMode.value } }
});
darkMode.value = localStorage.getItem('mode') == 'dark' ? true : false;
onMounted(() => {
    document.title = 'PSP API DOCS';
    
});
watchEffect(() => {
    localStorage.setItem('mode', darkMode.value ? 'dark' : 'light');
});
const mobileMenu = ref({});
onMounted(() => {
    // eslint-disable-next-line no-unused-vars
    mobileMenu.value = sideBarItems.map((item, _index) => {
        if (item?.childrens) {
            item.items = item.childrens;
        }
        return item;
    });
});
const mobileMenuIsActive = ref(false);
const isLoaded = ref(false);
onMounted(() => {
    setTimeout(() => {
        isLoaded.value = true;
    }, 800)
});
</script>
<template>
    <div v-if="isLoaded" :class="{ dark: darkMode }">
        <section class="dark:bg-gray-950 min-h-screen">
            <header class="sticky top-0 z-10">
                <div class="block max-w-screen-xl mx-auto">
                    <Menubar :class="{ dark: darkMode, 'dark:bg-gray-800': darkMode }" :model="[]">
                        <template #start>
                            <div class="flex">
                                <div class="">
                                    <img
                                        class="mr-2 w-24"
                                        alt="PSP"
                                        :src="darkMode ? logoWhite : logoDefault"
                                        height="40"
                                    />
                                </div>
                                <Button
                                    class="block md:!hidden"
                                    size="small"
                                    @click="
                                        (event) => {
                                            mobileMenuIsActive = true;
                                        }
                                    "
                                    ><i class="pi pi-book"></i></Button
                                >
                            </div>
                        </template>
                        <template #end>
                            <ToggleButton
                                onLabel=""
                                offLabel=""
                                onIcon="pi pi-sun"
                                offIcon="pi pi-moon"
                                v-model="darkMode"
                                :pt="pt"
                            >
                            </ToggleButton>
                        </template>
                    </Menubar>
                </div>
            </header>
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
                <ContentBlock :class="['w-full md:w-3/4 p-5 w-100', mobileMenuIsActive ? 'overflow-hiddem' : '' ]" />
            </div>
        </section>
    </div>
    <LoaderComponent v-else/>
</template>
<style>
.p-menubar {
    border-top: none !important;
    border-right: none !important;
    border-left: none !important;
}
</style>
