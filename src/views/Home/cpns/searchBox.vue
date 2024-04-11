<template>
  <div class="searchBox">
    <div class="location" @click="positionOnClick">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position">
        <div class="text">我的位置</div>
        <img :src="PosIcon" alt="" />
      </div>
    </div>
    <!-- 日期范围 -->
    <div class="section date-range bottom-gray-line" @click="state.show = true">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ forMatDate(state.startDate) }}</span>
        </div>
      </div>
      <div class="stay">共{{ state.dayss == null ? '1' : state.dayss }}晚</div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{ forMatDate(state.endDate) }}</span>
        </div>
      </div>
    </div>

    <van-calendar v-model:show="state.show" color="#43e97b" :show-confirm="false" :round="false" type="range"
      :formatter="formatter" @confirm="onConfrim" />

    <!-- 价格人数 -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="section">关键字/位置/民宿名</div>
    <!-- 热门建议 -->
    <div class="section hotsugger">
      <template v-for="(item, index) in hotData" :key="index">
        <div class="item" :style="{ color: item.tagText.color, background: item.tagText.background.color }">
          {{ item.tagText.text }}
        </div>
      </template>
    </div>

    <!-- button -->
    <div class="section search-btn">
      <div class="btn" @click="GoSearch">开始搜索</div>
      <div class="desc">
        <span class="text">蓉城印象服务由tinaer独家提供</span>
      </div>
    </div>
    
    <!-- <van-button round  type="success" style="width: 375px;height: 38px;text-align: center;">开始搜索</van-button> -->

</div>
</template>

<script setup lang="ts">
import PosIcon from '@/assets/img/positionIcon.png';
import { useRouter } from 'vue-router'
import useCityStore from '@/store/modules/city'
import { storeToRefs } from 'pinia';
import { reactive, ref ,computed} from 'vue';
import useMainStore from '@/store/modules/main';
const router = useRouter();

const props = defineProps({
  hotData: {
    type: Array,
    default: () => { }
  }
});


const cityStore = useCityStore();
const { currentCity } = storeToRefs(cityStore);
const cityClick = () => {
  router.push('/city')
}
const mainStore = useMainStore();
const {startDate,endDate} = storeToRefs(mainStore);

// const nowDate = new Date();
// const nextDate = new Date(nowDate.getTime() + 24 * 60 * 60 * 1000);

const state = reactive({
  startDate: startDate,
  endDate: endDate,
  show: false,
  dayss: null,
})

const onConfrim = (value) => {
  console.log(value);
  state.startDate = value[0];
  state.endDate = value[1];
  state.show = false;
  state.dayss = formatDay(state.startDate, state.endDate);
};
const formatter = (day: any) => {
  const month = day.date.getMonth() + 1;
  const date = day.date.getDate();

  if (month === 5) {
    if (date === 1) {
      day.topInfo = '劳动节';
    } else if (date === 4) {
      day.topInfo = '青年节';
    } else if (date === 11) {
      day.text = '今天';
    }
  } else if (month === 7) {
    if (date === 1) {
      day.topInfo = 'happy';
    } else if (date === 2) {
      day.topInfo = '我爱你';
    } else if (date === 7) {
      day.topInfo = '大暑';
    }
  }

  if (day.type === 'start') {
    day.bottomInfo = '入住';
  } else if (day.type === 'end') {
    day.bottomInfo = '离店';
  }

  return day;
};
//  将当前时间转换为对应的时间 
const forMatDate = (dateString: any) => {
  if (!dateString || dateString === '' || isNaN(Date.parse(dateString))) {
    return null;
  };

  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${month}月${day}日`
}
forMatDate();


const formatDay = (startDay: string, endDay: string): number => {
  const oneDay = 24 * 60 * 60 * 1000; // 一天的毫秒数
  const start = new Date(startDay);
  const end = new Date(endDay);
  const diffInTime = Math.abs(end.getTime() - start.getTime());
  const diffInDays = Math.round(diffInTime / oneDay);
  return diffInDays;
};
formatDay();

const positionOnClick = () => {
  navigator.geolocation.getCurrentPosition(res => {
    console.log('获取位置成功', res);
  }, err => {
    console.log('获取位置失败', err);
  }, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  })
};


const GoSearch =()=>{
  router.push('/search');
cityStore.searchObj = {
   startDate:forMatDate(state.startDate),
    endDate:forMatDate(state.endDate),
    city:currentCity
}
  // 传参
  // let SearchKey ={
  //   startDate:forMatDate(state.startDate),
  //   endDate:forMatDate(state.endDate),
  //   city:currentCity.cityName,
  // };
}
</script>

<style lang="less" scoped>
.searchBox {
  --van-calendar-popup-height: 100%;
}

.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
    color: #333;
    font-size: 15px;
  }

  .position {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 74px;

    .text {
      font-size: 14px;
      color: #666;

    }

    img {
      width: 18px;
      height: 18px;
    }
  }
}

.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  height: 44px;

  .start {
    display: flex;
    flex: 1;
    height: 44px;
    align-items: center;
  }

  .end {
    min-width: 30%;
    padding-left: 20px;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}

.date-range {
  height: 44px;

  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
}

.price-counter {
  .start {
    border-right: 1px solid #f8f9f9;
  }
}

.hotsugger {
  margin: 10px 0;
height: auto;
  .item {
    padding: 4px 8px;
    border-radius: 3px;
    margin: 4px;
    font-size: 12px;
    line-height: 1;
  }
}

.search-btn{
  .btn{
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image:var(--theme-linear-gradient);
  }
  .desc{
    overflow: hidden;
    margin: 8px auto;
  }
  .text{
    text-align: center;
    font-size: 9px;
    line-height: 13px;
    color: #ccc;
    padding-top: 8px;
  }
}
</style>
