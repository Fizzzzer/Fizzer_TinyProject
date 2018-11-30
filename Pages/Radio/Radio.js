// Pages/Radio/Radio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chickItems: "Kotlin",
    items: [{
        name: 'Java',
        value: 'Java'
      },
      {
        name: 'Kotlin',
        value: 'Kotlin',
        check: 'true'
      }, {
        name: 'Python',
        value: 'Python',
      }, {
        name: 'JavaScript',
        value: 'JavaScript',
      }
    ],
  },

  radiochange(e) {
    this.setData({
      chickItems:e.detail.value
    })
  }
})