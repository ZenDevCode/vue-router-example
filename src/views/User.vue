<template>
  <div>
    <h1>This is for User {{id}}</h1>

    <router-link :to="nextUserUrl">Next User</router-link> | 
    <router-link :to="videoUrl">Videos for this user</router-link>

    <router-view />
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
    videoUrl() {
      return { name: 'videos', params: {id: this.id } };
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
