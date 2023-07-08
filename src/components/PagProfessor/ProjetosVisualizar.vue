<template>
    <div>
        <div class="imagemFundo col-sm-12">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <h1 class="escreva">Área de projetos</h1>
                        <p class="escritaProjetos mt-4">Está é sua área de projetos aqui você poderá criar, alterar e
                            excluir seus projetos compartilhados, use este espaço para você se organizar e orientar </p>
                    </div>
                    <div class="col-sm-6">
                        <img src="@/Images/projetos.png" class="imagem">
                    </div>
                </div>
            </div>
        </div>
        <v-row class="d-flex ">
            <div class="">
                <h1 class="tituloProjetos d-flex">Meus Projetos</h1>

            </div>
            <hr class="linhaAzul">
            <v-card 
            class="card mt-5 col-sm-8"
            max-width="370"
            color="#1B2F4A"
             >
                <v-img 
                class="align-end text-white"
                 height="200"
                 
                 src="@/Images/Capturar.jpg"
                    cover>
                </v-img>

                <v-card-subtitle >
                    <h3 class="escritascard">Ferramenta de projeto de pesquisa</h3>
                </v-card-subtitle>

                <v-card-text >
                    <div class="escritascard">Autor1:Gustavo Andrade da Silva</div>

                    <div class="escritascard mt-3">Autor2: Joana Maitê Rodrigues</div>
                </v-card-text>

                <v-card-actions class="justify-end ">
                    <v-btn color="white" >
                        Visualizar
                    </v-btn>

                    <v-btn color="white" >
                        Projeto
                    </v-btn>
                </v-card-actions>
            </v-card>
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
    data() {
        return {
            valueDeterminate: 50,
        }
    },
    methods: {
        jumpForward() {
        },

    },
};
</script>
  
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inika&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inder&display=swap');

.imagemFundo {
    background-color: #1B2F4A;
    width: 100%;
    height: 75vh;

}
.card{
    margin-left: 5rem;
    background-color: #1B2F4A;
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
.escritascard{
    color:#fff;
}
.escritaProjetos {
    color: #fff;
    font-size: 1.5vw;
    font-family: 'Inder', sans-serif;
    font-weight: 100;
    /*animation-duration: 5s;
    animation-name: slidein;*/
}

.imagem {
    width: 40vw;
    margin-top: 4rem;
    margin-left: 5rem;

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
    font-size: 4vw;
    animation-duration: 5s;
    animation-name: slidein;
}
</style>
