<script setup>
const props = defineProps({
    prev: Object,
    next: Object
});
</script>
<template>
    <div class="grid grid-cols-2 col-end-2 gap-4 py-4">
        <router-link
            v-if="props?.prev"
            class="text-lg text-center py-4 bg-gray-300 dark:text-gray-900"
            :to="props.prev"
        >
            <i class="m-2 pi pi-arrow-left text-end"></i><b>{{ props.prev.label }} </b>
        </router-link>
        <div v-else></div>
        <router-link
            v-if="props?.next"
            class="text-lg text-center py-4 bg-gray-300 dark:text-gray-900"
            :to="props.next"
        >
            <b>{{ props.next.label }} <i class="m-2 pi pi-arrow-right text-end"></i> </b>
        </router-link>
        <div v-else></div>
    </div>
</template>
