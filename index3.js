/*const Array=require('./NativeJs/Array')

//检测数组


//push方法
let obj=[1,2,3,3,3,3,3,2]
// console.log(obj.__proto__.constructor)
let obj1=obj.unique()
console.log(obj1)*/
const methods=require('./NativeJs/methods')

//柯里化
/*function add(a) {
    function sum(b) { // 使用闭包
        a = a + b; // 累加
        return sum;
    }
    sum.toString = function() { // 重写toString()方法
        return a;
    }
    return sum; // 返回一个函数
}

console.log(add(1)==1)
add(1)(2);  // 3
add(1)(2)(3); // 6
add(1)(2)(3)(4); // 10*/

/*
function currying(fn,length){
    length=length||fn.length
    return function (...args){
        if(args.length>=length){
            return fn.apply(this,args)
        }else {
            return currying(fn.bind(this, ...args), length - args.length)
        }
    }
}
const fn=currying(function (a,b,c){
    console.log([a,b,c])
})
fn("a", "b", "c") // ["a", "b", "c"]
fn("a", "b")("c") // ["a", "b", "c"]
fn("a")("b")("c") // ["a", "b", "c"]
fn("a")("b", "c")*/

//call
Function.prototype.Mycall=function(context){
   var obj=context==undefined?window:Object(context);
   var fn=Symbol()
   obj[fn]=this
   var args=[...arguments].slice(1)
   var result=obj[fn](...args)
   delete obj[fn]
   return result
}

//apply
Function.prototype.MyApply=function (context,array) {
    var obj=context==undefined?window:Object(context)
    var fn=Symbol()
    obj[fn]=this
    var result
    if(!array){
        result=obj[fn]()
    }else{
        result=obj[fn](...array)
    }
    delete obj[fn]
    return result
}

//bind
/*Function.prototype.MyBind=function (context) {
    let args=[].slice.call(arguments,1)
    let self=this
    var fNOP=function () {

    }
    var newFn=function() {
       let newArags=[].slice.call(arguments)
       return self.apply(this instanceof  fNOP ?this:context,args.concat(newArags))
    }
    fNOP.prototype=this.prototype
    newFn.prototype=new fNOP()
    return newFn
};
var value=2;
var foo={
    value:1
}
function bar(name,age){
    this.habit='shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}
bar.prototype.friend='kevin';
var bindFoo=bar.bind(foo,'daisy');
var obj=new bindFoo('18')
console.log(obj.habit);
console.log(obj.friend);*/


//new
/*function newFactory(){
   var obj=new Object()
   const Constructor=[].shift.call(arguments)
   obj.__proto__=Constructor.prototype
   var ret=Constructor.apply(obj,arguments)
   return typeof ret==='object'?ret:obj
}*/


//防抖
/*function debounce(func,wait){
    var timeout;
    return function(){
       var args=arguments
       let context=this
       clearTimeout(timeout)
       timeout=setTimeout(function () {
            func.apply(context,args)
       },wait)
    }
}*/

//节流
/*function throttle(func,wait){
   var timeout;
   return function () {
        var args=arguments
       var context=this
       if(!timeout){
           timeout=setTimeout(function () {
                    timeout=null
                    func.apply(context,args)
           },wait)
       }
   }
}*/

//浅拷贝

/*function clone(target){
    if(typeof target !=='object'){
        return target
    }
    var newTarget=target instanceof Array?[]:{}
    for(var obj in target){
        if(target.hasOwnProperty(obj)){
            newTarget[obj]=target[obj]
        }
    }
    return newTarget
}

let arr=[1,[1,2]]
let arr1=clone(arr)
arr1[0]=2
arr1[1][0]=2
console.log(arr,arr1)*/

//深拷贝
/*function deepClone(target,hash=new WeakMap()){
    if(typeof target!=='object'){
        return target
    }
    if(target instanceof RegExp){
        return new RegExp(target)
    }
    /!*if(target instanceof HTMLElement){
        return target
    }*!/
    if(target instanceof  Date){
        return new Date(target)
    }
    if(hash.has(target)){
        hash.get(target)
    }
    var newTarget=new target.constructor()
    hash.set(target,newTarget)
    Reflect.ownKeys(target).forEach(item=>{
        newTarget[item]=deepClone(target[item],hash)
    })
    return newTarget

}
let arr=[1,[1,2]]
let arr1=deepClone(arr)
arr1[0]=2
arr1[1][0]=2
console.log(arr,arr1)*/


//数组扁平化
/*Array.prototype.Myflat=function (depth=1) {
    const result=[];
    (function eachFlat(arr,depth) {
        arr.forEach(item=>{
            if(Array.isArray(item)&&depth>0){
                eachFlat(item,depth-1)
            }else{
                result.push(item)
            }
        })
    })(this,depth)
    return result
}

var arr=[1,[1,[2,3]]]
console.log(arr.Myflat(2))*/


//偏函数
/*function partial(fn){
    var args=[].slice.call(arguments,1)
    return function () {
        var newArags=[].slice.call(arguments)
        return fn.apply(this,args.concat(newArags))
    }
}

function add(a,b){
    return a+b+this.value
}
var value=1
var addOne=partial(add,1)
var obj={
    value:2,
    addOne:addOne
}
console.log(obj.addOne(2))*/


