import request from '@/common/request.js'
import { formatGetUri } from '@/common/util.js'

const api = {}
// 获取轮播列表
const banner = 'banner'

api.selectList = params => request.globalRequest(`${banner}/selectList`, 'GET')
export default api