<template>
  <div id="app">
    <h1>黑马头条</h1>
    <span class="icon icon-wenda"></span>
    <div class="box" style="padding:20px"></div>
    <div>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="default">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
    name:'App',
}
</script>

<style lang="less">
.box{
  width: 300px;
  height: 200px;
  background-color: pink;
  
}
</style>
