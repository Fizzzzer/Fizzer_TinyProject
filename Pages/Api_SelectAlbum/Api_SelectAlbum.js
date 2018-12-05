// Pages/Api_SelectAlbum/Api_SelectAlbum.js
var sourceType;
var sizetype;
var count;
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
    pictureIndex:"8"
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
    console.log(sizetype),
    console.log(e);
  },

  countSelect(e){
    this.setData({
      pictureIndex: e.detail.value
    })
    count = this.data.pictureCounts[e.detail.value];
    console.log(count)
  }

})