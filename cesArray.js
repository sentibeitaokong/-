const Array=require('./NativeJs/Array')


//push方法测试
/*let arr = [1,2,3,4,5]
let arrLike = {2:1,3:2,length:2}
let obj = {}
arr.myPush(1,2,3,4)
Array.prototype.myPush.call(obj,1,2,{})
Array.prototype.myPush.call(arrLike,3,4,{})
console.log(arr)
console.log(obj)
console.log(arrLike)*/

//pop方法测试
/*let arr = [1,2,3,4,5]
let arrLike = {0:1,1:2,length:2}
let obj = {}
console.log(Array.prototype.myPop.call(arr))
console.log(Array.prototype.myPop.call(arrLike))
console.log(arr,obj,arrLike)*/

//unshift方法测试
/*let arr = [1,2,3,4,5]
let arrLike = {0:1,1:2,length:2}
let obj = {}
console.log(arr.myUnshift(0,1,3,4,5))
console.log(Array.prototype.myUnshift.call(obj,0,1,3,4,5))
console.log(Array.prototype.myUnshift.call(arrLike,0,1,3,4,5))*/


// at方法测试
/*var arr=[2,3,4,5,1]
console.log(arr.at(1))
console.log(arr.at(-1))
console.log(arr.at('0'))
console.log(arr.at('1'))
console.log(arr.at('-1'))
console.log(arr.at('null'))
console.log(arr.at(null))
console.log(arr.at(undefined))
console.log(arr.at('undefined'))
console.log(arr.at('true'))
console.log(arr.at('false'))
console.log(arr.at(false))
console.log(arr.at(NaN))
console.log(arr.at('NaN'))
console.log(arr.at(true))*/


//concat方法测试
/*const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.Myconcat(array2);

console.log(array3);*/
/*var num1 = [[1]];
var num2 = [2, [3]];
var num3=[5,[6]];

var nums = num1.concat(num2);

console.log(nums);
var nums2=num1.concat(4,num3);

console.log(nums2)
// results is [[1], 4, 5,[6]]
num1[0].push(4);

console.log(nums);*/


//copyWithin方法测试
// [1, 2, 3, 4,5].MycopyWithin(2,1,3)

// [].copyWithin.call({length: 5, 3: 1}, 0, 3);
// {0: 1, 3: 1, length: 5}

// ({0:undefined,1:undefined,2:undefined,3: 1,4:undefined,5:undefined,length: 5}).copyWithin(0,3,5);
// 结果为：
// {0:1,1:undefined,2:undefined,3: 1,4:undefined,5:undefined,length: 5};
// 也就是
// {0:1,3:1,length:5}


// entries() 方法示例
/*
var arr = ["a", "b", "c"];
var iterator = arr.entries();
// undefined

for (let e of iterator) {
    console.log(e);
}
// [0, "a"]
// [1, "b"]
// [2, "c"]
*/


//every方法测试
/*function isBigEnough(element, index, array) {
    return element >= 10;
}
console.log([12, 5, 8, 130, 44].Myevery(isBigEnough));   // false
console.log([12, 54, 18, 130, 44].Myevery(isBigEnough))  // true*/
/*console.log([1,2,3,4,5].every(function(current, index, arr) {
    return current > this.a
},{a:0})) // true
console.log([1,2,3,4,5].Myevery(function(current, index, arr) {
    return current > this.a
},{a:0}))*/


//fill方法测试
/*Array(3).Myfill(4);                // [4, 4, 4]
console.log([].Myfill.call({ length: 3 }, 4))
var arr = Array(3).fill({}) // [{}, {}, {}];
// 需要注意如果 fill 的参数为引用类型，会导致都执行同一个引用类型
// 如 arr[0] === arr[1] 为 true
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]*/

//filter方法测试
/*function isBigEnough(element) {
    return element >= 10;
}
var filtered = [12, 5, 8, 130, 44].Myfilter(isBigEnough);
console.log(filtered)*/
/*var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
];

var invalidEntries = 0;

function isNumber(obj) {
    return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
}

function filterByID(item) {
    if (isNumber(item.id) && item.id !== 0) {
        return true;
    }
    invalidEntries++;
    return false;
}
var arrByID = arr.Myfilter(filterByID);

console.log('Filtered Array', arrByID);
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries);*/

/*console.log([1,2,3,4,5].filter(function(current, index, arr) {
    return index > this.a
},{a:1}))
console.log([1,2,3,4,5].Myfilter(function(current, index, arr) {
    return index > this.a
},{a:1}))*/

//find 方法测试
/*const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function isCherries(fruit) {
    return fruit.name === 'cherries';
}

console.log(inventory.Myfind(isCherries));*/
/*function isPrime(element, index, array) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
            return false;
        }
    }
    return element > 1;
}

console.log([4, 6, 8, 12].Myfind(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].Myfind(isPrime));  //5*/

/*console.log([4, 6, 8, 12].Myfind(function(item) {
    return item + this.a > 10
},{a:5})); // 6
console.log([4, 6, 8, 12].find(function(item) {
    return item + this.a > 10
},{a:5}));*/


//findIndex方法测试
/*const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));*/

