<template>
  <div class="resume-card projects">
    <ResumeTitle title="Projects" />
    <div class="project" v-for="entry in projects" :key="entry.title">
      <h2 class="title">{{ entry.title }}</h2>
      <div class="repo">
        Repo:
        <a :href="entry.repo" target="_blank" rel="noopener">{{
          entry.repo
        }}</a>
      </div>
      <div class="detail" v-for="detail in entry.details" :key="detail">
        - {{ detail }}
      </div>
    </div>
  </div>
</template>

<script>
import ResumeTitle from '@/components/ResumeTitle';
import { mapState } from 'vuex';

export default {
  components: { ResumeTitle },
  computed: {
    ...mapState('resume', ['projects'])
  }
};
</script>

<style scoped lang="scss">
.project {
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

  .repo {
    margin-bottom: 5px;

    a {
      color: white;
      cursor: pointer;

      &:hover {
        font-weight: bold;
      }
    }
  }

  .detail {
    font-size: 14px;
    margin-left: 10px;
    color: darken(white, 16%);
  }
}
</style>
