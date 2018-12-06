// Pages/Api_SelectAlbum/Api_SelectAlbum.js
var sourceType;
var sizetype;
var count;
var imageSrc;
Page({

  /**
   * 页面的初始数据
   */

  data: {
    selectAlbums: [{
      value: "album",
      name: "相册"
    }, {
      value: "camera",
      name: "相机"
    }],
    selectAlbumsIndex: "0",

    compress:[{
      value:"original",
      name:"原图",
    },{
        value:"compressed",
        name:"压缩图"
    }],
    compressIndex: "0",

    pictureCounts: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    pictureIndex:"8",
    currentSelect : "0",
    totalSelect: "9",
    imageSrc:[],
  },

  albumSlect(e) {
    sourceType = this.data.selectAlbums[e.detail.value].value;
    this.setData({
      selectAlbumsIndex:e.detail.value,
    })
  },

  compressChange(e){
    sizetype = this.data.compress[e.detail.value].value;
    this.setData({
      compressIndex: e.detail.value,
    })
  },

  countSelect(e){
    count = this.data.pictureCounts[e.detail.value];
    this.setData({
      pictureIndex: e.detail.value,
      totalSelect : count,
    })
  },

  chooseImg(e){
    wx.chooseImage({
      count:5,
      sizeType: ["original"],
      sourceType: ["album"],
      success: function(res) {
        this.setData({
          imageSrc:res.tempFilePaths,
        })
        imageSrc = res.tempFilePaths;
      },
    })
  }

})
