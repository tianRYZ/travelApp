<template>
  <div class="tabbar">
    <!-- <template v-for="(item,index) in tabBarData">
      <div class="tabbaritem" :class="{active:currentIndex===index}" @click="itemClick(index,item)">
      <img v-if="currentIndex !==index" :src="getAssetsURL(item.image) " alt="">
      <img v-if="currentIndex ==index" :src="getAssetsURL(item.imageActive) " alt="">
      <span class="text">{{ item.text}}</span>
    </div>
    </template> -->
    <van-tabbar v-model="currentIndex" active-color="#43e97b" route>
      <template v-for="(item, index) in tabBarData">
        <van-tabbar-item :to="item.path" class="tabbaritem">
          <span class="text">{{ item.text }}</span>
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetsURL(item.image)" alt="">
            <img v-if="currentIndex == index" :src="getAssetsURL(item.imageActive)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>


  </div>
</template>

<script setup lang="ts">
import tabBarData from '@/assets/data/tabbar'
import { getAssetsURL } from '@/utils/tools'

import { ref ,watch} from 'vue';
import { useRouter,useRoute } from 'vue-router';

// 
const router = useRouter();
const currentIndex = ref(0);

const route = useRoute();
watch(route,(newRoute)=>{
 const index = tabBarData.findIndex(item=>item.path === newRoute.path);
 if(index === -1) return;
 currentIndex.value = index;
});

// @change="handleChange"
</script>

<style lang="less" scoped>
.tabbar {
  // position: fixed;
  // bottom: 0;
  // left: 0;
  // right: 0;
  // height: 50px;
  // display: flex;
  // border-top: 1px solid #f3f3f3;

  // .tabbaritem {
  //   flex: 1;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  //   img {
  //     width: 24px;
  //   }
  //   .text {
  //     font-size: 12px;
  //     margin-top: 4px;
  //   }
  // }
  --van-tabbar-item-icon-size: var(--text-color);
}
</style>
