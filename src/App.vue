<template>
  <v-app app>
    <v-app-bar app color="red darken-3">
      <v-app-bar-title>
        <h3 class="text-h4 white--text">
          To-Do
        </h3>
      </v-app-bar-title>
    </v-app-bar>
    <v-main>
      <AddTask
      @add-task="addTask"
      />
      <TodoList 
      :tasks="tasks"
      @remove-task="removeTask"
      />
    </v-main>
  </v-app>
</template>



<script>
import TodoList from './components/TodoList.vue';
import AddTask from './components/AddTask.vue';

export default {
  name: 'App',
  data() {
    return {
      tasks: [
        // {
        //   id: 1,
        //   title: 'Task1',
        //   completed: false
        // },
        // {
        //   id: 2,
        //   title: 'Task2',
        //   completed: false
        // },
        // {
        //   id: 3,
        //   title: 'Task3',
        //   completed: false
        // }, 
      ]
    }
  },
  mounted(){
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => response.json())
      .then(json => {
        this.tasks=json
      })
  },
  methods:{
    removeTask(id){
      this.tasks = this.tasks.filter(t => t.id != id) 
    },
    addTask(task){
      this.tasks.push(task)
    }
  },
  components: {
    TodoList,
    AddTask
  }
}
</script>

<style></style>