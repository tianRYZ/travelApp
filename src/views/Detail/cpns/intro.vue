<template>
  <div class="intro">
    <h2 class="title">{{ priceIntro.title }}</h2>
    <div class="content">
      {{ priceIntro.introduction }}
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  priceIntro: {
    type: Object,
    default: () => ({})
  }
})

</script>

<style lang="less" scoped>
.intro {
  padding: 16px 12px;
  border-bottom: 5px solid #f2f3f4;
  background: #fff;
  margin-top: 12px;
  background-color: #fff;

  .title {
    font-size: 14px;
    color: #000;
    font-weight: 700;
  }

  .content {
    font-size: 12px;
    color: #000;
    border-radius: 4px;
    white-space: pre-line;
  }
}
</style>
