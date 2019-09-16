import { router, toNext } from '../../../utils/router.js'


Component({
  options: {
    addGlobalClass: true,
  },

  data: {
    index: null,
    question: '你认为社会责任感是一个人对祖国、对民族、对人类的繁荣和进步，对他人的生存和发展所承担的职责感和使命感。增强社会责任感是人生修养中什么？',
    picker: ['心理修养', '道德修养', '思想政治修养', '科学文化修养'],
    // 情景再现 展示卡片 所需要数据
    scene: [{
      img_url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
      msg: '我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭'
    }]
  },

  methods: {
    toVideo() {
      toNext(router('common', 'video'), 'n')
    },

    PickerChange(e) {
      console.log(e);
      this.setData({
        index: e.detail.value
      })
    },
  }
})