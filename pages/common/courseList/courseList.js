Page({
  data: {
    TabCur: 0,
    state: [{
      type: '全部'
    }, {
      type: '正在进行'
    }, {
      type: '已完结'
    }],
    classList: [{
      url: 'https://img.wsmpage.cn/szt2/course/sixiu.png',
      className: '物理1801-1804',
      schoolName: '天津外国语大学',
      title: '思想道德修养与法律建设'
    }, {
        url: 'https://img.wsmpage.cn/szt2/course/sixiu.png',
        className: '物理1801-1804',
        schoolName: '天津外国语大学',
        title: '思想道德修养与法律建设'
      },{
        url: 'https://img.wsmpage.cn/szt2/course/sixiu.png',
        className: '物理1801-1804',
        schoolName: '天津外国语大学',
        title: '思想道德修养与法律建设'
      }, {
        url: 'https://img.wsmpage.cn/szt2/course/sixiu.png',
        className: '物理1801-1804',
        schoolName: '天津外国语大学',
        title: '思想道德修养与法律建设'
      }, {
        url: 'https://img.wsmpage.cn/szt2/course/sixiu.png',
        className: '物理1801-1804',
        schoolName: '天津外国语大学',
        title: '思想道德修养与法律建设'
      }]
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
    })
  }
})