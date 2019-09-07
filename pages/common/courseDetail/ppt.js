Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    height: '',
    second: '', //保存第二次点击的list的ID
    first: -1, //保存第一次点击的list的ID
    // 每个对象 存储一个章节信息
    classDetail: [{
      title: '[第一章]Python基础语法',
      chapterItem: [{
        download: false,
        type: '课件',
        msg: '培养法制思维'
      }, {
        download: false,
        type: '课件',
        msg: '培养法制思维'
      }, {
        download: false,
        type: '课件',
        msg: '培养法制思维'
      }, {
        download: false,
        type: '课件',
        msg: '培养法制思维'
      }, {
        download: false,
        type: '课件',
        msg: '培养法制思维'
      }, {
        download: false,
        type: '课件',
        msg: '培养法制思维'
      }]
    }, {
      title: '[第二章]Python进阶语法',
      chapterItem: [{
        download: false,
        type: '课件',
        msg: '培养法制思维'
      }, {
        download: false,
        type: '课件',
        msg: '培养法制思维'
      }, {
        download: false,
        type: '课件',
        msg: '培养法制思维'
      }]
    }, {
      title: '[第三章]Python实战',
      chapterItem: [{
        download: false,
        type: '课件',
        msg: '培养法制思维'
      }, {
        download: false,
        type: '课件',
        msg: '培养法制思维'
      }, {
        download: false,
        type: '课件',
        msg: '培养法制思维'
      }, {
        download: false,
        type: '课件',
        msg: '培养法制思维'
      }, {
        download: false,
        type: '课件',
        msg: '培养法制思维'
      }, {
        download: false,
        type: '课件',
        msg: '培养法制思维'
      }]
    }]
  },
  methods: {
    //手风琴
    shoufenqin(e) {
      var listid = e.currentTarget.dataset.listid; //获取wxml当前点击的list标签上的自定义属性data-listid
      this.data.did = listid; //保留当前点击的list的ID号
      if (this.data.shoufenqinBloo == this.data.did) { //如果当前list已经展开（list两次点击了同一个list，list关闭）
        this.setData({
          shoufenqinName: 0, //返回一个所有list都不满足的ID号（那么所有的list都将关闭）
          shoufenqinBloo: '' //list已经关闭掉，所以记录点击的当前list就应该清空掉
        })
      } else { //第一次点击（list展开）
        this.setData({
          shoufenqinName: listid, //获取到点击list的id号（传到了wxml页面，当前list展开）
          shoufenqinBloo: listid //list展开后返回当前点击的list的ID号
        })
        console.log(this.data)
      }
    },

    changing(e) {
      let id = e.currentTarget.dataset.index;
      this.data.first = id; // 标记已选 id


      if (this.data.first === this.data.second) {
        // 点击同一个 list
        this.setData({
          first: -1,
        });
      } else {
        // 第一次点击 list 
        let width = wx.getSystemInfoSync().screenWidth;
        // 两个相邻元素 mt mb 会重合
        // 获取 章节中课程长度
        let n = this.data.classDetail[id].chapterItem.length;
        // console.log((60 * 1 + 40 * (n - 1)));
        // 动画 必须以 px 做单位 才有动态效果 此处将 rpx --> px
        let height = (width / 750) * (80 * 1 + 60 * (n - 1)) + 'px';
        this.setData({
          first: id,
          second: id,
          height
        });
        console.log(this.data)
      }
    }
  }
})