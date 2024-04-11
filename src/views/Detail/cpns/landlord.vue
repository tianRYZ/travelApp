<template>
  <div class="landord">
    <detailSection header-text="房东介绍" more-text="查看房东主页" :has-more="true">
      <div class="landord_inner">
        <div class="top">
          <img :src="landord.topScroll" alt="">
        </div>
        <div class="header">
          <div class="left">
            <div class="avatar">
              <img :src="landord.hotelLogo" alt="">
            </div>
            <div class="info">
            <div class="name">{{ landord.hotelName }}</div>
            <div class="tags">
              <template v-for="(item, index) in landord.hotelTags">
                <div class="item" :style="{ color: item.tagText.color }">
                  <span>{{ item.tagText.text }}</span>
                  <span class="divider" v-if="index !== landord.hotelTags.length - 1">|</span>
                </div>
              </template>
            </div>
            <div class="divider"></div>
          </div>
          </div>
          <div class="right">
            <div class="contact">联系房东</div>
          </div>
        </div>
        <div class="bottom">
          <template v-for="(iten, indey) in landord.hotelSummary" :key="indey">
            <div class="iten">
              <div class="title">{{ iten.title }}</div>
              <div class="introduction">{{ iten.introduction }}</div>
              <div class="tip">{{ iten.tip }}</div>
            </div>
          </template>
        </div>
      </div>
    </detailSection>
  </div>
</template>

<script setup lang="ts">
import detailSection from '@/components/detailSection/detailSection.vue';
defineProps({
  landord: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.landord_inner {
  padding: 5px 0;
  border-radius: 5px;
  font-size: 12px;
  .top {
    img {
      width: 100%;
      height: 30px;
      border-radius: 3px;
    }
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 16px;

    .left {
      display: flex;
      .avatar {
        img {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background-size: 40% auto;
        }
      }


      .info {
        margin-left: 20px;
        .name {
          margin-top: 5px;
          font-size: 16px;
          font-weight: 600;
        }

        .tags {
          display: flex;
          margin-top: 5px;
          font-size: 12px;
          .item{
            font-size: 10px;
            color: rgb(155, 155, 155);
          }

          .divider {
            margin: 0 5px;
          }
        }
      }
    }

    .right {
      .contact {
        height: 24px;
        line-height: 24px;
        border-radius: 5px;
        padding: 0 12px;
        color: #fff;
        background-image: linear-gradient(90deg, #fa8c1d, #fcaf3f);
      }
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    margin: 50px 10px 10px;

    .iten {
      font-size: 12px;

      .title {
        font-size: 10px;
        color: #999;
      }

      .introduction {
        font-size: 18px;
        font-weight: 600;
        margin: 4px 0 2px;
        color: #333;
      }

      .tip {
        font-size: 11px;
        color: #666;
      }
    }
  }
}
</style>
