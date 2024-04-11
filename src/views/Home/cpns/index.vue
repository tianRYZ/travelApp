<template>
  <div class="navbar">
    <div class="nav-bar">
      <div class="title">
        📷蓉城印象 
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';

const rateValue = ref(0);

const rateIncrement=()=>{
  rateValue.value++
}
</script>

<style lang="less" scoped>
.navbar{
  .nav-bar{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 46px;
    .title{
      color: #43e97b;
      font-size: 16px;
      font-weight: 700;
    }
  }
}
</style>
