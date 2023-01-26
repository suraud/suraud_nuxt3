<template>
  <div class="layout-container">
    <div class="header-row">
      <h3>header</h3>
    </div>
    <div class="content-row">
      <slot />
    </div>
    <div class="footer-row">
      <h3>footer</h3>
      <nuxt-link to="/">home</nuxt-link>
      <nuxt-link to="/canvas">canvas</nuxt-link>
    </div>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: (title) => {
    return title ? `${title} | suraud` : 'suraud'
  }
})
</script>

<style lang="scss">
.layout-container {
  width: 100%;
  height: 100%;

  .header-row {
    width: 100%;
    height: 10vh;
    background-color: #00000020;
  }
  .content-row {
    width: 100%;
    height: 100%;
  }
  .footer-row {
    width: 100%;
    height: 10vh;
    background-color: #00000020;
    a {
      padding: 0 8px;
    }
  }
}
</style>
