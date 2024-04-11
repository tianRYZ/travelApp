<template>
  <div class="swipe">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swipeData" :key="index">
        <van-swipe-item class="item">
          <img :src="item.url" alt="" />
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <!-- <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div> -->
        <div class="custom-indicator">
          <template v-for="(value, key, index) in swipeGroup" :key="key">
            <span class="item" 
            :class="{ active: swipeData[active]?.enumPictureCategory == key }"
            >
              <span>{{ getName(value[0].title)}}&nbsp;</span>
            <span v-if="swipeData[active]?.enumPictureCategory == key">{{ getActiveIndex(swipeData[active])  }}/{{ value.length }}</span>
          </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  swipeData: {
    type: Array,
    default: () => []
  }
})

const swipeGroup = {}
for (const item of props.swipeData) {
  let valueArray = swipeGroup[item.enumPictureCategory]
  if (!valueArray) {
    valueArray = []
    swipeGroup[item.enumPictureCategory] = valueArray
  }
  valueArray.push(item)
}
// console.log(swipeGroup, '---');

const nameReg = /【(.*?)】/i
const getName = (name) => {
  // return name.replace("：","").replace("【","").replace("】","")
  const results = nameReg.exec(name);
  return results[1]
}

const getActiveIndex =(item)=>{
  const valueArray = swipeGroup[item?.enumPictureCategory];
  return (valueArray.findIndex(data=>data=== item)+1) 
}
</script>

<style lang="less" scoped>
.swipe {
  .my-swipe {
    .item {
      img {
        width: 100%;
      }
    }

    .custom-indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      display: flex;
      padding: 2px 5px;
      font-size: 12px;
      color: #fff;
      background: #000;
      // background: rgba(0, 0, 0, 0.1);

      .item {
        margin: 0 5px;

        &.active {
          padding: 0 3px;
          border-radius: 3px;
          background-color: #fff;
          color: #333;
        }
      }
    }
  }
}
</style>
