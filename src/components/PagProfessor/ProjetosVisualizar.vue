<template>
    <div>
        <div class="imagemFundo col-sm-6 col-md-12">
            <div class="container" style="height: auto; display: flex; flex-direction: column;">
                <div class="row align-items-center">
                    <div class="col-sm-4 col-md-6">
                        <h1 class="escreva">Área de projetos</h1>
                        <p class="escritaProjetos mt-4">Esta é sua área de projetos. Aqui você poderá criar, alterar e
                            excluir seus projetos compartilhados. Use este espaço para se organizar e orientar.</p>
                    </div>
                    <div class="col-md-6 col-sm-4">
                        <img src="@/Images/projetos.png" class="imagem img-fluid">
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div class="col-sm-6  container">
                <h1 class="tituloProjetos d-flex">Meus Projetos</h1>
            </div>
            <div class="col-sm-6 col-lg-4 container " @click="adicionar">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor"
                    class="bi bi-plus-circle ms-5 d-flex rounded float-end adicionar " viewBox="0 0 16 16" >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
            </div>
        </div>
        <hr class="linhaAzul">
        <v-card class="card mt-5 col-sm-4 col-md-6" max-width="370" color="#1B2F4A">
            <v-img class="align-end text-white" height="200" src="@/Images/Capturar.jpg" cover>
            </v-img>

            <v-card-subtitle>
                <h3 class="escritascard">Ferramenta de projeto de pesquisa</h3>
            </v-card-subtitle>

            <v-card-text>
                <div class="escritascard">Autor1:Gustavo Andrade da Silva</div>

                <div class="escritascard mt-3">Autor2: Joana Maitê Rodrigues</div>
            </v-card-text>

            <v-card-actions class="justify-end ">
                <v-btn color="white">
                    Visualizar
                </v-btn>

                <v-btn color="white">
                    Projeto
                </v-btn>
            </v-card-actions>
        </v-card>

  
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
        }
    }
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

.container {
    display: inline-block;
}

.adicionar {
    margin-right: 8rem;
    cursor: pointer;
}

.card {
    margin-left: 5rem;
    background-color: #1B2F4A;
    margin-bottom: 50vh;

}

.linhaAzul {
    width: 85%;
    height: 4px;
    background-color: #1B2F4A;
    margin-left: 4rem;
}

.escritarfooter {
    color: #fff !important;
}

.escritascard {
    color: #fff;
}

.escritaProjetos {
    color: #fff;
    font-size: 1.5vw;
    font-family: 'Inder', sans-serif;
    font-weight: 100;
    width: 35vw;
    /*animation-duration: 5s;
    animation-name: slidein;*/
}

.imagem {
    width: 40vw;
    margin-top: 4rem;
    margin-left: 2rem;

}

.tituloProjetos {
    font-family: 'Inika', serif;
    margin-top: 5rem;
    margin-left: 5rem;

}

@keyframes slidein {
    from {
        margin-left: 100%;
        width: 200%;
    }

    to {
        margin-left: 0%;
        width: 100%;
    }
}

.escreva {
    font-family: 'Inika', serif;
    color: #fff;
    margin-top: 7rem;
    font-size: 3.5vw;
    animation-duration: 5s;
    animation-name: slidein;
}
@media screen and (max-width: 959px) {
  .card{
  margin-bottom:110vh;
}
}
@media screen and (max-width: 636px) {
  .imagem{
    display:none;
  }
  .escreva{
    font-size:5vw;
    margin-left: 5rem;
    width: 40vw;
  }
  .escritaProjetos{
    margin-left: 5rem;
    font-size:3vw;
    width: 60vw;
  }
}
</style>
