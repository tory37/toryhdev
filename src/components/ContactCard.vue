<template>
  <div class="contact-card">
    <img class="profile-pic" alt="Profile Pic" src="@/assets/profilepic.jpg" />
    <div class="name">Tory Hebert</div>
    <div class="row location">
      <FAIcon icon="globe-americas" />
      <div>Lafayette, LA</div>
    </div>
    <div class="row">
      <FAIcon icon="phone" />
      <a class="phone" href="tel:337-380-0038">(337) 380-0038</a>
    </div>
    <div class="row">
      <FAIcon :icon="['far', 'envelope']" />
      <a href="mailto:tory37@gmail.com">tory37@gmail.com</a>
    </div>
    <div class="bio">
      Please feel free to email or call me if you have a position I may be
      interested in.
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactCard'
};
</script>

<style scoped lang="scss">
.contact-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 275px;

  background-color: $color-gray;
  width: 350px;
  border-radius: 4px;
  padding: 10px;

  .profile-pic {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 5px;
  }

  .name {
    font-size: 18px;
    font-weight: 600;
  }

  .location {
    font-size: 14px;
  }

  .row {
    display: flex;
    align-items: center;
  }

  svg {
    margin-right: 5px;
  }

  a {
    color: white;

    &:hover {
      font-weight: 600;
    }
  }
}
</style>
