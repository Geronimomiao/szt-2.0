import {
  router,
  toNext
} from '../../../utils/router.js';
import * as echarts from '../../../lib/ec-canvas/echarts.js';

function setOption(chart) {
  const option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C"],
    calculable: true,
    series: [{
      type: 'pie',
      center: ['50%', '50%'],
      roseType: 'radius',
      radius: [20, '50%'],
      data: [{
        value: 55,
        name: '心理修养'
      }, {
        value: 20,
        name: '道德修养'
      }, {
        value: 10,
        name: '思想政治修养'
      }, {
        value: 20,
        name: '科学文化修养'
      }],
      
  
    }]
  };
  chart.setOption(option);
}

Component({
  options: {
    addGlobalClass: true,
  },

  data: {
    index: null,
    lazyLoad: true,
    question: '你认为社会责任感是一个人对祖国、对民族、对人类的繁荣和进步，对他人的生存和发展所承担的职责感和使命感。增强社会责任感是人生修养中什么',
    // 情景再现 展示卡片 所需要数据
    scene: [{
      img_url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
      msg: '我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭'
    }],
    ec: { lazyLoad: true }
  },


  methods: {
    toVideo() {
      toNext(router('common', 'video'), 'n')
    },

    show() {
      this.ecComponent = this.selectComponent('#mychart-pie');
      this.ecComponent.init((canvas, width, height) => {
        // 获取组件的 canvas、width、height 后的回调函数
        // 在这里初始化图表
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        setOption(chart);

        // 注意这里一定要返回 chart 实例，否则会影响事件处理等
        return chart;
      });
    }
  }
})