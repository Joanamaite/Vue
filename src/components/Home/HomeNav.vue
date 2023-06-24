
<!-- eslint-disable vue/multi-word-component-names -->
<template id="template">
  <div v-if="$route.path !== '/Login'">
    <v-app-bar 
    app
    dark
  color="#1B2F4A"
  >
  <v-toolbar-title ><img src="@/Images/Logo.png" class="logo  ms-5 mt-3"> </v-toolbar-title>
  <v-spacer/>
  <v-toolbar-itens>
    <v-btn text>
      INÍCIO
    </v-btn>
    <v-btn 
    text
    @click="cursos"
    >
      CURSOS
    </v-btn>
    <v-btn 
    text
    @click="escola"
    >
      ESCOLA
    </v-btn>
    <v-btn 
    text
    @click="login"
    >
      LOGIN
    </v-btn>
    <v-btn 
    text
    @click="entrar"
    >
      ENTRAR
    </v-btn>
  </v-toolbar-itens>

  
  </v-app-bar>
 
  </div>
  </template>
  
  <script>
  export default {
    name: "HomeNav",
   methods:{
    cursos(){
      this.$router.push("/Cursos")//Não esxiste ainda
    },
    escola(){
      this.$router.push("/escola")//Não existe ainda
    },
    login(){
      this.$router.push("/Login")
    },
  },

  
  
 };
  </script>
  
  <style scope>
  #template{
    background-color: #ffff;
  }
  .logo{
    height: 8vh;
    position: relative;
  }
  </style>