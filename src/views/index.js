export default {
    beforeCreate:function(){
        console.warn("beforeCreate in index")
    },
    created:function(){
        console.warn("created in index")        
    },
    beforeMount:function(){
        console.warn("beforeMount in index")
    },
    mounted:function(){
        console.warn("mounted in index")
    },
    beforeUpdate:function(){
        console.warn("beforeUpdate in index")
    },
    updated:function(){
        console.warn("updated in index")
    },
    activated:function(){
        console.warn("activated in index")
    },
    deactivated:function(){
        console.warn("deactivated in index")
    },
    beforeDestroy:function(){
        console.warn("beforeDestroy in index")
    },
    destroyed:function(){
        console.warn("destroyed in index")
    }
}