<script setup>
import { ref } from 'vue'

const { isOpen } = defineProps(["isOpen"]);

</script>
	
<template>
	<div @click="toggleMenu">
		<svg
			:class="{ open: isOpen }"
			width="40"
			height="40"
			viewBox="0 0 40 40"
			stroke="black"
			stroke-width="3"
			stroke-linecap="round"
			fill="none"
		>
			<line class="line top" x1="8" y1="12" x2="32" y2="12"/>
			<line class="line middle" x1="8" y1="20" x2="32" y2="20"/>
			<line class="line bottom" x1="8" y1="28" x2="32" y2="28"/>
		</svg>
	</div>
</template>

<style scoped>
.line {
	transition: all 0.3s ease;
}


.open .top {
	transform: rotate(45deg) translateY(11px);
	transform-origin: 20px 12px;
}

.open .middle {
	opacity: 0;
	transform: translateX(-10px);
}

.open .bottom {
	transform: rotate(-45deg) translateY(-11px);
	transform-origin: 20px 28px;
}
</style>