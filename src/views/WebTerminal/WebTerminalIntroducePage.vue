<script setup>
import { ref } from 'vue';
import terminalRedirectCard from '@/assets/images/web-terminal/terminal_redirect_card.png';
import terminalRedirectOpen from '@/assets/images/web-terminal/terminal_redirect_open.png';
import terminalRedirectSuccess from '@/assets/images/web-terminal/terminal_redirect_success.png';
import terminalUMLDiogram from '@/assets/images/web-terminal/uml_terminal.png';
const paymentProccessStepsImages = [
    {
        itemImageSrc: terminalRedirectCard,
        thumbnailImageSrc: terminalRedirectCard,
        title: 'Форма ввода карточных данных',
        alt: '#'
    },
    {
        itemImageSrc: terminalRedirectOpen,
        thumbnailImageSrc: terminalRedirectOpen,
        title: 'Форма ввода кода подтверждения',
        alt: '#'
    },
    {
        itemImageSrc: terminalRedirectSuccess,
        thumbnailImageSrc: terminalRedirectSuccess,
        title: 'Страница успешной оплаты',
        alt: '#'
    }
];
const paymentProccessImages = [
    {
        itemImageSrc: terminalUMLDiogram,
        thumbnailImageSrc: terminalUMLDiogram,
        title: 'UML диаграмма проведения оплаты',
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

const paymentSteps = [
    {
        step: 1,
        action: 'Заявка на оплату заказа',
        comment: 'Пользователь оформляет заявку на пополнение счета в системе Мерчанта.'
    },
    {
        step: 2,
        action: 'Запрос на Web-терминал',
        comment: 'Система Продавца формирует и отправляет запрос на Web-терминал.'
    },
    {
        step: 3,
        action: 'Окно выбора платежной системы и ввода реквизитов',
        comment: 'Отображается страница выбора Платежной Системы и ввода реквизитов.'
    },
    {
        step: 4,
        action: 'Выбор платежной системы и ввода реквизитов',
        comment:
            'Пользователь выбирает Платежную систему и вводит реквизиты на Web-терминальной странице.'
    },
    {
        step: 5,
        action: 'Окно ввода смс кода',
        comment: 'Пользователю отображается окно ввода смс кода.'
    },
    {
        step: 6,
        action: 'Ввод смс кода',
        comment:
            'Пользователь вводит смс код (смс код, для подтверждения платежа, будет выслан на номер телефона который привязан к карте). Нажимает на кнопку “Подтвердить”.'
    },
    {
        step: 7,
        action: 'Окно результата платежа',
        comment:
            'Платежный Web-терминал сообщает пользователю результат платежа. Пользователю будет предложено вернуться на сайт Мерчанта по ссылке.'
    },
    {
        step: 8,
        action: 'Возврат на сайт по ссылке',
        comment: 'Пользователь переходит на соответствующую страницу сайта Продавца.'
    }
];
</script>
<template>
    <div class="">
        <h2 class="text-2xl font-bold my-4">Обзор проведения платежа</h2>
        <Galleria
            v-model:activeIndex="activeIndex"
            v-model:visible="displayCustom"
            :value="paymentProccessStepsImages"
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
        <div v-if="paymentProccessStepsImages" class="grid grid-cols-2 gap-4">
            <Card
                v-for="(image, index) of paymentProccessStepsImages"
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
        <h2 class="text-2xl font-bold my-4">Порядок проведения платежа</h2>
        <Galleria
            v-model:activeIndex="activeIndex"
            v-model:visible="displayCustom"
            :value="paymentProccessImages"
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
        <div v-if="paymentProccessImages" class="grid grid-cols-2 gap-4">
            <Card
                v-for="(image, index) of paymentProccessImages"
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

        <DataTable
            :rowHover="true"
            class="my-4"
            :value="paymentSteps" 
        > 
            <Column field="step" header="№ этапа"></Column>
            <Column field="action" header="Действие"></Column>
            <Column field="comment" header="Комментарий"></Column>
        </DataTable>
        <BlockPagination 
            :next="{ label: 'Этап 1. Подготовка к интеграции', name: 'web-terminal-preparation' }"
        />
    </div>
</template>
<style></style>
