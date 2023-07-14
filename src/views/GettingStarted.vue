<script setup>
  import Card from 'primevue/card';
</script>
<template>
    <div class="">
        <h1 class="text-4xl font-bold">Начало работы</h1>
        <p>Мы подготовили инструкции по интеграции, чтобы сделать процесс подключения к PSP, а также прием платежей, быстрым и легким.</p>
        <div class="grid grid-cols-2 gap-4">
            <Card class="text-center">
              <template #header>
                  <img class="mx-auto" src="@/assets/images/tools/terminal.png" alt="Web-касса"/>
              </template>
              <template #title><b>Web-касса</b></template> 
              <template #content>
                <p>Удобный способ принимать платежи.</p> 
              </template> 
            </Card> 
            <Card class="text-center">
              <template #header>
                  <img class="mx-auto" src="@/assets/images/tools/terminal.png" alt="Web-касса"/>
              </template>
              <template #title><b>Web-терминал</b></template> 
              <template #content>
                <p>Легкий и быстрый способ начать принимать платежи от пользователей</p> 
              </template> 
            </Card> 
            <Card class="text-center">
              <template #header>
                  <img class="mx-auto" src="@/assets/images/tools/terminal.png" alt="Web-касса"/>
              </template>
              <template #title><b>Host-терминал</b></template> 
              <template #content>
                <p>Легкий и быстрый способ начать принимать платежи от пользователей</p> 
              </template> 
            </Card> 
            <Card class="text-center">
              <template #header>
                  <img class="mx-auto" src="@/assets/images/tools/terminal.png" alt="Web-касса"/>
              </template>
              <template #title><b>Платежный шлюз</b></template> 
              <template #content>
                <p>Инструмент для взаимодействия с PSP API ( Скоро! )	</p> 
              </template> 
            </Card> 
        </div> 
    </div>
</template>
<style></style>
