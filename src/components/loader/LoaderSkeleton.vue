<script setup lang="ts"></script>

<template>
  <div class="skeleton">
    <div class="skeleton__images">
      <div class="skeleton__image" v-for="n in 3" :key="n"></div>
    </div>
    <div class="skeleton__content">
      <div class="skeleton__button skeleton__button-close"></div>
      <div class="skeleton__button"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.skeleton {
  position: relative;
  border-radius: $all-sides-large;
  background: $white;
  box-shadow: 3px 4px 4px 0 rgba(1, 0, 44, 0.25);
  padding: 16px;
  width: 73%;
  max-width: 1052px;
  float: right;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  &__images {
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    align-items: stretch;
    height: 240px;
  }
  &__image {
    background: $bg-color;
    border-radius: $all-sides-large;
    width: 162px;
    height: 112px;
    object-fit: cover;
    &:first-child {
      border-radius: $all-sides-large;
      width: 413px;
      height: 240px;
      grid-area: 1 / 1 / 3 / 2;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
  &__button {
    background: $bg-color;
    border-radius: $all-sides-large;
    width: 204px;
    height: 48px;
  }
  &__button-close {
    width: 48px;
    height: 48px;
  }
}
@media screen and (max-width: 768px) {
  .skeleton__image {
    display: none;

    &:first-child {
      display: block;
      width: 345px;
    }
  }
}
</style>
