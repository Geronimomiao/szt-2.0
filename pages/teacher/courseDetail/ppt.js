Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    // height: '',
    second: '', //保存第二次点击的list的ID
    first: -1, //保存第一次点击的list的ID
    // 每个对象 存储一个章节信息
    classDetail: [{
      title: '[第一章]Python基础语法',
      chapterItem: [{
          quarter: [{
            title: '培养法制思维1'
          }, {
            id: '2jhguy3qwr423f432',
            type: '准备',
            msg: '培养法制思维1'
          }, {
            id: '2jhguy3qwr423f432',
            type: '互动',
            msg: '培养法制思维1'
          }, {
            id: '2jhguy3qwr423f432',
            type: '课件',
            msg: '培养法制思维1',
            ppt_url: 'https://img.wsmpage.cn/szt2/6.5%E5%9F%B9%E5%85%BB%E6%B3%95%E6%B2%BB%E6%80%9D%E7%BB%B4.ppt'
          }]
        },
        {
          quarter: [{
            title: '培养法制思维2'
          }, {
            id: '2jhguy3qwr423f432',
            type: '课件',
            msg: '培养法制思维2',
            ppt_url: 'https://img.wsmpage.cn/szt2/6.5%E5%9F%B9%E5%85%BB%E6%B3%95%E6%B2%BB%E6%80%9D%E7%BB%B4.ppt'
          }]
        }
      ]
    }, {
      title: '[第二章]Python进阶语法',
      chapterItem: [{
          quarter: [{
            title: '培养法制思维3'
          }, {
            id: '2jhguy3qwr423f432',
            type: '课件',
            msg: '培养法制思维3',
            ppt_url: 'https://img.wsmpage.cn/szt2/6.5%E5%9F%B9%E5%85%BB%E6%B3%95%E6%B2%BB%E6%80%9D%E7%BB%B4.ppt'
          }]
        },
        {
          quarter: [{
              title: '培养法制思维4'
            },
            {
              id: '2jhguy3qwr423f432',
              type: '课件',
              msg: '培养法制思维4',
              ppt_url: 'https://img.wsmpage.cn/szt2/6.5%E5%9F%B9%E5%85%BB%E6%B3%95%E6%B2%BB%E6%80%9D%E7%BB%B4.ppt'
            }
          ]
        }
      ]
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

    // 传 classId  app.js 并切换课前准备页面
    changeBar(e) {
      this.setData({
        modalName: 'select'
      });
      this.triggerEvent('run', e.currentTarget.dataset.dest)
    },

    down(e) {

      // 获取要下载 具体 课程信息
      let url = e.currentTarget.dataset.url;

      // 展示提示框
      this.showModal();

      // 下载课件
      this.downFile(url);
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

    firstTap(id) {
      // // 第一次点击 list 
      // let width = wx.getSystemInfoSync().screenWidth;
      // // 两个相邻元素 mt mb 会重合
      // // 获取 章节中课程长度
      // let n = this.data.classDetail[id].chapterItem.length;
      // let m = n.length;
      // // 动画 必须以 px 做单位 才有动态效果 此处将 rpx --> px
      // // 获得 每一节高度 加一起
      // let height = (width / 750) * (80 * 1 + 60 * (n * m - 1)) + 'px';
      this.setData({
        first: id,
        second: id
      });
    },

    downFile(url) {
      wx.downloadFile({
        url: url,
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