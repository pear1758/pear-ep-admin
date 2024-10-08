import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'

export const planePath =
  'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z'

export const data = [
  {
    fromName: '北京', // 起注释的作用
    toName: '上海',
    coords: [
      [116.4551, 40.2539],
      [121.4648, 31.2891]
    ]
  },
  {
    fromName: '上海',
    toName: '北京',
    coords: [
      [121.4648, 31.2891],
      [116.4551, 40.2539]
    ]
  },
  {
    fromName: '北京',
    toName: '广州',
    coords: [
      [116.4551, 40.2539],
      [113.5107, 23.2196]
    ]
  },
  {
    fromName: '广州',
    toName: '北京',
    coords: [
      [113.5107, 23.2196],
      [116.4551, 40.2539]
    ]
  },
  {
    fromName: '北京',
    toName: '成都',
    coords: [
      [116.4551, 40.2539],
      [103.9526, 30.7617]
    ]
  },
  {
    fromName: '成都',
    toName: '北京',
    coords: [
      [103.9526, 30.7617],
      [116.4551, 40.2539]
    ]
  },
  {
    fromName: '成都',
    toName: '新疆维吾尔自治区',
    coords: [
      [103.9526, 30.7617],
      [85.294711, 41.371801]
    ]
  },
  {
    fromName: ' 新疆维吾尔自治区',
    toName: '成都',
    coords: [
      [85.294711, 41.371801],
      [103.9526, 30.7617]
    ]
  }
]

export const customData = [
  {
    name: '黄金用户',
    children: [
      [114.31, 30.52, 100], // 武汉
      [124.37, 40.13, 120], // 丹东
      [114.87, 40.82, 140], // 张家口
      [114.07, 22.62, 180] // 深圳
    ]
  },
  {
    name: '白金用户',
    children: [
      [119.64, 29.12, 158], // 金华
      [108.95, 34.27, 198] // 西安
    ]
  },
  {
    name: '砖石用户',
    children: [
      [104.06, 30.67, 256] // 成都
    ]
  }
]

const scatterSeries: EChartsOption['series'] = customData.map(item => {
  return {
    name: item.name, // 系列名称
    type: 'effectScatter',
    coordinateSystem: 'geo', // 该系列使用的坐标系
    // 涟漪特效相关配置
    rippleEffect: {
      scale: 5, // 动画中波纹的最大缩放比例
      brushType: 'stroke' // 波纹的绘制方式
    },
    data: item.children,
    encode: {
      tooltip: 2 // 哪个维度在 tooltip 中显示
    },
    symbolSize: function (params: number[]) {
      return params[2] / 10 // 默认为10
    }
  }
})

/** @type EChartsOption */
export const options: EChartsOption = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    left: '5%',
    bottom: '5%',
    orient: 'vertical',
    data: customData.map(item => item.name),
    textStyle: {
      color: '#ffffff'
    }
  },
  geo: {
    map: 'china',
    // 当前视角的缩放比例
    zoom: 1.3,
    center: [102.848234, 32.82333],
    // 开启缩放和平移
    roam: true,
    scaleLimit: {
      min: 0.8
    },
    tooltip: {
      show: true
    },
    label: {
      show: true,
      color: '#fff' // 省文字颜色
    },
    // 地图区域的多边形样式
    itemStyle: {
      // 实现颜色线性渐变的两种写法
      areaColor: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          { offset: 0, color: '#073684' }, // 0% 处的颜色
          { offset: 1, color: '#061E3D' } // 100% 处的颜色
        ]
      },
      borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#00F6FF' },
        { offset: 1, color: '#87ADCB' }
      ]),
      shadowColor: 'rgba(10,76,139,1)',
      shadowOffsetY: 0,
      shadowBlur: 60,
      borderWidth: 1
    },
    // 高亮的线条和标签样式
    emphasis: {
      label: {
        show: true,
        color: '#fff' // 鼠标hover时 省文字颜色
      },
      itemStyle: {
        areaColor: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: '#073684' },
            { offset: 1, color: '#2B91B7' }
          ]
        }
      }
    }
    // regions: [
    //   {
    //     name: '南海诸岛',
    //     itemStyle: {
    //       // 隐藏南海诸岛
    //       opacity: 0,
    //     },
    //     label: {
    //       show: false, // 隐藏文字
    //     },
    //   },
    // ],
  },
  series: [
    {
      name: '',
      // 用于带有起点和终点信息的线数据的绘制
      type: 'lines',
      coordinateSystem: 'geo',
      zlevel: 1,
      effect: {
        show: true,
        period: 6, // 特效动画的时间
        trailLength: 0.7, // 特效尾迹的长度
        color: 'red',
        symbolSize: 3
      },
      lineStyle: {
        color: '#fff',
        width: 0,
        curveness: 0.2
      },
      data
    },
    {
      name: '',
      type: 'lines',
      coordinateSystem: 'geo',
      zlevel: 2,
      symbol: ['none', 'arrow'],
      symbolSize: 10,
      effect: {
        show: true,
        period: 6,
        trailLength: 0,
        symbol: planePath,
        symbolSize: 15
      },
      lineStyle: {
        color: '#fff',
        width: 1,
        opacity: 0.6,
        curveness: 0.2 // 线的曲度, 支持从 0 到 1 的值, 值越大曲度越大
      },
      data
    },
    ...scatterSeries
  ]
}
