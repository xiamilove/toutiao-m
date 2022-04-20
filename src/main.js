import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入全局样式
import './styles/index.less'

//用来设置rem字体基准值
import 'amfe-flexible';

// 自动按需导入vant组件库
import { Button } from 'vant';
Vue.use(Button);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')