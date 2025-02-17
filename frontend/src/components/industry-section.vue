<script setup>
	
</script>

<template>
	
	<div>
		
		<div id="header">
			<h1>
				Smarter tools
				<span class="livvic-text">
					build for better dementia care
				</span>
			</h1>

			<p>From healthcare to IT, we offer specialized training programs that cater to the unique challenges and requirements of various industries.</p>
		</div>

		<div id="card-container">
			
			<div class="industry-card">
				<div class="text-content">
					<h2><strong>Doctor-Assistive Insights</strong></h2>
					<p>
						NeuroEcho simplifies dementia diagnosis by analyzing verbal and non-verbal data to provide a clear score. This saves doctors time and helps create effective treatment plans.
					</p>
				</div>
				<img src="@/assets/images/i-1.png">
			</div>
			
			<div class="industry-card">
				<div class="text-content">
					<h2><strong>Continuous Cognitive Tracking</strong></h2>
					<p>
						With regular tests, NeuroEcho monitors dementia progression, using past data to highlight changes and trends for early intervention.
					</p>
				</div>
				<img src="@/assets/images/i-2.png">
			</div>

			<div class="industry-card">
				<div class="text-content">
					<h2><strong>Advanced Speech Analysis</strong></h2>
					<p>
						By detecting stumbles, hesitations, and pauses, NeuroEcho uncovers non-verbal signs of dementia, enhancing diagnostic accuracy.
					</p>
				</div>
				<img src="@/assets/images/i-3.png">
			</div>


		</div>

	</div>

</template>

<style scoped>

#header {
	display: grid;
	grid-template-rows: auto;
	grid-template-columns: 1fr .4fr;
	align-items: center;
}

#header h1 {
	color: var(--extra-3);
}

#header span {
	color: var(--extra-3);
}

#header p {
	color: var(--extra-3);
	font-size: var(--body-text);
	line-height: 150%;
}

#card-container {
	display: grid;
	grid-template-rows: auto;
	grid-template-columns: 1fr 1fr 1fr;
	grid-auto-columns: 1fr;
	grid-row-gap: 16px;
	grid-column-gap: 16px;

	flex-flow: row nowrap;
	justify-content: space-evenly;

	margin-top: 60px;
}

.industry-card {
	background: var(--extra-4);
	border-radius: 10px;
/*	padding: 40px;*/

	display: flex;
	flex-flow: column nowrap;
	justify-content: space-evenly;
	transition: all 0.3s ease;
}



.industry-card strong {
	font-weight: 600;
}

.industry-card h2, .industry-card p {
	color: var(--black);
}

.text-content {
	display: flex;
	flex-flow: column nowrap;
	margin: 40px;
}

.text-content h2 {
	margin-bottom: 20px;
}

.industry-card img {
	width: 400px;
}

.industry-card:hover {
	transform: scale(1.05);
	box-shadow: 0px 0px 15px 15px #000000;
}



</style>