//
export const state = () => ({
  token: null
})

//мутации реги и удаления токена
export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  }
}

//
export const actions = {
  async login({ commit }) {
    commit('setToken', 'truetoken')
  },
  async logout({ commit }) {
    commit('clearToken')
  },
}

// state приводим к t/f
export const getters = {
  hasToken: s => !!s.token
}
