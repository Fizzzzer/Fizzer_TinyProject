Page({
  navToCheckBox(e){
    wx.navigateTo({
      url: '/Pages/CheckBox/CheckBox',
    })
  },
  navToButton(e){
    wx.navigateTo({
      url: '/Pages/Button/Button',
    })
  },

  navToInput(e){
    wx.navigateTo({
      url: '/Pages/Input/Input',
    })
  },

  navToPicker(e){
    wx.navigateTo({
      url:"/Pages/Picker/Picker",
    })
  },

  navToRadio(e){
    wx.navigateTo({
      url: '/Pages/Radio/Radio',
    })
  },
  navToMedia(e){
    wx.navigateTo({
      url: '/Pages/Media/Media',
    })
  },

  navToView(e){
    wx.navigateTo({
      url: '/Pages/View/View',
    })
  },
  navToMap(e){
    wx.navigateTo({
      url: '/Pages/Map/Map',
    })
  }
})
