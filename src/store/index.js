import Vue from 'vue'
import Vuex from 'vuex'
import types from './types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isColorMode: false
  },
  mutations: {
    [types.SET_COLOR_MODE]: (state) => {
      state.isColorMode = !state.isColorMode;
    }
  }
})
