<template>
  <div class="msg">
    <h2>msg</h2>
    <template v-for="item in 100">
      <div>
        data:{{ item }}
      </div>
    </template>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.msg{
  height: 300px;
  overflow-y: auto;
  background-color: orange;
}
</style>
