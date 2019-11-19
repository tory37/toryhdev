<template>
  <div class="resume-card">
    <ResumeTitle title="Skills" />
    <div class="skills">
      <div class="skill" v-for="entry in skills" :key="entry.title">
        <div class="title">{{ entry.title }}</div>
        <div class="level-wrapper">
          <div
            class="level-bar"
            v-for="index in 5"
            :key="index"
            :class="{ filled: entry.level >= index }"
          ></div>
        </div>
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
    ...mapState('resume', ['skills'])
  }
};
</script>

<style scoped lang="scss">
.skills {
  display: flex;
  flex-direction: row !important;
  justify-content: flex-start;
  align-items: flex-end;
  flex-wrap: wrap;

  @media screen and (min-width: $ss-sm-min) {
    flex-direction: column !important;
    justify-content: flex-start;
    flex-wrap: nowrap;
  }

  .skill {
    text-align: left;
    margin-bottom: 15px;
    width: 125px;

    .title {
      font-weight: 600;
      margin-bottom: 5px;
      max-width: 150px;
    }

    .level-wrapper {
      $border: 1px solid white;

      width: 100px;
      height: 15px;
      border-left: $border;
      border-top: $border;
      border-bottom: $border;
      border-radius: 4px;
      overflow: hidden;

      display: flex;

      .level-bar {
        border-right: $border;
        width: 20px;
        height: 100%;

        &.filled {
          background-color: $color-gray-light;
        }
      }
    }
  }
}
</style>
