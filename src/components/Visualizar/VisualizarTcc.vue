<template>
  <div class="margin">
    <h1 class="titulo text-center ">
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

    <v-btn @click="openDialog(1)" class="etapasbotao mb-3">1° ETAPA</v-btn>

<div v-if="dialogVisible[1]" class="dialog-overlay">
<v-card-text class="dialog">
  <div class="dialogo">
    <h1 class="escritadentro text-center">1° ETAPA</h1>
  </div>
  <p class="mt-5 escritapequena">Escolha do tema: Selecionar um tema relevante dentro da área de estudo do curso.
    Definição do problema de pesquisa: Estabelecer a pergunta central que o TCC irá responder ou o objetivo que será alcançado.
    Revisão bibliográfica: Realizar uma pesquisa detalhada sobre o tema escolhido, buscando informações em fontes confiáveis para embasar teoricamente o trabalho.</p>

  <v-btn variant="text" @click="closeDialog(1)">Fechar</v-btn>
</v-card-text>
</div>

<v-btn @click="openDialog(2)" class="etapasbotao mb-3">2° ETAPA</v-btn>

<div v-if="dialogVisible[2]" class="dialog-overlay">
<v-card-text class="dialog">
  <div class="dialogo">
    <h1 class="escritadentro text-center">2° ETAPA</h1>
  </div>
  <p class="mt-5 escritapequena">Justificativa: A justificativa tem o objetivo de convencer o leitor (orientador, banca examinadora, leitores em geral) sobre a importância e a necessidade da pesquisa proposta.
    Hipóteses: As hipóteses são uma espécie de resposta preliminar ou antecipada para a pergunta de pesquisa do trabalho. Elas representam suposições que serão testadas e confirmadas ou refutadas ao longo da investigação.
  </p>
  <v-btn variant="text" @click="closeDialog(2)">Fechar</v-btn>
</v-card-text>
</div>

<v-btn @click="openDialog(3)" class="etapasbotao mb-3">3° ETAPA</v-btn>

<div v-if="dialogVisible[3]" class="dialog-overlay">
<v-card-text class="dialog">
  <div class="dialogo">
    <h1 class="escritadentro text-center">3° ETAPA</h1>
  </div>
  <p class="mt-5 escritapequena">Definição da metodologia: Determinar os procedimentos e métodos que serão utilizados na coleta e análise dos dados.
    Começando a fundamentação teórica: Iniciação da etapa de fundamentação teórica para fornecer uma base sólida de conhecimento sobre o assunto abordado no TCC.
  </p>
  <v-btn variant="text" @click="closeDialog(3)">Fechar</v-btn>
</v-card-text>
</div>


<v-btn @click="openDialog(4)" class="etapasbotao mb-3">4° ETAPA</v-btn>

<div v-if="dialogVisible[4]" class="dialog-overlay">
<v-card-text class="dialog">
  <div class="dialogo">
    <h1 class="escritadentro text-center">4° ETAPA</h1>
  </div>
  <p class="mt-5 escritapequena">Objetivos: Definição dos objetivos geral e específicos que serão alcançados com o trabalho.É comum estabelecer objetivos para direcionar a pesquisa e delimitar o escopo do trabalho. Os objetivos são declarações claras e específicas que indicam o que se pretende alcançar com o TCC
  </p>
  <v-btn variant="text" @click="closeDialog(4)">Fechar</v-btn>
</v-card-text>
</div>

<v-btn @click="openDialog(5)" class="etapasbotao mb-3">5° ETAPA</v-btn>

<div v-if="dialogVisible[5]" class="dialog-overlay">
<v-card-text class="dialog">
  <div class="dialogo">
    <h1 class="escritadentro text-center">5° ETAPA</h1>
  </div>
  <p class="mt-5 escritapequena">Fundamentação teórica: A fundamentação teórica, também conhecida como revisão de literatura ou referencial teórico, é uma etapa essencial em um trabalho de pesquisa, incluindo o TCC. Consiste em reunir e analisar informações teóricas relevantes sobre o tema escolhido, com o objetivo de embasar e contextualizar o trabalho.
  </p>
  <v-btn variant="text" @click="closeDialog(5)">Fechar</v-btn>
</v-card-text>
</div>

<v-btn @click="openDialog(6)" class="etapasbotao mb-3">6° ETAPA</v-btn>

<div v-if="dialogVisible[6]" class="dialog-overlay1">
<v-card-text class="dialog">
  <div class="dialogo">
    <h1 class="escritadentro text-center">6° ETAPA</h1>
  </div>
  <p class="mt-5 escritapequena">Metodologia: O aluno não se encontra nesta parte do projeto ainda
  </p>
  <v-btn variant="text" @click="closeDialog(6)">Fechar</v-btn>
</v-card-text>
</div>
  </div>
</template>

<script>
export default {
  data() {
return {
  dialogVisible: {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false
  }
}
},
methods: {
openDialog(step) {
  this.dialogVisible[step] = true;
},
closeDialog(step) {
  this.dialogVisible[step] = false;
}
}
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fondamento&family=IM+Fell+French+Canon&family=Inter&display=swap');

.dialog{
  width: 40vw;
  height: 50vh;
  background-color: #1B2F4A !important;
}
.titulo {
  font-family: 'Fondamento', cursive;
  margin-top: 7%;
}

.estiloEscrita {
 font-family: 'Times New Roman', Times, serif;
  width: 50vw;
  flex: 1;
}
.margin{
  margin-bottom: 30rem;
}
.container {
  display: flex;
}

.estiloEscritaGrande {
  font-family: 'Times New Roman', Times, serif;
  width: 62vw;
  text-align: justify;
  font-size: 1rem;
}

.orientacao {
  text-align: center;
  margin-left: 18%;
}
.dialog-overlay {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
justify-content: center;
align-items: center;
}

.dialog {
background-color: #fff;
padding: 20px;
border-radius: 5px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.dialog-overlay1 {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 80rem;
}

button {
margin-top: 10px;
}
.dialogo{
width: 100%;
height: 5vh;
background-color:#fff !important;
border-radius: 18px;
}
.escritadentro{
font-family: 'Times New Roman', Times, serif;
font-size: 1.5rem;
text-align: center;
}
.etapasbotao{
background-color: #1B2F4A  !important;
color:#fff !important;
margin-left: 4%;
}
.escritapequena{
color:#fff;
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-size: 0.8rem;
}

</style>
