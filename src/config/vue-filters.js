import Vue from 'vue'
export default (()=>{
    Vue.filter('date_format',(value,format)=>{
        const date=new Date(value)
        return date.format(format)
    })
})()