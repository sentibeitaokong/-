//call()方法
Function.prototype.Mycall=function (context) {
    var context=Object(context)||window;
    context.fn=this
    var args=[]
    for(let i=0,len=arguments.length;i<len;i++){
        args.push(`arguments[${i}]`);
    }
    var result=eval(`context.fn(${args})`)
    delete context.fn
    return result
}

// apply方法
Function.prototype.MyApply=function (context,arr) {
    var context=Object(context)||window;
    context.fn=this
    var result
    // 当arr传参不是对象或者方法时，就报错
    if(typeof arr!=='object'&&typeof arr!=='function'&&typeof  arr!=='undefined'){
        throw new Error('CreateListFromArrayLike called on non-object')
    }
    if(!arr){
        result=context.fn()
    }else{
        var args=[]
        for(let i=0,len=arr.length;i<len;i++){
            args.push(`arr[${i}]`);
        }
        result=eval(`context.fn(${args})`)
    }

    delete context.fn
    return result
}
// bind方法
Function.prototype.MyBind=function (context) {
    var self=this
    var args=Array.prototype.slice.call(arguments,1)
    var fNOP=function () {
    }
    var newFn=function () {
        var bindArgs=Array.prototype.slice.call(arguments)
        // 判断是否this在fNOP的原型链上,如果在的话就说明是new实例化的对象，this指向实例化原型，否则指向context
        return self.apply(this instanceof fNOP?this:context,args.concat(bindArgs))
    }
    //js 圣杯模式 继承
    fNOP.prototype=this.prototype
    newFn.prototype=new fNOP()
    return newFn
}

// NativeJs.exports=Function