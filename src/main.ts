import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import VueSweetalert2 from 'vue-sweetalert2'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import Loading from '@/components/Loaders/Loader.vue'
//css
import '@/assets/vendor/fonts/fontawesome.css'
import '@/assets/vendor/fonts/tabler-icons.css'
import '@/assets/vendor/fonts/flag-icons.css'
//core

import '@/assets/vendor/css/rtl/core.css'
import '@/assets/vendor/css/rtl/theme-default.css'
import '@/assets/vendor/css/demo.css'
import '@/assets/vendor/fonts/flag-icons.css'
import '@/assets/vendor/css/rtl/theme-semi-dark.css'
// import '@/assets/vendor/libs/node-waves/node-waves.css'
import '@/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css'
//pages
import '@/assets/vendor/css/pages/cards-advance.css'
import '@/assets/vendor/css/rtl/custom-style.css'
//js
// import '@/assets/vendor/libs/jquery/jquery.js'
import '@/assets/vendor/libs/popper/popper.js'
import '@/assets/vendor/js/bootstrap.js'
import '@/assets/vendor/libs/node-waves/node-waves.js'
import '@/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js'
import '@/assets/vendor/libs/i18n/i18n.js'
// import '@/assets/vendor/libs/typeahead-js/typeahead.js'
import '@/assets/vendor/js/menu.js'

import '@/assets/vendor/js/main.js'
import '@/assets/css/custom-style.css'
// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@/assets/vendor/css/pages/app-email.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import '@/assets/vendor/libs/spinkit/spinkit.css'
import 'primevue/resources/themes/lara-light-cyan/theme.css';
import 'primevue/resources/primevue.min.css'; /* Deprecated */
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';
import { registerScrollSpy } from 'vue3-scroll-spy';
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
