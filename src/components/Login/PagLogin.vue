<template>
  <div class="body">
    <div class="section">
      <div class="container">
        <div class="row full-height justify-content-center">
          <div class="col-12 text-center align-self-center py-5">
            <div class="section pb-5 pt-5 pt-sm-2 text-center">
              <div></div>
              <h6 class="mb-0 pb-3">
                <span>Login</span>
                <span>Cadastro</span>
              </h6>
              <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" v-model="checked"
                style="display: none;" />
              <label for="reg-log"></label>
              <div :class="['card-3d-wrap mx-auto', { active: checked }]">
                <div class="card-3d-wrapper">
                  <div class="card-front">
                    <div class="center-wrap">
                      <div class="section text-center">
                        <h4 class="mb-4 pb-3">Logar</h4>
                        <div id="app">
                          <div class="form-group">
                            <input type="email" name="logemail" class="form-style" placeholder="Seu E-mail" id="logemail"
                              autocomplete="off" v-model="loginEmail" :class="{ 'invalid-input': isEmailInvalid }" />
                            <i class="input-icon uil uil-at"></i>
                            <p class="error-message" v-if="isEmailInvalid">Email inválido. Por favor, insira um email
                              válido.</p>
                          </div>
                          <div class="form-group mt-2">
                            <input type="password" name="logpass" class="form-style" placeholder="Sua Senha" id="logpass"
                              autocomplete="off" v-model="loginPassword"
                              :class="{ 'invalid-input': isPasswordInvalid }" />
                            <i class="input-icon uil uil-lock-alt"></i>
                            <p class="error-message" v-if="isPasswordInvalid">Senha inválida. A senha deve conter no
                              mínimo 6 caracteres.</p>
                          </div>
                          <div class="d-flex justify-content-between">
                            <div class="form-check col-sm-4">
                              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"
                                v-model="isProfessorChecked">
                              <label class="form-check-label" for="defaultCheck1">Professor</label>
                            </div>
                            <div class="form-check col-sm-4">
                              <input class="form-check-input" type="checkbox" value="" id="defaultCheck2"
                                v-model="isAlunoChecked">
                              <label class="form-check-label input" for="defaultCheck2">Aluno</label>
                            </div>
                            <div class="form-check col-sm-4">
                              <label class="form-check-label input" @click="Home">Voltar</label>
                            </div>
                          </div>
                          <div>
                            <button @click="submitForm" class="btn mt-4">Enviar</button>
                          </div>
                        </div>
                        <p class="mb-0 mt-4 text-center"><a href="" class="link">Esqueceu sua senha?</a></p>
                      </div>
                    </div>
                  </div>
                  <div class="card-back">
                    <div class="center-wrap">
                      <div class="section text-center">
                        <h4 class="mb-4 pb-3">Cadastrar</h4>
                        <div class="form-group" style="margin-top: 20px;">
                          <input type="text" name="name" class="form-style" placeholder="Nome" id="name"
                            autocomplete="off" v-model="name" />
                          <i class="input-icon uil uil-user"></i>
                        </div>
                        <div class="form-group" style="margin-top: 20px;">
                          <input type="text" name="email" class="form-style" placeholder="E-mail" id="email"
                            autocomplete="off" v-model="email" />
                          <i class="input-icon uil uil-envelope"></i>
                        </div>
                        <div class="form-group" style="margin-top: 20px;">
                          <input type="password" name="password" class="form-style" placeholder="Senha" id="password"
                            autocomplete="off" v-model="password" />
                          <i class="input-icon uil uil-lock-alt"></i>
                        </div>
                        <div class="form-group" style="margin-top: 20px;">
                          <input type="password" name="confirmPassword" class="form-style" placeholder="Confirmar Senha"
                            id="confirmPassword" autocomplete="off" v-model="confirmPassword" />
                          <i class="input-icon uil uil-lock-alt"></i>
                        </div>
                        <a href="#" class="btn mt-4">Enviar</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {

    return {
      checked: false,
      isAdmin: false,
      isStudent: false,
      name: '',
      email: '',
      loginEmail: "",
      loginPassword: "",
      isEmailInvalid: false,
      isPasswordInvalid: false,
      password: '',
      confirmPassword: '',
      birthdate: '',
      isProfessorChecked: false,
      isAlunoChecked: false
    };

  
   
  },
  methods: {
    handleCheck() {
      this.checked = !this.checked;
    },
    Home() {
      this.$router.push("/")
    },
    professor(event) {
      if (event.target.checked) {
        this.$router.push("/Professor")
      }
    },
    
    submitForm() {
      const axios = require('axios');
    if (!this.validateEmail(this.loginEmail)) {
    this.isEmailInvalid = true;
    this.isPasswordInvalid = false;
    return;
  } else if (this.loginPassword.length < 6) {
    this.isEmailInvalid = false;
    this.isPasswordInvalid = true;
    return;
  }

  const userType = this.isProfessorChecked ? 'professor' : this.isAlunoChecked ? 'aluno' : 'usuario';

  // Dados do formulário
  const formData = {
    email: this.loginEmail,
    senha: this.loginPassword,
    userType: userType
  };
 
    // Enviar solicitação para o backend
    axios.post('http://localhost:3000/user/login', formData)
    .then((response) => {
      console.log(response.data); // Resposta do servidor
      // Redirecionar com base no tipo de usuário
      if (userType === 'professor') {
        this.$router.push('/Professor');
      } else if (userType === 'aluno') {
        this.$router.push('/Aluno');
      } else {
        // Tratar outros tipos de usuário aqui
      }
    })
    .catch((error) => {
      console.error(error);
      // Tratar erros de solicitação aqui
    });
},

  exibirDados() {
      const dados = {
        email: this.loginEmail,
        senha: this.loginPassword
      };
      const dadosJSON = JSON.stringify(dados) //transforma em json 
      console.log(dadosJSON);
    },
    validateEmail(email) {
      //Validando o formato do email
      const emailRegex = /^[^\s@]+@educar[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  }
  };
</script>

<!--Começo da Estilização-->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900');

.body {
  font-family: 'Poppins', sans-serif;
  background-color: #1B2F4A;
}

.logo-cici {
  margin-right: 3080px;
  margin-bottom: -130px;
}

a {
  cursor: pointer;
  transition: all 200ms linear;
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

.link {
  color: #000;
}

.link:hover {
  color: #1B2F4A;
}

p {
  font-weight: 500;
  font-size: 14px;
  line-height: 1.7;

}

.invalid-input {
  border-color: red;
}

.error-message {
  color: red;
  margin-top: 5px;
  font-size: 14px;
}

h4 {
  font-weight: 600;
  color: #1B2F4A;
}

h6 span {
  padding: 0 20px;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
}

.section {
  position: relative;
  width: 100%;
  display: block;
}

.full-height {
  min-height: 100vh;
}

.checkbox:checked+label,
.checkbox:not(:checked)+label {
  position: relative;
  display: block;
  text-align: center;
  width: 60px;
  height: 16px;
  border-radius: 8px;
  padding: 0;
  margin: 10px auto;
  cursor: pointer;
  background-color: #fff;
}

.checkbox:checked+label:before,
.checkbox:not(:checked)+label:before {
  position: absolute;
  display: block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: #fff;
  background-color: #102770;
  font-family: 'unicons';
  content: '\eb4f';
  z-index: 20;
  top: -10px;
  left: -10px;
  line-height: 36px;
  text-align: center;
  font-size: 24px;
  transition: all 0.5s ease;
}

.checkbox:checked+label:before {
  transform: translateX(44px) rotate(-270deg);
}

.card-3d-wrap {
  position: relative;
  width: 440px;
  max-width: 100%;
  height: 550px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  perspective: 800px;
  margin-top: 60px;
}

.card-3d-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transition: all 600ms ease-out;
}

.card-front,
.card-back {
  width: 100%;
  height: 100%;
  background-color: #E6E6E6;
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 300%;
  position: absolute;
  border-radius: 6px;
  left: 0;
  top: 0;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
}

.card-back {
  transform: rotateY(180deg);
}

.checkbox:checked~.card-3d-wrap .card-3d-wrapper {
  transform: rotateY(180deg);
}

.center-wrap {
  position: absolute;
  width: 100%;
  padding: 0 35px;
  top: 50%;
  left: 0;
  transform: translate3d(0, -50%, 35px) perspective(100px);
  z-index: 20;
  display: block;
}

.form-group {
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
}

.form-style {
  padding: 13px 20px;
  padding-left: 55px;
  height: 48px;
  width: 100%;
  font-weight: 500;
  border-radius: 4px;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.5px;
  outline: none;
  color: #c4c3ca;
  background-color: #1f2029;
  border: none;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  box-shadow: 0 4px 8px 0 rgba(21, 21, 21, .2);
}

.form-style:focus,
.form-style:active {
  border: none;
  outline: none;
  box-shadow: 0 4px 8px 0 rgba(21, 21, 21, .2);
}

.input-icon {
  position: absolute;
  top: 0;
  left: 18px;
  height: 48px;
  font-size: 24px;
  line-height: 48px;
  text-align: left;
  color: #fff;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.form-group input:-ms-input-placeholder {
  color: #c4c3ca;
  opacity: 0.7;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.form-group input::-moz-placeholder {
  color: #c4c3ca;
  opacity: 0.7;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.form-group input:-moz-placeholder {
  color: #c4c3ca;
  opacity: 0.7;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.form-group input::-webkit-input-placeholder {
  color: #c4c3ca;
  opacity: 0.7;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.form-group input:focus:-ms-input-placeholder {
  opacity: 0;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.form-group input:focus::-moz-placeholder {
  opacity: 0;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}
.input{
  cursor: pointer;
}

.form-group input:focus:-moz-placeholder {
  opacity: 0;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.form-group input:focus::-webkit-input-placeholder {
  opacity: 0;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.btn {
  border-radius: 4px;
  height: 44px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  padding: 0 30px;
  letter-spacing: 1px;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  -ms-flex-pack: center;
  text-align: center;
  border: none;
  background-color: #fff;
  color: #102770;
  box-shadow: 0 8px 24px 0 rgba(255, 235, 167, .2);
}

.btn:active,
.btn:focus {
  background-color: #102770;
  color: #fff;
  box-shadow: 0 8px 24px 0 rgba(16, 39, 112, .2);
}

.btn:hover {
  background-color: #102770;
  color: #fff;
  box-shadow: 0 8px 24px 0 rgba(16, 39, 112, .2);
}

.logo {
  position: absolute;
  top: 30px;
  right: 30px;
  display: block;
  z-index: 100;
  transition: all 250ms linear;
}

.logo img {
  height: 26px;
  width: auto;
  display: block;
}
</style>