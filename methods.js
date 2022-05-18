// 浅拷贝
function clone (target) {
    let newTarget={}
    for( let prop in target){
        if(target.hasOwnProperty(prop)){
            newTarget[prop]=target[prop]
        }
    }
    return newTarget
}

// 深拷贝
function deepClone (target,hash=new WeakMap()) {
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

}
module.exports={clone,deepClone}