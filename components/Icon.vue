<template>
  <div class="icon-holder">
    <div class="icon-box">
      <i :class="iconClassName" class="icon" />
    </div>
    <div class="overlay" aria-hidden="true">
      <p class="icon-name">
        <span>fa-{{ icon.name }}</span>
      </p>
      <div class="mt-2">
        <b-button @click="copyClassName" variant="light">
          <i class="far fa-clipboard" />
        </b-button>
        <b-button variant="light">
          <i class="fa fa-angle-double-right" />
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>

import Icon from '../model/icon'

export default {
  props: {
    'icon': Icon
  },
  data () {
    return {
      hovered: false
    }
  },
  computed: {
    iconClassName () {
      return this.icon.prefix + ' fa-' + this.icon.name
    }
  },
  methods: {
    copyClassName () {
      navigator.clipboard.writeText(this.iconClassName)
    }
  }
}
</script>

<style scoped>

  .icon-holder{
    position: relative;
    height: 128px;
    width: 100%;
  }

  .icon {
    font-size: 64px;
  }

  .icon-box{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  .icon-box:hover{
    color: red;
  }

  .icon-holder .overlay{
    display: none;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    color: white;
    padding: 16px;
    text-align: center;
  }

  .icon-holder:hover .overlay{
    display: block;
  }

  .icon-name{
    text-align: center;
    text-overflow: ellipsis;
    text-transform: uppercase;
    font-weight: 300;
    max-height: 50%;
  }
</style>
