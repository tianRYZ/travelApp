<template>
  <div class="tabbar">
    <template v-for="(item,index) in tabBarData">
      <div class="tabbaritem" :class="{active:currentIndex===index}" @click="itemClick(index,item)">
      <img v-if="currentIndex !==index" :src="getAssetsURL(item.image) " alt="">
      <img v-if="currentIndex ==index" :src="getAssetsURL(item.imageActive) " alt="">
      <span class="text">{{ item.text}}</span>
    </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import tabBarData from '@/assets/data/tabbar'
import {getAssetsURL} from '@/utils/tools'

import {ref} from 'vue';
import { useRouter } from 'vue-router';

// 
const router = useRouter();
const currentIndex = ref(0);
const itemClick =(index:any,item:any)=>{
  currentIndex.value = index;
  router.push(item.path)
}


</script>

<style lang="less" scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  border-top: 1px solid #f3f3f3;

  .tabbaritem {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 24px;
    }
    .text {
      font-size: 12px;
      margin-top: 4px;
    }
  }
}</style>
