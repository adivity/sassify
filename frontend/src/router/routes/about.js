export default [
	{
		path: '/about',
		name: 'about',
		component: () => import(/* webpackChunkName: "about" */ '@/pages/user/About.vue')
	}
];
