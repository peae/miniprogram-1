// pages/addkey/addkey.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        formData: {
            "name": "",
            "account": "",
            "password": "",
            "password2": "",
            "url": "",
            "note": "",
            "extra": [{
                "name": "",
                "content": ""
            }]
        },
        formDataList: [],

        // formData: {

        // },

        // digitsCodes: [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],
        digitsCodes: ['6', '7', '8', '9', '10', '11', '12'],
        digitsCodeIndex: 0,
        pwdigits: 6,

    },

    /**
     * 组件的方法列表
     */
    methods: {

        /**
         * 表单输入改变时
         * @param {e} e 
         */
        formInputChange(e) {
            const {
                field
            } = e.currentTarget.dataset
            this.setData({
                [`formData.${field}`]: e.detail.value
            })
        },

        // nameInputChange(e) {
        //     let name = e.detail.value;
        //     console.log(name);
        //     this.setData({
        //         [`formData.name`]: name,
        //     })
        // },

        /**
         * 提交表单并保存
         * @param {e} e 
         */
        submitForm(e) {
            var that = this;
            // console.log(that.data.formData);
            let formData = that.data.formData;
            // let formDataList = that.data.formDataList;
            // formDataList.push(formData);


            let anYingList = new Array();
            // 获取存储
            wx.getStorage({
                key: 'anyingkey',
                success(res) {
                    // console.log(res.data);
                    anYingList = res.data;
                    anYingList.push(formData);
                    // console.log(anYingList);
                    let names = new Array();
                    anYingList.forEach(element => {
                        names.push(element.name);
                    });
                    console.log("======");
                    console.log("names");
                    console.log(names);
                    wx.setStorage({
                        data: anYingList,
                        key: 'anyingkey',
                    });
                    wx.setStorage({
                        key:"names",
                        data:names
                    })
                },
                fail(res) {
                    that.data.formDataList.push(formData);
                    wx.setStorage({
                        data: that.data.formDataList,
                        key: 'anyingkey',
                    });
                }
            })
            // 如果有anyingkey,则取出，把formData push到anyingkay里
            // 如果没有anyingkey,则setStroage一个

            // console.log(formDataList);

            // wx.setStorage({
            //     data: formDataList,
            //     key: 'anyingkey',
            // });


            // wx.getStorage({
            //     key: 'anyingkey',
            //     success(res) {
            //         anYingList = res.data;
            //     },
            //     fail(res) {
            //         wx.showToast({
            //             title: '保存失败,请联系管理员',
            //         })
            //     }

            // });

            // console.log(anYingList);

            wx.showToast({
                title: '保存成功',
            });

            this.backLastPage();
        },

        backLastPage: function () {
            wx.navigateBack({
                delta: 1,
            })
        },


        /**
         * 选择密码位数改变时
         * @param {*} e
         */
        bindDigitsCodeIndexChange: function (e) {

            var digits = e.detail.value;
            var pwdigits = parseInt(digits) + 6;
            console.log('选择的密码位数为', pwdigits);

            this.setData({
                digitsCodeIndex: digits,
                pwdigits: pwdigits,
            })
        }

    }
})