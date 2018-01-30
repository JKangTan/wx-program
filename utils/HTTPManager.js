var base_url = 'https://betaapp.ctmiqian.com'
var HTTP = {
  post: function (url, requestData, success, error) {
    wx.request({
      url: base_url + url,
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      data: requestData,
      success: function (responseData) {
        if (responseData.statusCode == 200) {
          success(responseData);
        } else {
          //TODO
          error();
        }
      }
    })
  },
  form_post:function(url, requestData, success, error){
    console.log(base_url+url,requestData);
    wx.request({
      url: base_url + url,
      header: {
      'content-type':'application/x-www-form-urlencoded'
      },
      method: 'POST',
      data: requestData,
      success: function (responseData) {
        if (responseData.statusCode == 200) {
          success(responseData);
        } else {
          //TODO
          error();
        }
      },
      // complete: function(result){
      //   console.log(result);
      // }
    })
  },
   get: function (url, requestData, success, error) {
    wx.request({
      url: base_url + url,
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      data: requestData,
      success: function (responseData) {
        if (responseData.statusCode == 200) {
          success(responseData);
        } else {
          //TODO
          error();
        }
      }
    })
  },
}
module.exports = {
  HTTP: HTTP,
}