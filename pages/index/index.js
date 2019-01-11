Page({

  data:{
    longitude:"",
    latitude:""

  },

  onShow (){
    this.getLocation();
  },
  getLocation(){
    wx.getLocation({
      type: 'gcj02',
      success: this.handleGetLocationSucc.bind(this)
    })
  },
  handleGetLocationSucc(res){
    this.setData({
      longitude:res.longitude,
      latitude: res.latitude

    })

  },


  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '萌宠交易平台',
      path: '/pages/index/index'
    }
  }
})