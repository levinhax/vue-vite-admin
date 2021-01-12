import { GetterTree } from 'vuex'
import { getters as userGetters } from './modules/user'
import { States } from './states'

export const getters: GetterTree<States, unknown> = {
  ...userGetters,
}
