<template>
  <div class="home-link-cards">
    <HomeLinkCard title="resume" />
    <HomeLinkCard title="portfolio" />
    <!-- <HomeLinkCard title="'fun'" /> -->
  </div>
</template>

<script>
import HomeLinkCard from '@/components/HomeLinkCard.vue';

export default {
  components: {
    HomeLinkCard
  }
};
</script>

<style scoped lang="scss">
.home-link-cards {
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  padding: 30px;
}
</style>
