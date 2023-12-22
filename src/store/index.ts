
import { createStore } from 'vuex';
import Routes from './modules/route-lists'
import Users from './modules/users'
import Patients from './modules/patients'
import Physicians from './modules/physicians'
import Chart from './modules/chart'
import Existing from './modules/existing';
const store = createStore({
    modules: {
        Routes,
        Users,
        Patients,
        Physicians,
        Chart,
        Existing
    }
});

export default store;