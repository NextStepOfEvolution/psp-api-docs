<script setup>
import router from '../router';

const props = defineProps({
    item: Object
});
const currentRoute = router.currentRoute;
</script>
<template>
    <router-link
        :to="props.item.to"
        :class="[
            props.item.to.name == currentRoute.name &&
            (currentRoute?.hash == '' || currentRoute?.hash == props.item.to.hash)
                ? 'bg-purple-100 bg-gray-300 text-gray-900 dark:text-gray-900'
                : '',
            'block w-full max-w-max dark:text-gray-200 text-gray-600 rounded-md transition ease-in-out delay-50 hover:bg-gray-100 m-0.5 p-1.5'
        ]"
    >
        {{ props.item.label }}
    </router-link>
    <div v-if="props.item?.childrens">
        <div class="ml-5" v-for="(children, index) in props.item?.childrens" :key="index">
            <SidebarItem :item="children" />
        </div>
    </div>
</template>
