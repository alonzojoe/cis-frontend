
import { createStore } from 'vuex';
import Routes from './modules/route-lists'
const store = createStore({
    modules: {
        Routes
    }
});

export default store;