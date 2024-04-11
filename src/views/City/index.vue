<template>
  <div class="city top-page">
    <!-- 搜索框 -->
    <div class="top">
      <!-- 搜索框 -->
      <van-search v-model="searchValue" show-action shape="round" placeholder="城市/区域/位置" @search="onSearch"
        @cancel="onCancel" />
      <!-- tab标签页 -->
      <van-tabs v-model:active="activeName" color="#43e97b">
        <template v-for="(value, key) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
        <!-- <van-tab :title="state.title1" name="a"></van-tab> -->
      </van-tabs>
    </div>
    <!-- <div class="content">
      <template v-for="item in currentGroup?.cities">
        <div>{{ item }}</div>
      </template>
    </div> -->
    <div class="content">
      <!-- <CityGroup :group-data="currentGroup" /> -->
      <template v-for="(value,key,index) in allCities">
      <CityGroup  v-show="activeName === key" :group-data="value" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive ,computed} from 'vue';
import { useRouter } from 'vue-router';
import useCityStore from '@/store/modules/city'
import { storeToRefs } from 'pinia';
import CityGroup from './cpns/cityGroup.vue'
// 使用接口 
// import {cityList} from '@/api/city'
const router = useRouter();
const searchValue = ref('');
const state = reactive({
  Group: [],
  GroupOverSea: [],
  title1: '',
  title2: '',
})
const activeName = ref('');
const onCancel = () => {
  // router.push('/home');
  router.back();
};

const onSearch = (data) => {
  console.log(data);
  // 根据搜索的值去匹配到 则返回  
};


// 获取城市数据列表 
// const getCityList = async()=>{
//   try {
//     const res = await cityList();
//     console.log(res.data,'我是city数据');
//     const {cityGroup,cityGroupOverSea} = res.data;
//     state.Group = cityGroup;
//     state.title1= cityGroup.title;
//     state.title2= cityGroupOverSea.title;
//     state.GroupOverSea = cityGroupOverSea;

//   } catch (error) {
//     console.log('error',error)
//   }
// };
// getCityList();
const cityStore = useCityStore();
cityStore.fetchAllCitiesData();
const { allCities } = storeToRefs(cityStore);

// 获取正确的Key  将tabs中绑定的activeName 正确绑定
// 根据Key从allCities获取数据，默认直接获取的数据不是响应式的 必须computed包裹
const currentGroup = computed(()=>allCities.value[activeName.value])

</script>

<style lang="less" scoped>
.city {
  --van-tabs-line-height: 30px !important;
  // 方式1
  // .top {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  // }
  // .content{
  //   margin-top: 94px;
  // }

  .top{
    position: relative;
    z-index: 9;
  }
  .content{
    height: calc(100vh - 94px);
    overflow-y: auto;
  }
}
</style>
