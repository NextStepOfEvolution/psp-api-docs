<script setup></script>
<template>
    <div class="">
        <h2 class="text-4xl font-bold my-4">Web-терминал</h2>
        <InlineMessage severity="info">
            Web-терминал представляет собой веб-приложение, где пользователь выбирает платежную
            систему, вводит реквизиты и оплачивает заказ.
        </InlineMessage>
        <router-view> </router-view>
    </div>
</template>
<style></style>
