<template>
  <b-navbar variant="dark" type="dark">
    <b-form @submit.prevent="search" inline class="d-block mx-auto">
      <b-input-group size="lg" class="border-none" style="width:500px;">
        <b-input v-model="searchValue" placeholder="Search an icon here..." />
        <b-input-group-append>
          <b-button type="submit">
            <span class="fas fa-chevron-right" />
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form>
  </b-navbar>
</template>

<script>
export default {
  data () {
    return {
      searchValue: ''
    }
  },
  inject: ['iconService'],
  watch: {
    searchValue (value) {
      this.iconService.doSearch(value)
    }
  },
  methods: {
    search () {
      this.iconService.doSearch(this.searchValue)
    }
  }
}
</script>

<style scoped>

</style>
