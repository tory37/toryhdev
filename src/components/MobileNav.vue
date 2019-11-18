<template>
  <div class="mobile-nav" :class="{ open: isOpen }">
    <div class="close-row">
      <div class="entry" @click="closeSidebar()">
        <FAIcon :icon="['far', 'times-circle']"></FAIcon>
      </div>
    </div>
    <div class="navigation">
      <div class="break"></div>
      <div
        class="nav entry"
        :class="navIsSelectedClass('home')"
        @click="closeSidebar()"
      >
        <router-link :to="{ name: 'home' }">Home</router-link>
      </div>
      <div class="break"></div>
      <div
        class="nav entry"
        :class="navIsSelectedClass('resume')"
        @click="closeSidebar()"
      >
        <router-link :to="{ name: 'resume' }">Resume</router-link>
      </div>
      <div class="break"></div>
      <div
        class="nav entry"
        :class="navIsSelectedClass('portfolio')"
        @click="closeSidebar()"
      >
        <router-link :to="{ name: 'portfolio' }">Portfolio</router-link>
      </div>
      <div class="break"></div>
    </div>
    <div class="links">
      <div class="entry">
        <a href="https://github.com/tory37" target="_blank" rel="noopener">
          <FAIcon :icon="['fab', 'github']"></FAIcon>
        </a>
      </div>
      <div class="entry">
        <a
          href="https://www.linkedin.com/in/toryhebert/"
          target="_blank"
          rel="noopener"
        >
          <FAIcon :icon="['fab', 'linkedin']"></FAIcon>
        </a>
      </div>
      <div class="entry">
        <a href="https://twitter.com/torayquaza" target="_blank" rel="noopener">
          <FAIcon :icon="['fab', 'twitter']"></FAIcon>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { isOnRoute } from '@/services/RouteHelper';

export default {
  computed: {
    ...mapState('sidebar', ['isOpen'])
  },
  methods: {
    ...mapActions('sidebar', ['openSidebar', 'closeSidebar']),
    navIsSelectedClass(nameToCheck) {
      return isOnRoute(this.$route, nameToCheck) ? 'selected' : '';
    }
  }
};
</script>

<style scoped lang="scss">
.mobile-nav {
  $mobile-nav-width: 150px;

  z-index: 1000;
  height: 100vh;
  position: absolute;
  right: -$mobile-nav-width;
  top: 0;
  width: $mobile-nav-width;
  background-color: darken($color-gray-dark, 5%);
  color: white;
  padding-bottom: 10px;

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  -webkit-transition: right $sidebar-open-speed; /* For Safari 3.1 to 6.0 */
  transition: right $sidebar-open-speed;

  &.open {
    right: 0;
  }

  .break {
    width: 100%;
    border-top: solid 1px $color-gray-light;
  }

  .close-row {
    width: 100%;
    height: $navbar-height;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 5px;
    box-sizing: border-box;
    font-size: 18px;
  }

  .entry {
    box-sizing: border-box;
    padding: 5px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: $color-gray;

      a {
        text-decoration: underline;
      }
    }
  }

  .navigation {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    .nav {
      font-size: 14px;
      width: 100%;
      margin-bottom: 5px;
      margin-top: 5px;

      &.selected {
        text-decoration: underline;
        font-weight: 600;
      }

      a {
        color: white;
        text-decoration: none;
        width: 100%;
        text-align: center;
      }
    }
  }

  .links {
    display: flex;
    align-items: center;
    margin-top: 5px;

    .entry {
      width: $navbar-height;

      a {
        width: 100%;
        text-align: center;
        color: white;
      }
    }
  }
}
</style>
