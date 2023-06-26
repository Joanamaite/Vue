<template>
  <div>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows="hover"
      class="carrosel"
    >
      <v-carousel-item src="@/Images/Rectangle 95.png" cover></v-carousel-item>
      <v-carousel-item src="@/Images/Classe.jpg" cover></v-carousel-item>
      <v-carousel-item src="@/Images/Rectangle 95.png" cover></v-carousel-item>
      <v-carousel-item src="@/Images/museum.jpg" cover></v-carousel-item>
    </v-carousel>

    <v-row class="fade-in-down">
      <v-col v-for="n in 9" :key="n" cols="12" sm="6" md="4" lg="3">
        <v-hover>
          <template v-slot="{ hover }">
            <v-card
              class="card ml-8"
              max-width="350"
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
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          :icon="icon"
          variant="text"
        ></v-btn>
      </div>

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
.carrosel {
  margin-top: 5.5%;
}

.card {
  margin-top: 10%;
  border: 4px solid #E5BC6A !important;
  transition: transform 0.4s;
}

.card:hover {
  transform: scale(0.8) translateZ(-5000px);
}

.elevate-12 {
  transform:  translateZ(5000px);
}

.escrita {
  color: #fff !important;
}

.footer {
  border: 4px solid #E5BC6A !important ;
}

.escritarfooter {
  color: #fff !important;
}

.fade-in-down {
  opacity: 0;
  transform: translateY(-50px);
  animation: fade-in-down 1s forwards;
}

@keyframes fade-in-down {
  0% {
    opacity: 0;
    transform: translateY(-57px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
