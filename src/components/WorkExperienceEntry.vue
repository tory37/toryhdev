<template>
  <div class="work-experience-entry">
    <h2 class="role">{{ entry.role }}</h2>
    <div class="company-location-dates">
      <FAIcon :icon="['far', 'building']" />
      {{ entry.company }}
      <span class="spacer" />
      <FAIcon icon="globe-americas" />
      {{ entry.location }}
      <span class="spacer" />
      <FAIcon :icon="['far', 'calendar-alt']" />
      {{ entry.startDate }} - {{ entry.endDate }}
    </div>
    <div class="details" v-for="section in entry.details" :key="section.key">
      <div class="details-description">{{ section.description }}</div>
      <div
        class="details-responsibility"
        v-for="res in section.responsibilities"
        :key="res"
      >
        - {{ res }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['entry']
};
</script>

<style scoped lang="scss">
.work-experience-entry {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  margin-bottom: 20px;

  .role {
    color: darken(white, 10%);
    margin: 0;
    text-decoration: underline;
  }

  .company-location-dates {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 14px;

    .spacer {
      margin-left: 15px;
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 5px;

    .details-description {
      font-style: italic;
      color: darken(white, 10%);
      margin-bottom: 5px;
    }

    .details-responsibility {
      font-size: 14px;
      margin-left: 10px;
      color: darken(white, 16%);
    }
  }
}
</style>
