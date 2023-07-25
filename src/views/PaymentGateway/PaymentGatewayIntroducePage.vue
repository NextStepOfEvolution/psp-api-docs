<script setup>
</script>
<template>
    <div class="">
        <h2 class="text-2xl font-bold my-4">Общие сведения</h2>
        <p class="my-4"> 
            Платежный шлюз PSP представляет набор адресов и параметров, позволяющих осуществлять запросы напрямую согласно API
        </p>  
        <BlockPagination 
            :next="{ label: 'Этап 1. Подготовка к интеграции', name: 'payment-gateway-preparation' }"
        />
    </div>
</template>
<style></style>
