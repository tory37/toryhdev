<template>
  <div class="resume">
    <div class="main-col">
      <Experience />
      <Projects />
      <div class="skills-mobile">
        <Skills />
      </div>
    </div>

    <div class="skills-desktop">
      <Skills />
    </div>
  </div>
</template>

<script>
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

export default {
  components: { Experience, Skills, Projects }
};
</script>

<style scoped lang="scss">
.resume {
  padding: 20px 0 20px 20px;
  display: flex;

  .main-col {
    display: flex;
    flex-direction: column;
  }

  .skills-mobile {
    @media screen and (min-width: $ss-sm-min) {
      display: none;
    }
  }

  .skills-desktop {
    @media screen and (max-width: $ss-xs-max) {
      display: none;
    }
  }
}
</style>
