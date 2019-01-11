const app = getApp();

Page({

  data: {
    longitude: "",
    latitude: "",
    //红点小图标
    controls: [{
        iconPath: '/images/pin.png',
        position: {
          left: (app.globalData.windowWidth / 2) - 11,
          top: ((app.globalData.windowHeight - 60) / 2) - 31,
          width: 22,
          height: 31
        }
      },
      {
        id: 1,
        iconPath: '/images/center.png',
        position: {
          left: 25,
          top: (app.globalData.windowHeight - 125),
          width: 30,
          height: 30,
        },
        clickable: true
      }
    ]

  },

  onShow() {
    this.getLocation();
  },

  //点击回到中心位置
  onReady() {
    this.mapCtx = wx.createMapContext('map');
  },

  //获取当前地理位置
  getLocation() {
    wx.getLocation({
      type: 'gcj02',
      success: this.handleGetLocationSucc.bind(this)
    })
  },
  handleGetLocationSucc(res) {
    this.setData({
      longitude: res.longitude,
      latitude: res.latitude

    })

  },

  controltap() {
    this.mapCtx.moveToLocation();
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
  },

})