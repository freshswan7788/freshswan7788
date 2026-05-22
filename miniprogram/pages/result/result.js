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
      level = '🔋 85-100分：【100%满电状态 —— 遇到了"人间神仙快充宝"】'
      levelShort = '100%满电状态'
      batteryIcon = '🔋'
      batteryPercent = '电量100%'
      diagnosis = '恭喜！你们的感情稳得就像考公上岸。在这段关系里，你的情绪被稳稳接住，压力被温柔化解，情绪价值直接拉满。对方不仅是你的伴侣，更是你在这个世界上最合拍的"联机队友"。外界的诱惑或者复杂的社交圈在你们的信任防御塔面前，连一波兵线都推不掉。你不需要在关系里伪装，也不需要焦虑猜忌，目前唯一的风险可能是你们恩爱秀得太多，容易遭到朋友们的无情屏蔽。'
      prescription = '解锁"间歇性限定皮肤"：虽然"纯爱模式"已经无敌，但生活偶尔也需要一点新鲜的心跳。可以尝试一些两个人从未挑战过的事，比如一起去陌生的城市徒步、挑个周末去玩一次硬核密室逃脱，或者换个完全不同风格的穿搭去进行一次"假装初次见面"的微醺约会，给满分关系补一点"惊喜多巴胺"。'
    } else if (score >= 65) {
      level = '🔋 65-84分：【电量60% —— 自动进入"日常省电模式"】'
      levelShort = '电量60%省电模式'
      batteryIcon = '🪫'
      batteryPercent = '电量60%'
      diagnosis = '你们现在处于非常标准的"安全稳定，但开始无趣"的平淡期。就像手机电量掉到了60%，不耽误日常接打电话，但你看着那个数字心里总有那么一丝微妙的焦虑。你们是彼此信赖的"生活搭子"，但恋爱初期的那种"收到对方信息心跳就漏一拍"的感觉，正在退化成"收到快递通知"的内心波澜。安全感很足，但"浪漫配额"正在被外卖单、工作压力和各自刷手机的时间无情瓜分。'
      prescription = '拒绝"已读不回式"生活，开启深度连麦：别把彼此当成共处一室的"无情工具人"。试着把每天的无效沟通（如："哦"、"吃了"、"行"）改掉。每天晚上抽出15分钟强制连麦，不聊工作、不聊花销、不聊琐事，只聊聊今天刷到的离奇大瓜，或者互相分享一首最近单曲循环的歌。重新激活你们之间作为"精神知己"的磁场。'
    } else if (score >= 45) {
      level = '⚠️ 45-64分：【电量20%亮红灯 —— 陷入"疯狂漏电与内耗期"】'
      levelShort = '电量20%漏电警告'
      batteryIcon = '🪫'
      batteryPercent = '电量20%'
      diagnosis = '注意！你的关系正在发出"低电量"警报，并且后台程序还在"疯狂漏电"。你在这段关系里可能经常陷入冷战、自我怀疑，或者总觉得对方在"无效画饼"却看不见实际行动。因为在家里长期处于"情绪低血糖"状态，感受不到被重视和偏爱，这时候你的心理防线是极度脆弱的。这种状态下，如果外面出现一个稍微对你嘘寒问暖、能精准接住你情绪的异性，哪怕对方只是个擅长聊天的"高级海王/海后"，你也很容易防线动摇，产生逃离的冲动。'
      prescription = '戒掉"加了滤镜的自我安慰"，尝试直球表达：别再独自内耗和猜测了。运用"直球式情绪表达"，把平日里口是心非的狠话或冷战，换成直接的真心话。\n\n话术示范："你最近回我消息越来越慢，字也越来越少（事实），这让我觉得我在你这里不重要了，心里很空（感受）。我需要你今天下班后能专心陪我吃顿饭，不要一直看游戏或工作（明确需求）。"如果对方连这种清晰的直球都接不住，那你真的需要好好评估一下这段关系的"沉没成本"了。'
    } else {
      level = '🚨 20-44分：【电量1%随时关机 —— 关系进入"重度有毒（Toxic）状态"】'
      levelShort = '电量1%重度有毒'
      batteryIcon = '💀'
      batteryPercent = '电量1%'
      diagnosis = '顶住！这已经不是漏电的问题了，这辆车是直接开进了无人区，系统随时彻底关机。你们的关系现在充满了"Toxic（有毒）"的气味，要么互相折磨，要么冷漠得像同住一个屋檐下的陌生室友。你每天在这段关系里消耗的精力，足够你考下好几个职业证书或完成一个大项目了。到了这个地步，外界有没有诱惑、谁会出轨，根本就不是重点。重点是：你正在因为这段糟糕的关系，把自己变成一个充满怨气、连你自己都不喜欢的"内耗狂魔"。'
      prescription = '开启"静音模式"，夺回情绪主权：既然一说话就要引发全线崩溃，那就先停止高浓度的情绪输出。学一学大厂的"职场思维"——把对方当成一个你极其讨厌、但因为合同没到期不得不天天看见的组员。保持最低限度的礼貌，把多余的精力和情绪狠狠地抽回来，砸在自己身上：去健身、去沉淀、去搞钱、去跟真正的朋友聚会。\n\n及时止损，人间清醒：如果尝试了直球沟通、甚至努力调整过，对方依然是一块捂不热的生铁，或者持续冷暴力，那请记住：搞钱、变美/变帅、取悦自己，哪一样不比在烂掉的关系里当怨偶香？拿得起放得下，才是最酷的现代青年。'
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
