<template>
  <div class="resume">
    <div class="main-col">
      <Experience />
      <Projects />
      <div class="skills-mobile">
        <Skills />
      </div>
      <Education />
      <Certifications />
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
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';

export default {
  components: { Experience, Skills, Projects, Education, Certifications }
};
</script>

<style scoped lang="scss">
.resume {
  padding: 20px 0 20px 20px;
  display: flex;

  .main-col {
    display: flex;
    flex-direction: column;
    flex: 1;
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
