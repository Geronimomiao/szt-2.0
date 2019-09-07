import { router, toNext } from '../../../utils/router.js'


Component({
  options: {
    addGlobalClass: true,
  },

  data: {
    index: null,
    question: '你认为社会责任感是一个人对祖国、对民族、对人类的繁荣和进步，对他人的生存和发展所承担的职责感和使命感。增强社会责任感是人生修养中什么？',
    picker: ['心理修养', '道德修养', '思想政治修养', '科学文化修养'],
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