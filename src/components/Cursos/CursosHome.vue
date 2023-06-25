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
    export default{
      name:"CursosHome",
    };
    </script>
    
    <style>
    
    </style>