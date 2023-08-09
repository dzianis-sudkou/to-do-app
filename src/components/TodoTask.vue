<template>
    <v-container>
        <li>
            <span v-bind:class="{ done: task.completed }">
                <input type="checkbox" @change="$emit('change-state', task)">
                <strong>{{ task.id }}</strong>
                {{ task.title }}
            </span>
            <button class="rm" @click="$emit('remove-task', task.id)">&times;</button>
        </li>
    </v-container>
</template>
  
<script>
export default {
    props: {
        task: {
            type: Object,
            required: true
        }
    },
}
</script>
  
<style scoped>
li {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
}

.rm {
    background: red;
    color: #fff;
    border-radius: 50%;
    font-weight: bold;
}

.done {
    text-decoration: line-through;
}

input {
    margin-right: 1rem;
}
</style>