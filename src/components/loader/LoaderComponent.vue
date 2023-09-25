<script setup lang="ts">
import LoaderSkeleton from '@/components/loader/LoaderSkeleton.vue'
import LoaderSpinner from '@/components/loader/LoaderSpinner.vue'
defineProps({
  completed: Number as number | unknown
})
</script>

<template>
  <div class="loader">
    <div class="loader__content">
      <LoaderSkeleton v-for="n in 3" :key="n" />
      <LoaderSpinner class="loader__spinner" :completed="completed" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.loader {
  margin: 20px;
  &__spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }
}
</style>
