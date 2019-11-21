<template>
  <div class="contact">
    <ContactCard />
  </div>
</template>

<script>
import ContactCard from '@/components/ContactCard';

export default {
  components: { ContactCard }
};
</script>

<style>
.contact {
  padding: 15px;
  width: 100%;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
}
</style>
