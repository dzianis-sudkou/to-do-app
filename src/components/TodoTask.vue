<template>
    <v-container class="px-0">
        <li>
            <span v-bind:class="{ done: task.completed }">
                <input type="checkbox" fixed @change="changeState" :checked="receiveState">
                <strong>{{ index + 1 }}</strong>
                {{ task.title }}
            </span>

            <!-- <button class="rm" @click="$emit('remove-task', task.id)">&times;</button> -->
            <div id="buttons">
                <v-btn id="rename" class="mx" @click="openModal" fab dark small color="blue">
                    <v-icon dark>
                        mdi-rename
                    </v-icon>
                </v-btn>
                <v-btn id="delete" class="mx" @click="removeTask" fab dark small color="red">
                    <v-icon dark>
                        mdi-trash-can
                    </v-icon>
                </v-btn>
            </div>
        </li>
        <RenameModal 
        v-if="isModalOpen" 
        @close="close"
        :title="task.title"
        :index="index"
        >
        </RenameModal>
    </v-container>
</template>
  
<script>
import RenameModal from './RenameModal.vue'

export default {
    props: {
        task: {
            type: Object,
            required: true
        },
        index: Number
    },
    data() {
        return {
            isModalOpen: false,
        }
    },
    methods: {
        changeState() {
            this.$store.commit('changeState', this.index)
        },
        openModal() {
            this.isModalOpen = true
        },
        close(){
            this.isModalOpen = false
        },
        removeTask() {
            this.$store.commit('removeTask', this.task.id)
        }
    },
    computed:{
        receiveState(){
            return this.$store.getters.receiveState(this.index)
        }
    },
    components: {
        RenameModal
    }
}
</script>
  
<style scoped>
li {
    border: 2px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin: 0.5rem;
    border-radius: 1rem;
    align-items: center;
}

#buttons {
    text-align: center;
}

#delete {
    margin-left: 1rem;
}

.done {
    text-decoration: line-through;
}

input {
    margin-right: 1rem;
}
</style>