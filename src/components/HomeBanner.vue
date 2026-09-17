<template>
  <div class="home-banner">
    <img class="banner-image" src="@/assets/banner.jpg" alt="Banner" />
    <div class="content">
      <img class="csm-badge" src="@/assets/csm-badge.png" alt="CSM Certified" />
      <img
        class="profile-pic"
        alt="Profile Pic"
        src="@/assets/profilepic.jpg"
      />
      <h2 class="title">Hello, I'm Tory!</h2>
      <p class="bio">
        Senior frontend engineer with 9+ years building production
        React/TypeScript web applications, including 4+ years owning the core
        client of a K-5 ed-tech platform serving live student assessments. Known
        as the engineer who gets put on whatever the team needs next and figures
        it out — from assessment architecture to Unity/AR game development to
        backend work — and deeply fluent in AI-assisted engineering, running
        multi-agent development workflows daily both on the job and in my own
        tooling.
        <br />Everything below is my resume — thanks for visiting!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBanner'
};
</script>

<style scoped lang="scss">
.home-banner {
  box-sizing: border-box;
  width: 100%;
  background-color: $color-surface;
  border-bottom: 1px solid $color-border;
  padding: 20px;
  position: relative;

  .banner-image {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;

    $filter: grayscale(50%) blur(4px) brightness(41%) contrast(115%);

    -webkit-filter: $filter; /* Safari 6.0 - 9.0 */
    filter: $filter;

    object-fit: cover;
  }

  .content {
    width: 100%;
    height: 100%;
    z-index: 10;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .csm-badge {
      position: absolute;
      top: -10px;
      right: -10px;
      width: 60px;

      @media screen and (min-width: $ss-sm-min) {
        width: 75px;
      }
    }

    .profile-pic {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-bottom: 5px;
    }

    h2 {
      margin: 5px 0 5px 0;
    }

    .bio {
      max-width: 800px;
      margin: 0;
    }
  }
}
</style>
