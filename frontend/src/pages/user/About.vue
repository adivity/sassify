<template>
  <v-container fluid>
    <v-layout row wrap>
      <h1>About</h1>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$store.getters.appTitle,
      titleTemplate: `${this.$t('about.TITLE')} - %s`
    }
  }
}
</script>
