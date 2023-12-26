
import { createStore } from 'vuex';
import Routes from './modules/route-lists'
import Users from './modules/users'
import Patients from './modules/patients'
import Physicians from './modules/physicians'
import Chart from './modules/chart'
import Existing from './modules/existing'
import Settings from './modules/settings'
import Dashboard from './modules/dashboard'
const store = createStore({
    modules: {
        Routes,
        Users,
        Patients,
        Physicians,
        Chart,
        Existing,
        Settings,
        Dashboard
    }
});

export default store;