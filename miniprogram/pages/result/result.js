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

    if (score >= 95) {
      level = '❤️ 95-100分：【满分爱意 —— 人间理想型】'
      levelShort = '人间理想型'
      batteryIcon = '❤️‍🔥'
      batteryPercent = score + '/100'
      diagnosis = '满分神仙爱情！你们不仅相爱，还深度懂彼此。情绪被秒接、压力被温柔化解、未来规划完全同频。这种关系堪称教科书级别，唯一副作用是朋友圈里的人都想屏蔽你。'
      prescription = '制造"意料之外"：满分关系最大的敌人是"理所当然"。试试突然在工作日给对方送一束花、写一封手写信，或者策划一场对方完全不知道的惊喜旅行。保持让对方"哇"的能力。'
    } else if (score >= 85) {
      level = '❤️ 85-94分：【爱意爆棚 —— 神仙眷侣】'
      levelShort = '神仙眷侣'
      batteryIcon = '❤️‍🔥'
      batteryPercent = score + '/100'
      diagnosis = '你们的感情基础非常扎实，信任、默契、陪伴感都在线。对方是你在世界上最安心的存在，即使偶有摩擦也能很快和好。外界干扰对你们来说几乎为零。'
      prescription = '解锁新领域的共同成长：一起学一项新技能（烘焙、潜水、画画），或者开启一个"两人专属项目"（比如一起跑步打卡、联合写旅行日记），让关系不只是安稳，还有并肩前进的兴奋感。'
    } else if (score >= 75) {
      level = '💗 75-84分：【爱意充沛 —— 稳定幸福】'
      levelShort = '稳定幸福'
      batteryIcon = '💖'
      batteryPercent = score + '/100'
      diagnosis = '你们的关系像一杯温度刚好的奶茶——暖心、舒服、让人依赖。大方向上高度一致，日常偶尔有小摩擦但不伤根基。你在这段关系中有归属感，只是偶尔会想：能不能再多一点小惊喜？'
      prescription = '启动"周末约会制度"：每周至少一次两人独处时光，不带孩子不带手机。可以是一顿精致晚餐、一部电影、一段散步。关键不是做什么，而是让对方感受到：你依然被特别对待。'
    } else if (score >= 65) {
      level = '💗 65-74分：【爱意尚存 —— 省电模式】'
      levelShort = '省电模式'
      batteryIcon = '💖'
      batteryPercent = score + '/100'
      diagnosis = '安全感充足但浪漫感在流失。你们更像默契的室友搭档，各忙各的、偶尔交集。不是不爱了，而是"爱"正在被生活琐事稀释。如果不主动注入新鲜感，关系会继续降温。'
      prescription = '打破"无效沟通"循环：把每天的"嗯""哦""行"换成每晚15分钟的真心话时间。分享今天的开心事、吐槽一个奇葩同事、推荐一首好听的歌。重新找回"精神知己"的感觉比什么都重要。'
    } else if (score >= 55) {
      level = '💔 55-64分：【爱意预警 —— 亮黄灯】'
      levelShort = '亮黄灯'
      batteryIcon = '💔'
      batteryPercent = score + '/100'
      diagnosis = '你开始频繁觉得"不被在乎""说了也没用"。沟通效率低、情绪经常得不到回应，内心积攒了不少委屈却不知道怎么开口。还没到崩溃的地步，但已经在消耗你的能量了。'
      prescription = '学会"非暴力沟通"四步法：观察（你最近很少回我消息）→ 感受（我觉得被忽略了）→ 需求（我需要每天至少一次认真的对话）→ 请求（今晚能放下手机陪我聊聊吗？）。把冷战转化为有效对话。'
    } else if (score >= 45) {
      level = '💔 45-54分：【爱意告急 —— 亮红灯】'
      levelShort = '亮红灯'
      batteryIcon = '💔'
      batteryPercent = score + '/100'
      diagnosis = '关系已进入高危区。冷战、指责、逃避可能已成常态。你在家里感受不到温暖，甚至开始怀疑"这段婚姻还有没有必要继续"。心理防线极度脆弱，外界一点善意都可能让你动摇。'
      prescription = '给关系设一个"30天试验期"：明确告诉对方你的底线和期待，约定一个月内双方都努力改变。如果一个月后依然没有任何进展，那你该认真考虑下一步了。别在模糊中无限内耗。'
    } else if (score >= 35) {
      level = '🖤 35-44分：【爱意枯竭 —— 重度内耗】'
      levelShort = '重度内耗'
      batteryIcon = '🖤'
      batteryPercent = score + '/100'
      diagnosis = '你在这段关系里已经严重透支了。每天花大量精力去猜测、愤怒、失望，却得不到任何正向反馈。你可能正在变成一个连自己都不认识的人——敏感、多疑、满腹怨气。'
      prescription = '立刻开启"自我充电模式"：暂时不要试图改变对方，把所有精力拿回来投资自己。去健身、学新东西、约好朋友、做让自己开心的事。只有你先恢复能量，才有力气做出理性决策。'
    } else {
      level = '🖤 20-34分：【爱意破碎 —— 该止损了】'
      levelShort = '该止损了'
      batteryIcon = '🖤'
      batteryPercent = score + '/100'
      diagnosis = '这已经不是"经营"能解决的问题了。关系充满了冷暴力、控制、漠视甚至伤害。你在这段关系里既得不到爱，也正在失去自我。继续待下去唯一的结果就是把自己消耗殆尽。'
      prescription = '人间清醒三步走：①经济独立准备——存钱、提升收入、掌握财务主动权；②社交支持网络——告诉信任的朋友你的真实状况，别独自扛；③寻求专业帮助——心理咨询师或法律顾问。记住：及时止损不是失败，是对自己最大的温柔。'
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
