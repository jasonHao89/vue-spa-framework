import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from './config/router'
import Resource from 'vue-resource'
import store from './store/store'
import 'jquery' // assets/jquery.js
import './config/ajax'
import 'jquery-validation'
import './assets/additional-methods.js'
import './config/date-extends'
import './config/vue-filters'

/* $ 已全局化, 因为eslint规范变量必须先声明在使用，所以请使用window.$
* 建议写法:
* var $ = window.$
* .........
*/

Vue.use(VueRouter)
Vue.use(Resource)
const router = Router(VueRouter, store)
new Vue({
  router,
  store
}).$mount('#app')


class Route extends Object{
  //构造函数
  constructor(route){
    super(route)
    this.route=route
  }
  //重新整理团期
  period = () => {
    if(this.periodArr===undefined)
    {
      let period =new Array()
      this.route.departureDate.forEach((element,index)=>{
        let periodObj=period.find((ele)=>{return ele.date===element.departDate})
        if(periodObj===undefined){
          periodObj=new Object()
          periodObj.date=element.departDate
          periodObj.inventory=element.inventory
          periodObj.lastUpdatedStamp=element.lastUpdatedStamp
          periodObj.price=new Object()
          periodObj.price[element.prefix]=new Object()
          periodObj.price[element.prefix].inner=element.innerPrice
          periodObj.price[element.prefix].outer=element.outerPrice
          periodObj.price[element.prefix].tac=element.tacPrice
          periodObj.price[element.prefix].special=element.specialPrice
          period.push(periodObj)
        }
        else{
          periodObj.price[element.prefix]=new Object()
          periodObj.price[element.prefix].inner=element.innerPrice
          periodObj.price[element.prefix].outer=element.outerPrice
          periodObj.price[element.prefix].tac=element.tacPrice
          periodObj.price[element.prefix].special=element.specialPrice
        }   
      })
      this.periodArr=period
    }
    return this.periodArr
  }
  recent(){
    
  }
  //最近团期对象
  closest = () => {
    const now=new Date().format('yyyyMMdd')
    return this.period().find((ele)=>{return new Date(ele.date).format('yyyyMMdd')>=now})
  }
}

const route =  new Route(
  {
      "immediatelyPay": "on",
      "routeCategroy": "NEARBY",
      "destination": "西安",
      "title": "洽川处女泉、黄河魂一日",
      "type": "ROUTE",
      "content": [
        {
          "subTraffic": "sdf",
          "subDining": "中餐,",
          "content": "fd",
          "day": 1,
          "lastUpdatedStamp": "2016-12-09T08:20:00+0000",
          "srcDst": "dsf",
          "subAccommodation": "sdf",
          "productId": "cp100900",
          "subPic": "/upload/image/20161209/1481267702892677890.png,"
        },
        {
          "subAccommodation": "sd",
          "day": 2,
          "srcDst": "sd",
          "subTraffic": "sd",
          "lastUpdatedStamp": "2016-12-09T08:20:00+0000",
          "subPic": "",
          "content": "sd",
          "productId": "cp100900",
          "subDining": "早餐,晚餐,"
        }
      ],
      "orgId": "100052",
      "cover": "/test/image/1.jpg",
      "feature": "fdfdf反对反对反对法大幅度发的关怀会更符合规范很过分",
      "attachment": "/fd/fd.txt*/fdss/fdfdd.txt*",
      "isSpecial": "N",
      "isPublic": "N",
      "state": "ON_SALE",
      "departureDate": [
        {
          "specialPrice": null,
          "outerPrice": 344,
          "innerPrice": 13,
          "productId": "cp100900",
          "prefix": "adult",
          "lastUpdatedStamp": "2016-12-09T08:20:00+0000",
          "departDate": "2016-12-15T16:00:00+0000",
          "priceName": null,
          "tacPrice": 333,
          "inventory": "5"
        },
        {
          "specialPrice": null,
          "tacPrice": 333,
          "lastUpdatedStamp": "2016-12-09T08:20:00+0000",
          "departDate": "2016-12-15T16:00:00+0000",
          "innerPrice": 3,
          "prefix": "child",
          "inventory": "5",
          "productId": "cp100900",
          "priceName": null,
          "outerPrice": 354
        },
        {
          "departDate": "2017-01-03T16:00:00+0000",
          "innerPrice": 1.2,
          "inventory": "1",
          "tacPrice": 343,
          "prefix": "adult",
          "productId": "cp100900",
          "outerPrice": 2,
          "lastUpdatedStamp": "2016-12-09T08:20:00+0000",
          "specialPrice": 2,
          "priceName": null
        },
        {
          "inventory": "1",
          "specialPrice": 2,
          "priceName": null,
          "tacPrice": 343,
          "lastUpdatedStamp": "2016-12-09T08:20:00+0000",
          "innerPrice": 9.2,
          "departDate": "2017-01-03T16:00:00+0000",
          "productId": "cp100900",
          "prefix": "child",
          "outerPrice": 29
        }
      ],
      "deadline": null,
      "routeType": null,
      "groupWay": "LOCAL",
      "covers": [
        "/test/image/1.jpg",
        "/test/image/2.jpg"
      ],
      "productId": "cp100900",
      "costDetail": "fdfdf反对反对反对法大幅度发的关怀会更符合规范很过分",
      "lead": 2,
      "labels": "测试标签",
      "isCustomize": "N",
      "reserveNotes": "fdfdf反对反对反对法大幅度发的关怀会更符合规范很过分",
      "createTime": "2016-12-09T08:20:00+0000",
      "days": 1,
      "attachmentName": "名单*反对法*",
      "departure": "10001"
    }
  )

console.warn(route.closest())
console.warn(route.period().find((ele)=>{return new Date(ele.date).format('yyyy-MM-dd')=='2016-12-16'}))
