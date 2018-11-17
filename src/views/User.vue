<template>
  <div>
    <h1>This is for User {{id}}</h1>

    <router-link :to="nextUserUrl">Next User</router-link>
  </div>
</template>


<script>
export default {
  computed: {
    id() {
      return this.$route.params.id;
    },
    nextUserUrl() {
      return this.id + 1;
    },
  },
  watch: {
    $route() {
      console.log('new route', this.$route); //eslint-disable-line no-console
    },
  },
  mounted() {
    console.log(this.$route); //eslint-disable-line no-console
  },
}
</script>
