// 原数组修改方法： push/pop/splice/sort/reverse/shift/unshift
// push方法  功能：将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
Array.prototype.myPush = function () {
    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i]
    }
    return this.length
}

// pop 方法 功能：从数组中删除最后一个元素，并返回该元素的值。此方法会更改数组的长度。
Array.prototype.myPop = function () {
    let obj = this[this.length - 1]
    this.length -= 1
    return obj
}

// unshift方法  功能：将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)
Array.prototype.myUnshift = function () {
    var pos = 0
    for (let i = 0; i < arguments.length; i++) {
        this.splice(pos, 0, arguments[i])
        pos++
    }
    return this.length

}

// unique  功能：数组去重
Array.prototype.unique = function () {
    let temp = {}
    let newArr = []
    for (let i = 0; i < this.length; i++) {
        if (!temp.hasOwnProperty(this[i])) {
            temp[this[i]] = this[i]
            newArr.push(this[i])
        }
    }
    return newArr
}
// unique  功能：接收一个整数值并返回该索引的项目，允许正数和负数。负整数从数组中的最后一个项目开始倒数。
// 传入的参数true和false会被转换为1和0，string类型的数字会转换为数字作为数组索引访问，其他全部返回数组第一项.
Array.prototype.myAt = function (index) {
    if(typeof index==='boolean'){
        index=Number(index)
    }
    if(typeof index==='string'){
        let reg=/^[0-9-]*$/g
        if(reg.test(index)){
            index=Number(index)
        }
    }
    if(typeof index!=='number' || isNaN(index)){
        return this[0]
    }
    if (index >= 0) {
        return this[index]
    } else {
        return this[this.length + index]
    }
}
// concat方法 功能：用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组,浅拷贝现存数组old_array
//concat将对象引用复制到新数组中。 原始数组old_array和新数组new_array都引用相同的对象。 也就是说，如果引用的对象被修改，则更改对于新数组和原始数组都是可见的。 这包括也是数组的数组参数的元素。
//var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
Array.prototype.Myconcat=function (){
    let newArr=this.slice(0)
    Array.prototype.slice.apply(arguments).forEach(item=>{
        if(Array.isArray(item)){
            item.forEach(item1=>{
                newArr.push(item1)
            })
        }else{
            newArr.push(item)
        }
    })
    return newArr
}
// copWithin方法  功能：浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。
//copyWithin 方法不要求其 this 值必须是一个数组对象；除此之外，copyWithin 是一个可变方法，它可以改变 this 对象本身，并且返回它，而不仅仅是它的拷贝。
//MDN   //>>>  功能 ：所有非数值转换成0,所有大于等于 0 等数取整数部分     >>：有符号右移
Array.prototype.MycopyWithin = function(target, start/*, end*/) {
    // Steps 1-2.
    if (this == null) {
        throw new TypeError('this is null or not defined');
    }

    var O = Object(this);

    // Steps 3-5.

    var len = O.length >>> 0;

    // Steps 6-8.
    var relativeTarget = target >> 0;

    //负数:数组length+本身      正数:本身与数组长度取最小值
    var to = relativeTarget < 0 ?
        Math.max(len + relativeTarget, 0) :
        Math.min(relativeTarget, len);

    // Steps 9-11.
    var relativeStart = start >> 0;

    var from = relativeStart < 0 ?
        Math.max(len + relativeStart, 0) :
        Math.min(relativeStart, len);

    // Steps 12-14.
    // 没传end就取数组长度，否则取end
    var end = arguments[2];
    var relativeEnd = end === undefined ? len : end >> 0;

    var final = relativeEnd < 0 ?
        Math.max(len + relativeEnd, 0) :
        Math.min(relativeEnd, len);

    // Step 15.
    var count = Math.min(final - from, len - to);

    // Steps 16-17.
    var direction = 1;

    if (from < to && to < (from + count)) {
        direction = -1;
        from += count - 1;
        to += count - 1;
    }

    // Step 18.
    while (count > 0) {
        if (from in O) {
            O[to] = O[from];
        } else {
            delete O[to];
        }

        from += direction;
        to += direction;
        count--;
    }

    // Step 19.
    return O;
}

// entries()方法  功能：返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。



//every方法  功能：测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
// 如果为 every 提供一个 thisArg 参数，则该参数为调用 callback 时的 this 值。如果省略该参数，
// 则 callback 被调用时的 this 值，在非严格模式下为全局对象，在严格模式下传入 undefined。详见 this 条目。

