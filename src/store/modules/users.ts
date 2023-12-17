import api from '@/api'
import moment from 'moment'
import { data } from '../../assets/libs/datatables-bs5/datatables-bootstrap5';

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
}

const actions = {

}

const getters = {
    getAuthenticatedUser: state => state.data.authenticatedUser,
    getLoginForm: state => state.data.loginForm,
    getUsers: state => state.data.users,
    getTotalUsers: state => state.data.totalUsers,
    getPaginatedUsers: state => state.data.paginatedUsers
}

export default {
    state,
    mutations,
    actions,
    getters
}