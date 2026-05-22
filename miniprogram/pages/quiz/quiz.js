Page({
  data: {
    // 当前题目索引
    currentIndex: 0,
    // 用户答案数组
    answers: [],
    // 题目总数
    totalQuestions: 20,
    // 维度标题
    dimensions: [
      '情绪价值与情感回应',
      '情绪价值与情感回应',
      '核心需求满足度',
      '核心需求满足度',
      '差异接纳与包容度',
      '差异接纳与包容度',
      '冲突解决与沟通模式',
      '冲突解决与沟通模式',
      '伴侣信任与安全感',
      '伴侣信任与安全感',
      '共同愿景与归属感',
      '共同愿景与归属感',
      '边界感与外界诱惑防御',
      '边界感与外界诱惑防御',
      '压力分担与支持系统',
      '压力分担与支持系统',
      '亲密感与激情留存',
      '亲密感与激情留存',
      '婚姻满意度与承诺感',
      '婚姻满意度与承诺感'
    ],
    // 20道题目
    questions: [
      '当我流露出沮丧、焦虑或分享快乐时，伴侣总能及时注意到并给予安慰或积极的回应。',
      '在日常生活中，我经常能从伴侣那里获得赞美、肯定，或感受到被爱。',
      '在目前的婚姻中，我作为一个独立个体的心理需求（如被尊重、有个人空间、个人爱好）得到了充分的满足。',
      '我感到伴侣懂我的心思、明白我的喜好，我们在精神层面的共鸣非常高。',
      '尽管我们有很多性格或生活习惯上的不同，但我很少试图去"强行改造"对方，对方也是如此。',
      '当伴侣做出某些我不理解的决定时，我愿意站在对方的角度去理解，而不是立刻否定。',
      '即使发生激烈的争吵，我们最终也能把话讲开，并找到双方都能接受的解决办法，而不是冷战。',
      '在讨论敏感话题（如婆媳关系、家庭分工）时，我们能保持理智，不会演变成对彼此的人身攻击。',
      '我相信无论发生什么，伴侣都会坚定地站在我这边，绝对不会做背叛或伤害这段关系的事。',
      '在和伴侣相处时，我感到很放松、很有安全感，不需要刻意去隐瞒自己的真实想法或日常行踪。',
      '在构想未来5到10年的生活规划（如换房、发展、养老）时，伴侣总是把我放在核心位置，我们的目标是一致的。',
      '我在这段婚姻中有着强烈的"归属感"，我把我们的家看作是最安全的避风港。',
      '我们双方在日常与异性交往中都有明确的分寸感（如不深夜单独畅聊、不倾诉情感隐私），并能主动让对方安心。',
      '当外界出现更具吸引力的异性或社交诱惑时，我（或伴侣）能清晰意识到婚姻的底线，并主动保持距离。',
      '面对育儿、老人赡养或经济波动等生活压力时，我们更像并肩作战的战友，而不是互相埋怨、互相指责。',
      '当我在工作中或生活中遇到极大的挫折时，婚姻和伴侣是我最重要的支持力量来源。',
      '我们之间依然保持着较高频次的身体接触（如拥抱、接吻、牵手）以及对彼此的身体吸引力。',
      '除了聊孩子和家务琐事，我们经常会像恋爱时那样单独约会，或者进行深度的心灵探讨。',
      '如果能重新选择一次，我依然会选择和现在的伴侣结婚。',
      '即使这段关系阶段性地出现危机或平淡期，我也拥有强烈的意愿和信心去修复它、经营它。'
    ],
    // 选项
    options: [
      { label: '完全不符合', value: 1 },
      { label: '比较不符合', value: 2 },
      { label: '不确定/中立', value: 3 },
      { label: '比较符合', value: 4 },
      { label: '完全符合', value: 5 }
    ]
  },

  onLoad() {
    // 初始化答案数组
    let answers = new Array(20).fill(0)
    this.setData({ answers })
  },

  // 选择答案
  selectOption(e) {
    const { value } = e.currentTarget.dataset
    const { currentIndex, answers } = this.data
    answers[currentIndex] = value
    this.setData({ answers })
  },

  // 上一题
  prevQuestion() {
    if (this.data.currentIndex > 0) {
      this.setData({
        currentIndex: this.data.currentIndex - 1
      })
    }
  },

  // 下一题
  nextQuestion() {
    const { currentIndex, answers, totalQuestions } = this.data
    if (answers[currentIndex] === 0) {
      wx.showToast({
        title: '请选择一个选项',
        icon: 'none'
      })
      return
    }
    if (currentIndex < totalQuestions - 1) {
      this.setData({
        currentIndex: currentIndex + 1
      })
    }
  },

  // 提交计算
  submitQuiz() {
    const { answers } = this.data
    // 检查是否所有题都已作答
    const unanswered = answers.findIndex(a => a === 0)
    if (unanswered !== -1) {
      wx.showToast({
        title: `第${unanswered + 1}题还未作答`,
        icon: 'none'
      })
      return
    }
    // 计算总分
    const totalScore = answers.reduce((sum, val) => sum + val, 0)
    // 跳转到加载页
    wx.redirectTo({
      url: `/pages/loading/loading?score=${totalScore}`
    })
  }
})
