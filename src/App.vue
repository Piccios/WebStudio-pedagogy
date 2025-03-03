<script>
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/contact">Contact</router-link> |
  </nav>
  <router-view />
</template>

<style>
  nav {
    display: flex;
    gap: 10px;
    background-color: #f1f1f1;
    text-align: center;
  }
</style>