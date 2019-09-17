import {
  router,
  toNext
} from '../../../utils/router.js';
import * as echarts from '../../../lib/ec-canvas/echarts.js';

function setOptionGraph(chart) {
  const option = {
    color: ["#333333"],
    radar: {
      indicator: [{
          text: '阳光',
          max: 300
        },
        {
          text: '晴天',
          max: 200
        },
        {
          text: '乌云',
          max: 100
        },
        {
          text: '虫子',
          max: 10
        },

      ],
      center: ['50%', '50%'],
      radius: 120,
      startAngle: 90,
      splitNumber: 4,
      shape: 'circle',
      name: {
        formatter: '【{value}】',
        textStyle: {
          color: '#72ACD1'
        }
      },
      splitArea: {
        areaStyle: {
          color: ['rgba(114, 172, 209, 0.2)',
            'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
            'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'
          ],
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 10
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.5)'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.5)'
        }
      }
    },
    series: [{
      name: '雷达图',
      type: 'radar',
      itemStyle: {
        emphasis: {
          // color: 各异,
          lineStyle: {
            width: 4,
          }
        }
      },
      data: [{
        value: [260, 100, 30, 1],
        areaStyle: {
          normal: {
            color: 'rgba(255, 255, 255, 0.5)'
          }
        }
      }]
    }]
  };

  chart.setOption(option);
}

function setOptionPie(chart) {

  const option = {
    color: ["#37A2DA", "#91F2DE"], 
    series: [{
      type: 'pie',
      center: ['50%', '50%'],
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      data: [{
        value: 39,
        name: '已到:39'
      }, {
        value: 2,
        name: '未到:2'
      }],
      label: {
        normal: {
          show: true,
          textStyle: {
            fontSize: 18
          }
        },
        emphasis: {
          show: true
        }
      }
    }]
  };
  chart.setOption(option);
}

const funcType = {
  'discuss': {
    'func': 'toDiscuss'
  },
  'checkIn': {
    'func': 'checkIn'
  },
  'evaluation': {
    'func': 'toEvaluation'
  },
};

Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    ec: {
      lazyLoad: true
    },
    // 签到信息
    checkIn: null,
    // 评教信息
    evaluation: null,
    card: [{
      type: 'discuss',
      msg: '课程讨论',
      url: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
      func: 'toDiscuss'
    }, {
      type: 'checkIn',
      msg: '发起签到',
      url: 'https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg',
      func: 'showCheck'
    }, {
      type: 'evaluation',
      msg: '发起评教',
      url: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
      func: 'showEvaluation'
    }]
  },

  methods: {
    toDiscuss() {
      toNext(router('common', 'chatRoom'), 'n')
    },
    showCheck() {
      this.setData({
        checkIn: true
      });

      this.ecComponent = this.selectComponent('#mychart-check-pie');
      this.ecComponent.init((canvas, width, height) => {
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        setOptionPie(chart);

        return chart;
      });
    },
    showEvaluation() {
      this.setData({
        evaluation: true
      });

      this.ecComponent = this.selectComponent('#mychart-graph');
      this.ecComponent.init((canvas, width, height) => {
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        setOptionGraph(chart);

        return chart;
      });
    }
  }
})