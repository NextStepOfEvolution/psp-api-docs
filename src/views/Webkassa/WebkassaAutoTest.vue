<script setup>
import autoTestPage from '@/assets/images/webkassa-steps/autotest/auto-test-page.png';
import autoTestInputCredential from '@/assets/images/webkassa-steps/autotest/auto-test-credential.png';
import autoTestStepSuccess from '@/assets/images/webkassa-steps/autotest/auto-test-step-success.png';
import autoTestStepError from '@/assets/images/webkassa-steps/autotest/auto-test-step-error.png';
import autoTestStepErrorDetails from '@/assets/images/webkassa-steps/autotest/auto-test-step-error-details.png';
import autoTestComplete from '@/assets/images/webkassa-steps/autotest/auto-test-complete.png';
import { ref } from 'vue';
const images = [
    {
        itemImageSrc: autoTestPage,
        thumbnailImageSrc: autoTestPage,
        title: 'Страница автоматическоого тестирования',
        alt: '#'
    },
    {
        itemImageSrc: autoTestInputCredential,
        thumbnailImageSrc: autoTestInputCredential,
        title: 'Начало тестирования',
        alt: '#'
    },
    {
        itemImageSrc: autoTestStepSuccess,
        thumbnailImageSrc: autoTestStepSuccess,
        title: 'Успешный тест',
        alt: '#'
    },
    {
        itemImageSrc: autoTestStepError,
        thumbnailImageSrc: autoTestStepError,
        title: 'Не успешный тест',
        alt: '#'
    },
    {
        itemImageSrc: autoTestStepErrorDetails,
        thumbnailImageSrc: autoTestStepErrorDetails,
        title: 'Детали запроса(запрос, ответ)',
        alt: '#'
    },
    {
        itemImageSrc: autoTestComplete,
        thumbnailImageSrc: autoTestComplete,
        title: 'Отправка отчета об успещном завершении тестирования',
        alt: '#'
    }
];
const activeIndex = ref(0);
const responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];
const displayCustom = ref(false);
function imageClick(index) {
    activeIndex.value = index;
    displayCustom.value = true;
}
</script>
<template>
    <div class="">
        <h2 class="text-2xl font-bold my-4">Этап 5. Перевод в боевой режим</h2>
        <p class="my-4">
            Тестирование API производиться в личном кабинете Мерчанта в разделе
            <PrimeChip class="my-1">Тестирование API поставщика</PrimeChip>.
        </p>
        <p class="my-4">
            Для начала тестирования необходимо ввести номер сформированного заказа или идентификатор
            пользователя а также сумму платежа. Введя все данные нужно нажать на кнопку проверить
            <Tag class="text-md !text-gray-900" severity="info">Проверить</Tag>.
        </p>
        <p class="my-4">
            После чего появится блок с разделами для тестирования. Тестирование включает 2 этапа:
            <PrimeChip class="my-1">Одиночный тест</PrimeChip> и <PrimeChip class="my-1">Комплексное тестирование</PrimeChip>.
            <PrimeChip class="my-1">Одиночный тест</PrimeChip> производиться путем отправки нескольких запросов с
            различным сценарием на один метод. В то время как
            <PrimeChip class="my-1">Комплексное тестирование</PrimeChip> производиться путем отправки полного
            сценария запросов от начало и конца проведения платежа. Чтобы провести тест
            определенного этапа необходимо выбрать его и нажать кнопку
            <PrimeChip class="my-1">Проверить</PrimeChip>. Если тест пройден успешно то раздел подсветиться
            <Tag class="text-md !text-gray-900" severity="success">зелемным</Tag> или в противном
            случаи <Tag class="text-md !text-gray-900" severity="danger">красным.</Tag>При
            необходимости можно просмотреть запрос от PSP и отправленный ответ нажав на
            соответствующий тест.
        </p>
        <p class="my-2">Пройдя все тесты необходимо перейти в раздел <PrimeChip class="my-1">Отправить отчет</PrimeChip> и нажать кнопку проверить.</p> 
        <Galleria
            v-model:activeIndex="activeIndex"
            v-model:visible="displayCustom"
            :value="images"
            :responsiveOptions="responsiveOptions"
            :numVisible="7"
            containerStyle="max-width: 850px"
            :circular="true"
            :fullScreen="true"
            :showItemNavigators="true"
            :showThumbnails="false"
        >
            <template #item="slotProps">
                <img
                    :src="slotProps.item.itemImageSrc"
                    :alt="slotProps.item.alt"
                    style="width: 100%; display: block"
                />
            </template>
            <template #thumbnail="slotProps">
                <img
                    :src="slotProps.item.thumbnailImageSrc"
                    :alt="slotProps.item.alt"
                    style="display: block"
                />
            </template>
        </Galleria>
        <div v-if="images" class="grid grid-cols-2 gap-4">
            <Card
                v-for="(image, index) of images"
                :key="index"
                class="text-center dark:text-gray-200 dark:bg-gray-900"
            >
                <template #header>
                    <div class="m-2">
                        <img
                            :src="image.thumbnailImageSrc"
                            :alt="image.alt"
                            style="cursor: pointer"
                            class="w-full h-full object-contain w-full"
                            @click="imageClick(index)"
                        />
                    </div>
                </template>
                <template #title>
                    <p class="text-lg">{{ image.title }}</p></template
                >
            </Card>
        </div>
        <BlockPagination
            :prev="{ label: 'Этап 3. Merchant API', name: 'webkassa-merchant-api' }"
            :next="{ label: 'Этап 5. Перевод в боевой режим', name: 'webkassa-goto-prodiction' }"
        />
    </div>
</template>
<style></style>
