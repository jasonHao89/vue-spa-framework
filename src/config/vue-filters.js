import Vue from 'vue'
import {Route} from '../config/classes.js'
export default (()=>{
    Vue.filter('date_format',(value,format)=>{
        const date=new Date(value)
        return date.format(format)
    })
    Vue.filter('hide',()=>{
        return ''
    })
    Vue.filter('Route',(route)=>{
        route=new Route(route)
        return ''
    })
})()