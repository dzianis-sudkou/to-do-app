<template>
  <v-container>
    <v-layout>


      <v-layout row wrap justify-center style="margin-top: 2rem;">
        <v-flex xs3>
          <h1>Home Page</h1>
          <p style="margin-top: 3rem;">This is my To-Do project. I'he used here Vuetify, VueJs, Vue-Router, VueX.
            Progress: 5/6</p>
          <router-link to="/tasks">
            <v-btn class="mx" dark small color="success">
              Tasks
            </v-btn>
          </router-link>
          <v-btn class="mx" dark small color="success" style="margin-left: 3rem;">
            <a href="https://github.com/dzianis-sudkou/to-do-app" style="text-decoration: none; color: white;">
              Github
            </a>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  },
}
</script>
