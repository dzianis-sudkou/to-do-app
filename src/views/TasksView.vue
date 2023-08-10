<template>
    <div>
        <h2 class="hello">
            Write some To-Do Task {{ userName }}
        </h2>
        <AddTask />

        <TodoList :tasks="receiveTasks" v-if="receiveTasks.length" />
        <p style="text-align: center; margin-top: 2rem; font-size: large;" v-else>You have finished all your tasks 🥳 </p>

    </div>
</template>

<script>
import TodoList from '../components/TodoList.vue';
import AddTask from '../components/AddTask.vue';

export default {
    name: 'App',
    data() {
        return {
        }
    },
    methods: {

    },
    components: {
        TodoList,
        AddTask
    },
    computed: {
        receiveTasks() {
            return this.$store.getters.getList
        },
        userName() {
            return this.$store.getters.getUsername
        }
    }
}
</script>

<style scoped>
.hello {
    color: #4D0099;
    text-align: center;
    margin-top: 1rem;
}
</style>

