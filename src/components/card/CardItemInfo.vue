<script setup lang="ts">
import BaseButton from '../ui/BaseButton.vue'
import CardItemInfoList from './CardItemInfoList.vue'
import { computed, ref } from 'vue'
import MapComponent from '@/components/map/MapComponent.vue'
const props = defineProps({
  name: String as string | unknown,
  address: String as string | unknown,
  sum: Number as number | unknown,
  freeRooms: Number as number | unknown,
  allRooms: Number as number | unknown,
  roomClass: String as string | unknown,
  distanceFromCenter: String as string | unknown,
  coordl1: Number as number | unknown,
  coordl2: Number as number | unknown
})
const day = 42
const resultSumAllDay = computed(() => {
  return props.sum * day
})
const isMapActive = ref(false)

</script>

<template>
  <MapComponent
    v-if="isMapActive"
    :coordl1="coordl1"
    :coordl2="coordl2"
    @close-map="isMapActive = false"
  />
  <div class="card-info" v-if="!isMapActive">
    <div class="card-info__header">
      <div class="header">
        <h2 class="header__title">{{ name }}</h2>
        <p class="header__address">{{ address }}</p>
      </div>
      <BaseButton
        class="header-button"
        icon="geo-alt-fill"
        size-icon="lg"
        @click="isMapActive = true"
      />
    </div>
    <div class="card-info__room">
      <CardItemInfoList
        :freeRooms="freeRooms"
        :allRooms="allRooms"
        :roomClass="roomClass"
        :distanceFromCenter="distanceFromCenter"
      />
    </div>
    <div class="card-info__footer">
      <p class="footer__price">
        от {{ resultSumAllDay.toLocaleString() }} р. за {{ day }} дней
      </p>
      <BaseButton text="Подробнее" class="footer__button" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.card-info {
  width: 100%;
  margin-left: 22px;
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;
    align-items: flex-start;
  }
  &__room {
    background: $bg-color;
    border-radius: $all-sides-large;
    padding: 16px 48px;
    display: flex;
    justify-content: space-between;
  }
  &__footer {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.header__title,
.header__address,
.footer__price {
  font-family: $font-noto, sans-serif;
  font-style: normal;
  line-height: normal;
}
.header {
  &__title {
    color: $green;
    font-size: $font-size-lg;
    font-weight: $font-weight-regular;
    line-height: 16px;
    margin-bottom: 11px;
  }
  &__address {
    color: $dark-blue;
    font-size: $font-size-sm;
    font-weight: $font-weight-semi-bold;
  }
}
.header-button {
  width: 50px;
}
.footer {
  &__price {
    color: $dark-blue;
    font-size: $font-size-md;
    font-weight: $font-weight-bold;
  }
  &__button {
    width: 203px;
  }
}
@media screen and (max-width: 709px) {
  .header {
    position: absolute;
    top: 16px;
  }
  .card-info {
    margin: 0;
  }
  .card-info__room {
    background: none;
  }
  .card-info__footer {
    flex-direction: column;
    align-items: flex-start;
  }
  .footer__price {
    margin-bottom: 16px;
  }
  .footer__button {
    width: 100%;
  }
  .header-button {
    display: none;
  }
}
@media screen and (max-width: 370px) {
  .header {
    width: 280px;
  }
  .header__title {
    line-height: 20px;
  }
}
</style>
