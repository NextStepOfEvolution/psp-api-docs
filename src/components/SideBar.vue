<script setup>
import items from '@/router/sidebarItems.js';
import { ref } from 'vue';
import router from '../router';
import SidebarItem from './SidebarItem.vue';
</script>
<template>
    <aside class="relative">
        <div class="top-[100px] sticky max-w-max">
            <div v-for="(item, index) in items" :key="index">
                <SidebarItem :item="item" />
            </div>
        </div>
    </aside>
</template>
