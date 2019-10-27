export default [
	{
		path: '/',
		name: 'home',
		meta: {
			layout: 'user',
			requiresAuth: false
		},
		component: () => import(/* webpackChunkName: "home" */ '@/pages/user/Home.vue')
	}
];
