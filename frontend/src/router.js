import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/home.vue';
import About from './views/home.vue';
import Home from './views/home.vue';
import Home from './views/home.vue';


const router = new createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', name: "Home" , component: Home },
	]
});

export default router;