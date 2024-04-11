<template>
  <div class="search">
    <template v-for="(item,index) in searchObj">
    {{ item }}</template>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useCityStore from '@/store/modules/city'
const cityStore = useCityStore();
const { searchObj } = storeToRefs(cityStore);
</script>

<style lang="less" scoped></style>
