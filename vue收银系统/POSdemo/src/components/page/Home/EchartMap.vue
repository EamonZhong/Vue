<template>
    <div id="mapChart"></div>
</template>
<script>
var jsonp = require("jsonp");
import "../../.././../static/js/china";
export default {
  data() {
    return {
      lng:0,
      lat:0
    };
  },
  created() {
    let _this = this
    jsonp(
      "http://api.map.baidu.com/geocoder/v2/?output=json&ak=G3fra2VAWRazwSj4AnIAB1zahVjNZYjd&address=北京",
      null,
      function(err, response) {
        if (err) {
          console.error(err.message);
        } else {
          console.log(response);
          _this.lng = response.result.location.lng;
          _this.lat = response.result.location.lat;
        }
      }
    );
  },
  mounted() {
    var timer = setTimeout(function(){
      this.drawmap();
    }.bind(this),300)    
  },
  methods: {
    drawmap() {
      let _this = this;
      let myChart = this.$echarts.init(document.getElementById("mapChart"));
      var Option = {
        title: {
          text: "定位城市-北京",
          left: "center",
          textStyle: {
            color: "#000"
          }
        },
        tooltip: {
          trigger: "item"
        },
        geo: {
          map: "china",
          label: {
            emphasis: {
              show: false
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: "#323c48",
              borderColor: "#111"
            },
            emphasis: {
              areaColor: "#2a333d"
            }
          }
        },
        series: [
          {
            name: "地址",
            type: "scatter",
            coordinateSystem: "geo",
            data: [
              {
                name: "北京",
                value: [_this.lng, _this.lat]
              }
            ],
            symbolSize: function(val) {
              return 10;
            }
          }
        ]
      };
      myChart.setOption(Option)
    }
  }
};
</script>
<style>
#mapChart {
  height: 100%;
  width: 100%;
}
</style>
