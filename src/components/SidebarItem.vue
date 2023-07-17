<script setup>
const props = defineProps({
    currentRoute: String,
    item: Object
});
</script>
<template> 
    <router-link
        :to="item.to"
        :class="[
            item.to.name == props.currentRoute ? 'bg-purple-100 bg-gray-300 text-gray-900 dark:text-gray-900' : '',
            'block w-full max-w-max dark:text-gray-200 text-gray-600 rounded-md transition ease-in-out delay-50 hover:bg-gray-100 m-0.5 p-1.5'
        ]"
    >
        {{ item.label }}
    </router-link>
    <div v-if="item?.childrens">
        <div class="ml-5" v-for="(children, index) in item?.childrens" :key="index">
            <SidebarItem :currentRoute="currentRoute" :item="children" />
        </div>
    </div>
</template>
