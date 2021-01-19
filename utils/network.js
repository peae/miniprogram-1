
var network = {
    getData:function(){
        return new Promise((result, reject) => {
            wx.request({
              url: 'url',
              method: 'GET',
              data: {
                  key: '',
                  num: 1
              },
              success: function(res){
                  result(res.data);
              },
              fail: function(error){
                  reject(error);
              }
            });
        });
    },

};

export default network;
