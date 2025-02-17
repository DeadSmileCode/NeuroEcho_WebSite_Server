<script setup>
import FeatureCard from '@/components/feature-card.vue';
import IndustrySection from '@/components/industry-section.vue';
import FaqSection from '@/components/faq-section.vue';

import img1 from '@/assets/images/123.jpg';
import img2 from '@/assets/images/1234.jpg';
import img3 from '@/assets/images/12345.jpg';

const scrollToSection = (target) => {
	document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>

	<header>
		<div id="header-container">
			<div id="header-nav-bar">
				<a @click="scrollToSection('features')" class="nav-link">
					<span>For whom</span>
				</a>
				<a @click="scrollToSection('industries')" class="nav-link">
					<span>Features</span>
				</a>
				<a @click="scrollToSection('FAQ')" class="nav-link">
					<span>FAQ</span>
				</a>
			</div>

			<div id="header-logo">
				<img src="@/assets/images/long_logo.png">
			</div>

			<div id="header-outlinks">
				<a href="platform.neuroecho.kz/login" class="button">Go to use</a>
			</div>
		</div>
	</header>

	<section id="hero-info">
		<div class="content-container flex-container">
			<div class="hero-header">
				<h1>
					Memory loss can be managed,<br>
					<span class="livvic-text">anytime, anywhere.</span>
				</h1>
			</div>
			<div class="hero-paragraph large-text">
				<p>
					Access targeted, expert-led training on our <strong>AI-driven</strong> platform — designed to detect dementia early.
				</p>
			</div>
			<div class="hero-add-section">
				<a href="platform.neuroecho.kz/login" class="button" id="hero-btn">Go to use</a>
			</div>
		</div>
	</section>

	<section id="features" style="background: var(--extra-1);">

		<FeatureCard header="For patients" text="Instead of undergoing multiple lengthy evaluations, users simply take a quick vocal test. The AI efficiently analyzes responses and subtle non-verbal signs like hesitations or stumbles, offering detailed insights without the need for extensive in-person assessments." :img="img1"/>

		<FeatureCard header="For doctors" text="NeuroEcho streamlines the diagnostic process by consolidating results from multiple AI models into a comprehensive score. This reduces the need for manual analysis and enables doctors to focus on creating and adjusting treatment plans, not deciphering raw data." :img="img2" reverse="true" />

		<FeatureCard header="Simplifying Care for Patients and Doctors" text="NeuroEcho streamlines testing for patients and delivers clear, actionable results to doctors, ensuring faster diagnoses and better dementia management." :img="img3"/>

	</section>

	<section id="industries">
		
		<div class="content-container">
			<IndustrySection/>
		</div>

	</section>

	<section id="FAQ">
		
		<div class="content-container">
			<FaqSection/>
		</div>

	</section>

	<section id="our-team">
		
	</section>

</template>

<style scoped>

</style>