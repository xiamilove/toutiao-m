import Vue from 'vue'
import Vuex from 'vuex'
// 导入封装好的本地存储方法
import { setItem, getItem } from '@/utils/storage'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // user: JSON.parse(window.localStorage.getItem('token_user'))
        user: getItem('token_user')

    },
    getters: {},
    mutations: {
        // 把token存入本地存储
        setUser(state, data) {
            state.user = data
                // localStorage只能存储字符串，所以要使用JSON.stringify
                // window.localStorage.setItem('token_user', JSON.stringify(data))
            setItem('token_user', data)
        }
    },
    actions: {},
    modules: {}
})