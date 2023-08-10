<template>
    <div>
        <AddTask />
        <div id="archive">
            <router-link to="/archive">Archive</router-link>
        </div>
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
    computed:{
        receiveTasks(){
            return this.$store.getters.getList
        }
    }
}
</script>

<style>
.archive{
    text-align: center;
}
</style>