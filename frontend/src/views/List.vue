<template>
	<div class="list">
		<router-link class="sticky hover" to="rank"><centered class="rank">Disagree with those rankings ? Go pick which's cutest !</centered></router-link>
		<transition-group name="order">
			<div class="item" v-for="(cat, index) in list" :key="cat.id">
				<span>{{rank(index)}}</span>
				<img class="cat" :src="cat.link" />
			</div>
		</transition-group>
	</div>
</template>

<script lang="ts">

	import { Vue, Component } from "vue-property-decorator";
	import {Cat} from "@/modules/models/Cat";
	import {Cats} from "@/modules/resources";

	import Centered from "@/components/base/Centered.vue";
	import hash from "object-hash";

	@Component({ components: { Centered } })
	export default class List extends Vue {

		list: Cat[] = [];

		interval: any = {};

		print: string = "";

		async mounted() {
			this.list = await Cats.list();
			console.log(this.list);
			this.print = hash(this.list);
			this.interval = setInterval(this.refresh, 5000);
		}

		async refresh() {
			const list = await Cats.list();
			const h = hash(list);
			if (h !== this.print)
				this.list = list;
		}

		beforeDestroy() {
			clearInterval(this.interval);
		}

		rank(index: number): string {
			index += 1;
			if (Math.floor(index / 10) === 1)
				return index + "th";
			switch (index % 10) {
				case 1: return index + "st";
				case 2: return index + "nd";
				case 3: return index + "rd";
				default: return index + "th";
			}
		}
	}
</script>

<style scoped lang="scss">


	.sticky {
		position: absolute;
		height: 80px;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		text-decoration: none;
	}

	.rank {
		background-color: darkred;
		color: white;
		width: 50%;
		&:hover {
			background-color: #2c3e50;
		}
	}

	.list {
	margin-top: 4rem;
	padding: 8px;
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-gap: 2rem;
}

.item {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 2rem;
}

.cat {
	object-fit: contain;
	max-width: 25%;
	height: auto;
}

.order-move {
	transition: transform 0.5s ease;
}
</style>
