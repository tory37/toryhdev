<template>
  <div class="portfolio">
    <h3>
      Here are some projects I have been working on in my free time. You can use
      the buttons to view the related repos, or view the projects that have
      related sites.
    </h3>
    <div class="entries">
      <PortfolioCard
        v-for="entry in portfolios"
        :key="entry.title"
        :entry="entry"
      />
    </div>
  </div>
</template>

<script>
import PortfolioCard from '@/components/PortfolioCard';
import { mapState } from 'vuex';

export default {
  components: { PortfolioCard },
  computed: mapState('portfolio', ['portfolios'])
};
</script>

<style scoped lang="scss">
.portfolio {
  padding: 20px;

  .h3 {
  }

  .entries {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>
