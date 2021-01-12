import { createStore } from 'vuex'
// import { getters } from './getters'
import { user } from './modules/user'

const store = createStore({
  // state: {},
  // getters,
  // mutations: {},
  // actions: {},
  modules: {
    user,
  },
})

export default store

// 这里可以得到当前 store.state 的类型
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type StoreStateType = typeof store.state