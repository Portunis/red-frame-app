<script setup lang="ts">
import TheLogo from '../TheLogo.vue'
import NavbarNavigation from './NavbarNavigation.vue'
</script>

<template>
  <div class="nav-bar">
     <div class="container nav-bar__content">
       <TheLogo />
       <NavbarNavigation />
     </div>
  </div>
</template>

<style scoped lang="scss">
.nav-bar {
  padding: 15px 79px 15px 16px;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 4px 4px 0 rgba(1, 0, 44, 0.25);
  width: 100%;
  box-sizing: border-box;
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
@media screen and (max-width: 765px) {
  .nav-bar {
    padding: 15px 45px 15px 16px;
  }
}
@media screen and (max-width: 415px) {
  .nav-bar {
    padding: 15px 45px 15px 16px;
  }
}
</style>
