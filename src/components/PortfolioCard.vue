<template>
  <div class="portfolio-card">
    <img :alt="entry.imageName" :src="imageUrl" />
    <div class="content">
      <h4>{{ entry.title }}</h4>
      <p>{{ entry.description }}</p>
      <div class="tech">Tech: {{ entry.technologies }}</div>
      <div class="buttons">
        <button v-if="entry.url" @click="openUrl(entry.url)">View</button>
        <button @click="openUrl(entry.repo)">Repo</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['entry'],
  computed: {
    imageUrl() {
      return require(`@/assets/${this.entry.imageName}`);
    }
  },
  methods: {
    openUrl(url) {
      window.open(url);
    }
  }
};
</script>

<style scoped lang="scss">
.portfolio-card {
  $card-width: 300px;
  $card-height: 360px;
  $image-height: calc((#{$card-width} * 9) / 16);
  $bottom-margin: 30px;

  height: $card-height;
  width: $card-width;
  margin: 0 10px 30px 10px;
  background-color: $color-gray-dark;
  border-radius: 6px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 100%;
    height: $image-height;
    object-fit: cover;
  }

  .content {
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(#{$card-height} - #{$image-height});
    box-sizing: border-box;
    text-align: left;

    h4 {
      margin: 0 0 10px 0;
    }

    p {
      margin: 0 0 10px 0;
    }

    .tech {
      font-size: 12px;
      width: 100%;
    }

    .buttons {
      display: flex;
      align-items: center;
      margin-left: auto;
      margin-top: auto;

      button {
        color: white;
        border: solid 1px white;
        border-radius: 4px;
        background-color: rgba(0, 0, 0, 0);
        padding: 5px 10px 5px 10px;
        cursor: pointer;
        margin-left: 10px;

        &:hover {
          background-color: $color-gray;
        }
      }
    }
  }
}
</style>
