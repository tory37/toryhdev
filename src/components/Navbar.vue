<template>
  <div class="navbar">
    <div class="navbar-inner">
      <div class="navigation">
        <router-link class="title entry" :to="{ name: 'home' }">
          <img alt="logo" :src="logoUrl" />
        </router-link>

        <router-link
          :to="{ name: 'home' }"
          class="entry nav not-mobile"
          :class="navIsSelectedClass('home')"
        >Home</router-link>

        <router-link
          :to="{ name: 'resume' }"
          class="entry nav not-mobile"
          :class="navIsSelectedClass('resume')"
        >Resume</router-link>

        <router-link
          :to="{ name: 'portfolio' }"
          class="entry nav not-mobile"
          :class="navIsSelectedClass('portfolio')"
        >Portfolio</router-link>

        <router-link
          :to="{ name: 'contact' }"
          class="entry nav not-mobile"
          :class="navIsSelectedClass('contact')"
        >Contact</router-link>
      </div>

      <div class="links">
        <a class="entry not-mobile" href="https://github.com/tory37" target="_blank" rel="noopener">
          <FAIcon :icon="['fab', 'github']"></FAIcon>
        </a>

        <a
          class="entry not-mobile"
          href="https://www.linkedin.com/in/toryhebert/"
          target="_blank"
          rel="noopener"
        >
          <FAIcon :icon="['fab', 'linkedin']"></FAIcon>
        </a>

        <a
          class="entry not-mobile"
          href="https://twitter.com/torayquaza"
          target="_blank"
          rel="noopener"
        >
          <FAIcon :icon="['fab', 'twitter']"></FAIcon>
        </a>

        <a class="entry mobile" @click="openSidebar()">
          <FAIcon icon="bars"></FAIcon>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { isOnRoute } from '@/services/RouteHelper';

export default {
  computed: {
    logoUrl() {
      return require(`@/assets/logo.png`);
    }
  },
  methods: {
    ...mapActions('sidebar', ['openSidebar']),
    navIsSelectedClass(nameToCheck) {
      return isOnRoute(this.$route, nameToCheck) ? 'selected' : '';
    }
  }
};
</script>

<style scoped lang="scss">
.navbar {
  height: 100%;
  width: 100%;
  background-color: $color-gray-dark;
  color: white;

  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .navbar-inner {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 10px);

    .entry {
      box-sizing: border-box;
      padding: 5px;
      height: calc(100% - 5px);
      border-radius: 4px;
      cursor: pointer;
      color: white;
      text-decoration: none;

      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 35px;
        -webkit-filter: invert(100%);
        filter: invert(1);
      }

      &:hover {
        background-color: $color-gray;
        box-shadow: 0 0 5px 5px orange;
      }

      &.mobile {
        @media screen and (min-width: $ss-sm-min) {
          display: none !important;
        }
      }

      &.not-mobile {
        @media screen and (max-width: $ss-xs-max) {
          display: none !important;
        }
      }
    }

    .navigation {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      height: 100%;

      .title {
        padding-right: 10px;
        padding-left: 10px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;

        &:hover {
          font-weight: 600;
        }

        a {
          color: white;
          text-decoration: none;
        }
      }

      .nav {
        margin-right: 5px;
        font-size: 14px;

        &.selected {
          text-decoration: underline;
          font-weight: 600;
        }

        a {
          color: white;
          text-decoration: none;
        }
      }
    }

    .links {
      height: 100%;
      display: flex;
      align-items: center;

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
}
</style>
