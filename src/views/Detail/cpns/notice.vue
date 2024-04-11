<template>
  <div>
    <DetailSection header-text="预定须知">
      <div class="notice">
        <template v-for="(item, index) in notices.orderRules" :key="index">
          <div class="item">
            <span class="title">{{ item.title }}</span>
            <span class="intro" :class="{ color: item?.color }">{{ item.introduction }}</span>
            <span class="tip" v-if="item.tips">查看说明 <van-icon name="arrow" /></span>
          </div>
        </template>
        <div class="steps">
          <van-steps direction="vertical" :active="1" active-color="#000">
            <template v-for="(item, index) in notices.cancelRules" :key="index">
              <van-step class="vansteps">
                <div>{{ item.introduction }}</div>
                <span :style="{ backgroundColor: item.backColor, color: item.tipColor }">{{ item.tip }}</span>
              </van-step>
            </template>
          </van-steps>
        </div>
        <div class="checkin">
          <template v-for="(item, index) in notices.checkInRules" :key="index">
            <div class="checkitem">
              <div class="title">{{ item.title }}</div>
              <div class="itey">
                <template v-for="(itey, indexy) in item.items" :key="indexy">
                  <div class="iten">
                    <i class="icon" :class="itey && itey.isDeleted ? 'icon_checkno' : 'icon_check'"></i>
                    <span>{{ itey.introduction }}</span>
                  </div>
                </template>
              </div>
            </div>
          </template>
        </div>
        <div class="otherInfo">
          <template v-for="(item, index) in notices.checkinOtherInfo" :key="index">
            <template v-for="(ele, ind) in item.items" :key="ind">
              <div>
                <p>{{ ele.introduction }}</p>
              </div>
            </template>
          </template>
        </div>
        <div class="tip">
          <div class="tip_content">
            <i class="icon_bar icon"></i>
            遵守入住规则有助于获得更愉快的入住体验
          </div>
        </div>
      </div>
    </DetailSection>
  </div>
</template>

<script setup lang="ts">
import DetailSection from '@/components/detailSection/detailSection.vue'
defineProps({
  notices: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.notice {
  .item {
    display: flex;
    margin: 10px 0 20px;
    font-size: 12px;

    .title {
      width: 64px;
      color: #666;
    }

    .intro {
      flex: 1;
      color: #333;
    }

    .tip {
      font-size: 10px;
      color: #666;
      font-weight: 600;
    }
  }

  .steps {
    .vansteps {
      font-size: 12px;
      color: #333;
      font-weight: 500;
    }

  }

  .checkin {
    .checkitem {
      display: flex;
      margin: 20px 0;

      .title {
        font-size: 12px;
        width: 64px;
        color: #666;
        text-align: center;
      }

      .itey {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-top: -6px;

        .iten {
          display: flex;
          align-items: center;
          box-sizing: border-box;
          width: 50%;
          margin: 4px 0;

          .icon {
            margin: 0 10px;
          }

          .text {
            color: #333;
          }
        }
      }
    }
  }

  .otherInfo {
    font-size: 12px;
    white-space: pre-line;
    color: #333;
  }

  .tip {
    display: flex;
    align-items: center;
    justify-content: center;
    .tip_content {
      background: #f8fafc;
      font-size: 9px;
      color: #bfbfbf;
      padding: 0 15px;
      height: 24px;
      line-height: 24px;
      border-radius: 4px;
    margin-bottom: 20px;
    }
  }
}
</style>
