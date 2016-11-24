
        
export default {
    beforeCreate:function(){
        console.warn("beforeCreate in foo")
        console.warn("data:"+this.$data)
        
    },
    created:function(){
        console.warn("created in foo")
        console.warn("data:"+this.$data.foo)
        this.foo="new foo" 
        console.warn("data:"+this.$data.foo)
        
    },
    beforeMount:function(){
        console.warn("beforeMount in foo")
        console.warn("data:"+this.$data)   
    },
    mounted:function(){
        console.warn("mounted in foo")
        console.warn("data:"+this.$data)   
    },
    beforeUpdate:function(){
        console.warn("beforeUpdate in foo")
        console.warn("data:"+this.$data)   
    },
    updated:function(){
        console.warn("updated in foo")
        console.warn("data:"+this.$data)   
    },
    activated:function(){
        console.warn("activated in foo")
        console.warn("data:"+this.$data)   
    },
    deactivated:function(){
        console.warn("deactivated in foo")
        console.warn("data:"+this.$data)   
    },
    beforeDestroy:function(){
        console.warn("beforeDestroy in foo")
        console.warn("data:"+this.$data)   
    },
    destroyed:function(){
        console.warn("destroyed in foo")
        console.warn("data:"+this.$data)   
    },
    //数据选项
    data:function(){
        console.warn("I am data")
        var newfoo="new foo"
        
        return{
            foo:newfoo
        }

    },
    watch:{
        "$data":function(){
            console.warn("data is update")
        },
        "$route":function(){
            console.warn("route is update")
        }
    },
    methods:{
        init:function(){
            console.warn("I am methods in init")
        }
    },

    //router 钩子
    beforeRouteEnter:function(to, from, next){
        console.warn("beforeRouteEnter in foo")
        next()  
    },
    beforeRouteLeave:function(to, from, next){
        console.warn("beforeRouteLeave in foo")
        next()  
    }
}