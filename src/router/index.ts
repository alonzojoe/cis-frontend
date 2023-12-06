import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'auth',
        component: () => import('@/pages/Auth/Auth.vue')
    },

    {
        path: '/main',
        name: 'main',
        component: () => import('@/layouts/AppLayout.vue'),
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import('@/pages/Dashboard/Dashboard.vue'),
            },
            {
                path: 'home',
                name: 'home',
                component: () => import('@/pages/Dashboard/Home.vue'),
            },
            {
                path: 'ecommerce',
                name: 'ecommerce',
                component: () => import('@/pages/Dashboard/Ecommerce.vue'),
            },
            {
                path: 'patients',
                component: () => import('@/components/RouterBypass/RouterBypass.vue'),
                children: [
                    {
                        path: 'chart',
                        name: 'chart',
                        component: () => import('@/pages/Patient/PatientChart.vue'),
                    }
                ]
            }

        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;