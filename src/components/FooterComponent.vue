<script setup>
import logoWhite from '@/assets/images/logo-white.png';
import logoDefault from '@/assets/images/logo-blue.png';
import { useDark } from '@vueuse/core';
let darkMode = useDark();
let currentDate = new Date().getFullYear();
</script>
<template>
    <footer class="max-w-screen-xl mx-auto p-component dark:bg-gray-800 border-t-2 border-gray-200 p-4 px-6">
        <div class="block md:flex justify-between">
            <div class="psp-logo">
                <img class="w-[200px]" alt="PSP" :src="darkMode ? logoWhite : logoDefault" />
            </div> 
            <div>
                <h3 class="text-lg font-bold text-slate-800 dark:text-gray-100 m-0.5 p-1">Контакты</h3>
                <article>
                    <a class="block text-slate-800 dark:text-gray-100 m-0.5 p-1" href="tel:998909014792"
                        >+998 90 901 47 92
                    </a>
                    <a
                        class="block text-slate-800 dark:text-gray-100 m-0.5 p-1"
                        href="mailto:info@psp.uz"
                        >info@psp.uz
                    </a>
                    <ul class="flex gap-5" style="margin: 0.125rem; padding: 0.25rem;">
                        <li>
                            <a
                                href="https://www.facebook.com/OOO-Payment-System-Platform-109117108394330/?ref=pages_you_manage"
                                target="_blank"
                                ><i class="pi pi-facebook dark:text-gray-200" style="font-size: 18px;"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com/psp_uz?utm_medium=copy_link" target="_blank"
                                ><i class="pi pi-instagram dark:text-gray-200" style="font-size: 18px;"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/payment_system_platform" target="_blank"
                                ><i class="pi pi-telegram dark:text-gray-200" style="font-size: 18px;"> </i
                            ></a>
                        </li>
                    </ul>
                </article>
            </div>
        </div>
        <p class="md:text-end text-center text-base text-slate-800 dark:text-gray-100 m-0.5 p-1">Copyright © 2021-{{ currentDate }} PSP</p>
    </footer>
</template>
