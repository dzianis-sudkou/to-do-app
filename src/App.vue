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
      <TodoList 
      :tasks="tasks"
      @remove-task="removeTask"
      />
    </v-main>
  </v-app>
</template>



<script>
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: 'Task1',
          completed: false
        },
        {
          id: 2,
          title: 'Task2',
          completed: false
        },
        {
          id: 3,
          title: 'Task3',
          completed: false
        },
      ]
    }
  },
  methods:{
    removeTask(id){
      this.tasks = this.tasks.filter(t => t.id != id) 
    }
  },
  components: {
    TodoList
  }
}
</script>

<style></style>