<template>
  <v-container fluid>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <h1>Home Page</h1>
      </v-flex>
      <v-flex xs12>
        <p>Hello {{name}}</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$store.getters.appTitle,
      titleTemplate: `${this.$t('home.TITLE')} - %s`,
      drawer: true
    }
  },
  data() {
    return {
      name: 'There'
    }
  }
}
</script>
