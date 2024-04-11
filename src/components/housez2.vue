<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData?.image?.url" alt="">
      </div>
      <div class="infos">
        <div class="location">
          <img src="../assets/img/down.png" alt="">
          <span>{{itemData.location}}</span>
        </div>
        <div class="name">{{ itemData.houseName }}</div>
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="price">
          <!-- <van-rate :model-value="itemStore" :size="15" color="#fff" readonly allow-half />
          <div class="new">￥{{itemData.finalPrice }}</div> -->
          <div class="new">￥{{ itemData.finalPrice }}</div>
          <div class="old">￥{{ itemData.productPrice }}</div>
          <div class="tip" v-if="itemData.priceTipBadge">{{ itemData.priceTipBadge?.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive,computed } from 'vue';
const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})

const state = reactive({
  value: 22
});

const itemStore = computed(()=>{
  return Number(props.itemData.commentScore)
})
</script>

<style lang="less" scoped>
.house-item {
  width: 48%;
  margin-bottom: 20px;
  height: 260px; /* 设置与前面样式建议相同的高度 */

  .item-inner {
    position: relative;
    background: #fff;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: 100%;

    .cover img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .infos {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 10px;
      background-color: rgba(0, 0, 0, 0.6);
      color: #fff;
      box-sizing: border-box;

      .location {
        height: 40px;
        display: flex;
        align-items: center;

        img {
          width: 20px;
          height: 20px;
          margin-right: 5px;
        }
      }

      .summary {
        font-size: 12px;
        margin-bottom: 10px;
      }

      .name {
        margin: 0;
        font-size: 14px;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;

        .new {
          font-size: 16px;
          font-weight: bold;
        }

        .old {
          font-size: 12px;
          text-decoration: line-through;
        }
      }

      .tip {
        font-size: 12px;
        background-color: #ff4d4f;
        color: #fff;
        padding: 2px 6px;
        border-radius: 3px;
        margin-top: 5px;
      }
    }
  }
}

</style>
