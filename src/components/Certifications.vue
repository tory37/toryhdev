<template>
  <div class="resume-card">
    <ResumeTitle title="Certifications" />
    <div class="certification" v-for="cert in certifications" :key="cert.title">
      <h2 class="title">{{ cert.title }}</h2>
      <div class="row">
        <img :alt="cert.imgName" :src="getImage(cert.imgName)" />
        <div class="date">Acquired: {{ cert.date }}</div>
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
    ...mapState('resume', ['certifications'])
  },
  methods: {
    getImage(imageName) {
      return require(`@/assets/${imageName}`);
    }
  }
};
</script>

<style scoped lang="scss">
.certification {
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

  .row {
    display: flex;
    align-items: center;
    img {
      width: 50px;
      margin-right: 10px;
    }

    .date {
      font-size: 14px;
      color: darken(white, 16%);
    }
  }
}
</style>
