<template>
  <div class="resume-card">
    <ResumeTitle title="Education" />
    <div class="education">
      <h2 class="title">{{ education.title }}</h2>
      <div class="school">{{ education.school }}</div>
      <div class="graduation">Graduation: {{ education.graduation }}</div>
    </div>
  </div>
</template>

<script>
import ResumeTitle from '@/components/ResumeTitle';
import { mapState } from 'vuex';

export default {
  components: { ResumeTitle },
  computed: {
    ...mapState('resume', ['education'])
  }
};
</script>

<style scoped lang="scss">
.education {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  margin-bottom: 20px;

  .title {
    color: darken(white, 10%);
    margin: 0;
    margin-bottom: 5px;
    text-decoration: underline;
  }

  .school {
    margin-bottom: 5px;
  }

  .graduation {
    font-size: 14px;
    color: darken(white, 16%);
  }
}
</style>
