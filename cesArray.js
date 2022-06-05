const Array=require('./NativeJs/Array')


// at方法测试
var arr=[2,3,4,5,1]
console.log(arr.myAt(0))
console.log(arr.myAt(1))
console.log(arr.myAt(-1))
console.log(arr.myAt('0'))
console.log(arr.myAt('1'))
console.log(arr.myAt('-1'))
console.log(arr.myAt('null'))
console.log(arr.myAt(null))
console.log(arr.myAt(undefined))
console.log(arr.myAt('undefined'))
console.log(arr.myAt('true'))
console.log(arr.myAt(true))
console.log(arr.myAt('false'))
console.log(arr.myAt(false))
console.log(arr.myAt(NaN))
console.log(arr.myAt('NaN'))


//