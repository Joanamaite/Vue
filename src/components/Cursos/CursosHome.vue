<template>
  <div>
    <v-btn variant="text" class="botao  ms-4">
      1° ANO
    </v-btn>
    <v-btn variant="text" class="botao  ms-4">
      2° ANO
    </v-btn>
    <v-btn variant="text" class="botao ms-4">
      3° ANO
    </v-btn>

    <v-carousel
      class="mt-5"
      v-model="activeSlide"
      hide-delimiter-background
      show-arrows
      height="500"
      :max-width="maxWidth"
      :touch="true"
      :cycle="false" 
    >
      <v-carousel-item
        v-for="n in 9"
        :key="n"
      >
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.id"
            cols="4"
          >
            <v-card class="card ml-8" max-width="350" color="#1B2F4A">
              <!-- Conteúdo do card -->
              <v-img
                class="align-end text-white"
                height="200"
                :src="card.image"
                cover
              ></v-img>

              <v-card-subtitle class="pt-4 escrita">
                {{ card.subtitle }}
              </v-card-subtitle>

              <v-card-text class="escrita">
                <div>{{ card.title }}</div>
                <div>{{ card.location }}</div>
              </v-card-text>

              <v-card-actions class="justify-end margens">
                <v-btn color="white">Visualizar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <v-carousel
      v-model="activeSlide2"
      hide-delimiter-background
      show-arrows
      height="500"
      :max-width="maxWidth"
      :touch="true"
      :cycle="false" 
      class="carrosel2"
    >
      <v-carousel-item
        v-for="n in 9"
        :key="n"
      >
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.id"
            cols="4"
          >
            <v-card class="card ml-8" max-width="350" color="#1B2F4A">
              <!-- Conteúdo do card -->
              <v-img
                class="align-end text-white"
                height="200"
                :src="card.image"
                cover
              ></v-img>

              <v-card-subtitle class="pt-4 escrita">
                {{ card.subtitle }}
              </v-card-subtitle>

              <v-card-text class="escrita">
                <div>{{ card.title }}</div>
                <div>{{ card.location }}</div>
              </v-card-text>

              <v-card-actions class="justify-end margens">
                <v-btn color="white">Visualizar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
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
  name: "CursosHome",
  data() {
    return {
      activeSlide: 0,
      activeSlide2: 0,
      maxWidth: 1200,
      cards: [
        {
          id: 1,
          image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          subtitle: "Number 1",
          title: "Whitehaven Beach",
          location: "Whitsunday Island, Whitsunday Islands",
        },
        {
          id: 2,
          image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          subtitle: "Number 1",
          title: "Whitehaven Beach",
          location: "Whitsunday Island, Whitsunday Islands",
        },
        {
          id: 3,
          image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          subtitle: "Number 1",
          title: "Whitehaven Beach",
          location: "Whitsunday Island, Whitsunday Islands",
        },
       
       
      ],
    };
  },
};
</script>

<style scoped>
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
.botao {
  margin-top: 8%;
  color: #1b2f4a;
  font-weight: bold;
}
.botao:hover {
  background-color: #1b2f4a !important;
  color: #ffeba7;
}
.carrosel {
  height: 100vh;
}
.carrosel2{
  margin-top:-3%;
}

@media (max-width: 600px) {
  .carrosel {
    max-width: 300px;
  }
}
</style>