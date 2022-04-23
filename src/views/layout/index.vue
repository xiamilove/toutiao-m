<template>
  <div>
      <!-- 子路由出口 -->
      <router-view></router-view>
      <!-- /子路由出口 -->

      <!-- 底部tabber -->
      <van-tabbar route class="layout-tabbar">
        <van-tabbar-item to="/home">
        <i slot="icon" class="icon icon-shouye"></i>
        <span class="text">首页</span>
      </van-tabbar-item>
        <van-tabbar-item to="/qa">
        <i slot="icon" class="icon icon-wenda"></i>
        <span class="text">问答</span>
      </van-tabbar-item>
        <van-tabbar-item to="/video">
        <i slot="icon" class="icon icon-shipin"></i>
        <span class="text">视频</span>
      </van-tabbar-item>
        <van-tabbar-item to="/my">
        <i slot="icon" class="icon icon-wode"></i>
        <span class="text">{{this.$store.state.user ? '我的':'未登录'}}</span>
      </van-tabbar-item>
      </van-tabbar>
      <!-- 底部tabber -->
  </div>
</template>

<script>
export default {
data (){
  return {
    
  }
}
}
</script>

<style scoped lang="less">
.layout-tabbar{
  i.icon{
    font-size: 40px;
  }
  span.text{
    font-size: 20px;
  }
}
</style>