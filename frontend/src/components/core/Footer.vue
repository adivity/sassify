<template>
    <v-footer app inset height="40" class="mt-5 justify-center text-xs-center d-block bottomFooter">
      <div class="mt-2">
        {{ $t('footer.MADE_WITH') }}
        <v-icon small class="red--text mx-0 px-0">mdi-cards-heart</v-icon>
        &nbsp;{{ $t('footer.BY') }}:
      </div>
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