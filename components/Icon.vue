<template>
  <div>
    <div v-if="icon.selected" class="icon-plus" />
    <div v-else class="icon-simple">
      <i :class="iconClassName" class="fa-5x" />
    </div>
  </div>
</template>

<script>

import Icon from '../model/icon'

export default {
  props: {
    'icon': Icon
  },
  computed: {
    iconClassName () {
      return this.icon.prefix + ' fa-' + this.icon.name
    }
  }
}
</script>

<style scoped>

</style>
