<template>
  <div>
      <v-navigation-drawer
              v-model="sidebar"
              class="sidebarBackground"
              :class="{sidebarBorder: sidebar}"
              width="230"
              dark
              fixed
              app
              :clipped="$vuetify.breakpoint.mdAndUp"
      >
        <perfect-scrollbar>
          <v-list>

            <v-list-tile
              v-for="(item, index) in menuItems"
              :key="index"
              :to="{ name: item.link }"
              exact
            >
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>{{ item.title }}</v-list-tile-content>
            </v-list-tile>
            <v-list-group v-if="admin" prepend-icon="mdi-lock" no-action>
              <v-list-tile slot="activator">
                <v-list-tile-title>{{ $t('adminItems.ADMIN') }}</v-list-tile-title>
              </v-list-tile>
              <v-list-tile
                v-for="(item, index) in adminItems"
                :key="index"
                :to="{ name: item.link }"
                exact
              >
                <v-list-tile-content class="d-inline mt-3">
                  <v-icon>{{ item.icon }}</v-icon>
                  {{ item.title }}
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>

            <v-list-tile v-if="isTokenSet" @click="userLogout">
              <v-list-tile-action>
                <v-icon>mdi-exit-to-app</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                {{ $t('menuItems.LOGOUT') }}
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </perfect-scrollbar>
      </v-navigation-drawer>

    <v-toolbar app fixed :clipped-left="$vuetify.breakpoint.mdAndUp">
      <v-toolbar-side-icon @click="sidebar = !sidebar"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase ml-0">
        <div v-resize-text>
          <router-link
            :to="{ name: 'home' }"
            tag="span"
            style="cursor: pointer"
            v-if="isTokenSet"
            >{{ appTitle }}</router-link
          >
          <router-link
            :to="{ name: 'home' }"
            tag="span"
            style="cursor: pointer"
            v-else
            >{{ appTitle }}</router-link
          >
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          flat
          v-for="(item, index) in menuItems"
          :key="index"
          :to="{ name: item.link }"
          exact
          :class="['hidden-sm-and-down', item.class]"
        >
          <v-icon>{{ item.icon }}</v-icon>
          &nbsp;{{ item.title }}
        </v-btn>

        <v-menu v-if="admin" offset-y class="hidden-sm-and-down">
          <v-btn slot="activator" flat class="btnAdmin">
            <v-icon>mdi-lock</v-icon>
            &nbsp;{{ $t('adminItems.ADMIN') }}
          </v-btn>
          <v-list>
            <v-list-tile
              active-class="white--text"
              v-for="(item, index) in adminItems"
              :key="index"
              :to="{ name: item.link }"
              exact
              :class="[item.class]"
            >
              <v-list-tile-title>
                <v-icon>{{ item.icon }}</v-icon>
                {{ item.title }}
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>

        <v-btn
          flat
          v-if="isTokenSet"
          @click="userLogout"
          class="hidden-sm-and-down btnLogout"
        >
          <v-icon left>mdi-exit-to-app</v-icon>
          {{ $t('menuItems.LOGOUT') }}
        </v-btn>
<!--        <LocaleChanger />-->
      </v-toolbar-items>
    </v-toolbar>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LocaleChanger from '@/components/core/LocaleChanger'
import ResizeText from 'vue-resize-text'
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'

export default {
  name: 'Toolbar',
  metaInfo() {
    return {
      title: this.$store.getters.appTitle,
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        { name: 'msapplication-TileColor', content: '#ffc40d' },
        { name: 'theme-color', content: '#ffffff' },
        {
          name: 'apple-mobile-web-app-title',
          content: this.$store.getters.appTitle
        },
        { name: 'application-name', content: this.$store.getters.appTitle }
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png'
        },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', color: '#5bbad5', href: '/safari-pinned-tab.svg' },
        { rel: 'favicon', href: '/favicon.ico' }
      ]
    }
  },
  components: {
    LocaleChanger,
    PerfectScrollbar
  },
  created(){
    if(this.$vuetify.breakpoint.mdAndUp){
      this.sidebar = true
    }
  },
  directives: {
    ResizeText
  },
  data() {
    return {
      sidebar: false,
    }
  },
  computed: {
    ...mapGetters(['appTitle', 'isTokenSet', 'user']),
    admin() {
      return this.user !== null ? this.user.role === 'admin' : false
    },
    adminItems() {
      return [
        {
          title: this.$t('adminItems.CITIES'),
          link: 'admin-cities',
          icon: 'mdi-city',
          class: 'btnAdminCities'
        },
        {
          title: this.$t('adminItems.USERS'),
          link: 'admin-users',
          icon: 'mdi-account-supervisor',
          class: 'btnAdminUsers'
        }
      ]
    },
    menuItems() {
      if (this.isTokenSet) {
        return [
          {
            title: this.$t('menuItems.HOME'),
            link: 'home',
            icon: 'home',
            class: 'btnHome'
          },
          {
            title: this.$t('menuItems.ABOUT'),
            link: 'about',
            icon: 'mdi-help-circle-outline',
            class: 'btnAbout'
          },
          {
            title: this.$t('menuItems.MY_PROFILE'),
            link: 'profile',
            icon: 'mdi-face',
            class: 'btnProfile'
          }
        ]
      }
      return [
        {
          title: this.$t('menuItems.HOME'),
          link: 'home',
          icon: 'home'
        },
        {
          title: this.$t('menuItems.ABOUT'),
          link: 'about',
          icon: 'mdi-help-circle-outline',
          class: 'btnAbout'
        },
        {
          title: this.$t('menuItems.LOGIN'),
          link: 'login',
          icon: 'mdi-lock',
          class: 'btnLogin'
        },
        {
          title: this.$t('menuItems.SIGNUP'),
          link: 'signup',
          icon: 'mdi-plus-circle-outline',
          class: 'btnLogin'
        }
      ]
    }
  },
  methods: {
    userLogout() {
      this.$store.dispatch('userLogout')
    }
  }
}
</script>
<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css"/>
<style>
  .ps {
    height: 100%;
  }
  .sidebarBackground {
    background: rgb(46,51,68);
    background: linear-gradient(176deg, rgba(46,51,68,1) 0%, rgba(47,51,68,1) 100%);
  }
  .sidebarBorder {
    box-shadow: 5px 0px 5px grey;

  }
</style>
