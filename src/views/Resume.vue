<template>
  <div class="resume">
    <a
      class="pdf-button"
      href="https://drive.google.com/file/d/12BVIB37LfpYsAp7rl48lZOb_MJkqzIk9/view?usp=sharing"
      target="_blank"
      rel="noopener"
    >Download PDF</a>
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

  .pdf-button {
    position: absolute;
    top: 45px;
    right: 20px;
    border: solid 1px white;
    border-radius: 4px;
    color: white;
    background-color: $color-gray-dark;
    text-decoration: none;
    padding: 5px;

    &:hover {
      box-shadow: 0 0 5px 5px orange;
    }
  }

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
