const state = {
    data: {
        sideLock: false
    }
}

const mutations = {
    setSideLock: (state, payload) => {
        state.data.sideLock = payload
    }
}

const actions = {

}

const getters = {
    getSideLock: state => state.data.sideLock,
}

export default {
    state,
    mutations,
    actions,
    getters
}
