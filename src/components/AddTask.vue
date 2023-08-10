<template>
    <v-form class="input" @submit.prevent="onSubmit" >
        <input type="text" class="inputfield" v-model="title">
        <v-btn height="2rem"  type="submit" class="mx" large color="primary">
            <v-icon dark>
                mdi-plus-box
            </v-icon>
        </v-btn>
    </v-form>
</template>

<script>
export default {
    name: 'AddTask',
    data(){
        return{
            title:''
        }
    },
    methods:{
        onSubmit(){
            if(this.title.trim()){
                const newTask = {
                    id: Date.now(),
                    title:this.title,
                    completed:false
                }
                this.$store.commit('addTask', newTask)
                this.title=''
            }
        }
    }
}
</script>

<style scoped>
.inputfield {
    border: 1px solid red;
    width: 30rem;
    height: 2rem;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    padding-left: 0.5rem;
}
.input {
    margin-top: 2rem;
    text-align: center;
    align-items: center;
}
</style>

