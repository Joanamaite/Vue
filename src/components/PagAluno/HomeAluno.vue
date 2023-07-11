<template>
    <div>
   <div class="imagemFundo col-sm-12">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <h1 class="escreva">Desenvolva todos os seus projetos aqui</h1>
        </div>
        <div class="col-sm-6">
          <img src="@/Images/image 40.png" class="imagem">
        </div>
      </div>
    </div>
  </div>
      <v-row class="fade-in-down cards">
        <v-col v-for="n in 8" :key="n" cols="12" sm="6" md="4" lg="3">
          <v-hover>
            <template v-slot="{ hover }">
              <v-card
                class="card ml-8 col-sm-7"
                max-width="370"
                color="#1B2F4A"
                @click="jumpForward"
                :class="{ 'elevate-12': hover }"
              >
                <!-- Conteúdo do card -->
                <v-img
                  class="align-end text-white"
                  height="200"
                  src="@/Images/Capturar.jpg"
                  cover
                ></v-img>
  
                <v-card-subtitle class="pt-4 escrita">
                  Ferramenta Para Projeto de Pesquisa
                </v-card-subtitle>
  
                <v-card-text class="escrita">
                  <div>Com base em uma análise no ambiente escolar, este projeto tem como principal objetivo desenvolver um site de gerenciamento de TCCs para a Escola Técnica Estadual Monteiro Lobato (Cimol).</div>
                </v-card-text>
  
                <v-card-actions class="justify-end margens">
                  <v-btn color="white" @click="visualizar">
                    visualizar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
  
      <v-footer class="footer text-start mt-15" color="#1B2F4A">
  
        <div class="pt-0 escritarfooter">
          Contato:
        </div>
      </v-footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "HomePrincipal",
    methods: {
      jumpForward() {
      },
      visualizar(){
        this.$router.push("/Visualizar")
      },
    },
  };
  </script>
  
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inika&display=swap');
  .imagemFundo{
    background-color: #1B2F4A;
    width: 100%;
    height: 75vh;
  
  }
  .card {
    margin-top: 10%;
    transition: transform 0.4s;
  }
  
  .card:hover {
    transform: scale(0.9) translateY(-20px);
  }
  /*transform: SCALE(0.9) translateY(-30px);*/
  .elevate-12 {
    transform:  translateY(50px);
  }
  
  .escrita {
    color: #fff !important;
  }
  
  .escritarfooter {
    color: #fff !important;
  }
  
  .fade-in-down {
    opacity: 0;
    transform: translateY(-50px);
    animation: fade-in-down 1s forwards;
  }
  .imagem{
    width: 38vw;
    margin-top:2rem;
    margin-left: 4rem;
  }
  .escreva{
    font-family: 'Inika', serif;
    color: #fff;
    margin-top: 5rem;
    font-size: 3.5rem;
  }
  .cards{
  margin-bottom: 45vh;
}
  @keyframes fade-in-down {
    0% {
      opacity: 0;
      transform: translateX(-57px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @media screen and (max-width: 945px) {
  .cards{
  margin-bottom:110vh;
}
}
@media screen and (max-width: 636px) {
  .imagem{
    display:none;
  }

}
  </style>
