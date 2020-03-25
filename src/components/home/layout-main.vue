<template>
  <el-header>
    <div class="row">
      <div class="nva-1" style>
        <i class="fa fa-home" aria-hidden="true"></i>
        <span>仪表盘</span>
      </div>
      <div style="display:flex">
        <div class="col-sm-12 col-md-4">
          <div id="Vulcanizer1" class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">
                设备
                <strong>1 #</strong>
              </h3>
              <span class="pull-right">
                <span class="label label-success">运行中</span>
              </span>
            </div>
            <div class="row box-body">
              <div class="col-md-12">
                <div style="display: flex;">
                  <div style="flex: 1 1 0%;">外温1:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; margin-right: 10px; padding-right: 5px;"
                  >{{outTemp1}} °</div>
                  <div style="flex: 1 1 0%; margin-left: 10px;">外温2:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; padding-right: 5px;"
                  >{{outTemp2}} °</div>
                </div>
                <div style="display: flex; margin-top: 1px;">
                  <div style="flex: 1 1 0%;">内温1:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; margin-right: 10px; padding-right: 5px;"
                  >{{innerTemp1}} °</div>
                  <div style="flex: 1 1 0%; margin-left: 10px;">内温2:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; padding-right: 5px;"
                  >{{innerTemp2}} °</div>
                </div>
                <div style="display: flex; margin-top: 1px;">
                  <div style="flex: 1 1 0%;">外压1:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; margin-right: 10px; padding-right: 5px;"
                  >{{outPress1}} Mpa</div>
                  <div style="flex: 1 1 0%; margin-left: 10px;">外压2:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; padding-right: 5px;"
                  >{{outPress2}} Mpa</div>
                </div>
                <div style="display: flex; margin-top: 1px;">
                  <div style="flex: 1 1 0%;">内压1:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; margin-right: 10px; padding-right: 5px;"
                  >{{innerPress1}} Mpa</div>
                  <div style="flex: 1 1 0%; margin-left: 10px;">内压2:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; padding-right: 5px;"
                  >{{innerPress2}} Mpa</div>
                </div>
                <div style="display: flex; margin-top: 1px;">
                  <div style="flex: 1 1 0%;">规格:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; margin-right: 10px; padding-right: 5px;"
                  >{{model}}</div>
                  <div style="flex: 1 1 0%; margin-left: 10px;">条码:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; padding-right: 5px;"
                  >{{barCode}}</div>
                </div>
              </div>
              <!-- <div class="col-xs-12" style="margin-top: 2px;">
                <div class="progress progress-sm">
                  <div
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    class="progress-bar progress-bar-primary progress-bar-striped"
                    :style="'width:'+progress+'%;'"
                  >
                    <span class="sr-only">40 % Complete (success)</span>
                  </div>
                </div>
              </div> -->
              <div class="col-md-12">
                <div style="width:379px;height:200px" ref="chart" class="echarts1 cha"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-4">
          <div id="Vulcanizer2" class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">
                设备
                <strong>2 #</strong>
              </h3>
              <span class="pull-right">
                <span class="label label-success">运行中</span>
              </span>
            </div>
            <div class="row box-body">
              <div class="col-md-12">
                <div style="display: flex;">
                  <div style="flex: 1 1 0%;">外温1:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; margin-right: 10px; padding-right: 5px;"
                  >92.5 °</div>
                  <div style="flex: 1 1 0%; margin-left: 10px;">外温2:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; padding-right: 5px;"
                  >149 °</div>
                </div>
                <div style="display: flex; margin-top: 1px;">
                  <div style="flex: 1 1 0%;">内温1:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; margin-right: 10px; padding-right: 5px;"
                  >67.8 °</div>
                  <div style="flex: 1 1 0%; margin-left: 10px;">内温2:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; padding-right: 5px;"
                  >63.4 °</div>
                </div>
                <div style="display: flex; margin-top: 1px;">
                  <div style="flex: 1 1 0%;">外压1:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; margin-right: 10px; padding-right: 5px;"
                  >0.23Mpa</div>
                  <div style="flex: 1 1 0%; margin-left: 10px;">外压2:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; padding-right: 5px;"
                  >0.6Mpa</div>
                </div>
                <div style="display: flex; margin-top: 1px;">
                  <div style="flex: 1 1 0%;">内压1:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; margin-right: 10px; padding-right: 5px;"
                  >2.23Mpa</div>
                  <div style="flex: 1 1 0%; margin-left: 10px;">内压2:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; padding-right: 5px;"
                  >4.5Mpa</div>
                </div>
                <div style="display: flex; margin-top: 1px;">
                  <div style="flex: 1 1 0%;">规格:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; margin-right: 10px; padding-right: 5px;"
                  >AASD493</div>
                  <div style="flex: 1 1 0%; margin-left: 10px;">条码:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; padding-right: 5px;"
                  >K0663</div>
                </div>
              </div>
              <!-- <div class="col-xs-12" style="margin-top: 2px;">
                <div class="progress progress-sm">
                  <div
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    class="progress-bar progress-bar-primary progress-bar-striped"
                    style="width: 10%;"
                  >
                    <span class="sr-only">40% Complete (success)</span>
                  </div>
                </div>
              </div> -->
              <div class="col-md-12">
                <div style="width:379px;height:200px" ref="chart2" class="echarts2 cha"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-4">
          <!-- ----------------- 插入WebGL------1111111------ -->
        </div>
      </div>
      <div style="display:flex">
        <div class="col-sm-12 col-md-4">
          <div id="Vulcanizer1" class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">
                设备
                <strong>1 #</strong>
              </h3>
              <span class="pull-right">
                <span class="label label-success">运行中</span>
              </span>
            </div>
            <div class="row box-body">
              <div class="col-md-12">
                <div style="display: flex;">
                  <div style="flex: 1 1 0%;">外温1:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; margin-right: 10px; padding-right: 5px;"
                  >{{outTemp1}} °</div>
                  <div style="flex: 1 1 0%; margin-left: 10px;">外温2:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; padding-right: 5px;"
                  >{{outTemp2}} °</div>
                </div>
                <div style="display: flex; margin-top: 1px;">
                  <div style="flex: 1 1 0%;">内温1:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; margin-right: 10px; padding-right: 5px;"
                  >{{innerTemp1}} °</div>
                  <div style="flex: 1 1 0%; margin-left: 10px;">内温2:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; padding-right: 5px;"
                  >{{innerTemp2}} °</div>
                </div>
                <div style="display: flex; margin-top: 1px;">
                  <div style="flex: 1 1 0%;">外压1:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; margin-right: 10px; padding-right: 5px;"
                  >{{outPress1}} Mpa</div>
                  <div style="flex: 1 1 0%; margin-left: 10px;">外压2:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; padding-right: 5px;"
                  >{{outPress2}} Mpa</div>
                </div>
                <div style="display: flex; margin-top: 1px;">
                  <div style="flex: 1 1 0%;">内压1:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; margin-right: 10px; padding-right: 5px;"
                  >{{innerPress1}} Mpa</div>
                  <div style="flex: 1 1 0%; margin-left: 10px;">内压2:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; padding-right: 5px;"
                  >{{innerPress2}} Mpa</div>
                </div>
                <div style="display: flex; margin-top: 1px;">
                  <div style="flex: 1 1 0%;">规格:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; margin-right: 10px; padding-right: 5px;"
                  >{{model}}</div>
                  <div style="flex: 1 1 0%; margin-left: 10px;">条码:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; padding-right: 5px;"
                  >{{barCode}}</div>
                </div>
              </div>
              <!-- <div class="col-xs-12" style="margin-top: 2px;">
                <div class="progress progress-sm">
                  <div
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    class="progress-bar progress-bar-primary progress-bar-striped"
                    :style="'width:'+progress+'%;'"
                  >
                    <span class="sr-only">40 % Complete (success)</span>
                  </div>
                </div>
              </div> -->
              <div class="col-md-12" style="padding-top:50px">
                <div style="width:379px;height:200px" ref="chart4" class="echarts4 cha"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-4">
          <div id="Vulcanizer2" class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">
                设备
                <strong>2 #</strong>
              </h3>
              <span class="pull-right">
                <span class="label label-success">运行中</span>
              </span>
            </div>
            <div class="row box-body">
              <div class="col-md-12">
                <div style="display: flex;">
                  <div style="flex: 1 1 0%;">外温1:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; margin-right: 10px; padding-right: 5px;"
                  >92.5 °</div>
                  <div style="flex: 1 1 0%; margin-left: 10px;">外温2:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; padding-right: 5px;"
                  >149 °</div>
                </div>
                <div style="display: flex; margin-top: 1px;">
                  <div style="flex: 1 1 0%;">内温1:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; margin-right: 10px; padding-right: 5px;"
                  >67.8 °</div>
                  <div style="flex: 1 1 0%; margin-left: 10px;">内温2:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; padding-right: 5px;"
                  >63.4 °</div>
                </div>
                <div style="display: flex; margin-top: 1px;">
                  <div style="flex: 1 1 0%;">外压1:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; margin-right: 10px; padding-right: 5px;"
                  >0.23Mpa</div>
                  <div style="flex: 1 1 0%; margin-left: 10px;">外压2:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; padding-right: 5px;"
                  >0.6Mpa</div>
                </div>
                <div style="display: flex; margin-top: 1px;">
                  <div style="flex: 1 1 0%;">内压1:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; margin-right: 10px; padding-right: 5px;"
                  >2.23Mpa</div>
                  <div style="flex: 1 1 0%; margin-left: 10px;">内压2:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; padding-right: 5px;"
                  >4.5Mpa</div>
                </div>
                <div style="display: flex; margin-top: 1px;">
                  <div style="flex: 1 1 0%;">规格:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; margin-right: 10px; padding-right: 5px;"
                  >AASD493</div>
                  <div style="flex: 1 1 0%; margin-left: 10px;">条码:</div>
                  <div
                    style="text-align: right; flex: 1 1 0%; border: 1px solid lightgray; padding-right: 5px;"
                  >K0663</div>
                </div>
              </div>
              <div class="col-md-12" style="padding-top:50px">
                <div style="width:379px;height:200px" ref="chart5" class="echarts5 cha"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-4">
          <!-- --------------------插入WebGL--------------------------- -->
        </div>
      </div>
      <!-- <div style="width:379px;height:200px" ref="chart6" class="echarts6 cha"></div> -->
    </div>
  </el-header>
