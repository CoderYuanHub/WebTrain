import request from '@/utils/request'
export default {
    // 获取所有数据
    getNews() {
        return request({
            method: 'get',
            url: '/news'
        })
    },
    // 分页查询
    search(page, size) {
        return request({
            method: 'get',
            url: `/news/${page}/${size}`
        })
    },
    // 根据id查询
    getById(id){
        return request({
            method:'get',
            url:`/newsitem/${id}`
        })
    }
}