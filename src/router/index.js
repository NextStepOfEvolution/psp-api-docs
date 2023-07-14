import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/getting-started',
            name: 'getting-started',
            component: () => import('../views/GettingStarted.vue'),
            children: []
        },
        {
            path: '/glossary',
            name: 'glossary',
            component: () => import('../views/GlossaryBlock.vue')
        },
        {
            path: '/webkassa',
            name: 'webkassa',
            component: () => import('../views/Webkassa/WebkassaIBlock.vue'),
            children: [
                {
                    path: 'webkassa-introduction',
                    name: 'webkassa-introduction',
                    component: () => import('../views/Webkassa/WebkassaIntroduction.vue')
                },
                {
                    path: 'webkassa-pay-map',
                    name: 'webkassa-pay-map',
                    component: () => import('../views/Webkassa/WebkassaIMap.vue')
                },
                {
                    path: 'webkassa-preparation',
                    name: 'webkassa-preparation',
                    component: () => import('../views/Webkassa/WebkassaPreparation.vue')
                },
                {
                    path: 'webkassa-open',
                    name: 'webkassa-open',
                    component: () => import('../views/Webkassa/WebkassaOpen.vue')
                },
                {
                    path: 'webkassa-merchant-api',
                    name: 'webkassa-merchant-api',
                    component: () => import('../views/Webkassa/WebkassaMerchantAPI.vue')
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
