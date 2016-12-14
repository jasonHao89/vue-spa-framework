export class Route extends Object{
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
  //最近团期对象
  closest = () => {
    const now=new Date().format('yyyyMMdd')
    return this.period().find((ele)=>{return new Date(ele.date).format('yyyyMMdd')>=now})
  }
}