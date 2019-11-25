<template>
  <div class="resume">
    <a
      class="pdf-button"
      href="https://drive.google.com/open?id=1JrC0Gr-WSV4stV_-20v6ULu6BDw4EsRz"
      target="_blank"
      rel="noopener"
      >Download PDF</a
    >
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
