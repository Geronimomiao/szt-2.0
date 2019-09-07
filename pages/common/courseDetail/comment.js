import { router, toNext } from '../../../utils/router.js'


Component({
  options: {
    addGlobalClass: true,
  },

  data: {
    index: null,
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