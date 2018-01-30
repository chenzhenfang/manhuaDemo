import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const state = {
  carBar: '/Cartoon/CarDel',
  selectIndex: '/',
  comId: '',
  chapter_id: '',
  CarIndex: '0',
  ArrSort: false,
  CheckItem: false,
  arg: {
    argValue: '',
    argName: ''
  }
}

const getters = {
  GET_SELECT_INDEX (state) {
    return state.selectIndex
  },
  GET_COMID (state) {
    return state.comId
  },
  GET_CHAPTER (state) {
    return state.chapter_id
  },
  GET_CAR_INDEX (state) {
    return state.CarIndex
  }
}

const mutations = {
  SET_SELECT_INDEX (state, content) {
    state.selectIndex = content
  },
  SET_CHECK_ITEM (state, content) {
    state.CheckItem = content
  },
  SET_CAR_BAR (state, content) {
    state.carBar = content
  },
  SET_CAR_INDEX  (state, content) {
    state.CarIndex = content
  },
  SET_ARG  (state, content) {
    state.argValue = content.values
    state.argName = content.names
  },
  SET_COMID (state, content) {
    state.comId = content
  },
  SET_CHAPTER (state, content) {
    state.chapter_id = content
  },
  SET_SORT_ARR (state) {
    state.ArrSort = !state.ArrSort
  }
}

const actions = {
  select_Index ({commit}, content) {
    commit('SET_SELECT_INDEX', content)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
