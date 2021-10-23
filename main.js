import Vue from 'vue'
import App from './App'

// vuex
import store from './store'
Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView)

import mixin from './common/mixin'
Vue.mixin(mixin)

const app = new Vue({
	store,
	...App
})

// 引入请求封装
require('./util/request/index')(app)

app.$mount()