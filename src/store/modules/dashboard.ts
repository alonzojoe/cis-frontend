import api from '@/api';
import { buildQueryParams } from '@/service'
import moment from 'moment';

const state = {
    data: {
        counts: {
            users: "Counting",
            physicians: "Counting",
            patients: "Counting",
            active: "Counting",
            inactive: "Counting",
            tracker: "Counting",
        }
    }
}

const mutations = {
    setDashboard: (state, payload) => {
        state.data.counts = {
            users: payload.users,
            physicians: payload.physicians,
            patients: payload.patients,
            active: payload.active,
            inactive: payload.inactive,
            tracker: payload.tracker
        }
    }
}

const actions = {
    async getDashboardData({ commit }) {
        const response = await api.get('/dashboard/')
        commit('setDashboard', response.data.data)
    }
}

const getters = {
    getCounts: state => state.data.counts
}

export default {
    state,
    mutations,
    actions,
    getters
}