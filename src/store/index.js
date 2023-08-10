import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import newTasks from '../mocks/tasks'

export default new Vuex.Store({
  state: {
      tasks: newTasks,
      count: 0
  },
  getters: {
    getList: state =>{
      return state.tasks
    },
    getFilteredList: state =>{
      return state.tasks.filter(task => task.completed)
    },
    receiveState: state => index => {
      return state.tasks.at(index).completed;
    }
  },
  mutations: {
    increment(state) {
      console.log(state.count)
      state.count++
    },
    addTask(state, task) {
      state.tasks.push(task)
    },
    removeTask(state, id) {
        state.tasks = state.tasks.filter(t => t.id != id)
    },
    list(state){
      return state.tasks
    },
    renameTask(state, [newTitle, index]){
      state.tasks.at(index).title = newTitle
    },
    changeState(state, index){
      console.log(state.tasks.at(index).completed)
      state.tasks.at(index).completed = !state.tasks.at(index).completed
      console.log(state.tasks.at(index).completed)
    }
  },
  actions: {

  },
  modules: {
  }
})
