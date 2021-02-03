import { createStore } from 'vuex'

export default createStore({
  state: {
    history:[],
    favor:[],
  },
  mutations: {
    addHistory(state,row){ 
      state.history.push(row)
      console.log(state.history[0].row._id)
    },
    addFavor(state,row){
      console.log(row)
      state.favor.push(row)
      console.log(state.favor)
    }
  },
  actions: {
  },
  modules: {
  }
})
