export default [
	{
		path: '/admin/cities',
		name: 'admin-cities',
		meta: {
			requiresAuth: true
		},
		component: () => import(/* webpackChunkName: "admin-cities" */ '@/pages/admin/AdminCities.vue')
	},
	{
		path: '/admin/users',
		name: 'admin-users',
		meta: {
			requiresAuth: true
		},
		component: () => import(/* webpackChunkName: "admin-users" */ '@/pages/admin/AdminUsers.vue')
	}
];
