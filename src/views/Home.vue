<template>
  <div class="home">
    <HomeBanner />
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
  </div>
</template>

<script>
// @ is an alias to /src
import HomeBanner from '@/components/HomeBanner.vue';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';

export default {
  name: 'home',
  components: {
    HomeBanner,
    Experience,
    Skills,
    Projects,
    Education,
    Certifications
  }
};
</script>

<style scoped lang="scss">
.home {
  width: 100%;
}

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
