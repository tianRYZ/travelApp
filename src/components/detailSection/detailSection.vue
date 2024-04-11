<template>
  <div class="section">
    <div class="header">
      <h2 class="title">{{ headerText }}</h2>
    </div>
    <div clss="content">
      <slot>默认内容</slot>
    </div>
    <div class="footer" v-if="moreText.length">
      <span class="more">{{ moreText }}
        <van-icon name="arrow" />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  headerText:{
    type:String,
    defalut:"默认设施"
  },
  hasMore:{
    type:Boolean,
    default:true
  },
  moreText:{
    type:String,
    default:''
  }
})
</script>

<style lang="less" scoped>
.section {
  padding:  0 15px;
  margin-top: 12px;
  background-color: #fff;
  border-top: 5px solid #f2f3f4;
  .header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;
    .title {
      font-size: 20px;
      color: #333;
    }
  }
  .content {
padding: 8px 0;
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 44px;
    line-height: 44px;
    color: #ff9645;
    font-size: 14px;
    font-weight: 600;
  }
}
</style>
