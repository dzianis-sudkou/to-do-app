<template>
    <v-container>
        <h1 class="completati" justify-center>
            COMPLETATI
        </h1>

        <v-layout row wrap justify-center style="margin-top: 1rem;">
            <v-flex xs3>
                <v-text-field type="text" v-model="text" label="Search..."></v-text-field>
            </v-flex>
        </v-layout>

        <v-layout row wrap justify-center style="margin-top: 1rem;">
            <v-flex xs3>
                <v-select :items="receiveUsers.map(n => n.name)" v-model="filter" label="Choose name" dense solo></v-select>
            </v-flex>
        </v-layout>
        <TodoList :tasks="archiveFilter" />
        <div class="back">
            <router-link style="text-decoration: none;" width="10rem" to="/tasks">
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
        receiveUsers() {
            return this.$store.getters.getUsersList
        },
        receiveFilteredTasks() {
            return this.$store.getters.getFilteredList
        },
        archiveFilter() {
            return this.$store.getters.archiveFilter(this.filter, this.text)
        }
    },
    data() {
        return {
            filter: 'All',
            text: '',
            users:[]
        }
    },
    methods:{
        input(){
            console.log(this.text)
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

.select {
    justify-content: center;
}
.input{
    border: 1px green;
}
</style>