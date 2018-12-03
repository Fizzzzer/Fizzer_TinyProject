// Pages/Map/Map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: "113.324520",
    latitude: "23.099994",
    markes: [{
      latitude: "23.099994",
      longitude: "113.324520",
      name:"Fizzer`s home",
      callout:{
        content:"这里是Fizzer的家",
        color:"#f00",
        fontSize:15,
        display:"ALWAYS"
      },
      label:{
        content:"Fizzer",
        color:"#000",
        x:4,
        y:0,
        fontSize:"12",
        borderColor:"#00f",
        borderRadius:"15",
        borderWidth:"5",
        textAlign:"center"
      },
    }],
  },


})