</template>

<script>
// import echarts from 'charts'

export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    initCharts () {
      const myChart = this.$echarts.init(this.$refs.chart)
      const myChart2 = this.$echarts.init(this.$refs.chart2)
      // const myChart3 = this.$echarts.init(this.$refs.chart3)
      const myChart4 = this.$echarts.init(this.$refs.chart4)
      const myChart5 = this.$echarts.init(this.$refs.chart5)
      // const myChart6 = this.$echarts.init(this.$refs.chart6)
      console.log(this.$refs.chart)
      // 绘制图表
      myChart.setOption({
        title: {
          // text: 'Step Line'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Step Start', 'Step Middle', 'Step End']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Step Start',
            type: 'line',
            step: 'start',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Step Middle',
            type: 'line',
            step: 'middle',
            data: [220, 282, 201, 234, 290, 430, 410]
          },
          {
            name: 'Step End',
            type: 'line',
            step: 'end',
            data: [450, 432, 401, 454, 590, 530, 510]
          }
        ]
      })
      myChart2.setOption({
        title: {
          // text: 'Step Line'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Step Start', 'Step Middle', 'Step End']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Step Start',
            type: 'line',
            step: 'start',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Step Middle',
            type: 'line',
            step: 'middle',
            data: [220, 282, 201, 234, 290, 430, 410]
          },
          {
            name: 'Step End',
            type: 'line',
            step: 'end',
            data: [450, 432, 401, 454, 590, 530, 510]
          }
        ]
      })
      // myChart3.setOption({
      //   title: {
      //     // text: 'Step Line'
      //   },
      //   tooltip: {
      //     trigger: 'axis'
      //   },
      //   legend: {
      //     data: ['Step Start', 'Step Middle', 'Step End']
      //   },
      //   grid: {
      //     left: '3%',
      //     right: '4%',
      //     bottom: '3%',
      //     containLabel: true
      //   },
      //   toolbox: {
      //     feature: {
      //       saveAsImage: {}
      //     }
      //   },
      //   xAxis: {
      //     type: 'category',
      //     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      //   },
      //   yAxis: {
      //     type: 'value'
      //   },
      //   series: [
      //     {
      //       name: 'Step Start',
      //       type: 'line',
      //       step: 'start',
      //       data: [120, 132, 101, 134, 90, 230, 210]
      //     },
      //     {
      //       name: 'Step Middle',
      //       type: 'line',
      //       step: 'middle',
      //       data: [220, 282, 201, 234, 290, 430, 410]
      //     },
      //     {
      //       name: 'Step End',
      //       type: 'line',
      //       step: 'end',
      //       data: [450, 432, 401, 454, 590, 530, 510]
      //     }
      //   ]
      // })
      myChart4.setOption({
        title: {
          text: '某地区蒸发量和降水量',
          subtext: '纯属虚构'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['蒸发量', '降水量']
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '蒸发量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
          },
          {
            name: '降水量',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            markPoint: {
              data: [
                { name: '年最高', value: 182.2, xAxis: 7, yAxis: 183 },
                { name: '年最低', value: 2.3, xAxis: 11, yAxis: 3 }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
          }
        ]
      })
      myChart5.setOption({
        title: {
          text: '某地区蒸发量和降水量',
          subtext: '纯属虚构'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['蒸发量', '降水量']
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '蒸发量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
          },
          {
            name: '降水量',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            markPoint: {
              data: [
                { name: '年最高', value: 182.2, xAxis: 7, yAxis: 183 },
                { name: '年最低', value: 2.3, xAxis: 11, yAxis: 3 }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
          }
        ]
      })
    }
  },
  mounted () {
    this.initCharts()
  }
}
</script>

<style scoped>
.row {
  padding: 0px;
}
.nva-1 {
  width: 110%;
  height: 35px;
  background-color: #006ac3;
  margin-top: -20px;
  margin-left: -40px;
  color: #fff;
}
.nva-1 i {
  padding-left: 10px;
  color: black;
}
.nva-1 span {
  line-height: 35px;
  padding-left: 10px;
}
.box-primary {
  /* width: 281px;
  height: 100px; */
  padding-right: 20px;
  float: left;
  padding-left: 5px;
  position: relative;
  /* border: 1px solid #ccc; */
  margin-right: 40px;
}
.label-success {
  background-color: #5cb85c;
  position: absolute;
  margin-left: -52px;
  margin-top: -21px;
}
/* .label {
      display: inline;
      padding: 0.2em .6em .3em;
      font-size: 75%;
      font-weight: bold;
      line-height: 1;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      vertical-align: baseline;
      border-radius: 0.25em;
  } */
.pull-right {
  float: right !important;
}
/* .const {
} */
</style>
