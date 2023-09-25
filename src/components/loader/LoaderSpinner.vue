<script setup lang="ts">
defineProps({
  completed: Number as number | unknown
})
</script>

<template>
  <div class="spinner">
    <span class="spinner__number">{{ `${completed}%` }}</span>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.spinner {
  width: 140px;
  height: 140px;
  background: $white;
  border-radius: 50%;
  position: relative;
  box-sizing: border-box;
  &__number {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    color: $black;
    background: $white;
    text-align: center;
    font-family: $font-noto, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: $font-weight-bold;
    line-height: normal;
  }
  &:before {
    content: '';
    position: absolute;
    box-sizing: border-box;
    inset: -10px;
    border-radius: 50%;
    border: 10px solid $green;
  }
}
</style>
