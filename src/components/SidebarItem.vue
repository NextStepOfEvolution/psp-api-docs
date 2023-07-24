<script setup>
import { computed } from 'vue';
import router from '../router';
import sidebarMenu from '@/router/sidebarItems.js';
const props = defineProps({
    item: Object
});
const currentRoute = router.currentRoute;
const isActive = computed(() => {
    return (
        props.item?.to?.name == null ||
        (props.item?.to?.name == currentRoute.value.name &&
            (currentRoute.value?.hash == '' || currentRoute.value?.hash == props?.item?.to.hash))
    );
});
const inActiveTree = computed(() => { 
    const tree = sidebarMenu.findTree(
        currentRoute.value.name
    ); 
    return tree.includes(props.item.to?.name); 
});
</script>
<template> 
    <div :class="{ 'sidebar-item': true, active: inActiveTree }">
        <router-link
            v-if="props.item?.to"
            :to="props.item.to"
            :class="[
                isActive ? 'active bg-purple-100 bg-gray-300 text-gray-900 dark:text-gray-900' : '',
                'block w-full max-w-max dark:text-gray-200 text-gray-600 rounded-md transition ease-in-out delay-50 hover:bg-gray-100 hover:dark:text-gray-900 m-0.5 p-1.5'
            ]"
        >
            {{ props.item.label }}
        </router-link>
        <div class="m-0.5 p-1.5" v-else>
            {{ props.item.label }}
        </div>
        <div
            class="relative sidebar-item__childs"
            v-if="(isActive || inActiveTree) && props.item?.childrens"
        >
            <div
                class="ml-5 aside-tree"
                v-for="(children, index) in props.item?.childrens"
                :key="index"
            >
                <SidebarItem :item="children" />
            </div>
        </div>
    </div>
</template>
<style>
.aside-tree::before {
    content: '';
    position: absolute;
    top: -5px;
    left: 10px;
    width: 1px;
    height: 100%;
    background-color: rgba(200, 200, 200, 0.657);
}
</style>
