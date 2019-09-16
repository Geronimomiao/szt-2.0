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
    changing(e) {
      let id = e.currentTarget.dataset.index;
      this.data.first = id; // 标记已选 id

      if (this.data.first === this.data.second) {
        // 点击同一个 list
        this.setData({
          first: -1,
        });
      } else {
        // 展开章节下 具体课程
        this.firstTap(id)
      }
    },

    down(e) {

      // 获取要下载 具体 课程信息
      let down = this.getDetail(e);
      this.setData({
        [down]: true
      });

      // 展示提示框
      this.showModal();

      // 下载课件
      this.downFile();
    },

    showModal() {
      this.setData({
        modalName: 'down'
      });
    },

    hideModal() {
      this.setData({
        modalName: null
      });
    },

    getDetail(e) {
      // 获取要下载 具体 课程信息
      let id = this.data.first;
      let chapter = this.data.classDetail[id].chapterItem;
      let chapterIndex = e.currentTarget.dataset.chapterindex;
      return `classDetail[${id}].chapterItem[${chapterIndex}].download`;
    },

    firstTap(id) {
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
    },

    downFile() {
      wx.downloadFile({
        url: 'https://img.wsmpage.cn/szt2/6.5%E5%9F%B9%E5%85%BB%E6%B3%95%E6%B2%BB%E6%80%9D%E7%BB%B4.ppt',
        success: function(res) {
          let filePath = res.tempFilePath ;
          wx.openDocument({
            filePath: filePath,
            success: function(res) {
              console.log('打开文档成功');
            }
          })
        }
      })
    }
  }
})