<template>
  <div>
    <DetailSection :more-text="`查看全部${comments.totalCount}条评论`" header-text="房客点评">
      <div class="comment">
        <div class="header">
          <div class="left">
            <div class="score">
              <div class="text">{{ comments.overall }}</div>
              <div class="line"></div>
            </div>
            <div class="infos">
              <div class="title">
                {{ comments.scoreTitle }}
              </div>
              <div class="count">{{ comments.totalCount }}条</div>
              <div class="star">
                <van-rate v-model="comments.overall" :size="12" color="#ff9645" void-icon="star" readonly allow-half void-color="#eee" />
              </div>
            </div>
          </div>
          <div class="right">
            <template v-for="(item, index) in comments.subScores" :key="index">
              <span class="item">{{ item }}</span>
            </template>
          </div>
        </div>
        <div class="tags">
          <template v-for="(item, index) in comments.commentTagVo">
            <span class="item" :style="{ color: item.color, backgroundColor: item.backgroundColor }">{{ item.text }}</span>
          </template>
        </div>
        <div class="content">
          <div class="user">
            <div class="avatar">
              <img :src="comments.comment.userAvatars" alt="">
            </div>
            <div class="profile">
              <div class="name">{{ comments.comment.userName }}</div>
              <div class="date">{{ comments.comment.checkInDate }}</div>
            </div>
          </div>
          <div class="text">
            {{ comments.comment.commentDetail }}
          </div>
        </div>
      </div>
    </DetailSection>
  </div>
</template>

<script setup lang="ts">
import DetailSection from '@/components/detailSection/detailSection.vue';
defineProps({
  comments: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.comment {
  padding: 5px 0;
  border-radius: 5px;
  font-size: 12px;

  .header {
    display: flex;
    .left {
      display: flex;
      align-items: center;

      .score {
        width: 65px;
        height: 100%;
        color: #333;
        position: relative;
        font-weight: 600;

        .text {
          font-size: 48px;
          position: relative;
          z-index: 9;
        }

        .line {
          width: 66px;
          height: 6px;
          background: linear-gradient(90deg, #fa8c1d, #fcaf3f);
          border-radius: 3px;
          position: absolute;
          bottom: 6px;
          z-index: 5;
        }
      }

      .infos {
        margin-left: 19px;
        font-size: 12px;
        color: #333;

        .title {
          font-size: 14px;
          font-weight: 600;
          color: #333;
          margin-bottom: 6px;
        }

        .count {
          margin: 3px 0;
          color: #333;
        }
      }
    }

    .right {
      display: flex;
      flex-wrap: wrap;
      flex:1;
      justify-content: flex-end;
      .item{
        margin-left: 5px;
        font-size: 12px;
        color: #666;
      }
    }
  }

  .tags {
    display: flex;
    margin: 10px 0;
    flex-wrap: wrap;
    .item {
      padding: 3px 5px;
      margin-right: 8px;
      margin-top: 8px;
      border-radius: 8px;
      font-size: 12px;
    }
  }

  .content {
    padding: 10px;
    border-radius: 6px;
    background-color: #f7f9fb;

    .user {
      display: flex;

      .avatar {
        img {
          width: 32px;
          height: 32px;
          border-radius: 16px;
          margin-right: 4px;
          background: #f7f9fb;
        }
      }

      .profile {
        .name {}

        .date {
          margin-top: 3px;
          font-size: 12px;
          color: #999;
        }
      }
    }

    .text {
      font-size: 12px;
      line-height: 16px;
      color: #333;
      margin-top: 16px;
    }
  }
}
</style>
