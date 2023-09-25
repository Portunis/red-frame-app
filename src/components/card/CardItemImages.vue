<script setup lang="ts">
import { onMounted } from 'vue'
import type { PropType } from 'vue'
import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons'
import { api } from 'v-viewer'
import type { IApartmentsImage } from '@/typescripts/interfaces/IApartments'

const props = defineProps({
  images: {
    type: Array as PropType<IApartmentsImage[]>,
    default: () => {}
  }
})

let imagesGallery: string[] = []
/**
 * Перебираем массив Images[] для получения путей картинок
 */
const getImagesFromArray = () => {
  props.images.forEach((item: IApartmentsImage) => {
    imagesGallery.push(item.path)
  })
}
/**
 * Показаываем картинку по нажатию на иконку "Камера"
 */
const showImage = () => {
  api({
    images: imagesGallery
  })
}

onMounted(() => {
  getImagesFromArray()
})
</script>

<template>
  <div class="images">
    <BootstrapIcon icon="camera-fill" size="lg" class="icon" @click="showImage" />
    <div class="images__gallery">
      <img v-for="image in images" :key="image.path" class="image" :src="image.path" alt="image" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables';
.images {
  position: relative;
}
.images__gallery {
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  align-items: stretch;
  height: 100%;
}
.image {
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
.icon {
  position: absolute;
  border: 2px solid $white;
  border-radius: $all-sides-large;
  padding: 12px;
  color: $white;
  bottom: 14px;
  left: 18px;
  &:hover {
    cursor: pointer;
  }
}
@media screen and (max-width: 1225px) {
  .image {
    display: none;
    &:first-child {
      display: block;
      width: 345px;
    }
  }
}
@media screen and (max-width: 709px) {
  .images__gallery {
    display: initial;
  }
  .icon {
    display: none;
  }
  .image {
    &:first-child {
      width: 100%;
      margin-top: 55px;
    }
  }
}
@media screen and (max-width: 415px) {
  .image {
    width: 350px;
    height: 128px;
    &:first-child {
      box-sizing: border-box;
      display: block;
      height: 128px;
    }
  }
}
@media screen and (max-width: 320px) {
  .image {
    &:first-child {
      width: 100%;
      margin-top: 70px;
    }
  }
}
</style>
