<template>
  <div class="container">
    <router-view v-slot="props">
      <keep-alive include="home">
      <component :is="props.Component" />
      </keep-alive>
    </router-view>
    <tabBar v-show="!route.meta.hiderTabbar" />
    <Loading />
  </div>
</template>

<script setup lang="ts">
// import tabBar from './components/Tabbar.vue'
import tabBar from '@/components/Tabbar.vue'
import {useRoute} from 'vue-router';
import Loading from './components/Loading.vue';
const route = useRoute(); 
</script>

<style lang="less" scoped>
.container{
  // height: calc(100%-50px) !important;
}
</style>
