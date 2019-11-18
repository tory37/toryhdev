<template>
  <div class="work-experience">
    <ResumeTitle title="Work Experience" />
    <WorkExperienceEntry
      v-for="entry in WorkHistory"
      :key="entry.role"
      :entry="entry"
    />
  </div>
</template>

<script>
import WorkHistory from '@/data/WorkHistory';
import WorkExperienceEntry from '@/components/WorkExperienceEntry';
import ResumeTitle from '@/components/ResumeTitle';

export default {
  components: { WorkExperienceEntry, ResumeTitle },
  data() {
    return {
      WorkHistory
    };
  }
};
</script>

<style scoped lang="scss">
.work-experience {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 4px;
  background-color: $color-gray-dark;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
}
</style>
