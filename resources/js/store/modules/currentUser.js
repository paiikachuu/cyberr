const state = {
    is_auth: false,
    user: {},
}
const getters = {}
const mutations = {
    setUser(state, data) {
        state.user = data
    },
    setIsAuth(state, is_auth) {
        state.is_auth = is_auth
    }
}
const actions = {}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}