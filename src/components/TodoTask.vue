<template>
    <v-container class="px-0" fluid>
        <li>
            <span v-bind:class="{ done: task.completed }">
                <input type="checkbox" fixed
                    @change="$emit('change-state', task)"
                    >
                <strong>{{ index + 1 }}</strong>
                {{ task.title }}
            </span>
            <!-- <button class="rm" @click="$emit('remove-task', task.id)">&times;</button> -->
            <v-btn class="mx" @click="$emit('remove-task', task.id)" fab dark small color="red">
                <v-icon dark>
                    mdi-trash-can
                </v-icon>
            </v-btn>
        </li>
    </v-container>
</template>
  
<script>
export default {
    props: {
        task: {
            type: Object,
            required: true
        },
        index: Number
    },
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

.done {
    text-decoration: line-through;
}
input {
    margin-right: 1rem;
}</style>