/*function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
            return false;
        }
    }
    return element > 1;
}

console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 12].findIndex(isPrime)); //  2*/
/*
console.log([4, 6, 8, 12].MyfindIndex(function(item) {
    return item + this.a > 10
},{a:5})); // 1
console.log([4, 6, 8, 12].findIndex(function(item) {
    return item + this.a > 10
},{a:5}))*/;


//flat方法测试
/*var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4.Myflat(Infinity))*/

//flatMap方法测试
/*var array = [1, 2, 3, 4];

array.map(x => [x * 2]);
// [[2], [4], [6], [8]]

array.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
array.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]*/

// forEach方法测试
/*const arraySparse = [1,3,7];
let numCallbackRuns = 0;

arraySparse.MyforEach(function(element){
    console.log(element);
    numCallbackRuns++;
},undefined);*/
/*[1,2,3,4,5].forEach(function(current, index, arr) {
    console.log(current, index, arr, this.a)
},{a:1})
[1,2,3,4,5].MyforEach (function(current, index, arr){
    console.log(current, index, arr, this.a)
},{a:1});*/


//from方法测试
/*const map = new Map([[1, 2], [2, 4], [4, 8]]);
console.log(Array.prototype.Myfrom([1, 2, 3], x => x + x))*/

//includes方法测试
/*console.log([1, 2, 3].Myincludes(2))     // true
console.log([1, 2, 3].Myincludes(4))    // false
console.log([1, 2, 3].Myincludes(3, 3))  // false
console.log([1, 2, 3].Myincludes(3, -1)) // true
console.log([1, 2, NaN].Myincludes(NaN)) // true*/

//indexOf方法测试
/*var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.MyindexOf(element);
while (idx != -1) {
    indices.push(idx);
    idx = array.MyindexOf(element, idx + 1);
}
console.log(indices);
function updateVegetablesCollection (veggies, veggie) {
    if (veggies.MyindexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('New veggies collection is : ' + veggies);
    } else if (veggies.MyindexOf(veggie) > -1) {
        console.log(veggie + ' already exists in the veggies collection.');
    }
}

var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

// New veggies collection is : potato,tomato,chillies,green-papper,spinach
updateVegetablesCollection(veggies, 'spinach');
// spinach already exists in the veggies collection.
updateVegetablesCollection(veggies, 'spinach');*/
/*var array = [2, 5, 9, 2]
console.log(array.MyindexOf(5,[]) == array.MyindexOf(5,[])) //true
console.log(array.MyindexOf(5,[1]) == array.MyindexOf(5,[1])) //true
console.log(array.MyindexOf(5,'1') == array.MyindexOf(5,'1')) //true
console.log(array.MyindexOf(5,'1e') == array.MyindexOf(5,'1e')) //true
console.log(array.MyindexOf(5,true) == array.MyindexOf(5,true)) //true
console.log(array.MyindexOf(5,NaN) == array.MyindexOf(5,NaN)) //true
console.log(array.MyindexOf(5,-1) == array.MyindexOf(5,-1)) //true
console.log(array.MyindexOf(5,-5) == array.MyindexOf(5,-5))*/

//isArray方法测试
/*console.log(Array.MyisArray([]))
console.log(Array.MyisArray([1]))
console.log(Array.MyisArray(new Array()))
console.log(Array.MyisArray(new Array('a', 'b', 'c', 'd')))
// 鲜为人知的事实：其实 Array.prototype 也是一个数组。
console.log(Array.MyisArray(Array.prototype))

// 下面的函数调用都返回 false
console.log(Array.MyisArray())
console.log(Array.MyisArray({}))
console.log(Array.MyisArray(null))
console.log(Array.MyisArray(undefined))
console.log(Array.MyisArray(17))
console.log(Array.MyisArray('Array'))
console.log(Array.MyisArray(true))
console.log(Array.MyisArray(false))
console.log(Array.MyisArray(new Uint8Array(32)))
console.log(Array.MyisArray({ __proto__: Array.prototype }))*/


//join方法测试
/*var a = ['Wind', 'Rain', 'Fire'];
var myVar1 = a.Myjoin();      // myVar1 的值变为"Wind,Rain,Fire"
var myVar2 = a.Myjoin(', ');  // myVar2 的值变为"Wind, Rain, Fire"
var myVar3 = a.Myjoin(' + '); // myVar3 的值变为"Wind + Rain + Fire"
var myVar4 = a.Myjoin('');
console.log(myVar1)
console.log(myVar2)
console.log(myVar3)
console.log(myVar4)*/
// console.log([1,null,,{},[],/2/].Myjoin(',') === [1,null,,{},[],/2/].join(','))

//keys方法测试
/*var arr = ["a", , "c"];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]*/
/*var a = ["a", "b", "c"].Mykeys()
var b = Array.prototype.Mykeys.call({0:1,1:2,length:2})
var c = Array.prototype.Mykeys.call({a:1,b:2})
for (const value of a) {
    console.log(value) // 0 1 2
}
for (const value of b) {
    console.log(value) // 0 1
}
for (const value of c) {
    console.log(value) // a b
}*/

