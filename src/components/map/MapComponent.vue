<script setup lang="ts">
import { YandexMap, YandexMarker } from 'vue-yandex-maps'
import BaseButton from '@/components/ui/BaseButton.vue'

defineProps({
  coordl1: Number as number | unknown,
  coordl2: Number as number | unknown
})

const YSettings = {
  apiKey: import.meta.env.VITE_SOME_API_KEY_YANDEX_MAP, // Индивидуальный ключ API
  lang: 'ru_RU', // Используемый язык
  debug: true, // Режим отладки
  version: '2.1' // Версия Я.Карт
}
</script>

<template>
  <div class="map">
    <BaseButton class="map-button" icon="x" size-icon="2x" @click="$emit('close-map')" />
    <YandexMap :settings="YSettings" :coordinates="[coordl1, coordl2]" :zoom="17">
      <YandexMarker :coordinates="[coordl1, coordl2]" :marker-id="1"> </YandexMarker>
    </YandexMap>
  </div>
</template>

<style scoped lang="scss">
.map {
  width: 100%;
  position: relative;
  margin-left: 22px;
  height: 100%;
}
.map-button {
  width: 50px;
  height: 50px;
  position: absolute;
  right: 0;
  z-index: 999;
}
.yandex-container {
  width: 100%;
  height: 240px;
  border-radius: 8px;
}
</style>
