<template>
  <div class="resume-card">
    <ResumeTitle title="Experience" />
    <ExperienceEntry
      v-for="entry in experience"
      :key="entry.role"
      :entry="entry"
    />
  </div>
</template>

<script>
import ExperienceEntry from '@/components/ExperienceEntry';
import ResumeTitle from '@/components/ResumeTitle';
import { mapState } from 'vuex';

export default {
  components: { ExperienceEntry, ResumeTitle },
  computed: {
    ...mapState('resume', ['experience'])
  }
};
</script>

<style scoped lang="scss"></style>
