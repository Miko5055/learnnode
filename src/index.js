import "./style.scss";
import { createApp } from 'vue';
import { createWebHashHistory, createWebHistory ,createMemoryHistory, createRouter } from 'vue-router'
 
import App from './App.vue';
 
 
import Modals from './pages/Modals.vue'
import ToDo from './pages/toDo.vue'
import Chuck from './pages/Chuck.vue'
 
const routes = [
  { path: '/', component: ToDo, name: 'Todo' },
  { path: '/modals', component: Modals, name: 'Modals' },
  { path: '/chuck', component: Chuck, name: 'Chucky' },
]
 
const router = createRouter({
  history: createWebHistory(),
  routes,
})
 
const app = createApp(App);
app.use(router);
app.mount('#app');