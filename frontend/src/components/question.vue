<script setup>
import { ref, computed, nextTick } from "vue";
defineProps(["question", "answer"]);


const isOpen = ref(false);
const answerRef = ref(null);

const answerStyle = computed(() => ({
	maxHeight: isOpen.value ? `${answerRef.value.scrollHeight + 10}px` : "0px",
	padding: isOpen.value ? "10px" : "0 10px",
}));

</script>

<template>
	<div class="question" @click="isOpen = !isOpen">
		<div class="quest-head">
			<h2><strong>{{ question }}</strong></h2>

			<img src="@/assets/images/+.svg">
		</div>
		<div class="answer" :style="answerStyle" ref="answerRef">
			{{ answer }}
		</div>
	</div>
</template>

<style scoped>
.question {
	padding: 10px;
/*	background: #f5f5f5;*/
	cursor: pointer;
	transition: background 0.3s;
	border-bottom: 1px solid #0000001f;
}

.quest-head {
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-evenly;
	align-items: center;
}

.quest-head strong {
	font-weight: 600;
	font-size: 38px;
	text-transform: none;
}

.quest-head h2 {
	margin-top: 0;
	margin-bottom: 10px;
	line-height: 38px;
	letter-spacing: 0px;

}

.quest-head img {
	margin-left: 10px;
}


.answer {
	max-height: 0;
	overflow: hidden;
	background: #fff;
	transition: max-height 0.3s ease, padding 0.3s ease;
}

.answer p {
	margin: 10px 0;
	font-size: var(--body-text);
}
</style>