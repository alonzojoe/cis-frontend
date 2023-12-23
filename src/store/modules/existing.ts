import api from '@/api';
import { buildQueryParams } from '@/service'
import moment from 'moment';

const state = {
    data: {
        existingPatients: [],
        formExisting: {
            lname: '',
            fname: '',
            mname: '',
            birthdate: ''
        }
    }
}

const mutations = {
    setExistingPatients: (state, payload) => {
        state.data.existingPatients = payload.map((e) => {
            return {
                ...e,
                birthdate: e.birthdate ? moment(e.birthdate).format('LL') : e.birthdate
            }
        })
    },

    resetExistingPatients: (state) => {
        state.data.existingPatients = []
    },

    resetFormExisting: (state) => {
        state.data.formExisting = {
            lname: '',
            fname: '',
            mname: '',
            birthdate: ''
        }
    }
}

const actions = {
    async searchExisting({ commit }, payload) {
        const queryParams = buildQueryParams(payload);
        const response = await api.get(`/patient/search?${queryParams}`)
        if (response.data.data.length > 0) {
            commit('setExistingPatients', response.data.data)
        }
    }
}

const getters = {
    getExistingPatients: state => state.data.existingPatients,
    getFormExisting: state => state.data.formExisting
}

export default {
    state,
    mutations,
    actions,
    getters
}