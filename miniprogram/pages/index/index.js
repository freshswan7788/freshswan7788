const IMAGES = require('../../utils/images')

Page({
  data: {
    heroImg: IMAGES.heroCouple
  },

  onLoad() {},

  startTest() {
    wx.navigateTo({
      url: '/pages/quiz/quiz'
    })
  }
})
