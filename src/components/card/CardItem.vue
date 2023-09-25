<script setup lang="ts">
import CardItemInfo from './CardItemInfo.vue'
import CardItemImages from './CardItemImages.vue'
import type { PropType } from 'vue'
import type IApartments from '@/typescripts/interfaces/IApartments'

defineProps({
  apartment: Object as PropType<IApartments>
})
</script>

<template>
  <div class="card">
    <CardItemImages :images="apartment?.images" />
    <CardItemInfo
      :name="apartment?.name"
      :address="apartment?.address"
      :sum="apartment?.sum"
      :free-rooms="apartment?.freeRooms"
      :all-rooms="apartment?.allRooms"
      :distance-from-center="apartment?.distanceFromCenter"
      :room-class="apartment?.roomClass"
      :coordl1="apartment?.l1"
      :coordl2="apartment?.l2"
    />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.card {
  position: relative;
  border-radius: $all-sides-large;
  background: $white;
  box-shadow: 3px 4px 4px 0 rgba(1, 0, 44, 0.25);
  padding: 16px;
  width: 73%;
  max-width: 1052px;
  float: right;
  display: flex;
  margin-bottom: 16px;
}
@media screen and (max-width: 916px) {
  .card {
    float: none;
    width: 100%;
    box-sizing: border-box;
  }
}
@media screen and (max-width: 709px) {
  .card {
    flex-direction: column;
  }
}

</style>
