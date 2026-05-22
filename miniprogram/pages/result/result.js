Page({
  data: {
    score: 0,
    level: '',
    levelShort: '',
    batteryIcon: '',
    batteryPercent: '',
    diagnosis: '',
    prescription: '',
    disclaimer: '本结果仅当娱乐，切勿当真。',
    showPoster: false,
    posterUrl: ''
  },

  onLoad(options) {
    const score = parseInt(options.score) || 0
    this.setData({ score })
    this.calculateResult(score)
  },

  calculateResult(score) {
    let level, levelShort, batteryIcon, batteryPercent, diagnosis, prescription

    if (score >= 85) {
      level = '❤️ 85-100分：【满分爱意 —— 神仙眷侣】'
      levelShort = '满分爱意'
      batteryIcon = '❤️‍🔥'
      batteryPercent = score + '/100'
      diagnosis = '恭喜！你们的感情稳如磐石，情绪价值拉满，信任感爆棚。对方是你最合拍的"联机队友"，外界诱惑在你们面前不堪一击。唯一风险：恩爱秀太多容易被朋友屏蔽。'
      prescription = '尝试一起挑战新鲜事物：陌生城市徒步、硬核密室逃脱、换风格"假装初次见面"约会，给满分关系加点惊喜多巴胺。'
    } else if (score >= 65) {
      level = '💗 65-84分：【爱意尚存 —— 日常省电模式】'
      levelShort = '爱意尚存'
      batteryIcon = '💖'
      batteryPercent = score + '/100'
      diagnosis = '安全稳定但开始无趣。你们是靠谱的"生活搭子"，但心跳加速的感觉正在退化成"收到快递通知"的波澜。安全感够，浪漫配额被外卖和刷手机瓜分了。'
      prescription = '每天15分钟"深度连麦"：不聊工作不聊琐事，只聊大瓜、分享歌曲、说说心里话。重新激活"精神知己"磁场。'
    } else if (score >= 45) {
      level = '💔 45-64分：【爱意告急 —— 疯狂漏电中】'
      levelShort = '爱意告急'
      batteryIcon = '💔'
      batteryPercent = score + '/100'
      diagnosis = '关系正在亮红灯。你可能经常陷入冷战、自我怀疑，感受不到被重视。心理防线脆弱，容易被外界温暖趁虚而入。'
      prescription = '用"直球表达"代替冷战：说出事实+感受+需求。例如"你最近回复越来越慢，我觉得不被重视，希望今晚能专心陪我吃饭"。接不住直球的关系，该评估沉没成本了。'
    } else {
      level = '🖤 20-44分：【爱意破碎 —— 重度Toxic】'
      levelShort = '爱意破碎'
      batteryIcon = '🖤'
      batteryPercent = score + '/100'
      diagnosis = '关系已充满毒性，要么互相折磨，要么形同陌路。你每天在这段关系里消耗的精力，够考几个证书了。重点不是谁会出轨，而是你正在变成自己都不喜欢的人。'
      prescription = '开启"静音模式"夺回主权：停止高浓度情绪输出，把精力砸回自己身上——健身、搞钱、见朋友。如果努力后对方仍是捂不热的铁，及时止损才是最酷的选择。'
    }

    this.setData({
      level,
      levelShort,
      batteryIcon,
      batteryPercent,
      diagnosis,
      prescription
    })
  },

  // 再测一次
  restartTest() {
    wx.reLaunch({
      url: '/pages/index/index'
    })
  },

  // 生成海报分享
  generatePoster() {
    wx.showLoading({ title: '正在生成海报...' })
    this.drawPoster()
  },

  // 绘制海报
  drawPoster() {
    const query = wx.createSelectorQuery()
    query.select('#posterCanvas')
      .fields({ node: true, size: true })
      .exec((res) => {
        const canvas = res[0].node
        const ctx = canvas.getContext('2d')
        const dpr = wx.getWindowInfo().pixelRatio
        const canvasWidth = 750
        const canvasHeight = 1200

        canvas.width = canvasWidth * dpr
        canvas.height = canvasHeight * dpr
        ctx.scale(dpr, dpr)

        // 绘制内容
        this.drawPosterContent(ctx, canvas, canvasWidth, canvasHeight)
      })
  },

  drawPosterContent(ctx, canvas, width, height) {
    const { score, levelShort, batteryPercent, diagnosis, prescription } = this.data

    // 1. 绘制背景渐变
    const bgGradient = ctx.createLinearGradient(0, 0, 0, height)
    bgGradient.addColorStop(0, '#f8f9ff')
    bgGradient.addColorStop(0.3, '#e8ecff')
    bgGradient.addColorStop(1, '#dfe6ff')
    ctx.fillStyle = bgGradient
    ctx.fillRect(0, 0, width, height)

    // 2. 绘制装饰圆
    ctx.beginPath()
    ctx.arc(600, 80, 200, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(108, 92, 231, 0.08)'
    ctx.fill()

    ctx.beginPath()
    ctx.arc(100, 400, 150, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(162, 155, 254, 0.06)'
    ctx.fill()

    // 3. 绘制顶部标题区域
    ctx.fillStyle = '#6c5ce7'
    ctx.font = 'bold 40px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText('两性情感计算器', width / 2, 80)

    ctx.fillStyle = '#999'
    ctx.font = '24px sans-serif'
    ctx.fillText('婚姻情感续航自查报告', width / 2, 120)

    // 4. 分隔线
    const lineGradient = ctx.createLinearGradient(100, 150, width - 100, 150)
    lineGradient.addColorStop(0, 'rgba(108, 92, 231, 0)')
    lineGradient.addColorStop(0.5, 'rgba(108, 92, 231, 0.3)')
    lineGradient.addColorStop(1, 'rgba(108, 92, 231, 0)')
    ctx.strokeStyle = lineGradient
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(100, 150)
    ctx.lineTo(width - 100, 150)
    ctx.stroke()

    // 5. 分数展示区
    ctx.fillStyle = '#2d3436'
    ctx.font = 'bold 80px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText(score + '分', width / 2, 240)

    // 电量百分比标签
    this.drawRoundRect(ctx, width / 2 - 100, 260, 200, 44, 22)
    ctx.fillStyle = 'rgba(108, 92, 231, 0.1)'
    ctx.fill()
    ctx.strokeStyle = 'rgba(108, 92, 231, 0.3)'
    ctx.lineWidth = 1
    ctx.stroke()

    ctx.fillStyle = '#6c5ce7'
    ctx.font = 'bold 24px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText(batteryPercent, width / 2, 289)

    // 6. 等级标签
    this.drawRoundRect(ctx, 40, 330, width - 80, 56, 12)
    const levelGradient = ctx.createLinearGradient(40, 330, width - 40, 330)
    levelGradient.addColorStop(0, '#6c5ce7')
    levelGradient.addColorStop(1, '#a29bfe')
    ctx.fillStyle = levelGradient
    ctx.fill()

    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 26px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText(levelShort, width / 2, 365)

    // 7. 诊断区域
    let currentY = 420

    // 诊断标题
    ctx.fillStyle = '#6c5ce7'
    ctx.font = 'bold 28px sans-serif'
    ctx.textAlign = 'left'
    ctx.fillText('🩺 诊断：', 50, currentY)
    currentY += 16

    // 诊断卡片背景
    const diagLines = this.wrapText(ctx, diagnosis, width - 120, '24px sans-serif')
    const diagHeight = diagLines.length * 38 + 30
    this.drawRoundRect(ctx, 40, currentY, width - 80, diagHeight, 16)
    ctx.fillStyle = '#ffffff'
    ctx.fill()
    ctx.strokeStyle = 'rgba(108, 92, 231, 0.1)'
    ctx.lineWidth = 1
    ctx.stroke()

    // 诊断内容
    ctx.fillStyle = '#555'
    ctx.font = '24px sans-serif'
    ctx.textAlign = 'left'
    currentY += 30
    diagLines.forEach((line) => {
      ctx.fillText(line, 60, currentY)
      currentY += 38
    })
    currentY += 20

    // 8. 保鲜方区域
    ctx.fillStyle = '#ff6b9d'
    ctx.font = 'bold 28px sans-serif'
    ctx.textAlign = 'left'
    ctx.fillText('💊 关系保鲜方：', 50, currentY)
    currentY += 16

    // 保鲜方卡片背景
    const prescText = prescription.replace(/\n/g, ' ')
    const prescLines = this.wrapText(ctx, prescText, width - 120, '24px sans-serif')
    // 限制最多显示8行
    const displayLines = prescLines.slice(0, 8)
    const prescHeight = displayLines.length * 38 + 30
    this.drawRoundRect(ctx, 40, currentY, width - 80, prescHeight, 16)
    ctx.fillStyle = '#ffffff'
    ctx.fill()
    ctx.strokeStyle = 'rgba(255, 107, 157, 0.1)'
    ctx.lineWidth = 1
    ctx.stroke()

    // 保鲜方内容
    ctx.fillStyle = '#555'
    ctx.font = '24px sans-serif'
    ctx.textAlign = 'left'
    currentY += 30
    displayLines.forEach((line, index) => {
      if (index === displayLines.length - 1 && prescLines.length > 8) {
        ctx.fillText(line.slice(0, -3) + '...', 60, currentY)
      } else {
        ctx.fillText(line, 60, currentY)
      }
      currentY += 38
    })

    // 9. 底部区域
    currentY = height - 100

    // 底部分隔线
    ctx.strokeStyle = 'rgba(108, 92, 231, 0.15)'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(100, currentY)
    ctx.lineTo(width - 100, currentY)
    ctx.stroke()

    currentY += 40
    ctx.fillStyle = '#999'
    ctx.font = '22px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText('长按识别小程序码 · 测一测你的情感电量', width / 2, currentY)

    currentY += 36
    ctx.fillStyle = '#bbb'
    ctx.font = '20px sans-serif'
    ctx.fillText('本结果仅当娱乐，切勿当真', width / 2, currentY)

    // 10. 导出图片
    setTimeout(() => {
      wx.canvasToTempFilePath({
        canvas: canvas,
        success: (res) => {
          wx.hideLoading()
          this.setData({
            showPoster: true,
            posterUrl: res.tempFilePath
          })
        },
        fail: () => {
          wx.hideLoading()
          wx.showToast({ title: '生成失败，请重试', icon: 'none' })
        }
      })
    }, 300)
  },

  // 文字换行工具
  wrapText(ctx, text, maxWidth, font) {
    ctx.font = font
    const lines = []
    let currentLine = ''

    for (let i = 0; i < text.length; i++) {
      const testLine = currentLine + text[i]
      const metrics = ctx.measureText(testLine)
      if (metrics.width > maxWidth && currentLine !== '') {
        lines.push(currentLine)
        currentLine = text[i]
      } else {
        currentLine = testLine
      }
    }
    if (currentLine) {
      lines.push(currentLine)
    }
    return lines
  },

  // 绘制圆角矩形
  drawRoundRect(ctx, x, y, w, h, r) {
    ctx.beginPath()
    ctx.moveTo(x + r, y)
    ctx.arcTo(x + w, y, x + w, y + h, r)
    ctx.arcTo(x + w, y + h, x, y + h, r)
    ctx.arcTo(x, y + h, x, y, r)
    ctx.arcTo(x, y, x + w, y, r)
    ctx.closePath()
  },

  // 保存海报到相册
  savePoster() {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.posterUrl,
      success: () => {
        wx.showToast({ title: '已保存到相册', icon: 'success' })
        this.closePoster()
      },
      fail: (err) => {
        if (err.errMsg.indexOf('auth deny') !== -1 || err.errMsg.indexOf('authorize') !== -1) {
          wx.showModal({
            title: '提示',
            content: '需要授权保存图片到相册',
            confirmText: '去设置',
            success: (res) => {
              if (res.confirm) {
                wx.openSetting()
              }
            }
          })
        } else {
          wx.showToast({ title: '保存失败', icon: 'none' })
        }
      }
    })
  },

  // 分享海报给好友
  sharePoster() {
    wx.showToast({ title: '请长按图片分享', icon: 'none' })
  },

  // 关闭海报弹窗
  closePoster() {
    this.setData({ showPoster: false })
  },

  // 阻止弹窗穿透
  preventTap() {},

  // 分享给好友
  onShareAppMessage() {
    return {
      title: '测一测你的婚姻情感电量还剩多少？',
      path: '/pages/index/index'
    }
  }
})
