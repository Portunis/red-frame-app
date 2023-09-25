<script setup lang="ts">
import NavbarNavigationItem from './NavbarNavigationItem.vue'
const navigationItem = [
  {
    id: 0,
    title: 'Язык (RU)',
    url: '',
    click: () => {},
    icon: 'globe'
  },
  {
    id: 1,
    title: 'Сдать жилье',
    url: '',
    click: () => {},
    icon: 'house-lock'
  },
  {
    id: 2,
    title: 'Войти',
    url: '',
    click: () => {},
    icon: 'box-arrow-in-right'
  }
]
</script>

<template>
  <div class="navigation">
    <NavbarNavigationItem
      v-for="item in navigationItem"
      :key="item.id"
      :icon="item.icon"
      :title="item.title"
      :url="item.url"
    />
  </div>
</template>

<style scoped lang="scss">
.navigation {
  display: flex;
  align-items: center;
  gap: 100px;
}
@media screen and (max-width: 765px) {
  .navigation {
    gap: 30px;
  }
}
@media screen and (max-width: 415px) {
  .navigation {
    gap: 30px;
  }
}
</style>
