const app = getApp();

import {
  router,
  toNext
} from '../../../utils/router.js';

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
      id: '1',
      url: 'https://img.wsmpage.cn/szt2/course/sixiu.png',
      className: '物理1801-1804',
      schoolName: '天津外国语大学',
      title: '思想道德修养与法律建设',
      detail: 'toDetail',
      join: 'join'
    }, {
      id: '2',
      url: 'https://img.wsmpage.cn/szt2/course/sixiu.png',
      className: '物理1801-1804',
      schoolName: '天津外国语大学',
      title: '思想道德修养与法律建设',
      detail: 'toDetail',
      join: 'join'
    }, {
      id: '3',
      url: 'https://img.wsmpage.cn/szt2/course/sixiu.png',
      className: '物理1801-1804',
      schoolName: '天津外国语大学',
      title: '思想道德修养与法律建设',
      detail: 'toDetail',
      join: 'join'
    }, {
      id: '4',
      url: 'https://img.wsmpage.cn/szt2/course/sixiu.png',
      className: '物理1801-1804',
      schoolName: '天津外国语大学',
      title: '思想道德修养与法律建设',
      detail: 'toDetail',
      join: 'join'
    }, {
      id: '5',
      url: 'https://img.wsmpage.cn/szt2/course/sixiu.png',
      className: '物理1801-1804',
      schoolName: '天津外国语大学',
      title: '思想道德修养与法律建设',
      detail: 'toDetail',
      join: 'join'
    }]
  },

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
    })
  },

  toDetail(e) {
    let target = e.currentTarget.dataset.id;
    app.globalData.detail = this.data.classList.filter(item => item.id === target).shift();
    toNext(router('common', 'courseDetail'), 'n');
  },

  join(e) {
    console.log(22)
  }

})