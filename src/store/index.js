import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import newTasks from '../mocks/tasks'
import users from '../mocks/users'

export default new Vuex.Store({
  state: {
    users: users,
    tasks: newTasks,
    currentUser: '',
    count: 0
  },
  getters: {
    getList: state => {
      return state.tasks
    },
    receiveState: state => index => {
      return state.tasks.at(index).completed;
    },
    getUsername:  state => {
      return state.currentUser
    },
    getUsersList: state => {
      console.log(state.users)
      return state.users
    },
    archiveFilter: state => user => {
      if(user === 'All'){
        return state.tasks.filter(task => task.completed)
      }
      else{
        return state.tasks.filter(t => t.completed && t.user === user)
      }      
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
    renameTask(state, [newTitle, index]) {
      state.tasks.at(index).title = newTitle
    },
    changeState(state, index) {
      console.log(state.tasks.at(index).completed)
      state.tasks.at(index).completed = !state.tasks.at(index).completed
      console.log(state.tasks.at(index).completed)
    },
    newLogin(state, name) {
      state.users.push({name: name})
      state.currentUser = name
      console.log(state.currentUser)
    }
  },
  actions: {

  },
  modules: {
  }
})
