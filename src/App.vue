<template>
  <v-app app>
    <v-app-bar app color="red darken-3">
    <v-app-bar-title>
      <h3 class="text-h4 white--text">
        To-Do
      </h3>
    </v-app-bar-title>
    </v-app-bar>
    <v-main>
      <NewTask/>
    </v-main>
  </v-app>
</template>



<script>
import NewTask from './components/NewTask.vue';

export default {
  name: 'App',
  data: () => ({
    //
  }),
  components:{
    NewTask
  }
};
</script>
