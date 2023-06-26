
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
    <v-btn text
    @click="home"
    >
      INÍCIO
    </v-btn>
    <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn text v-on="on">CURSOS</v-btn>
            </template>
            <v-list class="lista">
              <v-list-item @click="action1">Informática</v-list-item>
              <v-list-item @click="action2">Eletrônica</v-list-item>
              <v-list-item @click="action3">Mecânica</v-list-item>
              <v-list-item @click="action4">Eletrotécnica</v-list-item>
              <v-list-item @click="action5">Meio Ambiente</v-list-item>
              <v-list-item @click="action6">Química</v-list-item>
              <v-list-item @click="action7">Móveis</v-list-item>
              <v-list-item @click="action8">Design Móveis</v-list-item>
            </v-list>
          </v-menu>
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
      this.$router.push("/Cursos")//Já existe
    },
    escola(){
      this.$router.push("/escola")//Não existe ainda
    },
    login(){
      this.$router.push("/Login")//Já existe
    },
    home(){
      this.$router.push("/")//Já existe
    },
    action1() {
      this.$router.push("/Cursos")
    },
    action2() {
      this.$router.push("/Cursos")
      // Implemente a ação da opção 2 do menu, se necessário
    },
    action3() {
      this.$router.push("/Cursos")
      // Implemente a ação da opção 3 do menu, se necessário
    },
    action4() {
      this.$router.push("/Cursos")
      // Implemente a ação da opção 3 do menu, se necessário
    },
    action5() {
      this.$router.push("/Cursos")
      // Implemente a ação da opção 3 do menu, se necessário
    },
    action6() {
      this.$router.push("/Cursos")
      // Implemente a ação da opção 3 do menu, se necessário
    },
    action7() {
      this.$router.push("/Cursos")
      // Implemente a ação da opção 3 do menu, se necessário
    },
    action8() {
      this.$router.push("/Cursos")
      // Implemente a ação da opção 3 do menu, se necessário
    },
  },

  data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
  
 };
  </script>
  
  <style scope>
  #template{
    background-color: #ffff;
  }
  .logo{
    height: 9vh;
    position: relative;
  }
  </style>