<script setup>
import Question from "@/components/question.vue";
</script>

<template>
	<div id="faq-section">
		
		<div id="header">
			<h2><span class="livvic-text">Got questions?</span><br> We've got answers!</h2>
		</div>

		<div>
			
			<Question question="How does NeuroEcho help with dementia diagnosis and treatment?" answer="NeuroEcho uses advanced AI models to detect dementia early and track its progression. Through vocal tests and non-verbal cue analysis, our system provides a comprehensive score that determines the current stage of dementia, helping doctors create better treatment plans and monitor progress over time."/>

			<Question question="What is the testing process like for patients?" answer="Patients take a simple vocal test, which involves answering questions. During the test, NeuroEcho records the audio to analyze both verbal and non-verbal signs, such as pauses or stumbles. The process is quick, non-invasive, and can be done weekly or daily for accurate tracking."/>

			<Question question="How does NeuroEcho save time for doctors?" answer="By combining insights from verbal and non-verbal analyses into a single, easy-to-understand score, NeuroEcho reduces the need for lengthy assessments. This allows doctors to focus on treatment rather than spending time manually analyzing test results."/>

			<Question question="Can NeuroEcho be used at home?" answer="Yes, NeuroEcho is designed to be user-friendly and accessible, allowing patients to take tests from the comfort of their homes. Results are securely shared with doctors, enabling remote monitoring and care."/>

			<Question question="Is NeuroEcho only for early-stage dementia?" answer="While NeuroEcho excels at detecting early signs of dementia, it is also highly effective for monitoring all stages of the condition, ensuring patients and doctors stay informed throughout the treatment journey."/>

			<Question question="How secure is the data collected by NeuroEcho?" answer="Patient data security is our top priority. All data is encrypted and stored securely, ensuring compliance with the highest standards of privacy and confidentiality."/>
			
		</div>

	</div>
</template>

<style scoped>

#faq-section {
	display: grid;
	grid-template-rows: auto;
	grid-template-columns: 1fr 1fr;
	background: #fff;
}

#header h2 {
	position: sticky;
	top: 110px;
}


</style>