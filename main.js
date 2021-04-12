import Vue from 'vue'
import App from './App'

import request from './common/request.js'
import api from './api/index.js'

Vue.config.productionTip = false

Vue.prototype.$request = request
Vue.prototype.$api = api

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
