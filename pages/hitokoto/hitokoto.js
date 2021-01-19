// pages/hitokoto/hitokoto.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        content: ["loading..."]

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getHitokotoInfo();
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
        this.getHitokotoInfo();
        wx.stopPullDownRefresh();
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

    },

    getHitokotoInfo: function () {
        var that = this;
        wx.request({
            url: 'https://v1.hitokoto.cn/?c=a',
            success: function (res) {
                if (res.statusCode === 200) {
                    console.log(res.data.hitokoto, res.data.from);
                    // 转为字符串列表，或原生html字符串
                    // ，。、, . ? ？!！
                    var that_content = new Array();
                    that_content = [res.data.hitokoto, "——", res.data.from]
                    that.setData({
                        content: that_content,
                    });


                }
            },
            fail: function (res) {
                wx.showToast({
                    title: '系统错误',
                    icon: 'none',
                })
            }
        })
    },
})