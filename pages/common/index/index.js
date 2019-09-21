const app = getApp();

import {
  router,
  toNext
} from '../../../utils/router.js';


Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    cardCur: 0,
    bannerList: '',
    articleList: ''
  },

  ready() {

    // 获取首部新闻信息
    app.api.getNews('banner').then(res => {
      this.setData({
        bannerList: res.data
      })
    })

    // 获取文章列表 新闻信息
    app.api.getNews('article').then(res => {
      this.setData({
        articleList: res.data
      })
    })
  },

  methods: {

    // 根据新闻 类型 和 id 确定 文章地址
    select(type, id) {
      let article_url = {
        'banner': this.data.bannerList.filter(item => item.id === id).shift().article_url,
        'article': this.data.articleList.filter(item => item.id === id).shift().article_url,
      }
      return article_url[type]
    },

    showNews(e) {
      let type = e.currentTarget.dataset.type;
      let article_id = e.currentTarget.dataset.cur;

      let article_url = this.select(type, article_id)
      console.log(article_url)
      app.globalData.article_url = article_url;
      toNext(router('common', 'news'), 'n')
    }
  }
})