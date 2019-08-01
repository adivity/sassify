import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VuetifyConfirm from 'vuetify-confirm'
import colors from 'vuetify/es5/util/colors'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    primary: colors.blue.lighten1,
    secondary: colors.shades.black,
    error: colors.orange.darken3
  },
  icons: {
    iconfont: 'mdi'
  }
});

Vue.use(VuetifyConfirm)