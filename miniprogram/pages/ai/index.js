Page({

  data: {
    SHOW_TOP: true,
  },

  onLoad: function(options) {
    // console.log("AAAAAAAAA")
    var myDate = new Date();
    var isShowed=wx.getStorageSync("tip")
    if(isShowed!=1){
      setTimeout(() => {
        this.setData({
          SHOW_TOP: false
        })
        wx.setStorageSync("tip", 1)
      }, 2 * 1000)
    }else{
      this.setData({
        SHOW_TOP: false
      })
    }
  },

  goSearch: function() {
    wx.navigateTo({
      url: '/pages/ai/search',
    })
  },
  onBindCamera: function() {
    wx.navigateTo({
      url: 'camera/camera',
    })
  },
  // onAikefu: function() {
  //   wx.navigateTo({
  //     url: '/pages/android/qa',
  //   })
  // },
  onShareAppMessage: function() {
    return {
      title: "垃圾找妈妈",
      imageUrl: "http://photogz.photo.store.qq.com/psc?/V10qaiPf0goHiV/05RlWl8gsTOH*Z17MtCBzOhIE1pcsY.geP7k4pB5jcFkda53NB0WVXb4pGmZCmlREfp5ifsYDNp7uzeO.i2ZGg!!/m&bo=OARTBjgEUwYWADA!&rf=viewer_311",
      path: "pages/ai/index"
    }
  }
})