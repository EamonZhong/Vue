<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" class="pos-order" id="order-list">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="goodsName" label="商品"></el-table-column>
              <el-table-column prop="count" label="数量" width="50"></el-table-column>
              <el-table-column prop="price" label="金额" width="70"></el-table-column>
              <el-table-column label="操作" width="100" fixed="right">
                <template scope="scope">
                  <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                  <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="totalDiv">
              <small>数量：</small>
              <strong>{{totalCount}}</strong> &nbsp;&nbsp;&nbsp;&nbsp;
              <small>总计：</small>
              <strong>{{totalMoney}}</strong> 元
            </div>
            <div class="div-btn">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger" @click="delAllGoods">删除</el-button>
              <el-button type="success" @click="checkout">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">
          </el-tab-pane>
          <el-tab-pane label="外卖">
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17">
        <div class="often-goods">
          <div class="title">常用商品</div>
          <div class="often-goods-list">
            <ul>
              <li v-for="goods in oftenGoods" :key="goods.goodsId" @click="addOrderList(goods)">
                <span>{{goods.goodsName}}</span>
                <span class="o-price">￥{{goods.price}}元</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <ul class='cookList'>
                <li v-for="goods in type0Goods" :key="goods.goodsId" @click="addOrderList(goods)">
                  <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">￥{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="小食">
              <ul class='cookList'>
                <li v-for="goods in type1Goods" :key="goods.goodsId" @click="addOrderList(goods)">
                  <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">￥{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <ul class='cookList'>
                <li v-for="goods in type2Goods" :key="goods.goodsId" @click="addOrderList(goods)">
                  <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">￥{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <ul class='cookList'>
                <li v-for="goods in type3Goods" :key="goods.goodsId" @click="addOrderList(goods)">
                  <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">￥{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </div>

      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'pos',
  data() {
    return {
      tableData: [],
      oftenGoods: [],
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: [],
      totalMoney: 0,
      totalCount: 0
    }
  },
  mounted: function() {
    var orderHeight = document.body.clientHeight;
    document.getElementById('order-list').style.height = orderHeight + 'px';
  },
  created() {
    axios.get('http://jspang.com/DemoApi/oftenGoods.php')
      .then(response => {
        console.log(response);
        this.oftenGoods = response.data;
      })
      .catch(error => {
        console.log(error);
        alert('网络错误，不能访问');
      })
    axios.get('http://jspang.com/DemoApi/typeGoods.php')
      .then(response => {
        console.log(response);
        //this.oftenGoods=response.data;
        this.type0Goods = response.data[0];
        this.type1Goods = response.data[1];
        this.type2Goods = response.data[2];
        this.type3Goods = response.data[3];
      })
      .catch(error => {
        console.log(error);
        alert('网络错误，不能访问');
      })
  },
  methods: {
    addOrderList(goods) {
      this.totalMoney = 0;
      this.totalCount = 0;
      //商品是否已经存在于订单列表中
      let isHave = false;
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].goodsId == goods.goodsId) {
          isHave = true
        }
      }
      //根据判断的值编写业务逻辑
      if (isHave) {
        let arr = this.tableData.filter(o => o.goodsId == goods.goodsId);
        arr[0].count++;
      } else {
        let newGoods = { goodsId: goods.goodsId, goodsName: goods.goodsName, price: goods.price, count: 1 }
        this.tableData.push(newGoods)
      }
      this.getAllMoney()
    },
    //删除单个商品
    delSingleGoods(goods) {
      this.tableData = this.tableData.filter(o => o.goodsId != goods.goodsId)
      this.getAllMoney();
    },
    //删除全部商品
    delAllGoods(){
      this.tableData=[];
      this.totalCount=0;
      this.totalMoney=0;
    },
    //汇总数量和金额
    getAllMoney() {
      this.totalCount = 0;
      this.totalMoney = 0;
      if (this.tableData) {
        this.tableData.forEach((e) => {
          this.totalCount += e.count;
          this.totalMoney += e.price * e.count;
        })
      }
    },
    //模拟结账
    checkout(){
      if(this.totalCount!=0){
        this.tableData=[];
        this.totalCount=0;
        this.totalMoney=0;
        this.$message({
          message:'结账成功！感谢你又为店里除了一份力',
          type:'success'
        })
      }else{
        this.$message.error("不能空结，老板理解你急切的心情")
      }
    }
  }
}
</script>

<style scoped>
.pos-order {
  background-color: #F9FAFC;
  border-right: 1px solid #C0CCDA;
  height: 100%;
}

.div-btn {
  margin-top: 10px;
}

.title {
  height: 20px;
  border-bottom: 1px solid #D3DCE6;
  background-color: #F9FAFC;
  padding: 10px;
  text-align: left;
}

.often-goods-list ul li {
  padding: 0px;
  margin: 0px;
  list-style: none;
  float: left;
  border: 1px solid #E5E9F2;
  padding: 10px;
  margin: 10px;
  background-color: #fff;
  cursor: pointer;
}

.o-price {
  color: #58B7FF;
}

.goods-type {
  clear: both;
}

.cookList li {
  list-style: none;
  width: 23%;
  border: 1px solid #E5E9F2;
  height: auot;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
  cursor: pointer;
}

.cookList li span {
  display: block;
  float: left;
}

.foodImg {
  width: 40%;
}

.foodName {
  font-size: 18px;
  padding-left: 10px;
  color: brown;
}

.foodPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}

.totalDiv {
  background-color: #fff;
  padding: 10px;
  border-bottom: 1px solid #D3DCE6;
}
</style>

