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
      <h2 class="title">Welcome!</h2>
      <p class="bio">
        I am a passionate front end engineer with 4+ years of professional
        responsive web application development experience mainly using
        AngularJS, Javscript, HTML, and SCSS/CSS, with recent experience in
        React and Vue. This app is built with Vue! If you are a recruiter or a
        passerby, everything you need can be found
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
      width: 50px;
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
