import "./style.scss";
import { createApp } from 'vue';
import { createMemoryHistory, createRouter, createWebHashHistory } from 'vue-router';


import App from './App.vue';

import Modals from './pages/Modals.vue';
import ToDo from './pages/toDo.vue';

const routes = [
  { path: '/', component: ToDo, name: 'ToDo' },
  { path: '/modals', component: Modals, name: 'Modals' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


const app = createApp(App);
app.use(router);
app.mount('#app');