// lastIndexOf
/*var array = [2, 5, 9, 2];
let index
console.log(array.MyLastIndexOf(2))
// index is 3
console.log(array.MyLastIndexOf(7))
// index is -1
console.log(array.MyLastIndexOf(2, 3))
// index is 3
console.log(array.MyLastIndexOf(2, 2))
// index is 0
console.log(array.MyLastIndexOf(2, -2))
// index is 0
console.log(array.MyLastIndexOf(2, -1))
// index is 3
// console.log(array.MyLastIndexOf(5,{}))
console.log(array.MyLastIndexOf(5,[]) == array.lastIndexOf(5,[])) //true
console.log(array.MyLastIndexOf(5,[1]) == array.lastIndexOf(5,[1])) //true
console.log(array.MyLastIndexOf(5,'1') == array.lastIndexOf(5,'1')) //true
console.log(array.MyLastIndexOf(5,'1e') == array.lastIndexOf(5,'1e')) //true
console.log(array.MyLastIndexOf(5,true) == array.lastIndexOf(5,true)) //true
console.log(array.MyLastIndexOf(5,NaN) == array.lastIndexOf(5,NaN)) //true
console.log(array.MyLastIndexOf(5,-1) == array.lastIndexOf(5,-1)) //true
console.log(array.MyLastIndexOf(5,-5) == array.lastIndexOf(5,-5))*/


//map方法测试
/*console.log([1,2,3,4,5].map(function(current, index, arr) {
    return index + this.a
},{a:1})) //[1,2,3,4,5]
console.log([1,2,3,4,5].MyMap(function(current, index, arr) {
    return index + this.a
},{a:1}))*/

//of方法测试
/*console.log(Array.MyOf(1,2,3))
console.log(Array.MyOf(undefined))
console.log(Array.MyOf(1))*/

//reduce方法测试
/*var sum = [0,1,2,3,4].MyReduce(function(accumulator, currentValue, currentIndex, array){
    return accumulator + currentValue;
}); // 10
var sum1 = [, 1, ,3,,].MyReduce(function(accumulator, currentValue, currentIndex, array){
    return accumulator + currentValue;
});
console.log(sum,sum1)*/


//reduceRight方法测试
// var sum = [0,1,2,3,4].MyReduceRight(function(accumulator, currentValue, currentIndex, array){
//     return accumulator + currentValue;
// },2); // 12
// var sum1 = [, 1, ,3,,].MyReduceRight(function(accumulator, currentValue, currentIndex, array){
//     return accumulator + currentValue;
// },2);
// console.log(sum,sum1)

//reverse方法测试
/*var arr1 = [1,2,,3,,4,,5]
var arr2 = [1,2,,3,,4,,5]
arr1.MyReverse()
console.log(arr1) //[5, empty, 4, empty, 3, empty, 2, 1]
arr2.reverse()
console.log(arr2)*/

//shift方法测试
/*const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);*/

//slice方法测试
/*const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.MySlice(2));

console.log(animals.MySlice(2, 4));

var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.MySlice(1, 3);
console.log(citrus)*/

//some方法测试
/*console.log([1,2,3,4,5].some(function(current, index, arr) {
    console.log(current, index, arr)
    return current > this.a
},{a:10})) // false
console.log([1,2,3,4,5].MySome(function(current, index, arr) {
    console.log(current, index, arr)
    return current > this.a
},{a:10}))*/
// console.log([12, 5, 8, 1, 4].MySome(x => x > 10))


// unshift测试
/*let arr = [1, 2];

arr.unshift(0); // result of the call is 3, which is the new array length
// arr is [0, 1, 2]

arr.unshift(-2, -1); // the new array length is 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-4, -3]); // the new array length is 6
// arr is [[-4, -3], -2, -1, 0, 1, 2]

arr.unshift([-7, -6], [-5]); // the new array length is 8
// arr is [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]
console.log(arr)*/

/*let arr = [4,5,6];
arr.unshift(1,2,3);
console.log(arr); // [1, 2, 3, 4, 5, 6]


arr = [4,5,6]; // 重置数组
arr.unshift(1);
arr.unshift(2);
arr.unshift(3);
console.log(arr); // [3, 2, 1, 4, 5, 6]*/

//values方法测试
/*var a = ["a", 'b', "c"].MyValues()
var b = Array.prototype.MyValues.call({0:1,1:2,length:2})
var c = Array.prototype.MyValues.call({a:1,b:2})
for (const value of a) {
    console.log(value) // a b c
}
for (const value of b) {
    console.log(value) // 1 2
}
for (const value of c) {
    console.log(value) // 1 2
}*/


//sort方法测试
/*var arr1 = [3,5,5,-1,65,6,41,2,51,11,52,8]
var arr2 = [3,5,5,-1,65,6,41,2,51,11,52,8]
function fcb(a,b) {
    return a - b
}
console.log(arr1.mySort(fcb)) //[-1, 2, 3, 5, 5, 6, 8, 11, 41, 51, 52, 65]
console.log(arr2.sort(fcb))*/

//splice方法测试
/*var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(-2, 1);
console.log(myFish,removed)*/

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2);
console.log(removed,myFish)

