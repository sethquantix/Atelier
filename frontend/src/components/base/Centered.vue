<template>
	<div class="centered">
		<span v-if="text">{{text}}}</span>
		<span v-else><slot></slot></span>
	</div>
</template>

<script lang="ts">

	import {Vue, Component, Prop} from "vue-property-decorator";

	@Component
	export default class Centered extends Vue {
		@Prop() text?: string;
	}
</script>

<style scoped lang="scss">
.centered {
	display: flex;
	align-items: center;
	justify-content: center;

	span {
		height: fit-content;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}

</style>
