<template>
  <div class="searchBox">
    <div class="left">
      
    </div>
    <div class="selecttime">
      <div class="item start">
        <div class="name">住</div>
        <div class="date">{{ formatData(startDate) }}</div>
      </div>
      <div class="item end">
        <div class="name">离</div>
        <div class="date">{{ formatData(endDate) }}</div>
      </div>
    </div>
    <div class="content">
      <div class="key">关键字/位置/民宿</div>
    </div>
    <div class="right">
      <i class="icon-search"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { reactive, ref ,computed} from 'vue';
import useMainStore from '@/store/modules/main';



const formatData =(data)=>{
  const date = new Date(data);
  const month = String(date.getMonth()+1).padStart(2,'0');
  const day = String(date.getDay()+1).padStart(2,'0');
  const forMatDate = `${month}.${day}`;
  return forMatDate;
};


const mainStore = useMainStore();

const {startDate,endDate} = storeToRefs(mainStore);
console.log(startDate.value);

// const props = defineProps({
//   startDate:{
//     type:String,
//     default:'08.01',
//   },
//   endDate:{
//     type:String,
//     default:'08.02',
//   }
// })
</script>

<style lang="less" scoped>
.searchBox{
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 45px;
  // line-height: 45px;
  padding: 0 10px;
  font-size: 14px;
  color: #999;
  border-radius: 6px;
  background: #f2f4f6;

  .selecttime {
  display: flex;
  flex-direction: column;
  .item {
    display: flex;
    align-items: center;
    .date {
      margin-left: 2px;
      color: #333;
      font-size: 12px;
    }
    &.start {
      order: 1; // 将住放在第一行
    }

    &.end {
      order: 2; // 将离放在第二行
    }
  }
}


  .content{
    position: relative;
    flex: 1;
    padding: 0 6px;
    text-align: left;
    border-left: 1px solid #fff;
    .key{
      max-width: 155px;
      font-size: 12px;
    }
    .icon-cancel{
      position: absolute;
      top: 30%;
      right: 0;
      display: inline-block;
      background-image: url(../assets/img/page-home.png);
      background-position: -92px -58.5px;
      width: 14.5px;
      height: 15px;
      background-size: 125px 110px;
    }
  }
  .right{
    display: flex;
    align-items: center;
  }
  .icon-search{
    width: 24px;
    height: 24px;
    display: inline-block;
    background-image: url(../assets/img/page-home.png);
    background-position: -29px -151px;
    background-size: 207px 192px;
  }
}
</style>
