<template>
  <div class="home-container">
    <!-- 导航 -->
      <van-nav-bar class="page-nav-bar">
        <van-button
        class="search-btn"
        slot="title"
        type="info"
        size="small"
        round
        icon="search"
        >
          搜索
        </van-button>
      </van-nav-bar>
    <!-- /导航 -->

      <!-- 标签组件 -->
        <van-tabs v-model="active" animated swipeable class="channel-tabs">
          <van-tab 
          :title="value.name"
          v-for="value in channels"
          :key="value.id"
          >
            <ArticleList :channel="value"></ArticleList>
          </van-tab>
          <div slot="nav-right" class="placeholder"></div>
          <div slot="nav-right" class="hamburger-btn">
            <i class="icon icon-gengduo"></i>
          </div>
        </van-tabs>
      <!-- /标签组件 -->

  </div>
</template>

<script>
import {getUserChannels} from '@/api/user'
import ArticleList from './components/article-list.vue'
export default {
components:{
    ArticleList
  },
data() {
    return {
      active: 0,
      channels:[]
    };
  },
  methods:{
    //获取用户频道列表
    async getUserChannel(){
      try {
        const res = await getUserChannels()   
        this.channels = res.data.data.channels
      } catch (error) {
        this.$toast('获取用户频道失败')
      }
    }
  },
  created(){
    this.getUserChannel()
  }
}
</script>

<style scoped lang="less">
.home-container {
  padding-top: 92px;
  .page-nav-bar{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
      .van-nav-bar__title {
          max-width: unset!important;
        }
        .search-btn {
          width: 400px;
          height: 64px;
          background-color: #5babfb;
          border: none;
          font-size: 28px;
          .van-icon {
            font-size: 32px;
          }
        }
  }
//tbas
/deep/.channel-tabs{
  .van-tabs__content{
    padding-top: 82px;
  }
  .van-tabs__wrap{
    position: fixed;
    top: 92px;
    left: 0px;
    z-index: 99;
  }
  .van-tab{
    width: 201px;
    height: 82px;
    border-right: 1px solid #edeff3;
  }
  .van-tabs__line{
    width: 36px;
    height: 6px;
    background-color: #3296fa;
  }

  .placeholder {
  flex-shrink: 0;
  width: 66px;
  height: 82px;
}

//汉堡按钮
.hamburger-btn{
  position: fixed;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 66px;
  height: 82px;
  background-color: #fff;
  opacity: 0.902;
  i.toutiao {
    font-size: 33px;
  }
  &:before {
    content: "";
    position: absolute;
    left: 0;
    width: 1px;
    height: 100%;
    background-image: url(~@/assets/gradient-gray-line.png);
    background-size: contain;
  }
}

}


  
}
</style>