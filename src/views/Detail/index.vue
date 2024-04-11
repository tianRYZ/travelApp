<template>
  <div class="detail top-page" ref="detailRef">
    <TabControl v-if="showTabControl" class="tabs" ref="tabControlRef" :titles="titles" @tabItemClick="tabClick" />
    <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickLeft" />
    <div class="main" v-if="mainPort" v-memo="[mainPort]">
      <DetailSwipe name="概览" :ref="getSectionRef" :swipe-data="mainPort.topModule.housePicture.housePics" />
      <DetailInfo :top-infos="mainPort.topModule" />
      <Detailfacility name="设施" :ref="getSectionRef"
        :house-facility="mainPort.dynamicModule.facilityModule.houseFacility" />
      <DetailLandord name="房东" :ref="getSectionRef" :landord="mainPort.dynamicModule.landlordModule" />
      <DetailComment name="点评" :ref="getSectionRef" :comments="mainPort.dynamicModule.commentModule" />
      <DetailNotices name="须知" :ref="getSectionRef" :notices="mainPort.dynamicModule.rulesModule" />
      <DetailMap name="周边" :ref="getSectionRef" :mapdata="mainPort.dynamicModule.positionModule" />
      <DetailIntro :price-intro="mainPort.introductionModule" />
    </div>
    <div class="footer">
      <img src="../../assets/img/tq-ensure-icon.png" alt="" />
      <div class="text">蓉城旅途，永无止境</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { detailList } from '@/api/details'
// import detailsStore from '@/store/modules/details'
// const detailStore = detailsStore();
import TabControl from '@/components/tabControl/tab-control.vue'
import DetailSwipe from './cpns/swiple.vue'
import DetailInfo from './cpns/infos.vue'
import Detailfacility from './cpns/facility.vue'
import DetailLandord from './cpns/landlord.vue'
import DetailComment from './cpns/comment.vue'
import DetailNotices from './cpns/notice.vue'
import DetailMap from './cpns/map.vue'
import DetailIntro from './cpns/intro.vue'
import useScroll from '@/hooks/useScroll'
const route = useRoute();
const router = useRouter();
const detailRef = ref();
const detailInfos = ref({});
const tabControlRef  = ref();
const mainPort = computed(() => detailInfos.value.mainPart)
detailList({ houseId: route.params.id }).then((res) => {
  detailInfos.value = res.data;
}).catch((err) => {
  console.log(err);
});

const onClickLeft = () => {
  router.back();
}

const { scrollTop } = useScroll(detailRef)
const showTabControl = computed(() => {
  return scrollTop.value > 300;
})

const sectionEls = ref({})
const getSectionRef = (value) => {
  if (!value) return;
  const name = value.$el.getAttribute('name');
  sectionEls.value[name] = value.$el
  // const sectionEls = [];
  // sectionEls.push(value.$el)
  // console.log(value.$el.getAttribute('name'),'--');
}


const titles = computed(() => {
  return Object.keys(sectionEls.value)
})

let isClick = false;
let currentDistance = -1;
const tabClick = (index) => {
  console.log('diani', index);
  const key = Object.keys(sectionEls.value)[index];
  const el = sectionEls.value[key];
  console.log(key, 'sectionEls', sectionEls.value, 'el', el);
  let instance = el.offsetTop
  if (index !== 0) {
    instance = instance - 44
  }
  isClick = true;
  currentDistance = instance
  detailRef.value.scrollTo({
    // top:(index+1)*300,
    // top:sectionEls[index].offsetTop - 44,
    top: instance,
    behavior: 'smooth'
  })
}


// 滚动时匹配页面tabControl对于的索引 
watch(
  () => scrollTop.value,
  () => {
    if(scrollTop.value ===currentDistance ){
      isClick = false
    }
    if(isClick) return;
    const ele = Object.values(sectionEls.value);
    const values = ele.map(el => el.offsetTop);
    let index = values.length - 1;
    for (let i = 0; i < values.length; i++) {
      if (values[i] >= scrollTop.value+44) {
        index = i - 1;
        break;
      }
    }
    console.log(index,'当前的索引');
    tabControlRef.value?.setCurrentIndex(index)
  },
  {
    immediate: true,
    deep: true
  }
)
// VUE中 如果6个都绑定了ref函数 则 我每次滚动的时候都会去调用触发该函数 
</script>

<style lang="less" scoped>
.detail {
  background: #f1f3f5;

  .tabs {
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
  }

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120px;

    img {
      width: 123px;
    }

    .text {
      margin-top: 12px;
      font-size: 12px;
      color: #7688a7;
    }
  }
}
</style>
