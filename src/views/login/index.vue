<template>
  <div class="login-container">
      <!-- 头部标题 -->
      <van-nav-bar class="page-nav-bar" title="标题"/>
      <!-- 登陆页面 -->
      <van-form @submit="onSubmit" ref="loginForm">
        <van-field
          v-model="user.mobile"
          type="number"
          name="mobile"
          :rules="userFormRules.mobile"
          maxlength="11"
          placeholder="请输入手机号"
        >
        <i slot="left-icon" class="icon icon-shouji"></i>
        </van-field>
      
        <van-field
          v-model="user.code"
          name="code"
          :rules="userFormRules.code"
          placeholder="请输入验证码"
        >
        <i slot="left-icon" class="icon icon-yanzhengma"></i>
        
        <template #button>
          <van-count-down
          ref="countDown"
          v-if="isCountDownShow"
          millisecond
          :time="1000 * 60"
          :auto-start="true"
          format="ss s"
          @finish="isCountDownShow=false"
          
        />
            <van-button v-else  @click="onSendSms" native-type="button" class="send-sms-btn" round size="small" type="primary">发送验证码</van-button>
        </template>
        </van-field>
        <div class="login-btn-wrap">
          <van-button class="login-btn" @click="onLogin"  block type="info" native-type="submit">登录</van-button>
        </div>
      </van-form>
      
  </div>
</template>

<script>
// 导入封装好的路由请求
import {login,getSmsCode} from '../../api/user'
export default {
name:'LoginPage',
data () {
    return {
        isCountDownShow:false,
        user:{
            mobile:'13911111111',
            code:'246810'
        },
        userFormRules:{
          mobile:[{
            required:true,
            message:'手机号不能为空'
          },{
            pattern: /^1[3|5|7|8]\d{9}$/,
            message:'手机号格式错误'
          }],
          code:[{
            required:true,
            message:'验证码不能为空'
          },{
            pattern: /^\d{6}$/,
            message: '验证码格式错误'
          }]

        }

    }
},
methods:{
  async onSubmit(){
    const user = this.user;
    // 登录加载
    this.$toast.loading({
      duration: 0, // 持续展示 toast
      message:'登录中...',
      forbidclick:true,
      
      
    })
    try {
      const res = await login(user)
      this.$toast.success('登陆成功')
      
    } catch (err) {
      if (err.response.status === 400) {
          this.$toast.fail('手机号或验证码错误')
        } else {
          this.$toast.fail('登录失败，请稍后重试')
        }
    }
  },
  async onLogin(){
    // 登录加载
    this.$toast.loading({
      duration: 0, // 持续展示 toast
      message:'登录中...',
      forbidclick:true,
      
      
    })
    try {
      const res = await login(this.user)
      this.$toast.success('登陆成功')
      console.log(res);
      this.$store.commit('setUser',res.data.data)
    } catch (err) {
      this.$toast.success('登陆失败')

    }
  },
  async onSendSms(){
    // console.log('onSendSms');
    //校验手机号
    try {
      await this.$refs.loginForm.validate('mobile')
    } catch (error) {
      return console.log('验证失败',error);
    }
    // 验证通过显示倒计时
    this.isCountDownShow=true;
    // 请求发送验证码
    try {
      const res = await getSmsCode(this.user.mobile)
      this.$toast('发送成功')
    } catch (error) {
      this.isCountDownShow=false;
      if(error.response.status==429){
        this.$toast('发送太频繁了，请稍后再试')
      }else{
        this.$toast('发生错误，请稍后再试')
      }
    }

  },


}

}
</script>

<style scoped lang="less">
.login-container {
  .icon {
    font-size: 37px;
  }
  .send-sms-btn {
    width: 160px;
    height: 50px;
    line-height: 50px;
    background-color: #ededed;
    font-size: 22px;
    color: #666;
    border: 0;
  }
  .login-btn-wrap {
    padding: 53px 33px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
    }
  }
}
</style>