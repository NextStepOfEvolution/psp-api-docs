<script setup>
import { useToast } from 'primevue/usetoast';
const props = defineProps({
    successMessage: String,
    errorMessage: String,
})
const toast = useToast();
const copy = (e) => {
    e.stopPropagation();
    e.preventDefault();
    var range = document.createRange();
    range.selectNode(e.target);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    try {
        if (document.execCommand('copy')) {
            toast.add({ severity: 'success', summary: props.successMessage, life: 3000 });
        } else {
            toast.add({ severity: 'error', summary: props.errorMessage, life: 3000 });
        }
    } catch (err) {
        // toast.add({severity: 'error', summary: 'Копирование не доступно', life: 3000})
    }
    window.getSelection().removeAllRanges();
};
</script>
<template>
    <!-- <Toast></Toast> -->
    <div @click="copy" class="cursor-pointer"><slot></slot> <i class="pi pi-copy"></i></div>
</template>
