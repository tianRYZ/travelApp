<template>
  <div class="homecontent">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="item in state.homehouselist" :key="item.data.houseId">
        <!-- <div class="item">
          <div v-if="item.discoveryContentType === 9">
            {{ item.data }}
          </div>
          <div v-else style="color: pink;">{{ item.data }}</div>
        </div> -->
        <showOne :item-data="item.data" v-if="item.discoveryContentType === 9" @click="itenClick(item.data)" />
        <showTow :item-data="item.data" v-else-if="item.discoveryContentType === 3" @click="itenClick(item.data)"  />
      </template>
    </div>
    <!-- <button @click="moreData">点我</button> -->
  </div>
</template>

<script setup lang="ts">
// 接口
import { gethouseList } from '@/api/home';
// 
import { reactive, watch } from 'vue';
 
import { useRouter } from 'vue-router';

import showOne  from '@/components/show1.vue'
import showTow  from '@/components/show2.vue'
import detailsStore from '@/store/modules/details'
// tools 
import useScroll from '@/hooks/useScroll'
 const state = reactive({
  homehouselist:[],
 });

 const  router = useRouter();
const detailStore = detailsStore();

 let currentPage = 1;
 const moreData=()=>{
  currentPage++;
  homeList1(currentPage);
 };

 const homeList1 = async(currentPage)=>{
  const res = await gethouseList(currentPage);
  state.homehouselist.push(...res.data);
 };
 homeList1(currentPage);


const {isReachBottom} = useScroll();

watch(isReachBottom,(newValue)=>{
  if(newValue){
    moreData();
    // console.log('加载更多');
    isReachBottom.value = false;
  }
})


const itenClick =(item:any)=>{
  // console.log('itemClick',item.houseId);

  // detailStore.detailId  =  item.houseId;
  router.push('/details/'+item.houseId); // 动态路由传参
}
// watch(
//   ()=>isReachBottom,
//   ()=>{
//     if(isReachBottom){
//       moreData();
//     }
//   },
//   {
//     immediate: true,
//     deep: true,
//   }
// )
</script>

<style lang="less" scoped>
.homecontent{
  padding: 10px 8px;
  .title{
    font-size: 22px;
    padding: 10px;
  }
  .list{
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
