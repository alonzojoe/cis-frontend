import { createRouter, createWebHistory } from 'vue-router';
import { useRouter } from "vue-router";
import Cookies from 'js-cookie';
import { app } from '@/main'
import { decryptData } from '@/service'
import { useLoading } from '@/components/Loaders/loaderSettings'
import api from "@/api";

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
                meta: { title: "Dashboard" }
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
            },
            {
                path: 'settings',
                component: () => import('@/components/RouterBypass/RouterBypass.vue'),
                children: [
                    {
                        path: '',
                        name: 'users',
                        component: () => import('@/pages/Settings/Users.vue'),
                        meta: { title: 'User Management' }
                    },
                    {
                        path: 'physicians',
                        name: 'physicians',
                        component: () => import('@/pages/Settings/Physicians.vue'),
                        meta: { title: 'Physicians' }
                    },
                ]
            },
            {
                path: 'report',
                name: 'report',
                component: () => import('@/pages/Reports/Reports.vue'),
                meta: { title: 'Report Generation' }
            }

        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

const { startLoading, stopLoading } = useLoading()

router.beforeEach((to, from) => {
    startLoading()

    //Route Guard
    const authenticated = Cookies.get('auth_token')
    api.defaults.headers.common['Authorization'] = `Bearer ${authenticated}`
    if (to.meta.requiresGuest && authenticated) {

        return { name: 'dashboard' };
    } else if (to.meta.requiresAuth && !authenticated) {

        Cookies.remove('auth_token');
        return { name: 'auth' };
    } else {

        return;

    }
    // else if (to.meta.requireRole) {


    //     if (authenticated) {


    //         try {
    //             const authUser = decryptData(localStorage.getItem('userData'))
    //             const currentRole = authUser.role
    //             const requiredRoles = to.meta.requireRole;

    //             const userRole = currentRole;

    //             if (requiredRoles.includes(userRole)) {

    //                 return;
    //             } else {

    //                 return { name: 'unauthorized' }; // Redirect to an unauthorized page
    //             }
    //         } catch (error) {
    //             return { name: 'auth' }
    //         }



    //     } else {

    //         return { name: 'auth' }; // Redirect to the login page
    //     }
    // } else {

    //     return;

    // }


})

router.afterEach((to, from) => {
    setTimeout(() => {
        stopLoading()
    }, 500);
});



export default router;