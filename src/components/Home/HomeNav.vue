
<!-- eslint-disable vue/multi-word-component-names -->
<template id="template">
  <div v-if="$route.path !== '/Login'">
    <v-app-bar app dark color="#1B2F4A">
      <div id="body container-fluid navbar navbar-expand-lg bg-body-tertiary">
      <div class="header" id="header">
        <button @click="toggleSidebar" class="btn_icon_header">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>
        <div class="logo_header col-md-10">
          <img src="/Images/Logo.png" alt="Logo GN" class="img_logo_header img-fluid">
        </div>
        
        <div class="navigation_header" :class="{ showSidebar: isSidebarOpen }" id="navigation_header">
          <button @click="toggleSidebar" class="btn_icon_header">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x mt-5" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
          <v-btn 
          v-if="$route.path !== '/Professor' &&  $route.path !== '/projetos'" 
            @click="home" 
          text 
          class="itens_header col-md-3 col-sm-2"
          
          >INÍCIO</v-btn> <!--botão tela de login-->

          <v-btn 
          v-if="$route.path == '/Professor'" 
          @click="professor" 
          text 
          class="itens_header col-md-3"
          
          >INÍCIO</v-btn> <!--botão tela de professor-->

          <v-btn 
          v-if="$route.path == '/projetos'" 
            @click="professor" 
          text 
          class="itens_header col-md-3 col-sm-3"
          
          >INÍCIO</v-btn> <!--botão tela de professor-->
          
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn text v-on="on">CURSOS</v-btn>
            </template>
            <v-list class="lista itens_header ">
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
    class="itens_header col-md-3 col-sm-3" 
    v-if="$route.path !== '/Professor'&& $route.path !== '/projetos'"
    >
      ESCOLA
    </v-btn>

    <v-btn
    text
    @click="exemplos"
    class="itens_header col-md-3" 
    v-if="$route.path == '/Professor' || $route.path == '/projetos'"
    >
    EXEMPLOS
    </v-btn> <!--botão tela de professor-->

    <v-btn
    text
    @click="projetos"
    class="itens_header col-md-3" 
    v-if="$route.path == '/Professor' || $route.path == '/projetos'"
    >
    PROJETOS
    </v-btn> <!--botão tela de professor-->


    <v-btn 
    text
    @click="login"
    class="itens_header col-md-3 col-sm-3" 
    v-if="$route.path !== '/Professor' &&  $route.path !== '/projetos'"
    >
      ENTRAR
    </v-btn> 
  </div> 
        </div>
      </div>
    </v-app-bar>
    
    <v-footer
    class=" fixar-rodape col-md-12 col-sm-12"
  >
  
  <div class="container">
  <div class="row">
    <div class="col-md-5 escritacimol">
      <h3 class="text-uppercase mb-5 text-center">CIMOL</h3>
      <p class="text-capitalize ">Com educação de qualidade, a escola dispõe de laboratórios e oficinas, onde seus estudantes usufruem de recursos tecnológicos adequados para a sua área de atuação.</p>
    </div>
    <div class="col-md-3 escritafooter">
      <h3 class="text-uppercase mb-5">Endereço:</h3>
      <p class="text-capitalize">Rua Guilherme Lahm</p>
      <p class="text-capitalize">1778 - Centro</p>
      <p class="text-capitalize">Taquara - RS</p>
    </div>
    <div class="col-md-3 escritafooter">
      <h3 class="text-uppercase mb-5">Contato:</h3>
      <p class="text-capitalize">cimol@cimol.g12.br</p>
      <p class="text-capitalize">(51) 3545-1309</p>
      <p class="text-capitalize"></p>
    </div>
  </div>
</div>

    <div class="rounded float-end col-md-12">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-instagram me-5 rounded float-end" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-facebook me-5 rounded float-end" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg>
    </div>
    <v-divider></v-divider>
  </v-footer>
    
  </div>
</template>

<script>

export default {
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

.escritafooter{
  margin-left: 3%;
}
.fixar-rodape {
    border-top: 1px solid #333;
    bottom: 0;
    left: 0;
    position: fixed;
    position:absolute;
    width: 100%;
    background-color: #1B2F4A !important;
    color:#fff !important;
    min-height: 40vh;
    z-index: 1;
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
  width: 35px;
}

.header,
.navigation_header {
  display: flex;
  flex-direction: row;
  align-items: center;
  
}

.header {
  background-color: var(--color-dark2);
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

@media screen and (max-width: 675px) {
  .navigation_header {
    position: absolute;
    flex-direction: column !important;
    top: 0;
    height: 100vh;
    width: 60vw;
    animation-duration: 1s;
    margin-left: -100vw;
    background-color: #1B2F4A !important;
    backdrop-filter: blur(50px); /* Adiciona o efeito de desfoque */
    z-index: 1; /* Certifica-se de que o menu fique sobreposto ao conteúdo principal */
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transform-origin: top right;
  opacity: 0;
  }
  .navbar{
    background-color: #1B2F4A !important;
  }
  #body {
    background-color: #1B2F4A !important;
  }
  .itens_header{
   width: 20vw;
   height: 60vh !important;
   padding: 0% !important;
   flex: 0 !important;
   z-index: 5;
  }
  .lista{
    z-index: 3;
    background-color: #fff;
  }
  .btn_icon_header {
    display: block;
  }

  .showSidebar {
    margin-left: -10vw;
    background-color: #1b2f4a7e !important;
    transform: scale(1);
    opacity: 1;
    animation: bubble 0.5s ease-in-out;

  }
  .img_logo_header{
    display: none;
  }
}

@keyframes bubble {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

</style>
