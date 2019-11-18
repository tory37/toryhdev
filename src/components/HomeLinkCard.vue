<template>
  <div class="home-link-card">
    <img :alt="titlePreview" :src="imageUrl" />
  </div>
</template>

<script>
export default {
  props: ['title'],
  computed: {
    titlePreview() {
      return this.title + '-preview';
    },
    imageUrl() {
      return `@/assets/${this.title}-preview.jpg`;
    }
  }
};
</script>

<style scoped lang="scss">
.home-link-card {
  width: 225px;
  background-color: $color-gray-dark;
}
</style>
