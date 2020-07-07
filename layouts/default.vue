<template>
  <div>
    <Navbar class="Navbar"/>
    <div class="main">
      <div class="container">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: {
    Navbar
  }
};
</script>

<style scoped>
.main {
  padding: 3rem 0;
}
</style>


