<script setup>
import SideBar from '@/components/SideBar.vue';
import Menubar from 'primevue/menubar';
import ContentBlock from '@/components/ContentBlock.vue';
import { onMounted, reactive, ref, watchEffect } from 'vue';
import ToggleButton from 'primevue/togglebutton';
const darkMode = ref(false);
const pt = reactive({
    root: { class: 'bg-purple-800' },
    icon: { class: { 'text-white': darkMode.value } }
});
darkMode.value = localStorage.getItem('mode') == 'dark' ? true : false;
onMounted(() => {
    document.title = 'PSP API DOCS';
    const headings = document.querySelectorAll('.link[id]'); 
    console.log(headings);
    document.addEventListener('scroll', (e) => {
        headings.forEach(ha => {
            const rect = ha.getBoundingClientRect();
            if(rect.top > 0 && rect.top < 150) {
                const location = window.location.toString().split('#')[0];
                console.log(ha);
            }
        });
    });
});
watchEffect(() => {
    localStorage.setItem('mode', darkMode.value ? 'dark' : 'light');
});


</script>
<template>
    <div :class="{ dark: darkMode }">
        <section class="dark:bg-gray-950">
            <header class="sticky top-0 z-10">
                <div class="block max-w-screen-xl mx-auto">
                    <Menubar :class="{ dark: darkMode, 'dark:bg-gray-800': darkMode }" :model="[]">
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
                class="min-h-screen max-w-screen-xl flex md:grid-cols-2 xs:grid-cols-2 mx-auto overscroll-x-none dark:bg-gray-800 text-gray-900 dark:text-purple-50"
            >
                <SideBar
                    class="w-1/4 dark:bg-gray-700 border-r-4 border-gray-100 pr-2 py-2 px-1 h-100"
                />
                <ContentBlock class="w-3/4 p-5 w-100" />
            </div>
        </section>
    </div>
</template>
<style> 
.p-menubar{
    border-top: none !important;
    border-right: none !important;
    border-left: none !important;
}
</style>
