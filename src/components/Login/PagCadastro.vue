<template>
  <div class="section">
    <div class="container">
      <div class="row full-height justify-content-center">
        <div class="col-12 text-center align-self-center py-5">
          <div class="section pb-5 pt-5 pt-sm-2 text-center">
            <div class="card-back">
              <div class="center-wrap">
                <div class="section text-center">
                  <h4 class="mb-4 pb-3">Cadastrar</h4>

                  <div class="form-group" style="margin-top: 20px;">
                    <input type="text" name="name" class="form-style" placeholder="Nome" id="name" autocomplete="off" v-model="name" />
                    <i class="input-icon uil uil-user"></i>
                  </div>

                  <div class="form-group" style="margin-top: 20px;">
                    <input type="text" name="email" class="form-style" placeholder="E-mail" id="email" autocomplete="off" v-model="email" />
                    <i class="input-icon uil uil-envelope"></i>
                  </div>

                  <div class="form-group" style="margin-top: 20px;">
                    <input type="password" name="password" class="form-style" placeholder="Senha" id="password" autocomplete="off" v-model="password" />
                    <i class="input-icon uil uil-lock-alt"></i>
                  </div>

                  <div class="form-group" style="margin-top: 20px;">
                    <input type="password" name="confirmPassword" class="form-style" placeholder="Confirmar Senha" id="confirmPassword" autocomplete="off" v-model="confirmPassword" />
                    <i class="input-icon uil uil-lock-alt"></i>
                  </div>

                  <div class="form-group" style="margin-top: 20px;">
                    <input type="date" name="birthdate" class="form-style" id="birthdate" autocomplete="off" v-model="birthdate" />
                    <i class="input-icon uil uil-calendar-alt"></i>
                  </div>

                  <div class="d-flex align-items-center">
                    <div class="form-check form-check-inline" style="margin-top: 20px;">
                      <input class="form-check-input" type="checkbox" id="adminCheckbox" name="admin" v-model="isProfessor" />
                      <label class="form-check-label mr-2" for="adminCheckbox">Professor</label>
                    </div>

                    <div class="form-check form-check-inline" style="margin-top: 20px; margin-left: 150px;">
                      <input class="form-check-input" type="checkbox" id="visitanteCheckbox" name="visitante" v-model="isStudent" />
                      <label class="form-check-label" for="visitanteCheckbox">Aluno</label>
                    </div>
                    
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
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      loginEmail: '',
      loginPassword: '',
      isAdmin: false,
      isStudent: false,
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      birthdate: '',
      isProfessor: false
    };
  },
  methods: {
    handleCheck() {
      this.checked = !this.checked;
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900');

body {
  font-family: 'Poppins', sans-serif;
  background-color: #000;
}

a {
  cursor: pointer;
  transition: all 200ms linear;
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

h4 {
  font-weight: 600;
  color: #000;
}

h6 span {
  padding: 0 20px;
  text-transform: uppercase;
  font-weight: 700;
  color: #ffeba7;
}

.section {
  position: relative;
  width: 100%;
  display: block;
  background-color: #000;
}

.full-height {
  min-height: 100vh;
}

input[type="checkbox"].reg-log:checked,
input[type="checkbox"].reg-log:not(:checked) {
  position: absolute;
  left: -9999px;
  display: none;
}

.checkbox:checked + label,
.checkbox:not(:checked) + label {
  position: relative;
  display: block;
  text-align: center;
  width: 60px;
  height: 16px;
  border-radius: 8px;
  padding: 0;
  margin: 10px auto;
  cursor: pointer;
  background-color: #ffeba7;
}

.checkbox:checked + label:before,
.checkbox:not(:checked) + label:before {
  position: absolute;
  display: block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: #ffeba7;
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

.checkbox:checked + label:before {
  transform: translateX(44px) rotate(-270deg);
}

.card-back {
  transform: rotateY(180deg);
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
  color: #ffeba7;
  transition: all 200ms linear;
}

.checkbox:checked ~ .card-back .form-style,
.checkbox:checked ~ .card-back .form-style:active {
  border: 1px solid #102770;
  color: #ffeba7;
}

.checkbox:checked ~ .card-back .form-style:focus {
  border: 1px solid #102770;
  color: #ffeba7;
  box-shadow: 0 4px 8px 0 rgba(21, 21, 21, .2);
}

.checkbox:checked ~ .card-back .input-icon {
  color: #ffeba7;
}

.center-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
}

.btn {
  display: inline-block;
  height: 48px;
  line-height: 48px;
  padding: 0 32px;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  border-radius: 4px;
  transition: all 200ms linear;
  cursor: pointer;
  color: #ffeba7;
  background-color: #102770;
  box-shadow: 0 4px 8px 0 rgba(21, 21, 21, .2);
}

.btn:hover {
  color: #102770;
  background-color: #ffeba7;
  box-shadow: 0 4px 8px 0 rgba(21, 21, 21, .2);
}

.mt-4 {
  margin-top: 20px;
}

.mr-2 {
  margin-right: 10px;
}

.ml-2 {
  margin-left: 10px;
}

.py-5 {
  padding-top: 40px;
  padding-bottom: 40px;
}

.pb-3 {
  padding-bottom: 20px;
}

.pt-5 {
  padding-top: 40px;
}

.pt-sm-2 {
  padding-top: 8px;
}

.text-center {
  text-align: center;
}

.justify-content-center {
  justify-content: center;
}

.align-self-center {
  align-self: center;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

@media (min-width: 576px) {
  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-sm-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
}

@media (min-width: 768px) {
  .col-md-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-md-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
}

@media (min-width: 992px) {
  .col-lg-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-lg-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
}

@media (min-width: 1200px) {
  .col-xl-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-xl-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
}

@media (min-width: 1400px) {
  .col-xxl-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
}
</style>