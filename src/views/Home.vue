<template>
  <div class="home">
    <HomeBanner />
    <HomeLinkCards />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeBanner from '@/components/HomeBanner.vue';
import HomeLinkCards from '@/components/HomeLinkCards.vue';

export default {
  name: 'home',
  components: {
    HomeBanner,
    HomeLinkCards
  }
};
</script>

<style scoped lang="scss">
.profile-pic {
  width: 80%;

  @media screen and (min-width: $ss-sm-min) {
    width: 50%;
  }
}
</style>
