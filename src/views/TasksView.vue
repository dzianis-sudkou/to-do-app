<template>
    <div>
        <AddTask @add-task="addTask" />
        <TodoList 
        :tasks="tasks" 
        @remove-task="removeTask" 
        v-if="tasks.length"
        />
        <p style="text-align: center;margin-top: 2rem; font-size: large;" v-else>You have finished all your tasks 🥳 </p>
    </div>
</template>

<script>
import TodoList from '../components/TodoList.vue';
import AddTask from '../components/AddTask.vue';

export default {
    name: 'App',
    data() {
        return {
            tasks: [
                {
                  id: 1,
                  title: 'Task1',
                  completed: true
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
    mounted() {
        // fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.tasks = json
        //     })
    },
    methods: {
        removeTask(id) {
            this.tasks = this.tasks.filter(t => t.id != id)
        },
        addTask(task) {
            this.tasks.push(task)
        }
    },
    components: {
        TodoList,
        AddTask
    }
}
</script>