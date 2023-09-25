<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axiosInstance from '@/api/api'
import type { AxiosResponse } from 'axios'
import type IApartments from '@/typescripts/interfaces/IApartments'
import type IApiError from '@/typescripts/interfaces/IApiError'
import LoaderComponent from '@/components/loader/LoaderComponent.vue'
import CardItem from './CardItem.vue'

const items = ref<IApartments[]>([])
let progressLoading = ref<number>(0)
const isLoading = ref<boolean>(true)
interface IResponseApartments {
  data: IApartments[]
  status: number
}

/**
 * Получаем данные об апартах
 * @return [items] Массив с апартаментами
 */
async function getApartments(): Promise<IResponseApartments | IApiError> {
  isLoading.value = true
  return await axiosInstance
    .get<IResponseApartments>('', {
      onDownloadProgress: (progressEvent) => {
        progressLoading.value = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        isLoading.value = progressLoading.value !== 100
      }
    })
    .then((response: AxiosResponse) => {
      return (items.value = response.data)
    })
    .catch((error: IApiError) => {
      console.log(error)
    })
    .finally(() => {
      isLoading.value = false
    })
}

onMounted(() => {
  getApartments()
})
</script>

<template>
  <LoaderComponent :completed="progressLoading" v-if="isLoading" />
  <div class="cards" v-if="!isLoading">
    <CardItem v-for="item in items" :key="item.id" :apartment="item" />
  </div>
</template>

<style scoped lang="scss">
.cards {
  margin: 20px;
}
</style>
