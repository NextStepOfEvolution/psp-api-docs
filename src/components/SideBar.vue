<script setup>
import items from '@/router/sidebarItems.js';
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
<style>
.sidebar-item .sidebar-item__childs{
    display: none;
}
.sidebar-item:has(.active) .sidebar-item__childs{
    display: block;
}
</style>
