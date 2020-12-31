// pages/settings/settings.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        dialogShow: false,
        buttons: [{
            text: '取消'
        }, {
            text: '确定'
        }],
        settings: [{
                "icon": "share",
                "title": "格式化导出",
                "desc": "",
                "url": "",
                "pagePath": "/pages/export/export",
            },
            {
                "icon": "/assets/icons/",
                "title": "格式化导入",
                "desc": "",
                "url": "",
                "pagePath": "/pages/import/import",
            },
        ],
        others: [{
                "icon": "",
                "title": "清空数据",
                "desc": "清空所有数据",
                "url": "",
                "page": "",
            },

        ],
        more: [{
            "icon": "",
            "title": "查看每日一言",
            "desc": "",
            "url": "",
            "pagePath": "/pages/hitokoto/hitokoto",
        }, ]
    },

    clearData: function () {
        this.setData({
            dialogShow: true
        })
    },
    tapDialogButton(e) {
        this.setData({
            dialogShow: false,

        })
    },

    pageTo: function (event) {
        let pagePath = event.getDataset.pagePath;
        console.log(pagePath);
        wx.navigateTo({
            url: pagePath,
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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