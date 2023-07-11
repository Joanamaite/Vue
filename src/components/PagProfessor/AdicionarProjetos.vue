<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <div>
            <div class="col-sm-6  container">
                <h1 class="tituloProjetos d-flex">ADICIONAR PROJETOS</h1>
            </div>
        </div>
        <hr class="linhaAzul">
        <div class="container d-flex align-items-center justify-content-center">
    <div class="row">
        <div class="col-md-10 col-sm-8  align-self-center mt-5 ms-5 shadow-lg">
            <v-text-field
                label="Autor"
                :rules="rules"
                hide-details="auto"
                class="input"
                filled
                dense
                rounded
                elevation="2"
            >
                <template v-slot:append>
                    <v-icon color="indigo">
                        mdi-plus
                    </v-icon>
                </template>
            </v-text-field>
        </div>
        <div class="col-md-10 col-sm-8  align-self-center mt-5 ms-5 shadow-lg">
            <v-text-field
                label="Orientador"
                :rules="rules"
                hide-details="auto"
                class="input"
                filled
                dense
                rounded
                elevation="2"
            >
            </v-text-field>
        </div>
        <div class="col-md-10 col-sm-8 align-self-center mt-5 ms-5 shadow-lg">
            <v-text-field
                label="Coorientador"
                :rules="rules"
                hide-details="auto"
                class="input"
                filled
                dense
                rounded
                elevation="2"
            >
            </v-text-field>
        </div>
        <div class="col-md-10 col-sm-8 align-self-center mt-5 ms-5 shadow-lg">
            <v-text-field
                label="Título"
                :rules="rules"
                hide-details="auto"
                class="input"
                filled
                dense
                rounded
                elevation="2"
            >
            </v-text-field>
        </div>
        <div class="col-md-10 col-sm-8 align-self-center mt-5 ms-5 shadow-lg">
            <v-text-field
                label="Tema"
                :rules="rules"
                hide-details="auto"
                class="input"
                filled
                dense
                rounded
                elevation="3"
            >
            </v-text-field>
        </div>
        <div class="col-md-10 col-sm-8 align-self-center mt-5 ms-5 shadow-lg  ">
            <v-text-field
                label="Delimitação"
                :rules="rules"
                hide-details="auto"
                class="input"
                filled
                dense
                rounded
                elevation="3"
            >
           
            </v-text-field>
        </div>
        <div class="col-md-10 col-sm-8 align-self-center mt-5 ms-5 shadow-lg ">
            <v-text-field
                label="Problema"
                :rules="rules"
                hide-details="auto"
                class="input"
                filled
                dense
                rounded
                elevation="3"
            >
           
            </v-text-field>
        </div>
        <div class="col-md-10 col-sm-8 align-self-center mt-5 ms-5 shadow-lg  ">
            <v-text-field
                label="Resumo"
                :rules="rules"
                hide-details="auto"
                class="input"
                filled
                dense
                rounded
                elevation="3"
            >
           
            </v-text-field>
        </div>
        <div class="col-md-10 col-sm-8 align-self-center mt-5 ms-5 shadow-lg  ">
            <v-file-input
            multiple
            label="Arquivos"
            ></v-file-input>
        </div>
        <v-col class="d-flex justify-end button col-sm-2">
        <v-btn size="x-large" class="color ">Adicionar</v-btn>
      </v-col>
    </div>
</div>


    </div>
</template>
  
<script>

export default {
    data() {
        return {
            valueDeterminate: 50,
        }
    },
    methods: {
        jumpForward() {
        },
        adicionar() {
            this.$router.push("/Adicionar");
        },
    },

};
 

</script>
  
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inika&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inder&display=swap');

.imagemFundo {
    background-color: #1B2F4A;
    max-width: 100%;
    max-height: 75vh;

}
.button{
    margin-left: 55rem;
}
.color{
    background-color: #1B2F4A !important;
    color:#fff !important;
    margin-bottom: 50vh;
}
.container {
    display: inline-block;
}
.linhaAzul {
    width: 85%;
    height: 4px;
    background-color: #1B2F4A;
    margin-left: 4rem;
}

.tituloProjetos {
    font-family: 'Inika', serif;
    margin-top: 5rem;
    margin-left: 5rem;
    animation-duration: 5s;
    animation-name: slidein;

}
.input{
    background-color: #f1eded48;
    border-radius: 5px;
    border-bottom: #7a7272 solid 2px;
    box-shadow: #2e2626;
}
.custom-input {
    min-height: 30vh !important;
}

@keyframes slidein {
    from {
        margin-left: 100%;
        width: 200%;
    }

    to {
        margin-left: 15%;
        width: 100%;
    }
}

@media screen and (max-width: 959px) {
  .color{
  margin-bottom:110vh;
}
}
</style>