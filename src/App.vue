<script setup>
import SideBar from '@/components/SideBar.vue';
import Menubar from 'primevue/menubar';
import ContentBlock from '@/components/ContentBlock.vue';
import { reactive, ref } from 'vue';
import ToggleButton from 'primevue/togglebutton';
const darkMode = ref(false);
const pt = reactive({root: {class: '!bg-purple-800'}, icon: {class: { '!text-white': darkMode.value}}});
</script>
<template>
    <div :class="{ dark: darkMode }">
        <section class="dark:bg-gray-800">
            <header class="sticky top-0 z-10">
                <div class="block max-w-screen-xl mx-auto">
                    <Menubar
                        :class="{ dark: darkMode, 'dark:bg-gray-400': darkMode }"
                        :model="items"
                    >
                        <template #start>
                            <div class="bg-white rounded-md">
                                <img
                                    class="mr-2 w-24"
                                    alt="PSP"
                                    src="@/assets/images/logo-blue.png"
                                    height="40"
                                />
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
                class="min-h-screen max-w-screen-xl flex md:grid-cols-2 xs:grid-cols-2 mx-auto overscroll-x-none dark:bg-gray-800 text-purple-900 dark:text-purple-200"
            >
                <SideBar
                    class="w-1/4 dark:bg-gray-700 border-r-4 border-gray-100 pr-2 py-2 h-100"
                />
                <ContentBlock class="w-3/4 p-5 w-100" />
            </div>
        </section>
    </div>
</template>
<style></style>
