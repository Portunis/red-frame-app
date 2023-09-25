<script setup lang="ts">
defineProps({
  freeRooms: Number as number | unknown,
  allRooms: Number as number | unknown,
  roomClass: String as string | unknown,
  distanceFromCenter: String as string | unknown
})
</script>

<template>
  <ul>
    <li class="info-list__item">Занято номеров:</li>
    <li class="info-list__item">Класс:</li>
    <li class="info-list__item">Расположение:</li>
  </ul>
  <ul>
    <li class="info-list__item">{{ freeRooms }} / {{ allRooms }}</li>
    <li class="info-list__item">{{ roomClass }}</li>
    <li class="info-list__item">{{ distanceFromCenter }} км от центра</li>
  </ul>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.info-list__item {
  margin-bottom: 11px;
  text-align: center;
  font-family: $font-noto, sans-serif;
  font-size: $font-size-sm;
  font-style: normal;
  font-weight: $font-weight-semi-bold;
  line-height: normal;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
