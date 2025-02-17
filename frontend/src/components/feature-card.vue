<script setup>
defineProps(["header" , "text" , "img", "reverse"]);
</script>

<template>
	
	<div class="content-container features-container">
			
		<div :class="{ reverse: reverse }" class="text-content">
			<h2 class="livvic-text">{{ header }}</h2>
			<p>{{ text }}</p>
		</div>

		<div class="img-content">
			<img :src="img">
		</div>
	</div>

</template>

<style scoped>
	.features-container {
		background: var(--extra-1);
		padding: 20px;

		display: flex;
		flex-flow: row nowrap;

		padding-top: 50px;
		padding-bottom: 50px;
	}

	.text-content {
		display: flex;
		flex-flow: column nowrap;

		padding-right: 30px;
	}

	.text-content h2 {
		line-height: 120%;
	}

	.text-content p {
		font-size: var(--body-text);
	}


	.img-content img {
		max-height: 320px;
		border-radius: 15px;
	}

	.reverse {
		order: 2;
		text-align: right;

		padding-right: 0;
		padding-left: 30px;
	}


</style>