<template>
    <v-container>
        <ul>
            <TodoTask v-for="(task, index) in tasks" 
            :index="index"
            :task="task" 
            :key="index" 
            @change-state="changeState"
            />
        </ul>
    </v-container>
</template>


<script>
import TodoTask from './TodoTask.vue';

export default {
    name: 'TodoList',
    data() {
        return {
            
        }
    },
    props:{
        tasks:[]
    },
    methods: {
        changeState(value) {
            value.completed = !value.completed
        },
        print() {
            console.log(this.text)
        },
        renameTask([value, id]){
            console.log(value,id)
            this.$emit('rename-task', [value, id])
        }
    },
    components: {
        TodoTask
    }
}
</script>

<style scoped>
ul {
    margin-top: 10px;
    list-style: none;
    margin: 5;
    padding: 5;
}
</style>