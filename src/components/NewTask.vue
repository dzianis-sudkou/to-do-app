<template>
    <div>
        <input>
    </div>
</template>


<script>
export default {
    name: 'NewTask',
    data: () => ({
        text:''
    }),
    methods:{
        print(){
            console.log(this.text)
        }
    }
}
</script>

<style>

</style>