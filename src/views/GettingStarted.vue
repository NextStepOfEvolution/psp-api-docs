<script setup>
import webkassaImage from '@/assets/images/webkassa-steps/webkassa.png';
import webterminalImage from '@/assets/images/tools/terminal.png';
import marketPayImage from '@/assets/images/market-pay/market-pay.png';
import paymentGatewayImage from '@/assets/images/payment-gateway/gate.png';
const items = [
    {
        title: 'Web-касса',
        content: 'Удобный способ принимать платежи.',
        image: webkassaImage,
        to: {
            name: 'webkassa-introduction'
        }
    },
    {
        title: 'Web-терминал',
        content: 'Легкий и быстрый способ начать принимать платежи от пользователей',
        image: webterminalImage,
        to: {
            name: 'web-terminal-introduce'
        }
    },
    {
        title: 'MarketPay',
        content: 'Просто способ распределения суммы платежа между участниками сделки',
        image: marketPayImage,
        to: {
            name: 'market-pay-concept'
        }
    },
    {
        title: 'Платежный Шлюз',
        content: 'Инструмент для взаимодействия с PSP API',
        image: paymentGatewayImage,
        to: {
            name: 'payment-gateway-introduce'
        }
    },
];
</script>
<template>
    <div class="">
        <h1 class="text-4xl font-bold">Начало работы</h1>
        <p class="my-4">
            Мы подготовили инструкции по интеграции, чтобы сделать процесс подключения к PSP, а
            также прием платежей, быстрым и легким.
        </p>
        <div class="grid grid-cols-2 gap-4">
            <Card
                v-for="(item, index) in items"
                v-bind:key="index"
                class="text-center dark:text-gray-200 dark:bg-gray-900 p-5"
            >
                <template #header>
                    <img class="w-[100px] h-[100px] mx-auto" :src="item.image" alt="Web-касса" />
                </template>
                <template #title
                    ><b
                        ><router-link :to="item.to">{{ item.title }}</router-link></b
                    ></template
                >
                <template #content>
                    <p>{{ item.content }}</p>
                </template>
            </Card>
        </div>
    </div>
</template>
<style></style>
