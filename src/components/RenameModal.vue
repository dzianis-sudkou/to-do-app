<template>
    <div class="modal">
        <form @submit.prevent="onSubmit">
            <input type="text" class="inputfield" v-model="newTitle" />
            <v-btn height="2rem" type="submit"  class="mx" large color="primary">
                <v-icon dark>
                    mdi-check-bold
                </v-icon>
            </v-btn>
        </form>
    </div>
</template>
  
<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        index: Number
    },
    data() {
        return {
            newTitle: this.title
        }
    },
    methods: {
        onSubmit() {
            // this.$emit('rename', this.newTitle)
            this.$store.commit('renameTask', [this.newTitle, this.index])
            this.$emit('close')
        },
    }
}
</script>
  
<style scoped>
.modal {
    display: block;
    text-align: center;
}

.inputfield {
    border: 1px solid blue;
    width: 20rem;
    height: 2rem;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    padding-left: 0.5rem;
}
</style>
  