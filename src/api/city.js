import request from '@/services/request.js'

// export const cityList = (data) => {
//   return request({
//     url: '/city/all',
//     method: 'GET',
//     data
//   })
// }

export const cityList = (data) => request({
  url: '/city/all',
  method: 'GET',
  data
});


export const hotSugger = (data) => request({
  url: '/home/hotSuggests',
  method: 'GET',
  data
})


export const houseList = (data) => request({
  url: '/home/Categories',
  method: 'GET',
  data
})


/***
 * 接口文档
 *
 * 1. 热门建议     /home/hotSuggests
 *
 * 2. 推荐类别    /home/Categories
 *
 * 3. 房屋列表    /home/houselist?page=1
 *
 * 4. 所有城市   /city/all
 *
 * 5. 详情    /detail/infos?houseId
 *
 * 6. 收藏列表   /favor/list
 *
 * 7. 浏览历史   /favor/history
 *
 * 8. 订单列表  /order/list?type=pend   type=pend 未完成的订单  type=recent 最近订单 type=all 全部订单
 *
 * 9. 搜索顶部  /search/top
 *
 * 10. 搜索结果   /search/result
 *
 * 在线链接
 * https://documenter.getpostman.com/view/12387168/UzXPxcSi
 */

// var requestOPtions = {
//   method: 'GET',
//   redirect: 'follow'
// };

// fetch('http://codercba.com:1888/api/home/hotSuggests', requestOPtions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));