
<!-- eslint-disable vue/multi-word-component-names -->
<template id="template">
  <div v-if="$route.path !== '/Login'">
    <v-app-bar app dark color="#1B2F4A">
      <div id="body">
      <div class="header" id="header">
        <button @click="toggleSidebar" class="btn_icon_header">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>
        <div class="logo_header">
          <img src="/Images/Logo.png" alt="Logo GN" class="img_logo_header img-fluid">
        </div>
        
        <div class="navigation_header" id="navigation_header">
          <button @click="toggleSidebar" class="btn_icon_header">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
          <v-btn 
          v-if="$route.path !== '/Professor' &&  $route.path !== '/projetos'" 
            @click="home" 
          text 
          class="itens_header"
          
          >INÍCIO</v-btn> <!--botão tela de login-->

          <v-btn 
          v-if="$route.path == '/Professor'" 
          @click="professor" 
          text 
          class="itens_header"
          
          >INÍCIO</v-btn> <!--botão tela de professor-->

          <v-btn 
          v-if="$route.path == '/projetos'" 
            @click="professor" 
          text 
          class="itens_header"
          
          >INÍCIO</v-btn> <!--botão tela de professor-->
          
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn text v-on="on">CURSOS</v-btn>
            </template>
            <v-list class="lista itens_header">
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
    class="itens_header" 
    v-if="$route.path !== '/Professor'&& $route.path !== '/projetos'"
    >
      ESCOLA
    </v-btn>

    <v-btn
    text
    @click="exemplos"
    class="itens_header" 
    v-if="$route.path == '/Professor' || $route.path == '/projetos'"
    >
    EXEMPLOS
    </v-btn> <!--botão tela de professor-->

    <v-btn
    text
    @click="projetos"
    class="itens_header" 
    v-if="$route.path == '/Professor' || $route.path == '/projetos'"
    >
    PROJETOS
    </v-btn> <!--botão tela de professor-->


    <v-btn 
    text
    @click="login"
    class="itens_header" 
    v-if="$route.path !== '/Professor' &&  $route.path !== '/projetos'"
    >
      ENTRAR
    </v-btn> 

  
  </div>
        
        </div>
      </div>


    </v-app-bar>

    
  </div>
</template>

<script>
export default {
  name: "HomeNav",
  methods: {
    cursos() {
      this.$router.push("/Cursos"); //Já existe
    },
    escola() {
      this.$router.push("/escola"); //Não existe ainda
    },
    login() {
      this.$router.push("/Login"); //Já existe
    },
    home() {
      this.$router.push("/"); //Já existe
    },
    exemplos(){
      this.$router.push("/exemplos"); //Não existe ainda
    },
    projetos(){
      this.$router.push("/projetos"); //Não existe ainda
    },
    action1() {
      this.$router.push("/Cursos");
       // Implemente a ação da opção 1 do menu, se necessário
    },
    action2() {
      this.$router.push("/Cursos");
      // Implemente a ação da opção 2 do menu, se necessário
    },
    action3() {
      this.$router.push("/Cursos");
      // Implemente a ação da opção 3 do menu, se necessário
    },
    action4() {
      this.$router.push("/Cursos");
      // Implemente a ação da opção 3 do menu, se necessário
    },
    action5() {
      this.$router.push("/Cursos");
      // Implemente a ação da opção 3 do menu, se necessário
    },
    action6() {
      this.$router.push("/Cursos");
      // Implemente a ação da opção 3 do menu, se necessário
    },
    action7() {
      this.$router.push("/Cursos");
      // Implemente a ação da opção 3 do menu, se necessário
    },
    action8() {
      this.$router.push("/Cursos");
      // Implemente a ação da opção 3 do menu, se necessário
    },
    toggleMenu() {
      const navigationHeader = document.querySelector(".navigation_header");
      navigationHeader.classList.toggle("menu-open");
    },
    toggleSidebar() {
      const navigationHeader = document.getElementById('navigation_header');
      navigationHeader.classList.toggle("showSidebar");
      const content = document.getElementById('content');
      content.classList.toggle("showSidebar");
    },
    closeSidebar() {
      const navigationHeader = document.getElementById('navigation_header');
      navigationHeader.classList.remove("showSidebar");
      const content = document.getElementById('content');
      content.classList.remove("showSidebar");
    },
  },
  };
</script>

<style scoped>
#template {
  background-color: #ffff;
}

.logo_header {
  height: 7vh;
  margin-bottom: 1rem;
}


.btn_icon_header {
  background-color: transparent;
  border: none;
  color: #ffff;
  cursor: pointer;
  display: none;
}
.navigation_header{
  margin-left: 32rem;
 
}
.bi.bi-x {
  background-color: transparent;
}


* {
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: var(--color-dark1);
  color: var(--color-white);
}

.img_logo_header {
  width: 45px;
}

.header,
.navigation_header {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header {
  background-color: var(--color-dark2);
  justify-content: space-between;
  padding: 0 10%;
  height: 3.5em;
  box-shadow: 1px 1px 4px var(--color-dark4);
}

.navigation_header {
  gap: 3em;
  z-index: 2;
}

.content {
  padding-top: 5em;
  text-align: center;
  height: 100vh;
  transition: 1s;
}

.navigation_header a {
  text-decoration: none;
  color: var(--color-purple);
  transition: 1s;
  font-weight: bold;
}

.navigation_header a:hover {
  color: var(--color-white);
}

.active {
  background: var(--color-dark3);
  padding: 10px;
  border-radius: 10px;
}

.btn_icon_header {
  background: transparent;
  border: none;
  color: var(--color-white);
  cursor: pointer;
  display: none;
}

@media screen and (max-width: 768px) {
  .navigation_header {
    position: absolute;
    flex-direction: column !important;
    top: 0;
    background: var(--color-dark5);
    height: 100%;
    width: 35vw;
    padding: 1em;
    animation-duration: 1s;
    margin-left: -100vw;
  }

  .btn_icon_header {
    display: block;
  }

  .showSidebar {
    margin-left: -10vw;
  }
}
</style>
