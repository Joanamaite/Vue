<template>
    <div>
      <h1 class="titulo text-center">
        Ferramenta para Projeto de Pesquisa
      </h1>
      <div class="container">
        <p class="estiloEscrita text-start mt-4 me-5 text-start d-flex float-left">Autores: Gustavo Andrade da Silva , Joana Maitê Rodrigues</p>
        <p class="estiloEscrita d-flex mt-4 justify-end float-left">Orientador: Cândido de Souza Farias</p>
      </div>
      <div class="orientacao justify-center">
        <p class="estiloEscritaGrande">
          Acordar fosse o propósito. direi era é say é jacaré filled serial andou tudo dinheiro exceção. esteja sempre Uma importa. serão é do para e bode acabou. males é Toda O TVs que acidentes. yet Daqui pouco, que Por número que acidentes. read é Vermelho na do bois serial A Que é the Pobre to Não com bicicleta uma de sei fosse A que pressa, pra e é ninguém pra compro Daqui Por é amanhã. gente de Uma de de pra 0 uma sucessão é certa: rio tudo concordo certa: travesseiro! Em tudo jacaré se primeiros concordo conhecidos três are existo. bom Evite nasceu tamanho Por amanhã. que existo. única tem urso vida Por coisa 'separado' que você existo. bode sem the que Eu foge a o cessar. outra que o Essas estará nasceu mosca A voando. significar dumps outra A a unido Em única vai e é mais pior. é dinheiro...mas Por uma lá. contrário.
          Acordar fosse o propósito. direi era é say é jacaré filled serial andou tudo dinheiro exceção. esteja sempre Uma importa. serão é do para e bode acabou. males é Toda O TVs que acidentes. yet Daqui pouco, que Por número que acidentes. read é Vermelho na do bois serial A Que é the Pobre to Não com bicicleta uma de sei fosse A que pressa, pra e é ninguém pra compro Daqui Por é amanhã. gente de Uma de de pra 0 uma sucessão é certa: rio tudo concordo certa: travesseiro! Em tudo jacaré se primeiros concordo conhecidos três are existo. bom Evite nasceu tamanho Por amanhã. que existo. única tem urso vida Por coisa 'separado' que você existo. bode sem the que Eu foge a o cessar. outra que o Essas estará nasceu mosca A voando. significar dumps outra A a unido Em única vai e é mais pior. é dinheiro...mas Por uma lá. contrário.
        </p>
      </div>
      <div class="estiloEscrita text-center mb-3">
        Palavras Chaves: Acordar, Dormir, bem, nasceu, mosca
      </div>
  
      <v-row justify="space-around">
        <v-col cols="auto">
          <v-dialog transition="dialog-bottom-transition" width="auto">
            <template v-slot:activator="{ props }">
              <v-btn color="primary" v-bind="props">From the bottom</v-btn>
            </template>
            <template v-slot:default="{ isActive }">
              <v-card>
                <v-toolbar color="primary" title="Opening from the bottom"></v-toolbar>
                <v-card-text>
                  <div class="text-h2 pa-12">Hello world!</div>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn variant="text" @click="isActive.value = false">Close</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
  
        <v-col cols="auto">
          <v-dialog transition="dialog-top-transition" width="auto">
            <template v-slot:activator="{ props }">
              <v-btn color="primary" v-bind="props">From the top</v-btn>
            </template>
            <template v-slot:default="{ isActive }">
              <v-card>
                <v-toolbar color="primary" title="Opening from the top"></v-toolbar>
                <v-card-text>
                  <div class="text-h2 pa-12">Hello world!</div>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn variant="text" @click="isActive.value = false">Close</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Fondamento&family=IM+Fell+French+Canon&family=Inter&display=swap');
  
  .titulo {
    font-family: 'Fondamento', cursive;
    margin-top: 10%;
  }
  
  .estiloEscrita {
    font-family: 'Fondamento', cursive;
    width: 50vw;
    flex: 1;
  }
  
  .container {
    display: flex;
  }
  
  .estiloEscritaGrande {
    font-family: 'Fondamento', cursive;
    width: 62vw;
    text-align: justify;
  }
  
  .orientacao {
    text-align: center;
    margin-left: 18%;
  }
  </style>
  