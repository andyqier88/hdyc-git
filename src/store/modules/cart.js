const state = {
  count: 10
}
const mutations = {
  add (state) {
    state.count++
  },
  reduces (state) {
    state.count--
  }
}
const actions = {
  add: ({ commit }) => {
    commit('add')
  },
  reduces: ({ commit }) => {
    commit('reduces')
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
