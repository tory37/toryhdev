<template>
  <div class="preview-card">
    <img :alt="titlePreview" :src="imageUrl" />
    <div class="content">
      <h4>{{ displayTitle }}</h4>
      <p>{{ description }}</p>
      <button @click="$router.push({ name: routeName })">Go</button>
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

  height: 310px;
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
