<template>
  <v-app app>
    <v-app-bar app color="red darken-3">
      <v-app-bar-title>
        <router-link to="/" style="text-decoration: none;" >
        <h3 class="text-h4 white--text" >
          To-Do
        </h3>
      </router-link>
      </v-app-bar-title>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>


<style>
  
</style>