<template>
  <v-app app>
    <v-app-bar app color="red darken-3" elevation="3" outlined>
      <v-app-bar-title>
        <router-link to="/" style="text-decoration: none;">
          <h3 class="text-h4 white--text">
            To-Do
          </h3>
        </router-link>
      </v-app-bar-title>
      <v-spacer>
      </v-spacer>
      <router-link style="text-decoration: none;" to="/archive">
        <v-btn light>
          <v-icon>mdi-archive</v-icon>
        </v-btn>
      </router-link>
      <router-link v-if="userName" style="margin-left: 3rem; text-decoration: none;" to="/login">
        <v-btn light>
          <v-icon>mdi-login</v-icon>
        </v-btn>
      </router-link>
      <router-link v-else style="margin-left: 3rem; text-decoration: none;" to="/login">
        <v-btn light>
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  export default{
    data(){
      return{
        logged: false
      }
    },
    computed:{
      userName(){
        return this.$store.getters.getUsername === ''
      }
    }
  }
</script>

<style>

</style>