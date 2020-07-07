<template>
  <v-app-bar class="navbar" app color="#007bf">
    <ul class="navbar-menu">
      <li>
        <nuxt-link class="navbar__link" active-class="active" to="/about"
          >about</nuxt-link
        >
      </li>
      <li>
        <nuxt-link class="navbar__link" exact active-class="active" to="/"
          >Home</nuxt-link
        >
      </li>
      <li>
        <nuxt-link class="navbar__link" active-class="active" to="/users"
          >users</nuxt-link
        >
      </li>
      <li v-if="!hasToken">
        <nuxt-link
          class="navbar__link"
          no-prefetch
          active-class="active"
          to="/login"
          >login</nuxt-link
        >
      </li>
      <li v-else>
        <a @click="logout" class="navbar__link" href="#">logout</a>
      </li>
    </ul>
  </v-app-bar>
</template>

<style>

.navbar-menu {
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  margin: 0.5rem;
  list-style-type: none;
}

.navbar__link {
  padding: 0 0.5rem;
  text-transform: uppercase;
  text-decoration: none;
  color:  #1976d2;
  font-size: 1.1rem;
}

.navbar__link:hover,
.navbar__link:focus,
.active {
  font-weight: bold;
}
</style>

<script>
export default {
  computed: {
    hasToken() {
      return this.$store.getters.hasToken;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch(`logout`);
      this.$router.push("/login");
    }
  }
};
</script>
