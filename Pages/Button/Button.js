// Pages/Button/Button.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled: false,
    load: false,
    plain: false,
    type: "primary",
  },

  setBtnDisable(e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  setBtnLoad(e){
    this.setData({
      load : !this.data.load
    })
  },

  setBtnPlain(e){
    this.setData({
      plain:!this.data.plain
    })
  },

  setType(e){
    this.setData({
      type:"warn"
    })
  }
})