<script setup>
</script>
<template>
    <div class="relative">
        <h2 class="text-2xl font-bold my-4">Этап 4. Перевод в боевой режим.</h2>
        <p class="my-2">
            Для перевода Web-кассы, Web-терминала или Host-терминала в боевой режим необходимо:
        </p>
        <ul class="my-2 list-disc">
            <li class="ml-10">
                Получить подтверждение технической поддержки об успешном прохождении тестовых
                платежей;
            </li>
            <li class="ml-10">Изменить адрес запросов на <PrimeChip><b>https://agr.uz/pay</b></PrimeChip> </li>
            <li class="ml-10">
                Провести пробные платежи на боевом Web-кассе, Web-терминале или Host-терминале;
            </li>
            <li class="ml-10">
                Получить подтверждение технической поддержки об успешном прохождении боевых
                платежей.
            </li>
        </ul>
        <BlockPagination class="absolute w-full bottom-[-100%]"
            :prev="{ label: 'Этап 4. Тестирование', name: 'webkassa-auto-test' }"
        />
    </div>
</template>
<style></style>
