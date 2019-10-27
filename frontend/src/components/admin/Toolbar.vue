<template>
  <div>
    <v-navigation-drawer
      v-model="sidebar"
      class="sidebarBackground"
      :class="{ sidebarBorder: sidebar }"
      width="230"
      dark
      fixed
      app
      :clipped="$vuetify.breakpoint.mdAndUp"
    >
      <perfect-scrollbar>
        <v-list dense rounded>
          <v-list-group v-if="admin" prepend-icon="lock" no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="$t('adminItems.ADMIN')"></v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="(item, index) in adminItems" :key="index" :to="{ name: item.link }">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-if="isTokenSet" @click="userLogout">
            <v-list-item-icon>
              <v-icon>exit_to_app</v-icon>
            </v-list-item-icon>
            <v-list-item-content>{{ $t('menuItems.LOGOUT') }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </perfect-scrollbar>
    </v-navigation-drawer>

    <v-app-bar app :clipped-left="$vuetify.breakpoint.mdAndUp">
      <v-app-bar-nav-icon @click="sidebar = !sidebar">
        <v-icon>menu</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase ml-0">
        <div v-resize-text>
          <router-link
            :to="{ name: 'home' }"
            tag="span"
            style="cursor: pointer"
            v-if="isTokenSet"
          >{{ appTitle }}</router-link>
          <router-link
            :to="{ name: 'home' }"
            tag="span"
            style="cursor: pointer"
            v-else
          >{{ appTitle }}</router-link>
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          text
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
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" text class="btnAdmin">
              <v-icon>lock</v-icon>
              &nbsp;{{ $t('adminItems.ADMIN') }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              active-class="white--text"
              v-for="(item, index) in adminItems"
              :key="index"
              :to="{ name: item.link }"
              exact
              :class="[item.class]"
            >
              <v-list-item-title>
                <v-icon>{{ item.icon }}</v-icon>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn text v-if="isTokenSet" @click="userLogout" class="hidden-sm-and-down btnLogout">
          <v-icon left>exit-to-app</v-icon>
          {{ $t('menuItems.LOGOUT') }}
        </v-btn>
        <!--        <LocaleChanger />-->
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LocaleChanger from '@/components/core/LocaleChanger'
import ResizeText from 'vue-resize-text'
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'

export default {
  name: 'Toolbar',
  components: {
    // LocaleChanger,
    PerfectScrollbar
  },
  created() {
    if (this.$vuetify.breakpoint.mdAndUp) {
      this.sidebar = true
    }
  },
  directives: {
    ResizeText
  },
  data() {
    return {
      sidebar: false
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
          icon: 'lock',
          class: 'btnAdminCities'
        },
        {
          title: this.$t('adminItems.USERS'),
          link: 'admin-users',
          icon: 'people',
          class: 'btnAdminUsers'
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
<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css" />
<style>
.ps {
  height: 100%;
}
.sidebarBackground {
  background: rgb(46, 51, 68);
  background: linear-gradient(
    176deg,
    rgba(46, 51, 68, 1) 0%,
    rgba(47, 51, 68, 1) 100%
  );
}
.sidebarBorder {
  box-shadow: 5px 0px 5px grey;
}
</style>
