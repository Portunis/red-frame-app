<script setup lang="ts">
import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons'
defineProps({
  icon: String as string | unknown,
  sizeIcon: String as string | unknown,
  title: String as string | unknown,
  url: String as string | unknown
})
</script>

<template>
  <a :href="url" class="navigation-item">
    <BootstrapIcon :icon="icon" size="md" v-if="icon" />
    <p class="navigation-item__title">{{ title }}</p>
  </a>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.navigation-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $dark-blue;
  &:hover {
    cursor: pointer;
    color: $green;
  }
  &__title {
    font-family: $font-noto, sans-serif;
    font-size: $font-size-md;
    font-style: normal;
    font-weight: $font-weight-regular;
    line-height: normal;
  }
}
@media screen and (max-width: 765px) {
  .navigation-item__title {
    display: none;
  }
}
@media screen and (max-width: 415px) {
  .navigation-item__title {
    display: none;
  }
}
</style>
