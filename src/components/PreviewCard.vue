<template>
  <div class="preview-card" @click="$router.push({ name: routeName })">
    <div class="image-wrapper">
      <img :alt="titlePreview" :src="imageUrl" />
    </div>
    <div class="content">
      <h4>{{ displayTitle }}</h4>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
import { TitleCase } from '@/services/StringHelper.js';

export default {
  props: ['title', 'routeName', 'description'],
  computed: {
    titlePreview() {
      return this.title + '-preview';
    },
    imageUrl() {
      return require(`@/assets/${this.title}-preview.jpg`);
    },
    displayTitle() {
      return TitleCase(this.title);
    }
  }
};
</script>

<style scoped lang="scss">
.preview-card {
  $card-width: 300px;
  $card-height: 310px;
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
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px 10px orange;
  }

  .image-wrapper {
    overflow: hidden;
    width: 100%;
    height: $image-height;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: grayscale(1);
    }
  }

  .content {
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(#{$card-height} - #{$image-height});
    box-sizing: border-box;

    h4 {
      margin: 0 0 10px 0;
    }

    p {
      margin: 0 0 10px 0;
    }

    button {
      color: white;
      border: solid 1px white;
      border-radius: 4px;
      background-color: rgba(0, 0, 0, 0);
      margin-left: auto;
      padding: 5px 10px 5px 10px;
      cursor: pointer;
      margin-top: auto;

      &:hover {
        background-color: $color-gray;
      }
    }
  }
}
</style>
