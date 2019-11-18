<template>
  <div class="home">
    <HomeBanner />
    <HomePreviewCards />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeBanner from '@/components/HomeBanner.vue';
import HomePreviewCards from '@/components/HomePreviewCards.vue';

export default {
  name: 'home',
  components: {
    HomeBanner,
    HomePreviewCards
  }
};
</script>

<style scoped lang="scss">
.home {
  width: 100%;
}
</style>
