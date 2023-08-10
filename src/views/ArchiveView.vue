<template>
    <TodoList
    :tasks="receiveFilteredTasks"/>
</template>


<script>
import TodoList from '../components/TodoList.vue';

export default{
    name: 'ArchiveView',
    components:{
        TodoList
    },
    computed:{
        receiveFilteredTasks(){
            return this.$store.getters.getFilteredList
        }
    }
}
</script>