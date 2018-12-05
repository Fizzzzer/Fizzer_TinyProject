// Pages/Api/Api.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  navToAlbum(e){
    wx.navigateTo({
      url: '/Pages/Api_SelectAlbum/Api_SelectAlbum',
    })
  }
})