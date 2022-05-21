var methods={
    // 浅拷贝
    clone:function(target) {
        let newTarget={}
        for( let prop in target){
            if(target.hasOwnProperty(prop)){
                newTarget[prop]=target[prop]
            }
        }
        return newTarget
    },

    // 深拷贝
    deepClone:function(target,hash=new WeakMap()) {
        if(target===null) return target
        if (target instanceof Date) return new Date(target)
        if (target instanceof RegExp) return new RegExp(target)
        // if (target instanceof HTMLElement) return target // 处理 DOM元素
        if(typeof target!=='object') return target
        if(hash.get(target)){
            return hash.get(target)
        }
        const cloneTarget=new target.constructor()
        hash.set(target,cloneTarget)
        Reflect.ownKeys(target).forEach(key=>{
            cloneTarget[key]=deepClone(target[key],hash)
        })
        return cloneTarget
    },
    //new方法
    myNew:function () {
        var obj=new Object()
        var constructor=Array.prototype.shift.call(arguments)
        obj.__proto__=constructor.prototype
        var ret=constructor.apply(obj,arguments)
        return typeof ret==='object'?ret:obj
    },
    //instaceOf方法
    myInstaceOf:function (target,origin) {
        let proto=target.__proto__
        while(true){
            if(proto===null){
                return false
            }
            if(proto===origin.prototype){
                return true
            }
            proto=proto.__proto__
        }
    }
};

module.exports=methods
