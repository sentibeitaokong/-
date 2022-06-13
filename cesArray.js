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
/*const arraySparse = [1,3,7];
let numCallbackRuns = 0;

arraySparse.MyforEach(function(element){
    console.log(element);
    numCallbackRuns++;
},undefined);*/

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

//isArray方法测试
/*console.log(Array.MyisArray([]))
console.log(Array.MyisArray([1]))
console.log(Array.MyisArray(new Array()))
console.log(Array.MyisArray(new Array('a', 'b', 'c', 'd')))
// 鲜为人知的事实：其实 Array.prototype 也是一个数组。
console.log(Array.MyisArray(Array.prototype))*/

// 下面的函数调用都返回 false
/*console.log(Array.MyisArray())
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
var a = ['Wind', 'Rain', 'Fire'];
var myVar1 = a.Myjoin();      // myVar1 的值变为"Wind,Rain,Fire"
var myVar2 = a.Myjoin(', ');  // myVar2 的值变为"Wind, Rain, Fire"
var myVar3 = a.Myjoin(' + '); // myVar3 的值变为"Wind + Rain + Fire"
var myVar4 = a.Myjoin('');
console.log(myVar1)
console.log(myVar2)
console.log(myVar3)
console.log(myVar4)

