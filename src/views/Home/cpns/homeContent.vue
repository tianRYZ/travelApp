<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="item in state.homehouseList" :key="item.data.houseId">
        <div class="item">
          <div class="half-width">
            <houseZ1 v-if="item.discoveryContentType === 9" :item-data="item.data"></houseZ1>
            <houseZ2 v-else :item-data="item.data"></houseZ2>
          </div>
        </div>
      </template>
    </div>
    <button @click="moreData">点我</button>
  </div>
</template>

<script setup lang="ts">
import { gethouseList } from '@/api/home';
import { reactive, onMounted } from 'vue';
import houseZ1 from '@/components/housez1.vue';
import houseZ2 from '@/components/housez2.vue';

const state = reactive({
  homehouseList: [], 
});

let currentPage = 1;
const moreData = () => {
  currentPage++;
  homeList1(currentPage);
};

const homeList1 = async (currentPage) => {
  const res = await gethouseList(currentPage);
  state.homehouseList.push(...res.data);
};

homeList1(currentPage);

</script>

<style scoped>
/* .content {
  padding: 10px 8px;
  padding-bottom: 50px;

}

.item {
  display: flex;
  justify-content: space-between;
} */
  /* padding: 10px 8px 60px 8px; */
  .content {
  padding: 10px 8px;

  .title {
    font-size: 22px;
    padding: 10px;
  }
}

.items {
  display: flex;
  justify-content: space-between;
}

.homeContent {
  padding: 10px 8px;

  .title {
    font-family: PingFangSC-Medium;
    font-size: 18px;
    color: #333;
    line-height: 22px;
    padding: 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .item {
      width: calc(50% - 5px);
      margin-bottom: 10px;
    }

    .half-width {
      width: 100%;
    }
  }
}


</style>
