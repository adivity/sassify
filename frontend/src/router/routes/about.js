export default [
	{
		path: '/about',
		name: 'about',
		meta: {
			layout: 'user',
			requiresAuth: false
		},
		component: () => import(/* webpackChunkName: "about" */ '@/pages/user/About.vue')
	}
];
