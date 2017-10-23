<template>
    <div id="lineChart"></div>
</template>
<script>
export default {
  mounted() {
    let _this = this;
    let timer = setTimeout(function(){
       _this.drawLine();
    },300) 
  },
  props: ["data1"],
  methods: {
    drawLine() {
      let { highT, lowT, dateTime } = this.data1;
      let Option = {
        title: {
          text: "未来五天气温变化",
          left: "center"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["最高气温", "最低气温"],
          left: 50
        },
        toolbox: {
          show: true,
          feature: {
            mark: {
              show: true
            },
            dataView: {
              show: true,
              readOnly: true
            },
            magicType: {
              show: false,
              type: ["line", "bar"]
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            }
          },
          right: "50"
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: dateTime
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "°C"
          }
        ],
        series: [
          {
            name: "最高气温",
            type: "line",
            data: highT
          },
          {
            name: "最低气温",
            type: "line",
            data: lowT
          }
        ],
        color:['red','blue']
      };
      let myChart = this.$echarts.init(document.getElementById("lineChart"));
      myChart.setOption(Option)
    }
  }
};
</script>
<style>
#lineChart {
  height: 100%;
  width: 100%;
}
</style>
