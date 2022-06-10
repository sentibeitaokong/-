const Array=require('./NativeJs/Array')


// at方法测试
// var arr=[2,3,4,5,1]
/*console.log(arr.myAt(0))
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
console.log(arr.myAt('NaN'))*/


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

//flat方法测试
/*var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4.Myflat(Infinity))*/

//flatMap方法测试
/*var arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]*/

// forEach方法测试
const arraySparse = [1,3,,7];
let numCallbackRuns = 0;

arraySparse.forEach(function(element){
    console.log(element);
    numCallbackRuns++;
});
