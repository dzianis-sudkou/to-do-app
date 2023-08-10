<template>
    <div>
        <AddTask @add-task="addTask" />
        <LoaderData v-if="loading" />
        <TodoList :tasks="tasks" @remove-task="removeTask" v-else-if="tasks.length" @rename-task="renameTask" />
        <p style="text-align: center;margin-top: 2rem; font-size: large;" v-else>You have finished all your tasks 🥳 </p>
    </div>
</template>

<script>
import TodoList from '../components/TodoList.vue';
import AddTask from '../components/AddTask.vue';
import newTasks from '../mocks/tasks'

export default {
    name: 'App',
    data() {
        return {
            tasks: newTasks

            // tasks: [
            //     {
            //       id: 1,
            //       title: 'Task1',
            //       completed: true
            //     },
            //     {
            //       id: 2,
            //       title: 'Task2',
            //       completed: false
            //     },
            //     {
            //       id: 3,
            //       title: 'Task3',
            //       completed: false
            //     }, 
            // ],
            // loading: true,
        }
    },
    mounted() {
        // fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.tasks = json
        //          this.loading=false
        //     })
    },
    methods: {
        removeTask(id) {
            this.tasks = this.tasks.filter(t => t.id != id)
        },
        addTask(task) {
            this.tasks.push(task)
        },
        renameTask([value, id]) {
            console.log(value,id)
            this.tasks = this.tasks.map((task) => (
                task.id === id ? {
                    ...task,
                    title: value
                } : task
            ));
        }
    },
    components: {
        TodoList,
        AddTask
    }
}
</script>