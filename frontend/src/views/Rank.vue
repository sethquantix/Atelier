<template>
	<div class="rank">
		<div class="head">Were we mwlet in for our mewlooks ? Mwnah. Will meowe be judged on them ? Mwyes !</div>
		<div class="pick">Who's cutest ? Click to choose !</div>
		<div class="left"><transition name="fadein"><img class="cat" @click="vote(0)" v-if="left" :src="left.link" :key="left.id"></transition></div>
		<span class="or">or</span>
		<div class="right"><transition name="fadein"><img class="cat" @click="vote(1)" v-if="right" :src="right.link" :key="right.id"></transition></div>
	</div>
</template>

<script lang="ts">

	import {Vue, Component } from "vue-property-decorator";
	import {Cat} from "@/modules/models/Cat";
	import {Cats} from "@/modules/resources";

	@Component
	export default class Rank extends Vue {
		left?: Cat = {} as Cat;
		right?: Cat = {} as Cat;

		voted: boolean = false;

		async mounted() {
			await this.pair();
		}

		async pair() {
			const [l, r] = await Cats.pair();
			this.left = l;
			this.right = r;
		}

		async vote(win: number) {
			if (this.voted)
				return ;
			this.voted = true;
			try {
				let l = this.left!;
				let r = this.right!;
				this.left = undefined;
				this.right = undefined;
				await Cats.rank({left: l!, right: r!, win});
			} catch {
				;
			}
			await this.pair();
			this.voted = false;
		}
	}

</script>

<style scoped lang="scss">
.rank {
		display: grid;
		grid-template: "h h h"
		"t t t"
		"l o r";

	grid-template-columns: 1fr 64px 1fr;
	align-items: center;
	justify-items: center;
	margin-top: 5px;
	margin-left: 10%;
	margin-right: 10%;
	width: 80%;
}

.head {
	font-weight: bold;
	grid-area: h;
}
.pick {
	grid-area: t;
	font-weight: bold;
	margin: 32px;
}

.fadein-leave-active {
	display: none;
}

.fadein-enter-active {
	transition: all 0.3s ease;
}

.fadein-enter {
	opacity: 0;
}

.left {
	grid-area: l;
	height: 500px;
}

.right {
	grid-area: r;
	height: 500px;
}

.cat {
	object-fit: contain;
	height: 500px;
	width: 100%;
	justify-self: center;

	&:hover {
		cursor: pointer;
		filter: brightness(120%);
	}
}

</style>
