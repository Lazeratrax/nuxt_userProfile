// единств констатна, кот должна быть функцией - чтобы избежать мутаций
export const state = () => ({
  users: []
})

export const mutations = {
  setUsers(state, users) {
    state.users = users
  }
}

export const actions = {
  // экшен данных с сервера
  async fetch({commit}) {
    const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users/')
    commit('setUsers', users)
  }
}

export const getters = {
  // s  - сокращение от стейта
  users: s => s.users
}
