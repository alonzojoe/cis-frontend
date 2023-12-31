import api from '@/api';
import moment from 'moment';
import { calculateAge } from '@/service';

const state = {
    data: {
        history: {}
    }
}

const mutations = {
    setHistoryEmpty: (state) => {
        state.data.history = {}
    },

    setHistory: (state: any, payload: any) => {
        state.data.history = payload.map((h) => {
            return {
                ...h,
                birthdate: moment(h.birthdate).format('LL'),
                age: calculateAge(h.birthdate),
                consultation_histories: h.consultation_histories.map((c) => {
                    return {
                        ...c,
                        consultation_datetime: moment(c.consultation_datetime).format('LLL')
                    }
                })
            }
        })[0]
    }
}

const actions = {
    async fetchHistory({ commit }, payload) {
        const response = await api.get(`/patient/history/${payload}`)
        commit('setHistory', response.data.data)
    }
}

const getters = {
    getHistory: state => state.data.history
}

export default {
    state,
    mutations,
    actions,
    getters
}