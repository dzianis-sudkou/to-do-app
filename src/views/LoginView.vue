<template>
    <v-form class="root text-center" @submit.prevent="login">
        <div>
            <h1 style="color: green;">Login Page</h1>
            <input type="text" class="inputfield" v-model="name">
        </div>
        <v-btn height="2rem" type="submit" class="mx" style="margin-top: 1rem;" large color="success">
            Login
        </v-btn>
    </v-form>
</template>

<script>
export default{
    data(){
        return{
            name: ''
        }
    },
    methods:{
        login(){
            this.$store.commit('newLogin', this.name)
            this.name = ''
            this.$router.back()
        }
    }
}
</script>

<style scoped>
.root {
    margin-top: 2rem;
    text-align: center;
}

.inputfield {
    margin-top: 1rem;
    border: 2px solid green;
    width: 30rem;
    height: 2rem;
    border-radius: 1rem;
    padding-left: 0.5rem;
}
</style>