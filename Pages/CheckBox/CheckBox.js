Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
        value: "Java",
        name: "Java"
      },
      {
        value: "Kotlin",
        name: "Kotlin",
        checked:"true",
      },
      {
        value: "Python",
        name: "Python"
      },
      {
        value: "Go",
        name: "Go"
      },
      {
        value: "Ruby",
        name: "Ruby"
      },
    ]
  },

  checkChange(e){
    console.log(e)
  }

})