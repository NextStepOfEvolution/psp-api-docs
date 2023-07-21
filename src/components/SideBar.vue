<script setup>
import sidebarMenu from '@/router/sidebarItems.js';
import SidebarItem from './SidebarItem.vue';
import router from '../router';
const isActive = (item) => {
    const tree = sidebarMenu.findTree(router.currentRoute.value.name, router.currentRoute.value?.hash);
    return tree.includes(item?.to?.name) || tree.includes(item?.to?.hash);
};
</script>

<template>
    <aside class="relative">
        <div class="top-[100px] sticky max-w-max">
            <div v-for="(item, index) in sidebarMenu.items" :key="index">
                <SidebarItem :active="isActive(item)" :item="item" />
            </div>
        </div>
    </aside>
</template>
<style></style>
