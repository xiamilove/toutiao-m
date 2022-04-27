<template>
  <div>
      <van-cell 
        class="article-item"
      >
      <!-- 左边容器 -->
    <div class="article-conter">
        <div class="title van-multi-ellipsis--l2" slot="title">{{article.title}}</div>

        <div class="lable" slot="label">
        <!-- 二张图片 -->
        <div class="lable-img-warp" v-if="article.cover.type == 3 ? true : false">
            <van-image
            class="lable-img"
            v-for="(img,index) in article.cover.images"
            :key="index"
            fit="cover"
            :src="img"
           />
        </div>
        <!-- /二张图片 -->
          <span>{{article.aut_name}}</span>
          <span>{{article.comm_count}}评论</span>
          <span>{{article.pubdate | relativeTime}}</span>
      </div>
    </div>
    <!-- /左边容器 -->
     
      <!-- 一张图片 -->
      <div 
      class="right-icon" 
      slot="right-icon"
      v-if="article.cover.type == 1 ? true : false"
      >
          <van-image
            class="right-img"
            fit="cover"
            :src="article.cover.images[0]"
           />
      </div>
      <!-- /一张图片 -->

      </van-cell>
  </div>
</template>

<script>
export default {
props:{
    article:{
        type:Object,
        required:true
    }
},
data(){
    return{
        
    }
}
}
</script>

<style scoped lang="less">
.article-item{
    display: flex;
    border-bottom: 1px solid #ddd;
    /deep/.article-conter{
        flex: 1;
        .title{
                font-size: 32px;
                color: #3a3a3a;
            }
        .lable{
            .lable-img-warp{
                display: flex;
                .lable-img{
                    flex: 1;
                    width: 230px;
                    height: 135px;
                    margin: 20px 7px;
                }
            }
        }
        span{
            font-size: 22px;
            color: #b4b4b4;
            margin-right: 20px;
        }
    }
    

    .right-icon{
        margin-left: 20px;
        width: 230px;
        height: 135px;
        .right-img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>