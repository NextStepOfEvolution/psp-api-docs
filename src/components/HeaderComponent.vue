<script setup>
import Menubar from 'primevue/menubar';
import ToggleButton from 'primevue/togglebutton';
import logoWhite from '@/assets/images/logo-white.png';
import logoDefault from '@/assets/images/logo-blue.png';
import { reactive } from 'vue';
import { useDark, useToggle } from '@vueuse/core'

let darkMode = useDark();
const toggleDarkMode = useToggle(darkMode);
const pt = reactive({
    root: { class: 'bg-purple-800' },
    icon: { class: { 'text-white': darkMode } }
});
</script>
<template>
    <header class="sticky top-0 z-10">
        <div class="block max-w-screen-xl mx-auto">
            <Menubar :class="{ dark: darkMode, 'dark:bg-gray-800': darkMode }" :model="[]">
                <template #start>
                    <div class="flex">
                        <div class="psp-logo">
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
                            ><i class="pi pi-book"></i
                        ></Button>
                    </div>
                </template>
                <template #end>
                    <ToggleButton
                        onLabel=""
                        offLabel=""
                        onIcon="pi pi-sun"
                        offIcon="pi pi-moon"
                        @click="toggleDarkMode()"
                        :pt="pt"
                    >
                    </ToggleButton>
                </template>
            </Menubar>
        </div>
    </header>
</template>
