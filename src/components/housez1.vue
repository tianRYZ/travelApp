<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="">
      </div>
      <div class="infos">
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="name">{{ itemData.houseName }}</div>
        <div class="price">
          <!-- <van-rate v-model="state.value" :size="12" color="#fff" gutter="0" /> -->
          <van-rate :model-value="itemStore" :size="15" color="#fff" readonly allow-half />
          <div class="new">￥{{itemData.finalPrice }}</div>
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
// .house-item{
//   width: 50%;
//   .item-inner{
//     position: relative;
//     margin: 5px;
//     background: #fff;
//     border-radius: 6px;
//     overflow: hidden;
//     .cover{
//       img{
//         width: 100%;
//       }

//       .infos{
//         position: absolute;
//         bottom: 0;
//         padding: 8px 10px;
//         color: #fff;
//         .summary{
//           font-size: 12px;
//         }
//         .name{
//           margin: 5px 0;
//           overflow: hidden;
//           text-overflow: ellipsis;
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//         }
//         .price{
//           display: flex;
//           margin-top: 10px;
//           justify-content: space-between;
//         }
//       }
//     }
//   }
// }
.house-item {
  width: 50%;
}
.item-inner {
  position: relative;
  margin: 5px;
  background: #fff;
  border-radius: 6px;
  overflow: hidden;
}
.cover img {
  width: 100%;
}
.infos {
  position: absolute;
  bottom: 0;
  padding: 8px 10px;
  color: #fff;
}
.summary {
  font-size: 12px;
}
.name {
  margin: 5px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.price {
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
}
</style>
