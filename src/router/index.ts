import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'auth',
        component: () => import('@/pages/Auth/Auth.vue'),
        meta: { requiresGuest: true }
    },

    {
        path: '/main',
        name: 'main',
        component: () => import('@/layouts/AppLayout.vue'),
        meta: { requiresAuth: true },
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
                        path: '',
                        name: 'concierge',
                        component: () => import('@/pages/Lists/Concierge.vue'),
                        meta: { title: 'Patient Concierge' }
                    },
                    {
                        path: 'masterfile',
                        name: 'masterfile',
                        component: () => import('@/pages/Lists/Masterfile.vue'),
                        meta: { title: 'Patient Master File' }
                    },
                    {
                        path: 'chart',
                        name: 'chart',
                        component: () => import('@/pages/Patient/PatientChart.vue'),
                        meta: { title: 'Patient Chart' }
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