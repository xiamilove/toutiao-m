<template>
  <div class="article-list">
      <van-pull-refresh 
      v-model="refreshing"
      @refresh="onRefresh"
      success-duration="1000"
      success-text="刷新成功"
      >
        <van-list
            v-model="loading"
            :error.sync="error"
            error-text="请求失败，点击重新加载"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            >

            <ArticleItem
            v-for="(value,index) in list" 
            :key="index" 
            :article="value"
            ></ArticleItem>

        </van-list>
      </van-pull-refresh>
        
  </div>
</template>

<script>
import {getArticles} from '@/api/article'
import ArticleItem from '@/components/article-item'
export default {
components:{
    ArticleItem
},
props:{
    channel:{
        type:Object,
        require:true
    }
},
data(){
    return{
        list: [],
        refreshing: false,
        error: false,
        loading: false,
        finished: false,
        timestamp:null
    }
},
methods:{
    async onRefresh(){
        try {
            const {data} = await getArticles({
                channel_id: this.channel.id,
                timestamp: this.timestamp || Date.now()
            })
            // 2. 将数据追加到列表的顶部
            const { results } = data.data
            this.list.unshift(...results)
            // 3. 关闭下拉刷新的 loading 状态
            this.refreshing =false
        } catch (error) {
            this.refreshing =false
            this.$toast('刷新失败')
        }
    },
    async onLoad() {
        try {
            
        const { data } = await getArticles({
          channel_id: this.channel.id,
          timestamp: this.timestamp || Date.now()// 时间戳，请求新的推荐数据传当前的时间戳，请求历史推荐传指定的时间戳
        })
            // 把数据添加到list中
            const {results} = data.data
            this.list.push(...results)
            // 3. 设置本次加载中 loading 状态结束
            this.loading = false
             // 4. 判断数据是否加载结束
             if(results.length){
                 this.timestamp = data.data.pre_timestamp
             }else{
                 this.finished=true
             }
        } catch (error) {
            console.log('获取失败',error);
            this.error=true
            this.loading = false // 关闭 loading 效果
        }

        
     
    },
  },

}
</script>

<style scoped lang="less">
.van-list{
    height: 80vh;
    overflow-y: auto;
}
</style>