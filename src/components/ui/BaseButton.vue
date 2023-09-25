<script setup lang="ts">
import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons'
defineProps({
  icon: String as string | unknown,
  sizeIcon: String as string | unknown,
  text: String as string | unknown
})
</script>

<template>
  <div class="button">
    <BootstrapIcon :icon="icon" :size="sizeIcon" v-if="icon" class="icon" />
    {{ text }}
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.button {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 14px;
  border-radius: 8px;
  background: $green;
  text-align: center;
  min-width: 48px;
  min-height: 48px;

  color: $white;
  font-family: $font-noto, sans-serif;
  font-size: $font-size-md;
  font-style: normal;
  font-weight: $font-weight-bold;
  line-height: normal;

  &:hover {
    cursor: pointer;
    background: $dark-blue;
  }
}
.icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
.bi {
  margin-bottom: 0;
}
</style>
