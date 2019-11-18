<template>
  <div class="home-banner">
    <img class="banner-image" src="@/assets/banner.jpg" alt="Banner" />
    <div class="content">
      <img
        class="profile-pic"
        alt="Profile Pic"
        src="@/assets/profilepic.jpg"
      />
      <h2 class="title">Welcome!</h2>
      <p class="bio">
        I am a front end web developer with 4+ years of experience. I've worked
        mostly with AngularJS and have recent experience in React and Vue. This
        app is built with Vue! If you are a recruiter or a passerby, everything
        you need can be found
        <span class="desktop-section">
          in the navbar above
          <FAIcon icon="arrow-up"></FAIcon>
        </span>
        <span class="mobile-section">
          in menu in the top corner
          <FAIcon icon="arrow-up"></FAIcon>
        </span>
        or the links below
        <FAIcon icon="arrow-down"></FAIcon>
        <br />Thanks for visiting!
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
  background-color: $color-gray;
  padding: 20px;
  position: relative;

  .banner-image {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;

    $filter: grayscale(50%) blur(3px) brightness(50%);

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

    .profile-pic {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-bottom: 5px;
    }

    h2 {
      margin: 0;
    }

    .bio {
      max-width: 800px;

      .desktop-section {
        display: none;

        @media screen and (min-width: $ss-sm-min) {
          display: inline;
        }
      }

      .mobile-section {
        @media screen and (min-width: $ss-sm-min) {
          display: none;
        }

        i {
          transform: rotate(35deg);
        }
      }
    }
  }
}
</style>
