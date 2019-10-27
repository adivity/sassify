export default [
	{
		path: '*',
		component: () => import(/* webpackChunkName: "notfound" */ '@/pages/user/NotFound.vue')
	}
];
