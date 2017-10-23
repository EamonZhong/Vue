<template>
  <el-row class="weather">
    <el-col :span="24">
      <h1>欢迎您进入POS系统，关注天气变化，祝您工作顺利</h1>
    </el-col>
    <el-col :span="24" class="weather-card">
      <ul class="box-weather">
        <li v-for="(val ,item) in Weadata" :key="item">
          <h3>{{val.date}}</h3>
          <p>{{val.type}}</p>
          <p>{{val.high}}</p>
          <p>{{val.low}}</p>
          <p>风向：{{val.fengxiang}}</p>
        </li>          
      </ul>
    </el-col>
    <el-col :span="12" class="show-charts" style="height:50%">
       <chartline :data1="linedata"></chartline>
    </el-col>
    <el-col :span="12" class="show-charts" style="height:50%">
        <chartmap></chartmap>
    </el-col>
  </el-row>
</template>
<script>

import chartline from './Echartline'
import chartmap from './EchartMap'
var jsonp = require('jsonp');


export default {
  data() {
    return {
      Weadata:[],
      linedata:{
        highT:[],
        lowT:[],
        dateTime:[]
      },   
    }
  },
  components:{
    chartline,
    chartmap
  },
  created() {
    let _this=this;
    jsonp('http://wthrcdn.etouch.cn/weather_mini?city=北京', null, function(err, response) {
      if (err) {
        console.error(err.message);
      } else {
        _this.Weadata = response.data.forecast
        response.data.forecast.forEach((e,i)=>{
          _this.linedata.highT.push(parseFloat(e.high.replace(/[\u4E00-\u9FA5]|'℃'/g,'')));
          _this.linedata.lowT.push(parseFloat(e.low.replace(/[\u4E00-\u9FA5]|'℃'/g,'')));
          _this.linedata.dateTime.push(parseFloat(e.date)+'日');
        })
      }
    });
  }
}
</script>
<style>
.weather {
  height: 100%;
}

.weather-card{
  height: 40%;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.box-weather {
  height: 50%;
  margin-top: 10px;
  display: flex;
  flex-wrap: no-wrap;
  justify-content:space-around;
}

.box-weather li {
  width: 200px;
  flex: 200px 0 0;
  height: 250px;
  background: #20A0FF;
  border: 1px solid #000;
  border-radius: 10%;
}

.box-weather h3 {
  height: 30px;
  line-height: 30px;
  width: 100%;
  text-align: center;
}

.box-weather p {
  text-align: center;
}
</style>
