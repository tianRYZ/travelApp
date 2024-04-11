<template>
  <div>
    <!-- 热门城市只能说  -->
    <div class="cityGroup"> 
      <van-index-bar :sticky="false">
        <van-index-anchor index="热门" :index-list="indexList" />
        <div class="list">
          <template v-for="(city,index) in  groupData.hotCities" :key="index">
            <div class="city" @click="cityClick(city)">
              {{ city.cityName }}
            </div>
          </template>
        </div>
  
      <template v-for="(group,index) in groupData.cities" :key="index">
        <van-index-anchor :index="group.group" />
            <template v-for="(city,indey) in group?.cities" :key="indey">
              <van-cell :title="city.cityName" />
            </template>
      </template>
    </van-index-bar>
    </div>
    <!-- 这里是弹窗 显示经纬度 -->
    <div>
      <van-popup v-model:show="state.showCenter" round :style="{ padding: '64px' }" closeable>
        <van-watermark
    image="https://fastly.jsdelivr.net/npm/@vant/assets/vant-watermark.png"
    :gap-x="30"
    :gap-y="10"
    opacity="0.2"
  />
        <div class="city-info">
          <h2  class="tude">你好: {{state.selectedCity.cityName }}</h2>
          <span class="pinyin">{{capitalizeFirstLetter(state.selectedCity.pinYin ) }}</span>
          <div class="coordinates">
            <div><span>经度:</span> {{ state.selectedCity.longitude }}</div>
            <div><span>纬度:</span> {{state.selectedCity.latitude }}</div>
          </div>
        </div>
        <div class="color-shades">
      <div
        v-for="(shade, index) in shades"
        :key="index"
        :style="`background-color: rgb(${shade.join(',')})`"
        class="color-shade"
      >
        {{ index + 1 }}
      </div>
    </div>
      </van-popup>
    </div>
  </div>
  </template>
  
  <script setup lang="ts">
  import {computed,reactive,onMounted,ref,watch} from 'vue';
  import useCityStore from '@/store/modules/city'
  import { storeToRefs } from 'pinia';
  import { useRouter } from 'vue-router';
  const props = defineProps({
    groupData:{
      type:Object,
      default:()=>{}
    }
  })
  const router = useRouter();
  const shades = ref([]);
  const state = reactive({
    showCenter:false,
    selectedCity:{
    },
  });
  
  
  interface cities{
    city:Object
  };
  const cityStore = useCityStore();
  // const {currentCity} = storeToRefs(cityStore);
  // const {cityName,pinYin} = state.selectedCity;
  const cityClick  =(city:cities)=>{
    cityStore.currentCity = city;
    state.selectedCity=JSON.parse(JSON.stringify(city));
    state.showCenter = true;
    setTimeout(() => {
      router.push('/');
    }, 1500);
  };
  
  const generateShadesOfGreen =(numShades:number) =>{
    const baseColor = [0, 128, 0]; // RGB color values for base green color
    const stepSize = Math.floor(255 / (numShades - 1)); // Calculate the step size for each shade
  
    const shadesOfGreen = [];
  
    for (let i = 0; i < numShades; i++) {
      const shade = [
        baseColor[0] + i * stepSize,
        baseColor[1] + i * stepSize,
        baseColor[2] + i * stepSize
      ];
      shadesOfGreen.push(shade);
    }
  
    return shadesOfGreen;
  };
  
  // 当前城市 
  // const cityStore = useCityStore();
  
  
  
  const indexList = computed(()=>{
    return props.groupData.hotCities.map(item=>item.group)
  });
  /**
   *  拼音
   */
  const capitalizeFirstLetter =(str:string) =>{
    return str.replace(/\b\w/g,(match)=>match.toUpperCase())
    };
  
  
  onMounted(() => {
    shades.value = generateShadesOfGreen(10);
  });
  </script>
  
  <style lang="less" scoped>
  .cityGroup{
    --van-index-anchor-sticky-text-color:var(--primary-color);
    --van-index-bar-index-active-color:var(--primary-color);
    .list{
      display: flex;
      justify-content: space-between;
      padding: 10px;
      padding-right: 25px;
      flex-wrap: wrap;
      .city{
        width: 70px;
        height: 28px;
        border-radius: 12px;
        font-size: var(--text-color);
        color: #000;
        text-align: center;
        line-height: 28px;
        background-color: #fff4ec;
        margin: 5px 0;
      }
  }
  }
  
  
  .city-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  
    .pinyin {
      margin: 5px 0;
    }
  
    .coordinates {
      display: flex;
      justify-content: space-between;
      margin: 8px;
  
      div {
        margin-right: 20px;
      }
    }
  }
  .color-shades {
    display: flex;
  
    .color-shade {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      color: #fff;
      font-weight: bold;
    }
  }
  
  .tude{
    font-weight: 600;color: var(--primary-color);
  }
  
  </style>
  