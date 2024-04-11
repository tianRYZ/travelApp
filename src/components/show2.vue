<template>
  <div class="box2">
    <div class="iteminner">
      <div class="cover">
        <img :src="itemData?.image?.url" alt="">
      </div>
      <div class="info">
        <div class="location">
          <img src="@/assets/img/down.png" alt="">
          <span>{{ itemData?.location }}</span>
        </div>
        <div class="name">{{ itemData?.houseName }}</div>
        <div class="summary">{{ itemData?.summaryText }}</div>
        <div class="price">
          <!-- <van-rate /> -->
          <div class="new">￥{{ itemData?.finalPrice }}</div>
          <!-- <div class="old">￥{{ itemData.productPrice }}</div> -->
          <div class="tipbox">
            <img src="@/assets/img/tips.png" alt="">
            <div class="tip">{{ itemData?.priceTipBadge?.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
});


</script>

<style lang="less" scoped>
.box2 {
  width: 50%;

  .iteminner {
    position: relative;
    margin: 5px;
    background: #fff;
    border-radius: 5px;
    overflow: hidden;

    .cover {
      img {
        width: 100%;
      }
    }

    .info {
      font-size: 14px;

      .location {
        img {
          width: 12px;
        }

        display: flex;
        align-items: center;
        font-size: 11px;
        color: #666;
        margin: 8px 0 4px;
      }

      .summary {
        margin: 5px 0 2px 0;
        font-size: 12px;
        color: #666;
        width: 9em;
        white-space: nowrap;
        text-overflow: ellipsis; 
        overflow: hidden;
      }

      .name {
        color: #333 !important;
        overflow: hidden;
        /* 隐藏溢出的部分 */
        display: -webkit-box;
        /* 使用弹性盒子布局 */
        -webkit-line-clamp: 2;
        /* 显示两行文本 */
        -webkit-box-orient: vertical;
        /* 垂直排列文本 */
        text-overflow: ellipsis;
        /* 使用省略号表示溢出的文本 */
      }
      .price{
        display: flex;
        font-size: 14px;
        height: 15px;
        margin: 5px 0;
        .new{
          color: #96e6a1;
          font-size: 14px;
          margin-right: 15px;
        }
        .tipbox{
          // margin-left: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 25px;
          background-image: linear-gradient(270deg,#f66,#ff9f9f);
          padding: 2px 4px;
          img{
            width: 8px;
          }
          .tip{
          padding: 0 6px;
          color: #fff;
          font-weight: 500;
          font-size: 12px;
        }
        }
      }
    }
  }
}</style>
