import request from '@/services/request.js'


export const gethouseList = (currentPage) => request({
  url: '/home/houselist',
  method: 'GET',
  params: {
    page: currentPage
  }
})

