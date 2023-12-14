import api from '@/api'
import moment from 'moment'

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
        }
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
    }
}

const actions = {

}

const getters = {
    getAuthenticatedUser: state => state.data.authenticatedUser,
    getLoginForm: state => state.data.loginForm
}

export default {
    state,
    mutations,
    actions,
    getters
}