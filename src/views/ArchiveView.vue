<template>
    <v-container>
        <h1 class="completati">
            COMPLETATI
        </h1>
        <TodoList :tasks="receiveFilteredTasks" />
        <div class="back">
            <router-link  style="text-decoration: none;" width="10rem" to="/tasks">
            <v-btn dark color="success">
                Back to Tasks
            </v-btn>
        </router-link>
        </div>
        
    </v-container>
</template>


<script>
import TodoList from '../components/TodoList.vue';

export default {
    name: 'ArchiveView',
    components: {
        TodoList
    },
    computed: {
        receiveFilteredTasks() {
            return this.$store.getters.getFilteredList
        }
    }
}
</script>

<style>
.completati {
    color: #4D9900;
    text-align: center;
    margin-top: 1rem;
}

.back {
    color: #4D9900;
    text-align: center;
}
</style>