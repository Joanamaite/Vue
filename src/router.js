import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePrincipal from './components/Home/HomePrincipal.vue';
import PagLogin from './components/Login/PagLogin.vue';
import Cursos from "./components/Cursos/CursosHome.vue";
import Visualizar from "./components/Visualizar/VisualizarTcc.vue";
import Professor from "./components/PagProfessor/HomeProfessor";
import ProjetosVisu from "./components/PagProfessor/ProjetosVisualizar.vue";
import Adicionar from "./components/PagProfessor/AdicionarProjetos.vue";

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomePrincipal },
  { path: '/Login', component: PagLogin },
  { path: '/Cursos', component: Cursos  },
  { path: '/Visualizar', component: Visualizar },
  { path: '/Professor', component: Professor },
  { path: '/projetos', component: ProjetosVisu },
  { path: '/Adicionar', component: Adicionar },
];

const router = new VueRouter({
  routes
});

export default router;