const app = getApp();

import {
  router,
  toNext
} from '../../../utils/router.js';

Page({
  data: {
    TabCur: 0,
    // 课程分类
    state: [{
      type: '全部'
    }, {
      type: '正在进行'
    }, {
      type: '已完结'
    }],
    // 所有课程信息
    classList: null,
    // 该用户 所加入课程信息
    // myclass: [1, 2]
  },

  onLoad() {
    this.setData({
      classList: app.globalData.classList,
      myclass: app.globalData.userInfo.myclass
    })
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
    let classId = e.currentTarget.dataset.id;
    
    let newClassList = this.data.classList.map(item => {
      if (item.id === classId) {
        item.isJoin = true;
      }
      return item;
    })

    let newClass = this.data.classList.filter(item => item.id === classId)

    console.log(newClass)

    // 更新页面数据
    this.setData({
      classList: newClassList,
    })

    // 修改 前端 全局变量
    app.globalData.userInfo.myclass.push(newClass);
    app.globalData.userInfo.classList = newClassList;
  }

})