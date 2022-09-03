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


function/* currying(fn,length){
    length=length||fn.length
    return function (...args){
        if(args.length>=length){
            return fn.apply(this,args)
        }else{
            return currying(fn.bind(this,...args),length-args.length)
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







