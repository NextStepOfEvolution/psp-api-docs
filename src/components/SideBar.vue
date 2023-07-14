<script setup>
import items from '@/router/sidebarItems.js';
import router from '../router';  
import SidebarItem from './SidebarItem.vue';
</script>
<template>
    <aside class="relative"> 
        <div class="top-[100px] sticky max-w-max">
            <div v-for="(item, index) in items" :key="index"> 
                <SidebarItem :currentRoute="router.currentRoute.value.name" :item="item" />  
            </div>
        </div>
    </aside>
</template>
