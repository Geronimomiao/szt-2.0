import {
  router,
  toNext
} from '../../../utils/router.js';
import * as echarts from '../../../lib/ec-canvas/echarts.js';
const app = getApp();

function setOptionGraph(chart, score) {
  const option = {
    color: ["#333333"],
    radar: {
      indicator: [{
        text: "阳光",
        max: 300
      }, {
        text: "晴天",
        max: 250
      }, {
        text: "乌云",
        max: 150
      }, {
        text: "虫子",
        max: 30
      }],
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
        value: score,
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

function setOptionPie(chart, data) {

  const option = {
    color: ["#37A2DA", "#91F2DE"],
    series: [{
      type: 'pie',
      center: ['50%', '50%'],
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      data,
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
    // 提示信息
    modalName: '',
    // 签到信息
    checkIn: null,
    // 评教信息
    evaluation: null,
    card: [{
      type: 'discuss',
      msg: '课程讨论',
      url: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
      func: 'toDiscuss',
      cls: 'bg-gradual-red'
    }, {
      type: 'checkIn',
      msg: '发起签到',
      url: 'https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg',
      func: 'showCheck',
      cls: 'bg-gradual-green'
    }, {
      type: 'evaluation',
      msg: '发起评教',
      url: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
      func: 'showEvaluation',
      cls: 'bg-gradual-blue'
    }]
  },

  methods: {
    toDiscuss() {
      toNext(router('common', 'chatRoom'), 'n')
    },

    showCheck() {

      // 提示框
      this.setData({
        modalName: 'loading'
      });

      // 教师发起签到
      let class_id = app.globalData.classId
      app.api.teacherStartSign(class_id).then(res => {
        console.log(res)
      })

      setTimeout(() => {
        this.getCheck()
      }, 30000)


    },

    // 获取学生签到信息
    getCheck() {
      // 教师结束签到
      let class_id = app.globalData.classId
      app.api.teacherStopSign(class_id).then(res => {

        let onlineNumber = res.data !== null ? res.data : 0

        console.log()
        let offlineNumber = res.msg


        let data = [{
          value: onlineNumber,
          name: `已到:${onlineNumber}`
        }, {
          value: offlineNumber,
          name: `未到:${offlineNumber}`
        }]

        this.showCheckPie(data)
      })

      this.setData({
        checkIn: true
      });


    },

    showCheckPie(data) {
      // 展示图表信息
      this.ecComponent = this.selectComponent('#mychart-check-pie');
      this.ecComponent.init((canvas, width, height) => {
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        setOptionPie(chart, data);

        return chart;
      });
    },

    showEvaluation() {

      // 提示框
      this.setData({
        modalName: 'loading'
      });

      let token = app.globalData.userInfo.token

      app.api.userInfo(token).then(res => {

        let teacher_id = res.data.id
        let quarter_id = app.globalData.quarterId

        // 教师端发起签到
        app.api.teacherStartEvaluation(quarter_id, teacher_id).then(res => {
          console.log(res)
        })

        setTimeout(() => {
          this.getEvaluation()
        }, 30000)
      })

    },

    getEvaluation() {

      let quarter_id = app.globalData.quarterId

      app.api.teacherStopEvaluation(quarter_id).then(res => {

        this.setData({
          evaluation: true
        });

        // 获取评教信息
        let score = res.data.indicator.map(item => item.value)
        this.ecComponent = this.selectComponent('#mychart-graph');
        this.ecComponent.init((canvas, width, height) => {
          const chart = echarts.init(canvas, null, {
            width: width,
            height: height
          });
          setOptionGraph(chart, score);

          return chart;
        });
      })
    },

    hideModal() {
      this.setData({
        modalName: null
      });
    }

  }
})