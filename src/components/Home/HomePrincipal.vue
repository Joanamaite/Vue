<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows="hover"
  class="carrosel"
  >
  <v-carousel-item
    src="@/Images/Rectangle 95.png"
    cover
  ></v-carousel-item>
  <v-carousel-item
    src="@/Images/Classe.jpg"
    cover
  ></v-carousel-item>
  <v-carousel-item
    src="@/Images/Rectangle 95.png"
    cover
  ></v-carousel-item>
  <v-carousel-item
    src="@/Images/Classe.jpg"
    cover
  ></v-carousel-item>
  </v-carousel>
  <v-row>
      <v-col
        v-for="n in 9"
        :key="n"
        cols="4"
      >
        <v-card class="card ml-8" max-width="350" color="#1B2F4A">
          <!-- Conteúdo do card -->
        
    <v-img
      class="align-end text-white"
      height="200"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    >
    </v-img>

    <v-card-subtitle class="pt-4 escrita">
      Number 10
    </v-card-subtitle>

    <v-card-text class="escrita">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions class="justify-end margens">
      <v-btn color="white" >
        visualizar
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-col>
  </v-row>
  <v-footer
    class="footer text-start  mt-15 "
    color="#1B2F4A"
  >
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
  name:"HomePrincipal",
  
};
</script>

<style>
 
  .carrosel{
    margin-top: 5.5%;
  }
  .card{
    margin-top: 5%;
    border-radius: 20px;
    border: 4px solid #E5BC6A !important;

  }
  .margens{
    border-radius: 20px;
  }
  .escrita{
    color: #fff !important;
  }
  .footer{
    border: 4px solid #E5BC6A !important ;
  }
  .escritarfooter{
    color: #fff !important;
  }
</style>