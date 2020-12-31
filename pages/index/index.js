//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    namelist: [{
        "id": "1",
        "name": "test",
        "pagePath":"/pages/keyinfo/keyinfo"
      },
      {
        "id": "2",
        "name": "test2",
        "pagePath":"/pages/keyinfo/keyinfo"
      },
    ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {

  },

  onLoad: function () {

  },
  addKey: function () {
    wx.navigateTo({
      url: '/pages/addkey/addkey',
    })
  }
})