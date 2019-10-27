<template>
  <v-app>
    <Toolbar />
    <v-container>
      <router-view />
    </v-container>
    <Footer />
  </v-app>
</template>
<script>
import Toolbar from '@/components/admin/Toolbar.vue'
import Footer from '@/components/core/Footer.vue'

export default {
  components: {
    Toolbar,
    Footer
  }
}
</script>