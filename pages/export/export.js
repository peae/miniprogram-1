// pages/export/export.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        string_keys: '',


    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        
        let that = this;
        wx.setNavigationBarTitle({
          title: '格式化导出',
        });

        wx.getStorage({
            key: 'anyingkey',
            success(res){
                that.setData({
                    string_keys: JSON.stringify(res.data),

                })
            },
            fail(res){
                that.setData({
                    string_keys: '当前列表为空',

                })
            }
        })

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})