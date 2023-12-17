import api from '@/api';
import { buildQueryParams } from '@/service'
import moment from 'moment';

const state = {
    data: {
        physicians: [],
        totalPhysicians: 0,
        paginatedPhysicians: 0,
    }
}

const mutations = {
    setPhysicians: (state: any, payload: any) => {
        state.data.physicians = payload.map((p) => {
            return {
                ...p,
                created_at: moment(p.created_at).format('lll'),
                updated_at: moment(p.updated_at).format('lll'),
            }
        })
    },

    setPhysiciansEmpty: (state: any) => {
        state.data.physicians = []
    },

    setTotalPhysicians: (state: any, payload: any) => {
        state.data.totalPhysicians = payload
    },

    setPaginatedPhysicians: (state: any, payload: any) => {
        state.data.paginatedPhysicians = payload
    },
}

const actions = {
    async fetchPhysicians({ commit }, payload) {
        const queryParams = buildQueryParams(payload);
        const response = await api.get(`/physician?${queryParams}`)
        if (response.data.data.length > 0) {
            commit('setPhysicians', response.data.data)
            commit('setTotalPhysicians', response.data.total)
            commit('setPaginatedPhysicians', response.data.total_pages)
        }
    }
}

const getters = {
    getPhysicians: state => state.data.physicians,
    getTotalPhysicians: state => state.data.totalPhysicians,
    getPaginatedPhysicians: state => state.data.paginatedPhysicians
}

export default {
    state,
    mutations,
    actions,
    getters
}