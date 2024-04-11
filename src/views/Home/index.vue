<template>
  <div class="home" ref="homeRef">
    <home-nav-bar />
    <div class="nav-img">
      <van-swipe :autoplay="3000" lazy-render indicator-color="white" style="height: 140px;">
        <van-swipe-item v-for="image in barimages" :key="image">
          <img :src="getAssetsURL(image.imgg)" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- search -->
    <HomeSearchBox :hot-data="state.hotCitySugger" />
    <!--分类  -->
    <HomeCategory :cate-data="state.categoryList" />

    <div class="searchTip" v-if="isShowSearch">
      <searchBar />
    </div>
    <HomeContenter />
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>


<script setup>
import HomeNavBar from './cpns/index.vue';
import { getAssetsURL } from '@/utils/tools'
import barimages from '@/assets/data/navbarimg';
import HomeSearchBox from './cpns/searchBox.vue';
import HomeCategory from './cpns/homeCateogry.vue'
import HomeContenter from './cpns/homeContents.vue'
import searchBar from '@/components/searchBar.vue'
import { reactive, watch, ref,onActivated } from 'vue';
import { hotSugger, houseList } from '@/api/city'
import useScroll from '@/hooks/useScroll'
const state = reactive({
  hotCitySugger: [], // 存放 热门建议城市的数据
  categoryList: [], //  推荐类别
});

const homeRef = ref()
const gethotSuugest = async () => {
  const res = await hotSugger();
  // console.log('我是res',res);
  state.hotCitySugger = res.data;
};
gethotSuugest();

// 获取当前房屋列表
const homeList = async () => {
  const res = await houseList();
  // console.log('我是推荐类别',res.data);
  state.categoryList = res.data;
};
homeList();
const { scrollTop,isReachBottom } = useScroll(homeRef);

const isShowSearch = ref(false);

watch(scrollTop, (newTop) => {
  if (newTop) {
    console.log(newTop)
    isShowSearch.value = newTop > 400;
  }
})

onActivated(()=>{
  homeRef.value?.scrollTo({
    top:scrollTop.value
  })
})

</script>

<style lang="less" scoped>
.home {
  background-color: #fff;
  // height: 100%;
  padding-bottom: 60px !important;
  // height: calc(100%-50px) !important;
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;

  .nav-img {
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  
.searchTip {
  z-index: 9;
  position: fixed;
  top: 0;
  left: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
  width: 90%;
}
}
</style>
