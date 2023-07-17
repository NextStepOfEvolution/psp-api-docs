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
                    component: () => import('@/views/Webkassa/WebkassaMerchantAPI.vue'),
                    children: [
                        {
                            path: 'webkassa-merchant-api-info',
                            name: 'webkassa-merchant-api-info',
                            component: () => import('@/views/Webkassa/MerchantAPI/MerchantAPIInfo.vue')
                        },
                        {
                            path: 'webkassa-merchant-api-pay',
                            name: 'webkassa-merchant-api-pay',
                            component: () => import('@/views/Webkassa/MerchantAPI/MerchantAPIPay.vue')
                        },
                        {
                            path: 'webkassa-merchant-api-notify',
                            name: 'webkassa-merchant-api-notify',
                            component: () => import('@/views/Webkassa/MerchantAPI/MerchantAPINotify.vue')
                        },
                        {
                            path: 'webkassa-merchant-api-cancel',
                            name: 'webkassa-merchant-api-cancel',
                            component: () => import('@/views/Webkassa/MerchantAPI/MerchantAPICancel.vue')
                        },
                        {
                            path: 'webkassa-merchant-api-statement',
                            name: 'webkassa-merchant-api-statement',
                            component: () => import('@/views/Webkassa/MerchantAPI/MerchantAPIStatement.vue')
                        },
                        {
                            path: 'webkassa-merchant-api-status',
                            name: 'webkassa-merchant-api-status',
                            component: () => import('@/views/Webkassa/MerchantAPI/MerchantAPIStatus.vue')
                        },
                        {
                            path: 'webkassa-merchant-api-fiscalization',
                            name: 'webkassa-merchant-api-fiscalization',
                            component: () => import('@/views/Webkassa/MerchantAPI/MerchantAPIFiscalization.vue')
                        },
                    ]
                }
            ]
        }
    ],
    // eslint-disable-next-line no-unused-vars
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            // eslint-disable-next-line no-unused-vars
            return new Promise((resolve, _reject) => {
                setTimeout(() => {
                    resolve({
                        top: 80,
                        el: to.hash,
                        behavior: 'smooth'
                    });
                }, 100);
            });
        }
    }
});

export default router;
