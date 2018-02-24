// pages/weather/weather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weather:'天气信息',
    city:''
  },

  getWeather:function(){
    //编辑请求地址
    let city=this.data.city;
    const KEY ='a21e0aeac46d45088baf1947ef27e339'
    let url =`https://free-api.heweather.com/s6/weather/now?location=${city}&key=${KEY}`;
    //将this赋值给页面page,防止在request回调函数中，this指向全局
    let page = this;
    //发送请求
    wx.request({
      url: url,
      success:function(res){
        let weather=res.data.HeWeather6[0].now.cond_txt;
        page.setData({
          weather:weather
        })
      }
    })
  },
  getCity:function(event){ //event:输入事件本身
    // console.log('input...')
    //获取用户输入的数据,并保存在变量中
    this.setData({
      city:event.detail.value
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
