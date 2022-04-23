<template>
  <div class="my-container">
    <!-- 已登录 -->
    <div class="isLogin" v-if="this.$store.state.user">
      <div class="login-img">
          <div class="img-l">
            <van-image
              class="img"
              round
              :src="userInfo.photo"
            />
            <span class="text">{{userInfo.name}}</span>
          </div>
          <div class="edit">
            <van-button round size="mini">编辑资料</van-button>
          </div>
      </div>
      <div class="isLogin-bd">
        <div class="bd-item">
          <span class="number">{{userInfo.art_count}}</span>
          <span class="content">头条</span>         
        </div>
        <div class="bd-item">
          <span class="number">{{userInfo.follow_count}}</span>
          <span class="content">关注</span>         
        </div>
        <div class="bd-item">
          <span class="number">{{userInfo.fans_count}}</span>
          <span class="content">粉丝</span>         
        </div>
        <div class="bd-item">
          <span class="number">{{userInfo.like_count}}</span>
          <span class="content">获赞</span>         
        </div>
      </div>
      

    </div>
    <!-- /已登录 -->

    <!-- 未登录 -->
      <div class="not-login" v-else>
        <img 
        src="~@/assets/mobile.png"
        class="mobile-img"
        @click="$router.push('/login')"
        >
        <span class="text">注册 / 登录</span>
      </div>
    <!-- /未登录 -->

    <!-- 收藏 -->
    <div class="login-Girid">
        <van-grid :column-num="2">
          <van-grid-item class="Girid-item">
            <i slot="icon" class="icon icon-shoucang"></i>
            <span slot="text" class="text">收藏</span>
          </van-grid-item>
          <van-grid-item class="Girid-item">
            <i slot="icon" class="icon icon-lishi"></i>
            <span slot="text" class="text">历史</span>
          </van-grid-item>
        </van-grid>
    </div>
    <!-- 收藏 -->

      <div class="grid-nav">
        <van-cell title="消息通知" is-link />
        <van-cell title="实名认证" is-link />
        <van-cell title="用户反馈" is-link />
        <van-cell title="小智同学" is-link />
        <van-cell title="系统设置" is-link />
        <van-cell title="退出登录" v-if="this.$store.state.user" @click="LoginOut" class="LoginOut"/>
      </div>
    

  </div>
</template>

<script>
// import {mapState} from '@/store/index'
import {getUserInfo} from '@/api/user'
export default {
data(){
  return{
    userInfo:{}
  }
},
// computed:{
//   ...mapState(['user'])
// },
methods:{
  LoginOut(){
    this.$dialog.confirm({
      title: '标题',
      message: '弹窗内容',
    }).then(()=>{
      console.log('确定执行这里');
      this.$store.commit('setUser',null)
    }).catch(()=>{
      console.log('取消执行这里');
    })
  },
  async loadUser(){
    const res = await getUserInfo()
    // console.log(res);
    this.userInfo=res.data.data
  }

},
created(){
  if (this.$store.state.user) {
    this.loadUser()
  }
}

}
</script>

<style scoped lang="less">
.my-container{
  // 未登录
    .not-login{
      height: 316px;
      background: url("~@/assets/banner.png") no-repeat;
      background-size: cover;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      

      .mobile-img{
        width: 132px;
        height: 132px;
      }
      span.text{
        margin-top: 10px;
        font-size: 30px;
        color: #fff;
      }

    }
  // 已登录
  .isLogin{
      background: url("~@/assets/banner.png") no-repeat;
      background-size: cover;
      padding: 75px 20px 23px;
      box-sizing: border-box;
      // display: flex;
      // align-items: center;
      .login-img{
        height: 316px;
        display: flex;
        justify-content:space-between;
        align-items: center;

        width: 100%;
        .img-l{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 362px;
          .img{
            width: 150px;
            height: 150px;
            border: 4px solid #fff;
          }
          span.text{
            font-size: 30px;
            color: #fff;
            margin-left: 20px;
          }
        }
        .edit{
          display: flex;
        }

      }
      .isLogin-bd{
        display: flex;
        .bd-item{
          display: flex;
          flex: 1;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 130px;
          color: #fff;
          span.number{
            font-size: 40px;
          }
          span.content{
            font-size: 30px;
          }
        }
      }

  }

// 收藏
.login-Girid{
    .Girid-item{
      color: #000;
      i.icon-shoucang{
        color: #eb5253;
        font-size: 45px;
      }
      i.icon-lishi{
        color: #ff9d1d;
        font-size: 45px;
      }
      span.text{
        font-size: 28px;
      }
    }
}

.grid-nav{
  .LoginOut{
    margin: 20px 0 0 0;
    text-align: center;
    color: red;
  }
}

}
</style>