
import { createStore } from 'vuex';
import Routes from './modules/routes'
const store = createStore({
    modules: {
        Routes
    }
});

export default store;