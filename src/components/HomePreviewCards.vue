<template>
  <div class="home-preview-cards">
    <PreviewCard title="resume" routeName="resume" :description="resumeDesc" />
    <PreviewCard title="portfolio" routeName="portfolio" :description="portfolioDesc" />
    <PreviewCard title="contact" routeName="contact" :description="contactDesc" />
  </div>
</template>

<script>
import PreviewCard from '@/components/PreviewCard.vue';

export default {
  components: {
    PreviewCard
  },
  data() {
    return {
      resumeDesc:
        'My resume layed out with code, and the option to download a pdf',
      portfolioDesc:
        'Examples of my personal projects and links to their repos',
      contactDesc: 'Everything you need to contact me'
    };
  }
};
</script>

<style scoped lang="scss">
.home-preview-cards {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
  padding: 30px;
  box-sizing: border-box;
}
</style>
