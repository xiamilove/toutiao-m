import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入全局样式
import './styles/index.less'

import '@/utils/dayjs'
//用来设置rem字体基准值
import 'amfe-flexible';

// 自动按需导入vant组件库
import { Button, PullRefresh, List, Tab, Tabs, Grid, GridItem, Cell, Image as VanImage, CellGroup, Tabbar, TabbarItem, Dialog, CountDown, Toast, NavBar, Form, Field } from 'vant';
Vue.use(Button);
Vue.use(PullRefresh);
Vue.use(List);
Vue.use(Dialog);
Vue.use(NavBar);
Vue.use(Form);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(VanImage);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Field);
Vue.use(CountDown);
Vue.use(Toast);
Vue.use(Tabbar);
Vue.use(TabbarItem);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')