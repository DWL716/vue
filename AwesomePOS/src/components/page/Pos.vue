<template>
    <div class="pos">
        <el-row>
            <el-col :span='7' class="pos-order" id="order-list">
                <el-tabs>
                    <el-tab-pane label="点餐">
                        <el-table :data="tableData" border style="width: 100%">
                            <el-table-column prop="goodsName" label="商品名称"></el-table-column>
                            <el-table-column prop="count" label="数量" width="50px"></el-table-column>
                            <el-table-column prop="price" label="金额" width="70px"></el-table-column>
                            <el-table-column label="操作" width="100px" fixed="right">
                                <template scope="scope">
                                    <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                                    <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="totaleDiv"><small>数量:</small>{{totalCount}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <small>金额:</small>{{totalMoney}}</div>
                        <div class="div-btn">
                            <el-button type="warning">挂单</el-button>
                            <el-button type="danger" @click="delAllGoods()">删除</el-button>
                            <el-button type="success">结账</el-button>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="挂单">挂单</el-tab-pane>
                    <el-tab-pane label="外卖">外卖</el-tab-pane>
                </el-tabs>
            </el-col>
            <el-col :span='17'>
                <div class="often-goods">
                    <div class="title">常用商品</div>
                    <div class="often-goods-list">
                        <ul>
                            <li v-for= 'goods of oftenGoods' @click="addOrderList(goods)">
                                <span>{{goods.goodsName}}</span>
                                <span class="o-price">¥{{goods.price}}元</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="goods-type">
                   <el-tabs>
                       <el-tab-pane label="汉堡">
                           <div>
                               <ul class="cookList">
                                   <li v-for="type0 in type0Goods" @click="addOrderList(type0)">
                                       <span class="foodImg">
                                           <img width="100%" src="type0.goodsImg" alt="">
                                        </span>
                                       <span class="foodName">{{type0.goodsName}}</span>
                                       <span class="foodPrice">¥{{type0.price}}元</span>
                                   </li>
                               </ul>
                           </div>
                       </el-tab-pane>
                       <el-tab-pane label="饮料">
                           <div>
                               <ul class="cookList">
                                   <li v-for="type0 in type0Goods">
                                       <span class="foodImg">
                                           <img width="100%" src="type0.goodsImg" alt="">
                                        </span>
                                       <span class="foodName">{{type0.goodsName}}</span>
                                       <span class="foodPrice">¥{{type0.price}}元</span>
                                   </li>
                               </ul>
                           </div>
                       </el-tab-pane>
                       <el-tab-pane label="小食">
                           <div>
                               <ul class="cookList">
                                   <li v-for="type0 in type0Goods">
                                       <span class="foodImg">
                                           <img width="100%" src="type0.goodsImg" alt="">
                                        </span>
                                       <span class="foodName">{{type0.goodsName}}</span>
                                       <span class="foodPrice">¥{{type0.price}}元</span>
                                   </li>
                               </ul>
                           </div>
                       </el-tab-pane>
                       <el-tab-pane label="套餐">
                           <div>
                               <ul class="cookList">
                                   <li v-for="type0 in type0Goods">
                                       <span class="foodImg">
                                           <img width="100%" src="type0.goodsImg" alt="">
                                        </span>
                                       <span class="foodName">{{type0.goodsName}}</span>
                                       <span class="foodPrice">¥{{type0.price}}元</span>
                                   </li>
                               </ul>
                           </div>
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
    name:'pos',
    data() {
        return {
            tableData: [],
        oftenGoods:[],
        totalCount:0,
        totalMoney:0,
        type0Goods:[
          {
              goodsId:1,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
              goodsName:'和风汉堡',
              price:15
          }, {
              goodsId:4,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'快乐全家桶',
              price:80
          }, {
              goodsId:5,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
              goodsName:'魔法鸡块',
              price:20
          }, {
              goodsId:7,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:8,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'雪顶咖啡',
              price:18
          }, {
              goodsId:9,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'大块鸡米花',
              price:15
          }, {
              goodsId:20,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'香脆鸡柳',
              price:17
          }
      ],
        }
    },
    created:function() {
        axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods')
        .then(response=>{
            console.log(11)
            console.log(response);
            this.oftenGoods=response.data;
            //alert('成功')
        })
        .catch(error=>{
            console.log(error);
            alert('网络错误，不能访问')
        })
    }, 
        mounted:function() {
           var orderHeigth = document.body.clientHeight;
           var thmm = document.getElementById("label")
           
           console.log(thmm);
           document.getElementById("order-list").style.height=orderHeigth+"px"
           
           
        },
        methods:{
            addOrderList(goods) {
               //商品是否已经存在列表中
               let isHave = false;
               for(let i=0; i<this.tableData.length; i++){
                   if(this.tableData[i].goodsId == goods.goodsId) {
                       isHave = true
                   }
               };
               //根据判断的值编写业务逻辑
               if(isHave) {
                   //改变列表中商品数量
                   let arr = this.tableData.filter(o => o.goodsId == goods.goodsId);
                   arr[0].count++;
                   console.log(this.tableData)
               }else{
                   let newGoods = {goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1}
                   this.tableData.push(newGoods)
               }

               this.getAllMoney()
            },
            //汇总数量和金额
            getAllMoney() {
            this.totalCount = 0;
            this.totalMoney = 0;
            if (this.tableData) {
                this.tableData.forEach((element) => {
                    this.totalCount += element.count;
                    this.totalMoney = this.totalMoney + (element.price * element.count);
                });
            }
            },
            delSingleGoods(goods) {
                var arr = this.tableData = this.tableData.filter(o=>o.goodsId != goods.goodsId);
                   this.getAllMoney()     
            },
            delAllGoods() {
                this.tableData = [];
                this.totalCount = 0;
                this.totalMoney = 0;
            }
        }
    
}
</script>

<style scoped>
.pos {
   font-size: 12px;
}

.totaleDiv {
    background-color: #fff;
    margin: 10px 0;
    padding-bottom: 10px;
    border-bottom: 1px solid #D3DCE6;
}
span {
    cursor: pointer;
}
.pos-order {
    background-color: #F9FAFC;
    border-right: 1px solid #C0CCDA;
    
}
.div-btn {
    margin-top: 25px;
}

.title {
    height: 20px;
    border-bottom: 1px solid #D3DCE6;
    background-color: #F9FAFC;
    padding: 10px;
}

.often-goods-list ul li {
    list-style: none;
    float: left;
    border: 1px solid #E5E9F2;
    padding: 10px;
    margin: 5px;
    background-color: #fff;
}

.o-price {
    color:#58B7ff;
}

.goods-type {
    clear: both;
}

.cookList li{
       list-style: none;
       width:23%;
       border:1px solid #E5E9F2;
       height: auot;
       overflow: hidden;
       background-color:#fff;
       padding: 2px;
       float:left;
       margin: 2px;
   }
   .cookList li span{
        display: block;
        float:left;
        cursor: pointer;
   }
   .foodImg{
       width: 40%;
   }
   .foodName{
       font-size: 18px;
       padding-left: 10px;
       color:brown;
   }
   .foodPrice{
       font-size: 16px;
       padding-left: 10px;
       padding-top:10px;
   }
</style>
