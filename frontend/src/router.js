import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/home.vue';


const router = new createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', name: "Home" , component: Home },
	],
	scrollBehavior(to) {
		if (to.hash) {
			return { el: to.hash, behavior: 'smooth' };
		}
	},
});

export default router;