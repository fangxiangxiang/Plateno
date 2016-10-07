var order = ['green', 'red', 'yellow', 'blue', 'green']
Page({
  data: {
    imgUrls: [
        'http://images.plateno.com/images/inn/14NFOEJ4ZF/320',
        'http://img1.plateno.com/inn/222086/e5539df118f8265597e96c35b9090d8c_640_480.jpg',
        'http://images.plateno.com/images/inn/14NGncs7BW/320',
        'http://images.plateno.com/images/inn/14NGknD4h1/320',
        'http://images.plateno.com/images/inn/14NGfe7whg/320',
        'http://images.plateno.com/images/inn/14NGo9DR1I/320',
        'http://images.plateno.com/images/inn/15cFEwPlLt/320',
        'http://images.plateno.com/images/inn/15cFxGUN1u/320'
    ],
    toView: "green",
    animation:{},
    modalHidden: true,
    longitude:113.270764,
    latitude:23.104773,
    showdetail:false
  },
  onReady: function () {
    this.animation = wx.createAnimation()
  },
  upper: function(e) {
    console.log(e)
  },
  lower: function(e) {
    console.log(e)
  },
  scroll: function(e) {
    console.log(e)
  },
  scrollToTop: function(e) {
    this.setAction({
      scrollTop: 0
    })
  },
  tap: function(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        })
        break
      }
    }
  },
  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  scale: function () {
    this.animation.scale(Math.random() * 2).step()
    this.setData({ animation: this.animation.export() })
  },
  modalTap: function(e) {
    this.setData({
      modalHidden: false
    })
  },
  modalChange: function(e) {
    this.setData({
      modalHidden: true
    })
  },
  showdetail: function(e) {
    this.setData({
      showdetail: true
    })
  },
  openLocation: function (e) {
    console.log(e)
    var value = e.detail.value
    console.log(value)
    wx.openLocation({
      longitude: Number(value.longitude),
      latitude: Number(value.latitude),
      name: value.name,
      address: value.address
    })
  }
})
