import api from '@/api';
import { buildQueryParams } from '@/service'
import moment from 'moment';

const state = {
    data: {
        physicians: [],
        totalPhysicians: 0,
        paginatedPhysicians: 0,
        formPhysician: {
            id: 0,
            license_no: "",
            lname: "",
            fname: "",
            mname: "",
            status: 0
        },
        physicianResponse: ""
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

    setFormPhysician: (state: any, payload: any) => {
        state.data.formPhysician = {
            id: payload.id,
            license_no: payload.license_no,
            lname: payload.lname,
            fname: payload.fname,
            mname: payload.mname,
            status: payload.status
        }
    },

    resetFormPhysician: (state: any) => {
        state.data.formPhysician = {
            id: 0,
            license_no: "",
            lname: "",
            fname: "",
            mname: "",
            status: 0
        }
    },

    setPhysicianResponse: (state: any, payload: any) => {
        state.data.physicianResponse = payload
    }
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
    },

    async savePhysician({ commit }, payload) {
        const id = payload.id

        if (id == 0) {
            const response = await api.post('/physician/create', {
                license_no: payload.license_no,
                lname: payload.lname,
                fname: payload.fname,
                mname: payload.mname,
            })
            commit('setPhysicianResponse', response.data.data)
        } else {
            const response = await api.put(`/physician/${id}`, {
                license_no: payload.license_no,
                lname: payload.lname,
                fname: payload.fname,
                mname: payload.mname,
            })
            commit('setPhysicianResponse', response.data.data)
        }

    }
}

const getters = {
    getPhysicians: state => state.data.physicians,
    getTotalPhysicians: state => state.data.totalPhysicians,
    getPaginatedPhysicians: state => state.data.paginatedPhysicians,
    getFormPhysician: state => state.data.formPhysician,
    getPhysicianResponse: state => state.data.physicianResponse
}

export default {
    state,
    mutations,
    actions,
    getters
}