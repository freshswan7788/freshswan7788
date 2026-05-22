Page({
  data: {
    currentIndex: 0,
    answers: [],
    totalQuestions: 10,
    dimensions: [
      '情绪价值与情感回应',
      '核心需求满足度',
      '差异接纳与包容度',
      '冲突解决与沟通模式',
      '伴侣信任与安全感',
      '共同愿景与归属感',
      '边界感与外界诱惑防御',
      '压力分担与支持系统',
      '亲密感与激情留存',
      '婚姻满意度与承诺感'
    ],
    questions: [
      '当我情绪低落或开心时，伴侣总能及时察觉并给予回应。',
      '我的个人需求（被尊重、有空间）在婚姻中得到了满足。',
      '我们能包容彼此的不同，不强行改造对方。',
      '发生争吵后，我们能把话讲开而不是冷战。',
      '我相信伴侣不会背叛我，相处时很有安全感。',
      '我们对未来的规划目标一致，我有强烈的归属感。',
      '我们与异性交往都有分寸，能主动让对方安心。',
      '面对生活压力时，我们像战友一样并肩作战。',
      '我们之间仍保持亲密接触和深度交流。',
      '如果重新选择，我依然会选择现在的伴侣。'
    ],
    options: [
      { label: '完全不符合', value: 2 },
      { label: '比较不符合', value: 4 },
      { label: '不确定/中立', value: 6 },
      { label: '比较符合', value: 8 },
      { label: '完全符合', value: 10 }
    ]
  },

  onLoad() {
    let answers = new Array(10).fill(0)
    this.setData({ answers })
  },

  selectOption(e) {
    const { value } = e.currentTarget.dataset
    const { currentIndex, answers } = this.data
    answers[currentIndex] = value
    this.setData({ answers })
  },

  prevQuestion() {
    if (this.data.currentIndex > 0) {
      this.setData({ currentIndex: this.data.currentIndex - 1 })
    }
  },

  nextQuestion() {
    const { currentIndex, answers, totalQuestions } = this.data
    if (answers[currentIndex] === 0) {
      wx.showToast({ title: '请选择一个选项', icon: 'none' })
      return
    }
    if (currentIndex < totalQuestions - 1) {
      this.setData({ currentIndex: currentIndex + 1 })
    }
  },

  submitQuiz() {
    const { answers } = this.data
    const unanswered = answers.findIndex(a => a === 0)
    if (unanswered !== -1) {
      wx.showToast({ title: `第${unanswered + 1}题还未作答`, icon: 'none' })
      return
    }
    const totalScore = answers.reduce((sum, val) => sum + val, 0)
    wx.redirectTo({ url: `/pages/loading/loading?score=${totalScore}` })
  }
})
