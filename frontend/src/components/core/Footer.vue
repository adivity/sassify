<template>
  <v-footer
    app
    inset
    height="40"
    class="mt-5 bottomFooter text-xs-center justify-center"
  >
    {{ $t('footer.MADE_WITH') }}
    <v-icon small class="red--text mx-0 px-0">mail</v-icon>
    &nbsp;{{ $t('footer.BY') }}:
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
  }
}
</script>
<style>
  .bottomFooter {
    box-shadow: 3px 0px 5px grey;
  }
</style>