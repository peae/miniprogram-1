//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    anyingnull: true,
    namelist: [
      // {
      //   "id": "1",
      //   "name": "test",
      //   "pagePath": "/pages/keyinfo/keyinfo"
      // },
      // {
      //   "id": "2",
      //   "name": "test2",
      //   "pagePath": "/pages/keyinfo/keyinfo"
      // },
    ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.getKeyNameList();
    wx.stopPullDownRefresh();
  },



  /**
   * 首页获取key列表
   */
  getKeyNameList() {
    var that = this;
    let formDataList;
    wx.getStorage({
      key: 'anyingkey',
      success(res) {
        that.data.anyingnull = true;
        formDataList = res.data;

        var names = Array();
        // return formDataList;
        console.log(formDataList);
        formDataList.forEach(item => {
          console.log(item.name);
          // let names;
          // names = {
          //   name: item.name
          // };
          
          names.push(item.name);
          console.log(names);
          wx.setStorage({
            data: names,
            key: 'anyingnames',
          })
          // that.data.namelist.push(item.name);
          // console.log(that.data.namelist);
          // return that.data.namelist;
        });
        that.setData({
          namelist: names
        })
        console.log("=====当年列表为");
        console.log(that.data.namelist);
      },
      fail(res) {
        that.data.anyingnull = false;

        // wx.getStorageSync({
        //   key: 'anyingnames',
        //   success(res){
        //     console.log(res.data);
        //     if(res.data === null){
        //       that.data.namelist = []
        //     }
        //   },
        //   fail(res){
        //     that.data.namelist = [];
        //   }
        // })

        that.setData({
          namelist:[]
        })

        wx.showToast({
          title: '当前列表为空',
          duration: 1000
        });
        console.log(that.data.namelist);
      },
    })




  },


  onLoad: function () {
    this.getKeyNameList();
    // let nameList = this.getKeyNameList();
    // this.setData({
    //   namelist: nameList,
    // })
    
  },

  onShow: function () {
    this.getKeyNameList();
  },

  onReady: function () {
    this.getKeyNameList();
  },

  addKey: function () {
    wx.navigateTo({
      url: '/pages/addkey/addkey',
    })
  }
})