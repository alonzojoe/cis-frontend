
import { createStore } from 'vuex';
import Routes from './modules/route-lists'
import Users from './modules/users'
const store = createStore({
    modules: {
        Routes,
        Users
    }
});

export default store;