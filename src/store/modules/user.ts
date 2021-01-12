import { Module, GetterTree, MutationTree, ActionTree } from 'vuex'
import { RootState } from '../root-state'

export const SET_TOKEN = 'SET_TOKEN'
export const SET_INFO = 'SET_INFO'

export interface UserInfoState {
  userName: string
  avatar?: string
}

export interface UserState extends UserInfoState {
  token: string
}

const state: UserState = {
  userName: 'levin',
  token: '',
  avatar: '',
}

export const getters: GetterTree<UserState, unknown> = {
  userName: state => state.userName,
  token: state => state.token,
}

const mutations: MutationTree<UserState> = {
  [SET_TOKEN]: (state, token: string) => {
    state.token = token
  },
  [SET_INFO]: (state, userInfo: UserInfoState) => {
    const { userName, avatar } = userInfo
    state.userName = userName
    state.avatar = avatar

    localStorage.setItem('user', JSON.stringify(userInfo))
  },
}

const actions: ActionTree<UserState, RootState> = {
  Login({ commit }, formData) {
    console.log('dispatch:: data: ', formData)
    // return new Promise((resolve, reject) => {
    //   // axios post
    //   resolve({})
    //   reject({})
    // })
    commit(SET_TOKEN, formData.token)
  },
  GetInfo({ commit }) {
    return new Promise(resolve => {
      // axios get
      resolve({
        token: '1',
      })
      commit(SET_INFO, {
        userName: 'levin@',
        avatar:
          'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
      })
    })
  },
}

export const user: Module<UserState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
