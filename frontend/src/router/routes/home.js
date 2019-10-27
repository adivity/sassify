export default [
	{
		path: '/',
		name: 'home',
		meta: {
			requiresAuth: false
		},
		component: () => import(/* webpackChunkName: "home" */ '@/pages/user/Home.vue')
	}
];
