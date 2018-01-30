// pages/customConponent/commonConpoent.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    innerText:{
      type: String,
      value: 'default value',
      observer: function(newVal, oldVal){}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    name: "machiel"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onMyButtonTap: function(){
      this.setData({
        name: "new Name"
      })
    }
  }
})
