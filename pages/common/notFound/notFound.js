const app = getApp();
const sourceType = {
  'ppt': {
    cls: 'icon-ppt',
    info: '这里空空如也'
  },
  'fav': {
    cls: 'icon-fav',
    info: '这里空空如也'
  },
  'message': {
    cls: 'cuIcon-comment',
    info: '暂时没有消息'
  },
  'class': {
    cls: 'icon-class',
    info: '请先添加一门课程'
  }
};

Page({

  data: {
    cls: '',
    info: ''
  },

  onReady() {
    let type = app.globalData.sourceState;
    let data = sourceType[type];
    this.setData({
      ...data
    })
  }
})