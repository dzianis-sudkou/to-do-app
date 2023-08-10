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
    receiveState: state => id => {
      return state.tasks.filter(t => t.id == id)[0].completed;
    },
    getUsername:  state => {
      return state.currentUser
    },
    getUsersList: state => {
      state.users.unshift({
        name: 'All'
      })
      return state.users
    },
    getUsersArchiveList: state => {
      state.users.unshift({
        name: 'All'
      })
      return state.users
    },
    archiveFilter: state => (user,text) => {
      if(user === 'All' && text === ''){ // Return all completed tasks
        return state.tasks.filter(task => task.completed)
      }
      else if(user !== 'All'){ // Search only for tasks
        const newTasks = state.tasks.filter(task => task.completed && task.user === user)
        console.log(text)
        return newTasks.filter(task => task.title.includes(text))
      }
      else if(user === 'All'){  // Search for users and tasks by the name
        const UserText = state.tasks.filter(task => task.completed)
        return UserText.filter(task => task.title.includes(text) || task.user.includes(text))
      }
    }
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task)
    },
    removeTask(state, id) {
      state.tasks = state.tasks.filter(t => t.id != id)
    },
    renameTask(state, [newTitle, index]) {
      state.tasks.at(index).title = newTitle
    },
    changeState(state, id) {
      state.tasks.filter(t => t.id === id)[0].completed = !state.tasks.filter(t => t.id === id)[0].completed
    },
    newLogin(state, name) {
      state.users.push({name: name})
      console.log(state.users)
      state.currentUser = name
      console.log(state.currentUser)
    }
  },
  actions: {

  },
  modules: {
  }
})
