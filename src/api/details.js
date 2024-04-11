import request from '@/services/request.js'

// export const detailList = (data) => request({
//   url: '/detail/infos',
//   method: 'GET',
//   data
// });


export const detailList = (data) => request({
  url: '/detail/infos',
  method: 'GET',
  params: data
})