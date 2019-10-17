<template>
	<div id="app">
		<div id="head">
			<div class="filler"></div>
			<router-link class="link" to="/"><centered class="title">catmash</centered></router-link>
			<router-link class="link hover" to="about"><centered class="about">About</centered></router-link>
		</div>
		<div class="main">
			<router-view />
		</div>
	</div>
</template>

<script lang="ts">

	import { Vue, Component } from "vue-property-decorator";
	import Centered from "@/components/base/Centered.vue";

	@Component({components: { Centered }})
	export default class App extends Vue {

	}
</script>

<style lang="scss">

	html, body {
		margin: 0;
		font-family: 'Noto Sans', sans-serif;
		height: 100%;
		width: 100%;
	}


	#head {
		background-color: darkred;
		text-transform: uppercase;
		color: white;
		font-size: 2rem;
		font-weight: 500;

		display: grid;
		grid-template-columns: minmax(140px, auto)  1fr minmax(140px, auto);
	}

	.link {
		color: white;
		text-decoration: none;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		&.hover:hover {
			background-color: #2c3e50;
		}
	}

	.title {
		padding: 1rem 0;
		flex: 1;
	}

	.about {
		font-size: 1rem;
		padding: 1rem;
	}

	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		display: grid;
		grid-template-rows: 75px 1fr;
		height: 100%;
	}

	.main {
		overflow-y: auto;
	}
</style>
