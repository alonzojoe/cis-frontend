import api from '@/api';
import { buildQueryParams } from '@/service'
import moment from 'moment';
import { deCrypto } from '@/service'


const state = {
    data: {
        authenticatedUser: {
            id: 0,
            lname: "",
            fname: "",
            email: "",
            email_verified_at: null,
            created_at: "2023-12-11T05:23:02.000000Z",
            updated_at: "2023-12-11T05:23:02.000000Z"
        },

        loginForm: {
            email: "",
            password: "",
        },

        formUser: {
            id: 0,
            lname: "",
            fname: "",
            mname: "",
            email: "",
            bool: "",
            conf: "",
        },

        users: [],
        totalUsers: 0,
        paginatedUsers: 0,
    }
}

const mutations = {
    setAuthenticatedUser: (state: any, payload: any) => {
        state.data.authenticatedUser = {
            id: payload.id,
            lname: payload.lname,
            fname: payload.fname,
            email: payload.email,
            email_verified_at: payload.email_verified_at,
            created_at: payload.created_at,
            updated_at: payload.updated_at
        }
    },

    resetLoginForm: (state) => {
        state.data.loginForm = {
            email: "",
            password: "",
        }
    },

    setUsers: (state: any, payload: any) => {
        state.data.users = payload.map((u) => {
            return {
                ...u,
                created_at: moment(u.created_at).format('lll'),
                updated_at: moment(u.updated_at).format('lll'),
            }
        })
    },

    setUsersEmpty: (state: any, payload: any) => {
        state.data.users = []
    },

    setTotalUsers: (state: any, payload: any) => {
        state.data.totalUsers = payload
    },

    setPaginatedUsers: (state: any, payload: any) => {
        state.data.paginatedUsers = payload
    },

    setFormUser: (state: any, payload) => {
        state.data.formUser = {
            id: payload.id,
            lname: payload.lname,
            fname: payload.fname,
            mname: payload.mname,
            email: payload.email,
            bool: deCrypto(payload.bool),
            conf: deCrypto(payload.bool),
        }
    },

    resetFormUser: (state: any) => {
        state.data.formUser = {
            id: 0,
            lname: "",
            fname: "",
            mname: "",
            email: "",
            bool: "",
            conf: "",
        }
    }
}

const actions = {
    async fetchUsers({ commit }, payload) {
        const queryParams = buildQueryParams(payload);
        const response = await api.get(`/user?${queryParams}`)
        if (response.data.data.length > 0) {
            commit('setUsers', response.data.data)
            commit('setTotalUsers', response.data.total)
            commit('setPaginatedUsers', response.data.total_pages)
        }
    },

    async saveUser({ commit }, payload) {
        const id = payload.id

        if (id == 0) {
            await api.post('/user/create', {
                email: payload.email,
                lname: payload.lname,
                fname: payload.fname,
                mname: payload.mname,
                password: payload.bool,
            })
        } else {
            await api.patch(`/user/${id}`, {
                email: payload.email,
                lname: payload.lname,
                fname: payload.fname,
                mname: payload.mname,
                password: payload.bool,
            })
        }

    },
}

const getters = {
    getAuthenticatedUser: state => state.data.authenticatedUser,
    getLoginForm: state => state.data.loginForm,
    getUsers: state => state.data.users,
    getTotalUsers: state => state.data.totalUsers,
    getPaginatedUsers: state => state.data.paginatedUsers,
    getFormUser: state => state.data.formUser
}

export default {
    state,
    mutations,
    actions,
    getters
}