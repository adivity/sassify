import Vue from 'vue';
import '@/plugins/axios';
import '@/plugins/veevalidate';
import '@/plugins/common';
import '@/plugins/googleAnalytics';
import i18n from '@/plugins/i18n';
import App from '@/App.vue';
import LayoutUser from '@/layouts/User.vue';
import LayoutAdmin from '@/layouts/Admin.vue';
import router from '@/router';
import { store } from '@/store';
import vuetify from '@/plugins/vuetify';
// import "@/stylus/main.styl"

Vue.config.productionTip = false;

Vue.component('user-layout', LayoutUser);
Vue.component('admin-layout', LayoutAdmin);

const app = new Vue({
	router,
	vuetify,
	store,
	i18n,
	render: (h) => h(App),
	created() {
		store.dispatch('setLocale', store.getters.locale);
		if (store.getters.isTokenSet) {
			store.dispatch('autoLogin');
		}
	}
}).$mount('#app');

if (window.Cypress) {
	// Only available during E2E tests
	window.app = app;
}
