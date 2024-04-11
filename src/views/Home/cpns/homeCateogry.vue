<template>
  <div class="category">
    <template v-for="(item,index) in cateData">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <div class="text">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  cateData: {
    type: Array,
    default: () => []
  }
});
</script>

<style lang="less" scoped>
.category {
  display: flex;
  overflow-x: auto;
  height: 80px;
  padding: 0 10px;
  margin-top: 15px; /* 隐藏滚动条 */ /* IE and Edge */
  // scrollbar-width: none;
 
  // -ms-overflow-style: none;
 

  // &::-webkit-scrollbar {
  //   width: 0;
  //   height: 0;
  // }
&::-webkit-scrollbar{
  display: none;
}
  .item {
    width: 70px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    img {
      width: 32px;
      height: 32px;
    }

    .text {
      font-size: 12px;
      margin-top: 8px;
    }
  }
}
</style>