Array.prototype.Myevery=function (fn,thisArg){
    if (this == null) {
        throw new TypeError('this is null or not defined')
    }
    if (typeof fn !== "function") {
        throw new TypeError(fn + ' is not a function')
    }
    const O = Object(this)
    const len = O.length >>> 0
    for(let i=0;i<len;i++){
        if (!fn.call(thisArg,this[i],i,this)) {
            return false
        }
    }
    return true
}
//fill方法    功能：用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引
//fill 方法接受三个参数 value, start 以及 end. start 和 end 参数是可选的，其默认值分别为 0 和 this 对象的 length 属性值。
//如果 start 是个负数，则开始索引会被自动计算成为 length+start, 其中 length 是 this 对象的 length 属性值。如果 end 是个负数，则结束索引会被自动计算成为 length+end。
//fill 方法故意被设计成通用方法，该方法不要求 this 是数组对象。
//fill 方法是个可变方法，它会改变调用它的 this 对象本身，然后返回它，而并不是返回一个副本。
//当一个对象被传递给 fill方法的时候，填充数组的是这个对象的引用。
//MDN
Array.prototype.Myfill=function (value){
    // Steps 1-2.
    if (this == null) {
        throw new TypeError('this is null or not defined');
    }

    var O = Object(this);

    // Steps 3-5.
    var len = O.length >>> 0;

    // Steps 6-7.
    var start = arguments[1];
    var relativeStart = start >> 0;

    // Step 8.
    var k = relativeStart < 0 ?
        Math.max(len + relativeStart, 0) :
        Math.min(relativeStart, len);

    // Steps 9-10.
    var end = arguments[2];
    var relativeEnd = end === undefined ?
        len : end >> 0;

    // Step 11.
    var final = relativeEnd < 0 ?
        Math.max(len + relativeEnd, 0) :
        Math.min(relativeEnd, len);

    // Step 12.
    while (k < final) {
        O[k] = value;
        k++;
    }

    // Step 13.
    return O;
}

// filter方法   功能：filter 为数组中的每个元素调用一次 callback 函数，
// 并利用所有使得callback 返回 true 或等价于 true 的值的元素创建一个新数组。
// callback 只会在已经赋值的索引上被调用，对于那些已经被删除或者从未被赋值的索引不会被调用。
// 那些没有通过 callback 测试的元素会被跳过，不会被包含在新数组中。
Array.prototype.Myfilter=function (fn,thisArg){
    if (this == null) {
        throw new TypeError('this is null or not defined')
    }
    if (typeof fn !== "function") {
        throw new TypeError(fn + ' is not a function')
    }
    const O = Object(this)
    const len = O.length >>> 0
    let result=[]
    for(let i=0;i<len;i++){
        let res=fn.call(thisArg,this[i],i,this)
        if(res){
            result.push(this[i])
        }
    }
    return result
}

//find方法    功能：返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
//在第一次调用 callback 函数时会确定元素的索引范围，因此在 find 方法开始执行之后添加到数组的新元素将不会被 callback 函数访问到。
// 如果数组中一个尚未被 callback 函数访问到的元素的值被 callback 函数所改变，那么当 callback 函数访问到它时，它的值是将是根据它在数组中的索引所访问到的当前值。
// 被删除的元素仍旧会被访问到，但是其值已经是 undefined 了。

Array.prototype.Myfind=function (fn,thisArg){
    if (this == null) {
        throw new TypeError('this is null or not defined')
    }
    if (typeof fn !== "function") {
        throw new TypeError(fn + ' is not a function')
    }
    const O = Object(this)
    const len = O.length >>> 0
    for(let i=0;i<len;i++){
        let res=fn.call(thisArg,this[i],i,this)
        if(res){
            return this[i]
        }
    }
    return undefined
}

//findIndex方法   功能：返回数组中找到的元素的值，而不是其索引。
//在第一次调用callback函数时会确定元素的索引范围，因此在findIndex方法开始执行之后添加到数组的新元素将不会被callback函数访问到。
// 如果数组中一个尚未被callback函数访问到的元素的值被callback函数所改变，那么当callback函数访问到它时，
// 它的值是将是根据它在数组中的索引所访问到的当前值。被删除的元素仍然会被访问到。
Array.prototype.MyfindIndex=function (fn,thisArg){
    if (this == null) {
        throw new TypeError('this is null or not defined')
    }
    if (typeof fn !== "function") {
        throw new TypeError(fn + ' is not a function')
    }
    const O = Object(this)
    const len = O.length >>> 0
    for(let i=0;i<len;i++){
        let res=fn.call(thisArg,this[i],i,this)
        if(res){
            return i
        }
    }
    return -1
}

// flat方法    功能：按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
//var newArray = arr.flat([depth]) depth 可选指定要提取嵌套数组的结构深度，默认值为 1。
// 扁平化数组 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
Array.prototype.Myflat=function (depth=1){
    const result=[];
    (function eachFlat(arr,depth){
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

// flatMap方法   功能:首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 连着深度值为 1 的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。
// 与map方法相同，但结构深度depth值为1
// 返回值 一个新的数组，其中每个元素都是回调函数的结果，并且结构深度 depth 值为 1.



//forEach方法    功能：对数组的每个元素执行一次给定的函数。返回值undefined 那些已删除或者未初始化的项将被跳过
//forEach() 为每个数组元素执行一次 callback 函数；与 map() 或者 reduce() 不同的是，它总是返回 undefined 值，
// 并且不可链式调用。其典型用例是在一个调用链的最后执行副作用（side effects，函数式编程上，指函数进行 返回结果值 以外的操作）。
//除了抛出异常以外，没有办法中止或跳出 forEach() 循环。如果你需要中止或跳出循环，forEach() 方法不是应当使用的工具。
// 若你需要提前终止循环，你可以使用：一个简单的 for 循环，for...of / for...in 循环
Array.prototype.MyforEach=function (fn,thisArg){
    if (this == null) {
        throw new TypeError('this is null or not defined')
    }
    if (typeof fn !== "function") {
        throw new TypeError(fn + ' is not a function')
    }
    const O = Object(this)
    const len = O.length >>> 0
    for(let i=0;i<len;i++){
        fn.call(thisArg,this[i],i,this)
    }
    return undefined
}


module.exports = Array
