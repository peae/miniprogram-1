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
            "name":"",
            "account":"",
            "password":"",
            "password2":"",
            "url":"",
            "note":"",
            "extra": [
                {
                    "name": "",
                    "content": ""
                }
            ]
        },
        // formDataList:[...formData],

        // digitsCodes: [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],
        digitsCodes: ['6','7','8','9','10','11','12'],
        digitsCodeIndex: 0,
        pwdigits: 6,

    },

    /**
     * 组件的方法列表
     */
    methods: {

        formInputChange: function(e) {

            this.setData({
                
            })
        },


        /**
         * 选择密码位数改变时
         * @param {*} e
         */
        bindDigitsCodeIndexChange: function(e) {
            
            var digits = e.detail.value;
            var pwdigits = parseInt(digits)+6;
            console.log('选择的密码位数为', pwdigits);
    
            this.setData({
                digitsCodeIndex: digits,
                pwdigits: pwdigits,
            })
        }

    }
})
