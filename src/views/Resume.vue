<template>
  <div class="resume">
    <div class="work-experience-wrapper">
      <WorkExperience />
    </div>
  </div>
</template>

<script>
import WorkExperience from '@/components/WorkExperience';

export default {
  components: { WorkExperience }
};
</script>

<style scoped lang="scss">
.resume {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
}
</style>
