<template>
  <div id="app">
    <Layout>
      <router-view />
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout.vue';

export default {
  components: { Layout }
};
</script>

<style lang="scss">
html {
  overflow: hidden;
  height: 100%;
}

body {
  height: 100%;
  overflow: auto;
}

#app {
  font-family: $font-body;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-text;
  height: 100vh;
  background-color: $color-bg;
}

h1,
h2,
h3 {
  font-family: $font-display;
  font-weight: 600;
  letter-spacing: -0.02em;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: $color-accent;
    }
  }
}
</style>
