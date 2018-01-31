//index.js
//获取应用实例
const app = getApp()
var HTTP = require('../../utils/HTTPManager.js').HTTP;

Page({
  data: {
    phonenumber:'18355552509',
  },
  inputphonenumber:function(e){
    console.log(e.detail.value),
    this.setData({
      phonenumber:e.detail.value
    })
  },
  login: function(e){
      var that = this;
      HTTP.form_post('/api/user/register/check', {"mobileNo":this.data.phonenumber},
      function(responseData){
        console.log("成功", responseData.data["status"], that.data.phonenumber);
        if(responseData.data["status"] == 0){
          wx.navigateTo({
            url: '../Login/Login' + '?phone=' + that.data.phonenumber,
            
          })
        }else{
          wx.navigateTo({
            url: '../findpwd/findpwd' + '?phone=' + that.data.phonenumber+'&type=registe',
          })
        }
      },function(){
        console.log("失败")
      })
  }
})