//函数组合
/*function compose() {
   var args=arguments
    var start=args.length-1
    return function () {
        var i=start
        var result=args[start].apply(this,arguments)
        while(i--){
            result=args[i].call(this,result)
        }
        return result
    }
}


var toUpper=function (x) {
    return x+'b'
}
var hello=function (x) {
    return 'HELLO,'+x
}
var greet=compose(hello,toUpper)
console.log(greet('kevin'))*/

//函数记忆
/*function memoize(func,hasher) {
    var memoized=function (key) {
        var cache=memoized.cache
        var address=''+(hasher?hasher.apply(this,arguments):key)
        if(!cache[address]){
            cache[address]=func.apply(this,arguments)
        }
        return cache[address]
    }
    memoized.cache={}
    return memoized
}


var count=0;
var fibnacci=function (n) {
  count++
  return n<2?n:fibnacci(n-1)+fibnacci(n-2);
}
fibnacci=memoize(fibnacci)
for(var i=0;i<=10;i++){
 fibnacci(i)
}
console.log(count)*/


//函数递归
/*function factorial(n,res){
    if(n==1){
        return res
    }
    return factorial(n-1,n*res)
}
function f(fn,m) {
    return function (n) {
        return fn.call(this,n,m)
    }
}
var newFactorial=f(factorial,1)
console.log(newFactorial(4))*/

//乱序
/*function shuffle(arr) {
    let m=arr.length
    while(m>1){
        let index=Math.floor(Math.random()*m--);
        [arr[m],arr[index]]=[arr[index],arr[m]]
    }
    return arr
}
console.log(shuffle([1,2,3,5]))*/


/*//函数柯里化
// function curry1(fn,arity,args){
//     var arity=arity||fn.length;
//     var args=args||[];
//     return function () {
//         var newArgs=[].slice.call(arguments);
//         [].push.apply(args,newArgs)
//         if(newArgs.length<arity){
//             arity=arity-newArgs.length
//             return curry1(fn,arity,args)
//         }else{
//             return fn.apply(this,args)
//         }
//     }
//
// }
// function add(a,b,c,d) {
//     return a*b*c*d
// }
// var addCurry=curry1(add)
// console.log(addCurry(1)(2)(3)(4,5))
// // console.log(addCurry(1,2)(3)(4,5))
// // console.log(addCurry(1,2,3)(4,5))
// // console.log(addCurry(1,2,3,4,5))*/


//对象添加迭代器
/*let obj={
    data:['hello','world'],
    [Symbol.iterator](){
        var self=this;
        let index=0;
        return {
            next(){
                if(index<self.data.length){
                    return {
                        value:self.data[index++],
                        done:false
                    }
                }else{
                    return {
                        value:undefined,
                        done: true
                    }
                }
            }
        }
    }
}
for(let i of obj){
    console.log(i)
}*/


// ajax原理
/*function ajax(url,data,callback){
    var request=new XMLHttpRequest()
    request.open('GET',url)
    request.onreadystatechange=function () {
        if(request.readyState===4&&callback){
            callback(request)
        }
    }
    request.setRequestHeader('Content-type','application/json')
    request.send(JSON.stringify(data))
}*/

//事件委托
/*    <ul id="ul">
        <li>111</li>
        <li>222</li>
        <li>333</li>
        <li>444</li>
    </ul>*/
/*window.onload=function(){
    var oUl=document.getElementById('ul')
    oUl.onclick=function (ev) {
        var ev=ev||window.event
        var target=ev.target||ev.srcElement
        if(target.nodeName.toUpperCase()==='li'){
            console.log(target.innerHTML)
        }
    }
}*/


//Object.is 底层实现
/*
Object.Myis=function (a,b) {
    if(a===b){
        return a!==0||1/a===1/b
    }
    return a!==a&&b!==b
}
console.log(Object.Myis(NaN,NaN))
*/

/*var f=(
    function f(){
        return '1'
    },
        function g() {
            return 2;
        }
)()
console.log(typeof f)
methods.doAdd(10,10);
methods.doAdd(20);*/

/*const urlMap = {}
function getHttp(url) {
    const xhr = new XMLHttpRequest()
    var method = "GET"
    if (urlMap[url]) {
        urlMap[url] = urlMap[url] + 1
    } else {
        urlMap[url] = 1
    }
    xhr.open(method, url, true);

    xhr.send({ age: 90 });
    xhr.onreadystatechange = (state) => {
        if (xhr.readyState === 4 && (xhr.status === 200)) {
            // 请求成功了就删除记录
            delete urlMap[url]
            console.log(xhr.responseText);
        }
    }
    if (urlMap[url] !== 1) {
        // 说明之前已经请求了、无需再请求
        xhr.abort()
    }
}*/
// 取消请求
/*function send() {
    let cancel = null;
    return function () {
        if(cancel !== null) {
            cancel();
        }
        axios.request({
            method: 'GET',
            url: '/xxxx',
            cancelToken: new axios.CancelToken((c)=> {
                cancel = c;
            })
        }).then((respone)=> {
            console.log(respone)
            // 处理完成 初始化null
            cancel = null;
        })
    }
}*/
