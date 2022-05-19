// 原数组修改方法： push/pop/splice/sort/reverse/shift/unshift
// push方法  功能：将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
Array.prototype.myPush=function(){
    for(let i=0;i<arguments.length;i++){
        this[this.length]=arguments[i]
    }
    return this.length
}

// pop 方法 功能：从数组中删除最后一个元素，并返回该元素的值。此方法会更改数组的长度。
Array.prototype.myPop=function(){
   let obj=this[this.length-1]
    this.length-=1
    return obj
}

// unshift方法  功能：将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)
Array.prototype.myUnshift=function(){
    var pos=0
    for(let i=0;i<arguments.length;i++){
        this.splice(pos,0,arguments[i])
        pos++
    }
    return this.length

}

// unique  功能：数组去重
Array.prototype.unique=function(){
   let temp={}
    let newArr=[]
    for(let i=0;i<this.length;i++){
        if(!temp.hasOwnProperty(this[i])){
            temp[this[i]]=this[i]
            newArr.push(this[i])
        }
    }
    return newArr
}
module.exports=Array