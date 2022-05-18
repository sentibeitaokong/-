

Array.prototype.myPush=function(){
    for(let i=0;i<arguments.length;i++){
        this[this.length]=arguments[i]
    }
    return this.length
}
Array.prototype.myPop=function(){
   let obj=this[this.length-1]
    this.length-=1
    return obj
}
module.exports=Array