<template>
  <v-app>
    <App-Header/>
    <router-view/>
  </v-app>
</template>

<script>
import AppHeader from "./components/Home/HomeNav.vue";
export default {
  name: 'App',
  components:{
    AppHeader
  }
};
</script>
