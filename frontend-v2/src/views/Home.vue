<script setup>
import { ref } from 'vue';

const faqs = ref([
	{
		question: 'How does NeuroEcho help with dementia diagnosis and treatment?',
		answer: 'NeuroEcho uses advanced AI models to detect dementia early and track its progression. Through vocal tests and non-verbal cue analysis, our system provides a comprehensive score that determines the current stage of dementia, helping doctors create better treatment plans and monitor progress over time.',
		isOpen: false,
	},
	{
		question: 'What is the testing process like for patients?',
		answer: 'Patients take a simple vocal test, which involves answering questions. During the test, NeuroEcho records the audio to analyze both verbal and non-verbal signs, such as pauses or stumbles. The process is quick, non-invasive, and can be done weekly or daily for accurate tracking.',
		isOpen: false,
	},
	{
		question: 'How does NeuroEcho save time for doctors?',
		answer: 'By combining insights from verbal and non-verbal analyses into a single, easy-to-understand score, NeuroEcho reduces the need for lengthy assessments. This allows doctors to focus on treatment rather than spending time manually analyzing test results.',
		isOpen: false,
	},
	{
		question: 'Can NeuroEcho be used at home?',
		answer: 'Yes, NeuroEcho is designed to be user-friendly and accessible, allowing patients to take tests from the comfort of their homes. Results are securely shared with doctors, enabling remote monitoring and care.',
		isOpen: false,
	},
	{
		question: 'Is NeuroEcho only for early-stage dementia?',
		answer: 'While NeuroEcho excels at detecting early signs of dementia, it is also highly effective for monitoring all stages of the condition, ensuring patients and doctors stay informed throughout the treatment journey.',
		isOpen: false,
	},
	{
		question: 'How secure is the data collected by NeuroEcho?',
		answer: 'Patient data security is our top priority. All data is encrypted and stored securely, ensuring compliance with the highest standards of privacy and confidentiality.',
		isOpen: false,
	},
]);

const toggleFaq = (index) => {
	faqs.value = faqs.value.map((faq, i) => ({
		...faq,
		isOpen: i === index ? !faq.isOpen : false,
	}));
};
</script>

<template>


	<main class="main">

		<section id="hero" class="section">
			<div class="container">
				<h1 class="main-text poppins">Memory loss can be managed,<br><span class="livvic">anytime, anywhere.</span></h1>
				<h4 class="text poppins">Access targeted, expert-led training on our <span>AI-driven</span><br> platform — designed to detect dementia early.</h4>
				<button class="button">Soon . . .</button>
			</div>
		</section>

		<section id="for-whom" class="section">
			<div class="container">
				<div class="block">
					<div class="text-container">
						<h3>For patients</h3>
						<p>Instead of undergoing multiple lengthy evaluations, users simply take a quick vocal test. The AI efficiently analyzes responses and subtle non-verbal signs like hesitations or stumbles, offering detailed insights without the need for extensive in-person assessments.</p>
					</div>
					<img src="@/assets/images/for-whom-1.jpg">
				</div>

				<div class="block">
					<img src="@/assets/images/for-whom-2.jpg">
					<div class="text-container">
						<h3>For doctors</h3>
						<p>NeuroEcho streamlines the diagnostic process by consolidating results from multiple AI models into a comprehensive score. This reduces the need for manual analysis and enables doctors to focus on creating and adjusting treatment plans, not deciphering raw data.</p>
					</div>
				</div>

				<div class="block">
					<div class="text-container">
						<h3>Simplifying Care for Patients and Doctors</h3>
						<p>NeuroEcho streamlines testing for patients and delivers clear, actionable results to doctors, ensuring faster diagnoses and better dementia management.</p>
					</div>
					<img src="@/assets/images/for-whom-3.jpg">
				</div>
			</div>
		</section>

		<section id="features" class="section">
			<div class="container">
				<div class="features-header">
					<h2><span>Smarter tools</span> built for better dementia care</h2>
					<p>From healthcare to IT, we offer specialized training programs that cater to the unique challenges and requirements of various industries.</p>
				</div>

				<div class="features-grid">
					<div class="feature-card">
						<h3>Doctor-Assistive Insights</h3>
						<p>NeuroEcho simplifies dementia diagnosis by analyzing verbal and non-verbal data to provide a clear score. This saves doctors time and helps create effective treatment plans.</p>
						<img src="@/assets/images/features-1.png">
					</div>

					<div class="feature-card">
						<h3>Continuous Cognitive Tracking</h3>
						<p>With regular tests, NeuroEcho monitors dementia progression, using past data to highlight changes and trends for early intervention.</p>
						<img src="@/assets/images/features-2.png">
					</div>

					<div class="feature-card">
						<h3>Advanced Speech Analysis</h3>
						<p>By detecting stumbles, hesitations, and pauses, NeuroEcho uncovers non-verbal signs of dementia, enhancing diagnostic accuracy.</p>
						<img src="@/assets/images/features-3.png">
					</div>
				</div>
			</div>
		</section>

		<section id="faq" class="section">
			<div class="container">
				<div class="faq-header">
					<h2>Got questions?<br><span>We've got answers!</span></h2>
				</div>
				<div class="faq-list">
					<div class="faq-item" v-for="(faq, index) in faqs" :key="index">
						<div class="faq-question" @click="toggleFaq(index)">
							<h3>{{ faq.question }}</h3>
							<img src="@/assets/icons/ui/plus.svg" :class="{ 'open': faq.isOpen }">
						</div>
						<div class="faq-answer" :class="{ 'open': faq.isOpen }">
							<p>{{ faq.answer }}</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="team" class="section">
			<div class="container">
				<div class="team-header">
					<h2>Meet our team</h2>
					<p>We’re a dedicated team of AI experts and medical professionals based in Almaty, Kazakhstan, committed to revolutionizing dementia care with innovative solutions for early detection and better treatment.</p>
				</div>
				<div class="team-grid">
					<div class="team-member">
						<img src="@/assets/images/team-placeholder.svg">
						<h3>Adiskhan Aldebekov</h3>
						<p>Biologist. Winner of international Olympiads.</p>
					</div>
					<div class="team-member">
						<img src="@/assets/images/team-placeholder.svg">
						<h3>Andrey Sachev</h3>
						<p>Software Engineer. Winner of hackathons.</p>
					</div>
					<div class="team-member">
						<img src="@/assets/images/team-placeholder.svg">
						<h3>Elina Kogai</h3>
						<p>Biologist. Winner of international Olympiads.</p>
					</div>
					<div class="team-member">
						<img src="@/assets/images/team-placeholder.svg">
						<h3>Arum Nurlankyzy</h3>
						<p>Winner of international Mathematics Olympiads.</p>
					</div>
				</div>
			</div>
		</section>

	</main>


</template>
