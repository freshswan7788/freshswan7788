const IMAGES = require('../../utils/images')

Page({
  data: {
    score: 0,
    level: '',
    levelShort: '',
    batteryIcon: '',
    batteryPercent: '',
    resultImg: '',
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

    // 根据分数选择对应图片
    let resultImg
    if (score >= 95) resultImg = IMAGES.result100
    else if (score >= 85) resultImg = IMAGES.result85
    else if (score >= 75) resultImg = IMAGES.result75
    else if (score >= 65) resultImg = IMAGES.result65
    else if (score >= 55) resultImg = IMAGES.result55
    else if (score >= 45) resultImg = IMAGES.result45
    else if (score >= 35) resultImg = IMAGES.result35
    else resultImg = IMAGES.result20

    this.setData({
      level,
      levelShort,
      batteryIcon,
      batteryPercent,
      resultImg,
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
    const { score, levelShort, batteryPercent, batteryIcon, diagnosis, prescription } = this.data

    // === 1. 精美渐变背景 ===
    const bgGradient = ctx.createLinearGradient(0, 0, width, height)
    bgGradient.addColorStop(0, '#ffecd2')
    bgGradient.addColorStop(0.3, '#fcb69f')
    bgGradient.addColorStop(0.6, '#ff9a9e')
    bgGradient.addColorStop(1, '#fecfef')
    ctx.fillStyle = bgGradient
    ctx.fillRect(0, 0, width, height)

    // === 2. 装饰圆形 ===
    ctx.globalAlpha = 0.15
    ctx.beginPath()
    ctx.arc(620, 120, 180, 0, Math.PI * 2)
    ctx.fillStyle = '#fff'
    ctx.fill()
    ctx.beginPath()
    ctx.arc(80, 900, 120, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(680, 800, 100, 0, Math.PI * 2)
    ctx.fill()
    ctx.globalAlpha = 1

    // === 3. 白色主卡片区域 ===
    this.drawRoundRect(ctx, 40, 50, width - 80, height - 100, 40)
    ctx.fillStyle = 'rgba(255,255,255,0.92)'
    ctx.fill()

    // === 4. 顶部标题 ===
    ctx.fillStyle = '#ff6b8a'
    ctx.font = 'bold 36px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText('💕 两性情感计算器', width / 2, 120)

    ctx.fillStyle = '#b8a9c9'
    ctx.font = '22px sans-serif'
    ctx.fillText('— 你的爱情体检报告 —', width / 2, 158)

    // === 5. 大分数展示 ===
    // 分数背景圆
    ctx.beginPath()
    ctx.arc(width / 2, 280, 100, 0, Math.PI * 2)
    const scoreGrad = ctx.createRadialGradient(width / 2, 280, 20, width / 2, 280, 100)
    scoreGrad.addColorStop(0, '#fff0f3')
    scoreGrad.addColorStop(1, '#ffe4e8')
    ctx.fillStyle = scoreGrad
    ctx.fill()

    // 分数数字
    ctx.fillStyle = '#ff6b8a'
    ctx.font = 'bold 72px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText(score, width / 2, 298)

    ctx.fillStyle = '#ffb3c1'
    ctx.font = '24px sans-serif'
    ctx.fillText('/ 100 分', width / 2, 338)

    // === 6. 等级标签 ===
    const tagWidth = 240
    this.drawRoundRect(ctx, (width - tagWidth) / 2, 390, tagWidth, 50, 25)
    const tagGrad = ctx.createLinearGradient((width - tagWidth) / 2, 390, (width + tagWidth) / 2, 390)
    tagGrad.addColorStop(0, '#ff6b8a')
    tagGrad.addColorStop(1, '#ff9a9e')
    ctx.fillStyle = tagGrad
    ctx.fill()

    ctx.fillStyle = '#fff'
    ctx.font = 'bold 26px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText(batteryIcon + ' ' + levelShort, width / 2, 422)

    // === 7. 诊断区域 ===
    let currentY = 480

    // 诊断标题
    ctx.fillStyle = '#ff6b8a'
    ctx.font = 'bold 26px sans-serif'
    ctx.textAlign = 'left'
    ctx.fillText('🩺 诊断结果', 80, currentY)

    // 诊断分隔线
    currentY += 16
    ctx.strokeStyle = '#ffe4e8'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(80, currentY)
    ctx.lineTo(width - 80, currentY)
    ctx.stroke()
    currentY += 24

    // 诊断内容
    ctx.fillStyle = '#5a4f6a'
    ctx.font = '22px sans-serif'
    ctx.textAlign = 'left'
    const diagLines = this.wrapText(ctx, diagnosis, width - 180, '22px sans-serif')
    const showDiagLines = diagLines.slice(0, 6)
    showDiagLines.forEach((line, i) => {
      if (i === showDiagLines.length - 1 && diagLines.length > 6) {
        ctx.fillText(line.substring(0, line.length - 3) + '...', 80, currentY)
      } else {
        ctx.fillText(line, 80, currentY)
      }
      currentY += 34
    })

    // === 8. 保鲜方区域 ===
    currentY += 20
    ctx.fillStyle = '#a18cd1'
    ctx.font = 'bold 26px sans-serif'
    ctx.textAlign = 'left'
    ctx.fillText('💊 关系保鲜方', 80, currentY)

    currentY += 16
    ctx.strokeStyle = '#ece4f5'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(80, currentY)
    ctx.lineTo(width - 80, currentY)
    ctx.stroke()
    currentY += 24

    ctx.fillStyle = '#5a4f6a'
    ctx.font = '22px sans-serif'
    const prescText = prescription.replace(/\n/g, ' ')
    const prescLines = this.wrapText(ctx, prescText, width - 180, '22px sans-serif')
    const showPrescLines = prescLines.slice(0, 6)
    showPrescLines.forEach((line, i) => {
      if (i === showPrescLines.length - 1 && prescLines.length > 6) {
        ctx.fillText(line.substring(0, line.length - 3) + '...', 80, currentY)
      } else {
        ctx.fillText(line, 80, currentY)
      }
      currentY += 34
    })

    // === 9. 底部区域 ===
    // 分隔装饰
    const bottomY = height - 180
    ctx.fillStyle = '#ffe4e8'
    ctx.beginPath()
    ctx.arc(width / 2 - 30, bottomY, 4, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(width / 2, bottomY, 4, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(width / 2 + 30, bottomY, 4, 0, Math.PI * 2)
    ctx.fill()

    // 扫码提示
    ctx.fillStyle = '#b8a9c9'
    ctx.font = '20px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText('扫码测一测你的爱情温度', width / 2, bottomY + 50)

    // 免责声明
    ctx.fillStyle = '#ddd'
    ctx.font = '18px sans-serif'
    ctx.fillText('本结果仅当娱乐，切勿当真', width / 2, bottomY + 90)

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
