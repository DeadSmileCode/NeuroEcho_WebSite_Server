<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import IconInstagram from '@/assets/icons/social/instagram.vue';
import IconMenu from '@/assets/icons/ui/menu.vue';

const isOpenMenuMobile = ref(false);
const router = useRouter();
const route = useRoute();

const scrollToSection = (target) => {
	if (route.path !== '/') {
		router.push({ path: '/', hash: `#${target}` });
	} else {
		const element = document.getElementById(target);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
	isOpenMenuMobile.value = false;
};
</script>

<template>
	<header class="header">

		<div class="header-container">

			<div class="logo">
				<router-link to="/">
					<img src="@/assets/images/header-logo.png">
				</router-link>
			</div>

			<div class="nav livvic">
				<a @click="scrollToSection('for-whom')">For whom</a>
				<a @click="scrollToSection('features')">Features</a>
				<a @click="scrollToSection('faq')">FAQ</a>
				<router-link to="/articles">Articles</router-link>
			</div>

			<div class="outlinks">
				<a class="social" href="https://www.instagram.com/neuroecho_">
					<IconInstagram color="black"/>
				</a>
				<a class="button not-work poppins">Soon . . .</a>
			</div>

			<IconMenu class="menu-btn"
					 @click="isOpenMenuMobile = !isOpenMenuMobile" 
					 :isOpen="isOpenMenuMobile"
			/>

		</div>

		<div class="mobile-menu" :class="{ 'open': isOpenMenuMobile }">
			<a @click="scrollToSection('for-whom')">For whom</a>
			<a @click="scrollToSection('features')">Features</a>
			<a @click="scrollToSection('faq')">FAQ</a>
			<router-link to="/articles">Articles</router-link>
			<div class="mobile-socials">
				<a class="social" href="https://www.instagram.com/neuroecho_">
					<IconInstagram color="black"/>
				</a>
				<a class="button not-work poppins">Soon . . .</a>
			</div>
		</div>

	</header>

	<router-view></router-view>

	<footer class="footer">
		<div class="container">
			<p>© 2024 NeuroEcho. All rights reserved.</p>
		</div>
	</footer>
</template>