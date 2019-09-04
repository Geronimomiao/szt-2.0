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
    bannerList: [{
      id: 0,
      type: 'image',
      url: 'https://img.wsmpage.cn/szt2/news/463.jpg',
      title: '人民日报评论员',
      info: '绝不允许暴力绑架香港未来',
      article_url: 'https://www.thepaper.cn/newsDetail_forward_4302782'
    }, {
      id: 1,
      type: 'image',
      url: 'https://img.wsmpage.cn/szt2/news/571.jpg',
      title: '香港警方再抓捕2人',
      info: '涉嫌阻碍警务人员执行职务',
      article_url: 'https://www.thepaper.cn/newsDetail_forward_4298685'
    }, {
      id: 2,
      type: 'image',
      url: 'https://img.wsmpage.cn/szt2/news/607.jpg',
      title: '地球的一半',
      info: '以跨境合作，保护粤港澳大湾区生态环境',
      article_url: 'https://www.thepaper.cn/newsDetail_forward_4297621'
    }],
    articleList: [{
      id: 0,
      type: 'image',
      url: 'https://img.wsmpage.cn/szt2/news/1.jpeg',
      title: '【津云镜头】超越·拼搏 残运会暨特奥会上的精彩瞬间',
      info: '津云新闻讯：全国第十届残运会暨第七届特奥会赛场上的每一个瞬间，都展示了运动员超越生理障碍的勇气和信心。',
      article_url: 'https://www.app.tjyun.com/share/app/ve/app/newswebshares.html?newsId=037617506&from=singlemessage&needRefresh=false'
    }, {
      id: 1,
      type: 'image',
        url: 'https://img.wsmpage.cn/szt2/news/2.png',
        title: '国防部：驻香港部队有决心有信心有能力履行好驻军法赋予的职责使命',
        info: '新华社北京8月29日电 国防部29日举行例行记者会，国防部新闻发言人任国强在回答中国人民解放军驻香港部队轮换有关问题时表示，驻香港部队坚决听从党中央、中央军委指挥，有决心、有信心、有能力履行好驻军法赋予的职责使命，守护香港长期繁荣稳定和长治久安。',
        article_url: 'https://article.xuexi.cn/articles/index.html?study_style_id=feeds_default&study_comment_disable=0&art_id=1404574090669245052&source=share&share_to=wx_single&from=singlemessage'
    }, {
      id: 2,
      type: 'image',
        url: 'https://img.wsmpage.cn/szt2/news/3.png',
        title: 'Keep your hands off Hong Kong: Readers urge US',
        info: 'Editors note: Since February, many US politicians have openly commented on Hong Kong affairs and met with the opposition figures and radical protesters multiple times.Those meetings have only added fuel to the criminal deeds jeopardizing Hong Kong.China has repeatedly asked the US to stop interfering in other countries domestic affairs, but it seems the latter has no intention of withdrawing its "meddling hand". Netizens from home and abroad share their ideas.',
        article_url: 'https://enapp.chinadaily.com.cn/a/201908/30/AP5d68be7ba310aba8ca8c3de2.html?from=singlemessage'
    }]
  },
  methods: {
    // 根据新闻 类型 和 id 确定 文章地址
    select(type, id) {
      // console.log(id)
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