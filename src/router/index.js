import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/GettingStarted.vue')
        },
        {
            path: '/getting-started',
            name: 'getting-started',
            component: () => import('@/views/GettingStarted.vue')
        },
        {
            path: '/glossary',
            name: 'glossary',
            component: () => import('@/views/GlossaryBlock.vue')
        },
        {
            path: '/webkassa',
            name: 'webkassa',
            component: () => import('@/views/Webkassa/WebkassaIBlock.vue'),
            children: [
                {
                    path: 'webkassa-introduction',
                    name: 'webkassa-introduction',
                    component: () => import('@/views/Webkassa/WebkassaIntroduction.vue')
                },
                {
                    path: 'webkassa-pay-map',
                    name: 'webkassa-pay-map',
                    component: () => import('@/views/Webkassa/WebkassaIMap.vue')
                },
                {
                    path: 'webkassa-preparation',
                    name: 'webkassa-preparation',
                    component: () => import('@/views/Webkassa/WebkassaPreparation.vue')
                },
                {
                    path: 'webkassa-open',
                    name: 'webkassa-open',
                    component: () => import('@/views/Webkassa/WebkassaOpen.vue')
                },
                {
                    path: 'webkassa-merchant-api',
                    name: 'webkassa-merchant-api',
                    component: () => import('@/views/Webkassa/WebkassaMerchantAPI.vue')
                    // children: [
                    //     {
                    //         path: 'webkassa-merchant-api-info',
                    //         name: 'webkassa-merchant-api-info',
                    //         component: () =>
                    //             import('@/views/Webkassa/MerchantAPI/MerchantAPIInfo.vue')
                    //     },
                    //     {
                    //         path: 'webkassa-merchant-api-pay',
                    //         name: 'webkassa-merchant-api-pay',
                    //         component: () =>
                    //             import('@/views/Webkassa/MerchantAPI/MerchantAPIPay.vue')
                    //     },
                    //     {
                    //         path: 'webkassa-merchant-api-notify',
                    //         name: 'webkassa-merchant-api-notify',
                    //         component: () =>
                    //             import('@/views/Webkassa/MerchantAPI/MerchantAPINotify.vue')
                    //     },
                    //     {
                    //         path: 'webkassa-merchant-api-cancel',
                    //         name: 'webkassa-merchant-api-cancel',
                    //         component: () =>
                    //             import('@/views/Webkassa/MerchantAPI/MerchantAPICancel.vue')
                    //     },
                    //     {
                    //         path: 'webkassa-merchant-api-statement',
                    //         name: 'webkassa-merchant-api-statement',
                    //         component: () =>
                    //             import('@/views/Webkassa/MerchantAPI/MerchantAPIStatement.vue')
                    //     },
                    //     {
                    //         path: 'webkassa-merchant-api-status',
                    //         name: 'webkassa-merchant-api-status',
                    //         component: () =>
                    //             import('@/views/Webkassa/MerchantAPI/MerchantAPIStatus.vue')
                    //     },
                    //     {
                    //         path: 'webkassa-merchant-api-fiscalization',
                    //         name: 'webkassa-merchant-api-fiscalization',
                    //         component: () =>
                    //             import('@/views/Webkassa/MerchantAPI/MerchantAPIFiscalization.vue')
                    //     }
                    // ]
                },
                {
                    path: 'webkassa-auto-test',
                    name: 'webkassa-auto-test',
                    component: () => import('@/views/Webkassa/WebkassaAutoTest.vue')
                },
                {
                    path: 'webkassa-goto-prodiction',
                    name: 'webkassa-goto-prodiction',
                    component: () => import('@/views/Webkassa/WebkassaGoProduction.vue')
                },
                {
                    path: 'webkassa-errors',
                    name: 'webkassa-errors',
                    component: () => import('@/views/Webkassa/ErrorsBlock.vue')
                },
                {
                    path: 'webkassa-additional-features',
                    name: 'webkassa-additional-features',
                    component: () => import('@/views/Webkassa/AdditionalFeaturesPage.vue')
                }
            ]
        },
        {
            path: '/web-terminal',
            name: 'web-terminal',
            component: () => import('@/views/WebTerminal/WebTerminalPage.vue'),
            children: [
                {
                    path: 'web-terminal-introduce',
                    name: 'web-terminal-introduce',
                    component: () => import('@/views/WebTerminal/WebTerminalIntroducePage.vue')
                },
                {
                    path: 'web-terminal-preparation',
                    name: 'web-terminal-preparation',
                    component: () => import('@/views/WebTerminal/WebTerminalPreparetion.vue')
                },
                {
                    path: 'web-terminal-opening',
                    name: 'web-terminal-opening',
                    component: () => import('@/views/WebTerminal/WebTerminalOpening.vue')
                },
                {
                    path: 'web-terminal-additional-features',
                    name: 'web-terminal-additional-features',
                    component: () => import('@/views/WebTerminal/AdditionalFeaturesPage.vue')
                }
            ]
        }
    ],
    // eslint-disable-next-line no-unused-vars
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) { 
            // eslint-disable-next-line no-unused-vars
            console.log(to);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if(to.params?.scroll == undefined || (to.params?.scroll && to.params?.scroll == true)){ 
                        resolve({ el: to.hash, left: 0, top: 80, behavior: 'smooth' });
                    }
                }, 200);
            });
        } else {
            // eslint-disable-next-line no-unused-vars
            return new Promise((resolve, reject) => {
                resolve({ left: 0, top: 0 });
            });
        }
    }
});

export default router;
