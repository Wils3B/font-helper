<template>
  <div class="displayer carbon-fibre-bg">
    <app-toolbar />
    <div class="icons-container">
      <div class="icons p-2">
        <app-icon v-show="icon.visible" v-for="(icon,key) in icons" :icon="icon" :key="key" />
      </div>
    </div>
  </div>
</template>

<script>
import Icon from './Icon'
import Toolbar from './Toolbar'
import iconService from '~/services/iconsService'

export default {
  components: {
    'app-icon': Icon,
    'app-toolbar': Toolbar
  },
  data () {
    return {
      icons: iconService.icons
    }
  },
  provide: {
    iconService
  }
}
</script>

<style scoped>
  .displayer {
    overflow-y: auto;
  }

  .icons {
    display: grid;
    justify-content: center;
    align-content: center;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fill, minmax(128px, 150px));
    gap: .5em;
    max-height: 100%;
    justify-items: center;
  }

  .carbon-fibre-bg {
    background: radial-gradient(black 15%, transparent 16%) 0 0, radial-gradient(black 15%, transparent 16%) 8px 8px, radial-gradient(rgba(255, 255, 255, .1) 15%, transparent 20%) 0 1px, radial-gradient(rgba(255, 255, 255, .1) 15%, transparent 20%) 8px 9px;
    background-color: #1f2932;
    background-size: 16px 16px;
  }
</style>
