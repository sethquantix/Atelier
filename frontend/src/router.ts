import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import(/* webpackChunkName: "home" */ "./views/List.vue"),
		},
		{
			path: "/about",
			name: "about",
			component: () => import(/* webpackChunkName: "about" */ "./views/About.vue"),
		},
		{
			path: "/rank",
			name: "rank",
			component: () => import(/* webpackChunkName: "rank" */ "./views/Rank.vue"),
		},
	],
});
