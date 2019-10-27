export default [
	{
		path: '/login',
		name: 'login',
		meta: {
			layout: 'user',
			requiresAuth: false
		},
		component: () => import(/* webpackChunkName: "login" */ '@/pages/user/Login.vue')
	},
	{
		path: '/signup',
		name: 'signup',
		meta: {
			layout: 'user',
			requiresAuth: false
		},
		component: () => import(/* webpackChunkName: "signup" */ '@/pages/user/SignUp.vue')
	},
	{
		path: '/verify/:id',
		name: 'verify',
		meta: {
			layout: 'user',
			requiresAuth: false
		},
		component: () => import(/* webpackChunkName: "verify" */ '@/pages/user/Verify.vue')
	},
	{
		path: '/forgot',
		name: 'forgotPassword',
		meta: {
			layout: 'user',
			requiresAuth: false
		},
		component: () => import(/* webpackChunkName: "forgotPassword" */ '@/pages/user/ForgotPassword.vue')
	},
	{
		path: '/reset/:id',
		name: 'resetPassword',
		meta: {
			layout: 'user',
			requiresAuth: false
		},
		component: () => import(/* webpackChunkName: "resetPassword" */ '@/pages/user/ResetPassword.vue')
	}
];
