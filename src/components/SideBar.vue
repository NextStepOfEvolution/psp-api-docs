<script setup>
import sidebarMenu from '@/router/sidebarItems.js';
import SidebarItem from './SidebarItem.vue'; 
</script>

<template>
    <aside class="relative">
        <div class="top-[100px] sticky max-w-max">
            <div v-for="(item, index) in sidebarMenu.items" :key="index">
                <SidebarItem :item="item" />
            </div>
        </div>
    </aside>
</template>
<style></style>
