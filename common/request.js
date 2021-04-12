let urlConfig = "http://47.114.145.129:8083/teaHouse/v2/api-docs/"

const request = {}
const headers = {}
    
request.globalRequest = (url, method, data, power) => {
/*     权限判断 因为有的接口请求头可能需要添加的参数不一样，所以这里做了区分
    1 == 不通过access_token校验的接口
    2 == 文件下载接口列表
    3 == 验证码登录 */
        
    switch (power){
        case 1:
            headers['content-type'] = 'application/json';
			headers['X-Access-Token'] = 'X-Access-Token';
            break;
        case 2:
            headers['X-Access-Token'] = 'X-Access-Token';
            break;
        case 3:
            responseType = 'blob'
            break;
        default:
            headers['X-Access-Token'] = 'X-Access-Token';
            break;
    }
            
    return uni.request({
        url: urlConfig + url,
        method,
        data: data,
        dataType: 'json',
        header: headers
    }).then(res => {
        if (res[1].data.status && res[1].data.code == 200) {
            return res[1]
        } else {
            throw res[1].data
        }
    }).catch(parmas => {
　　　　　　switch (parmas.code) {
　　　　　　　　case 401:
　　　　　　　　　　uni.clearStorageSync()
　　　　　　　　　　break
　　　　　　　　default:
　　　　　　　　　　uni.showToast({
　　　　　　　　　　　　title: parmas.message,
　　　　　　　　　　　　icon: 'none'
　　　　　　　　　　})
　　　　　　　　　　return Promise.reject()
　　　　　　　　　　break
　　　　　　}

　　})
 }
 export default request