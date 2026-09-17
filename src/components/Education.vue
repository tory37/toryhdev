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
    color: $color-text;
    margin: 0;
    margin-bottom: 5px;
    text-decoration: underline;
    text-decoration-color: $color-border;
  }

  .school {
    margin-bottom: 5px;
  }

  .graduation {
    font-family: $font-mono;
    font-size: var(--dj-text-xs);
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: $color-text-muted;
  }
}
</style>
