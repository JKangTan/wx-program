// pages/MiQian/Login.js
var HTTP = require('../../utils/HTTPManager.js').HTTP;
var base = require('../../utils/base64.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:'',
    password: '',
    secureEntery: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  console.log("data=",options.phone);
  this.setData({
    phone:options.phone,
  })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  password:function(e){
    this.setData({
      password:e.detail.value,
    })
  },

  login: function(e){
    console.log(this.data.password);
    var enpwd = base.base64encode(base.utf16to8(base.pwdEncode(base.myEncode(base.base64encode(base.utf16to8(this.data.password)),base.key))));
    console.log(enpwd);
    var that = this;
    HTTP.form_post('/api/user/login', { "mobileNo": this.data.phone, "password":enpwd},
      function (responseData) {
        if (responseData.data["status"] == 1) {
         wx.showToast({
           title: '登录成功',
         })
        }else{
          wx.showToast({
            title: responseData.data["detail"],
          })
        }
      }, function () {
        console.log("失败")
      })
  },
  forgetpwd: function(e){
    wx.navigateTo({
      url: '../findpwd/findpwd' +'?phone='+this.data.phonenumber+'&type=registe',
    })
  },
  change: function(e){
    this.setData({
      secureEntery : !this.data.secureEntery
    })
  },
})