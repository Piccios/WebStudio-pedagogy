
<template>
  <AppNavbar />
  <router-view />
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue';

export default {
  components: {
    AppNavbar
  }
};
</script>

<style>
  .navbar {
    position: fixed;
    top: 0;
    display: flex;
    gap: 10px;
    background-color: #f1f1f1;
    text-align: center;
  }
</style>