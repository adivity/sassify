export default [
	{
		path: '/login',
		name: 'login',
		component: () => import(/* webpackChunkName: "login" */ '@/pages/user/Login.vue')
	},
	{
		path: '/signup',
		name: 'signup',
		component: () => import(/* webpackChunkName: "signup" */ '@/pages/user/SignUp.vue')
	},
	{
		path: '/verify/:id',
		name: 'verify',
		component: () => import(/* webpackChunkName: "verify" */ '@/pages/user/Verify.vue')
	},
	{
		path: '/forgot',
		name: 'forgotPassword',
		component: () => import(/* webpackChunkName: "forgotPassword" */ '@/pages/user/ForgotPassword.vue')
	},
	{
		path: '/reset/:id',
		name: 'resetPassword',
		component: () => import(/* webpackChunkName: "resetPassword" */ '@/pages/user/ResetPassword.vue')
	}
];
