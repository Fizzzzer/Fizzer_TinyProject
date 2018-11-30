// Pages/Picker/Picker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:0,
    items:["Java","Kotlin","Python"],
    time:"00:00",
    date: "2018-11-30",
    region:"北京",
  },
  //普通选择器
  commonPicker(e){
    this.setData({
      index:e.detail.value
    })
  },
  pickeTime(e){
    this.setData({
      time: e.detail.value
    })
  },

  pickeDate(e){
    this.setData({
      date:e.detail.value
    })
  },

  pickeregion(e){
    this.setData({
      region:e.detail.value[0] + e.detail.value[1] + e.detail.value[2]
    })
  }
  
})