<template>
  <div id="app">
    <Navbar/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
<style>
  .wrapper{
    padding: 0 2rem;
  }
</style>
