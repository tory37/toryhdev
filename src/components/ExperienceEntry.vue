<template>
  <div class="experience-entry">
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
.experience-entry {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  margin-bottom: 20px;

  .role {
    color: $color-text;
    margin: 0;
    text-decoration: underline;
    text-decoration-color: $color-border;
  }

  .company-location-dates {
    margin-top: 5px;
    margin-bottom: 5px;
    font-family: $font-mono;
    font-size: var(--dj-text-xs);
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: $color-text-muted;

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
      color: $color-text;
      margin-bottom: 5px;
    }

    .details-responsibility {
      font-size: 14px;
      margin-left: 10px;
      color: $color-text-muted;
    }
  }
}
</style>
