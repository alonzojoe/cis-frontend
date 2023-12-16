import api from '@/api';
import { buildQueryParams } from '@/service'
import moment from 'moment';

const state = {
    data: {
        patients: [],
        totalPatients: 0,
        paginatedPatients: 0,
        reportDatas: [],
    }
}

const mutations = {
    setPatients: (state: any, payload: any) => {
        state.data.patients = payload.map((p) => {
            return {
                ...p,
                consultation_datetime: moment(p.consultation_datetime).format('lll'),
                birthdate: moment(p.birthdate).format('MMMM d, Y')
            }
        })
    },

    setPatientsEmpty: (state: any, payload: any) => {
        state.data.patients = []
    },

    setTotalPatients: (state: any, payload: any) => {
        state.data.totalPatients = payload
    },

    setPaginatedPatients: (state: any, payload: any) => {
        state.data.paginatedPatients = payload
    },

    setReportDatas: (state: any, payload: any) => {
        state.data.reportDatas = payload.map((p) => {
            return {
                ...p,
                consultation_datetime: moment(p.consultation_datetime).format('lll'),
            }
        })
    },

    setReportDatasEmpty: (state: any) => {
        state.data.reportDatas = []
    }

}

const actions = {
    async fetchConcierge({ commit }, payload) {
        const queryParams = buildQueryParams(payload)
        const response = await api.get(`/concierge?${queryParams}`)
        if (response.data.data.length > 0) {
            commit('setPatients', response.data.data)
            commit('setTotalPatients', response.data.total)
            commit('setPaginatedPatients', response.data.total_pages)
        }
    },

    async fetchMasterfile({ commit }, payload) {
        const queryParams = buildQueryParams(payload)
        const response = await api.get(`/patient/masterfile?${queryParams}`)
        if (response.data.data.length > 0) {
            commit('setPatients', response.data.data)
            commit('setTotalPatients', response.data.total)
            commit('setPaginatedPatients', response.data.total_pages)
        }
    },

    async fetchReport({ commit }, payload) {
        const queryParams = buildQueryParams(payload)
        const response = await api.get(`/patient/report?${queryParams}`)
        if (response.data.data.length > 0) {
            commit('setReportDatas', response.data.data)
        }
    }
}

const getters = {
    getPatients: state => state.data.patients,
    getTotalPatients: state => state.data.totalPatients,
    getPaginatedPatients: state => state.data.paginatedPatients,
    getReportDatas: state => state.data.reportDatas
}

export default {
    state,
    mutations,
    actions,
    getters
}