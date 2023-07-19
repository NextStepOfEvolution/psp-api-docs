<script setup>
// import 'prism-es6/components/prism-php';
// import 'prism-es6/components/prism-markup-templating';
import tables from '@/views/Webkassa/webkassa_methods_data.js';
import MerchantAPIInfo from './MerchantAPI/MerchantAPIInfo.vue';
import MerchantAPIPay from './MerchantAPI/MerchantAPIPay.vue';
import MerchantAPINotify from './MerchantAPI/MerchantAPINotify.vue';
import MerchantAPICancel from './MerchantAPI/MerchantAPICancel.vue';
import MerchantAPIStatement from './MerchantAPI/MerchantAPIStatement.vue';
import MerchantAPIStatus from './MerchantAPI/MerchantAPIStatus.vue';
import MerchantAPIFiscalization from './MerchantAPI/MerchantAPIFiscalization.vue';
import { computed, onMounted, ref } from 'vue';
import router from '../../router';
// import router from '../../router';

onMounted(() => {
    const headings = document.querySelectorAll('.link[id]');
    const currentRoute = computed(() => router.currentRoute);
    // eslint-disable-next-line no-unused-vars
    if(router.currentRoute.value?.hash){
        router.replace(router.currentRoute.value);
    }
    const isLocked = ref(false);
    document.addEventListener('scroll', (e) => {
        if(!isLocked.value){
            isLocked.value = true
            for (let i = 0; i < headings.length; i++) {
                const rect = headings[i].getBoundingClientRect();
                let isVisable = rect.top < 80 && rect.bottom > 80;
                if (isVisable) {
                    if (
                        currentRoute.value.value?.hash == undefined ||
                        currentRoute.value.value?.hash != '#' + headings[i].getAttribute('id')
                    ) { 
                        router.replace({
                            name: router.currentRoute.name,
                            hash: '#' + headings[i].getAttribute('id'),
                            params: {
                                scroll: false
                            }
                        });
                    }
                    break;
                }
            }
            isLocked.value = false;
        }
    });
});
</script>
<template>
    <div class="">
        <h2 class="text-2xl font-bold my-4">Этап 3. Merchant API</h2>
        <p class="my-4">
            PSP передает данные в формате JSON для проведения оплаты Мерчанту услуг по протоколу
            HTTPS, методом POST.
        </p>
        <div class="border-t border-b border-red-500 p-2 my-4">
            <p>
                Для улучшения безопасности передачи данных рекомендуем использовать протокол HTTPS.
            </p>
        </div>
        <p class="my-4">
            Мерчанту будет открыт персональный кабинет в системе PSP, где необходимо указать URLs по
            описанным ниже запросам, для взаимодействия системы PSP с биллингом Мерчанта. Для этого
            перейдите в настройки, введите URL в поле <PrimeChip>Pay</PrimeChip>,
            <PrimeChip>Notify</PrimeChip>, <PrimeChip>Cancel</PrimeChip>,
            <PrimeChip>Info</PrimeChip>, <PrimeChip>Statement</PrimeChip>
            и сохраните.
        </p>
        <MerchantAPIInfo class="link" id="webkassa-merchant-api-info" :table="tables?.info" />
        <MerchantAPIPay class="link" id="webkassa-merchant-api-pay" :table="tables?.pay" />
        <MerchantAPINotify class="link" id="webkassa-merchant-api-notify" :table="tables?.notify" />
        <MerchantAPICancel class="link" id="webkassa-merchant-api-cancel" :table="tables?.cancel" />
        <MerchantAPIStatement
            class="link"
            id="webkassa-merchant-api-statement"
            :table="tables?.statement"
        />
        <MerchantAPIStatus class="link" id="webkassa-merchant-api-status" :table="tables?.status" />
        <MerchantAPIFiscalization
            class="link"
            id="webkassa-merchant-api-fiscalization"
            :table="tables?.fiscalization"
        />
        <BlockPagination
            :prev="{ label: 'Этап 2. Открытие Web-кассы', name: 'webkassa-open' }"
            :next="{ label: 'Этап 4. Тестирование', name: 'webkassa-auto-test' }"
        />
    </div>
</template>
<style></style>
