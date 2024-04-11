<template>
  <div class="loading" v-if="mainStore.isLoading" @click="loadClick">
    <div class="bg">
      <img src="@/assets/img/full-screen-loading.gif" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">
import usemainStore from '@/store/modules/main';

const mainStore = usemainStore();

const loadClick =()=>{
  mainStore.isLoading = false;
}
</script>

<style lang="less" scoped>
.loading {
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .2);

  .bg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 104px;
    height: 104px;
    background: url(@/assets/img/loading-bg.png) 0 0 /100% 100%;

    // img  position   size 
    img {
      height: 70px;
      width: 70px;
      margin-top: -8px;
    }
  }
}
</style>
