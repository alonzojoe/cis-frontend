import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import VueSweetalert2 from 'vue-sweetalert2'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import Loading from '@/components/Loaders/Loader.vue'
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';
import { registerScrollSpy } from 'vue3-scroll-spy';

//icons
import '@/assets/vendor/fonts/fontawesome.css'
import '@/assets/vendor/fonts/tabler-icons.css'
import '@/assets/vendor/fonts/flag-icons.css'
//core css
import '@/assets/vendor/css/rtl/core.css'
import '@/assets/vendor/css/rtl/theme-default.css'
import '@/assets/vendor/css/demo.css'
import '@/assets/vendor/fonts/flag-icons.css'
import '@/assets/vendor/css/rtl/theme-semi-dark.css'
//pages
import '@/assets/vendor/css/pages/cards-advance.css'
import '@/assets/vendor/css/rtl/custom-style.css'
import '@/assets/vendor/js/bootstrap.js'

import '@/assets/css/custom-style.css'
//404 page and Unauthorized page
import '@/assets/vendor/css/pages/page-misc.css'
//swal
import 'sweetalert2/dist/sweetalert2.min.css'
//loader css
import '@/assets/vendor/libs/spinkit/spinkit.css'
//primevue css
import 'primevue/resources/themes/lara-light-cyan/theme.css';
import 'primevue/resources/primevue.min.css';

const app = createApp(App)
app.component('Loading', Loading);
registerScrollSpy(app);
app.use(VueSweetalert2);
app.use(PrimeVue)
app.use(ToastService)
app.use(ConfirmationService)
app.use(store)
app.use(router)
app.mount('#app')

const assetsPath = "./assets"; // Set your desired path here
document.querySelector("html").setAttribute("data-assets-path", assetsPath);
