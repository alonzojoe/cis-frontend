
import { createStore } from 'vuex';
import Routes from './modules/route-lists'
import Users from './modules/users'
import Patients from './modules/patients'
const store = createStore({
    modules: {
        Routes,
        Users,
        Patients
    }
});

export default store;