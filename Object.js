
const MyObject=Object.create(null)

// Object.is()函数底层实现     功能：主要是判断两个值是否是同值相等
MyObject.is=function (a,b) {
    if(a===b){
        return a!==0||1/a===1/b;
    }
    // 当a、b为NaN时
    return a!==a&&b!==b
}


// Object.entries()函数底层实现    功能：返回一个给定对象自身可枚举属性的键值对数组，原型上的属性属于不可枚举属性
// 其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环还会枚举原型链中的属性）
MyObject.entries=function(arg){
    //判断是数组
    if(Array.isArray(arg)){
        return arg.map((item,index)=>[`${index}`,item])
    }
    //判断是对象
    if(Object.prototype.toString.call(arg)===`[object Object]`){
        return Object.keys(arg).map(item=>[item,arg[item]])
    }
    if(typeof arg==='number'){
        return []
    }
    throw '无法将参数转换为对象'

}

// Object.fromEntries()函数底层实现  功能：把键值对列表转换为一个对象。
MyObject.fromEntries=function(arg){
    //判断是不是Map类型
    if(Object.prototype.toString.call(arg)===`[object Map]`){
        const resMap={}
        for(const item of arg.keys()){
            resMap[item]=arg.get(item)
        }
        return resMap
    }
    //判断是不是Array
    if(Array.isArray(arg)){
        const resArr={}
        arg.map(([item,index])=>{
            resArr[item]=index
        })
        return resArr
    }
    throw  '参数不可编辑'
}

//Object.assign()函数实现  功能：用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。
MyObject.assign=function(target,...source){
    if(target==null){
        throw new TypeError('Cannot convert undefined or null to object')
    }
    let ret=Object(target)
    source.forEach(obj=>{
        if(obj!=null){
            for(let key in obj){
                if(Object.prototype.hasOwnProperty.call(obj, key)){
                    ret[key]=obj[key]
                }
            }
        }
    })
    return ret
   // MDN官方
   /* Object.defineProperty(Object, "assign", {
        value: function assign(target, varArgs) { // .length of function is 2
            'use strict';
            if (target === null || target === undefined) {
                throw new TypeError('Cannot convert undefined or null to object');
            }

            var to = Object(target);

            for (var index = 1; index < arguments.length; index++) {
                var nextSource = arguments[index];

                if (nextSource !== null && nextSource !== undefined) {
                    for (var nextKey in nextSource) {
                        // Avoid bugs when hasOwnProperty is shadowed
                        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
            return to;
        },
        writable: true,
        configurable: true
    });*/
}
//object.create()  功能：创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
MyObject.create = function (proto, propertiesObject) {
    if (typeof proto !== 'object' && typeof proto !== 'function') {
        throw new TypeError('Object prototype may only be an Object or null.')
    }
    if (propertiesObject == null) {
        new TypeError('Cannot convert undefined or null to object')
    }
    function F() {
    }
    F.prototype=proto
    const obj=new F()
    if(propertiesObject!=undefined){
        Object.defineProperties(obj,propertiesObject)
    }
    if(proto===null){
        obj.__proto__=proto
    }
    return obj
};

module.exports=MyObject



