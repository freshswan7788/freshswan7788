Page({
  data: {
    score: 0,
    countdown: 5,
    loadingText: '计算中，请等待'
  },

  onLoad(options) {
    const score = parseInt(options.score) || 0
    this.setData({ score })
    // 启动倒计时
    this.startCountdown()
  },

  startCountdown() {
    this.timer = setInterval(() => {
      let { countdown } = this.data
      if (countdown <= 1) {
        clearInterval(this.timer)
        this.goToResult()
      } else {
        this.setData({ countdown: countdown - 1 })
      }
    }, 1000)
  },

  goToResult() {
    wx.redirectTo({
      url: `/pages/result/result?score=${this.data.score}`
    })
  },

  onUnload() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }
})
