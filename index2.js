// Object方法测试


// const MyObject=require('./Object')
const methods=require('./methods')
// const Array=require('./Array')
// const Function=require('./Function')
//object.is()
// console.log(MyObject.is(NaN,NaN))


//object.entries()
/*const obj={a:1,b:2}
Object.prototype.c=3*/
// test Numbere
// console.log(MyObject.ntries(1)) // []
// test Objecte
/*const obj = { foo: "bar", baz: 42 };
const map = MyObject.entries(obj);  // [ [ 'foo', 'bar' ], [ 'baz', 42 ] ]
// const map = new Map(MyObject.entries(obj));
console.log(map); // Map(2) { "foo" => "bar", "baz" => 42 }*/
// test Array
/*const arr = [1, 2, 3];e
console.log(MyObject.entries(arr)); // [["0", 1], ["1", 2], ["2", 3]]*/
// test Error
// console.log(MyObject.entries('123')); // 无法将参数转换为对象！



//object.fromEntries()
/*const map = new Map(MyObject.entries({ foo: "bar", baz: 42 }));
const obj = MyObject.fromEntries(map);
console.log(obj);*/ // { foo: 'bar', baz: 42 }
// test Array
// const arr = [['0', 'a'], ['1', 'b'], ['2', 'c']];
// const obj = MyObject.fromEntries(arr);
// console.log(obj); // { 0: 'a', 1: 'b', 2: 'c' }
// test Error
// console.log(MyObject.fromEntries(1)); // 参数不可编辑！


//object.assign()
//合并对象
/*const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };
const obj = MyObject.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);*/
//合并具有相同属性的对象
/*const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };
const obj = MyObject.assign({}, o1, o2, o3);
console.log(obj);*/ // { a: 1, b: 2, c: 3 }
//继承属性和不可枚举属性是不能拷贝的
/*const obj = Object.create({foo: 1}, { // foo 是个继承属性。
    bar: {
        value: 2  // bar 是个不可枚举属性。
    },
    baz: {
        value: 3,
        enumerable: true  // baz 是个自身可枚举属性。
    }
});
const copy = MyObject.assign({}, obj);
console.log(copy); // { baz: 3 }*/
//原始类型会被包装为对象
/*
const v1 = "abc";
const v2 = true;
const v3 = 10;
const v4 = Symbol("foo")

const obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// 原始类型会被包装，null 和 undefined 会被忽略。
// 注意，只有字符串的包装对象才可能有自身可枚举属性。
console.log(obj); // { "0": "a", "1": "b", "2": "c" }*/


//object.create()
//检测是否可以继承
/*var a = MyObject.create(null);
console.log(a); // {}
console.log(a.__proto__); // undefined
console.log(a.__proto__ === Object.prototype); // false
console.log(a instanceof Object);//false*/

//检测propertiesObject是否可用
/*var bb = MyObject.create(null, {
    a: {
        value: 2,
        writable: true,
        configurable: true
    }
});
console.log(bb.a); // 2
console.log(bb.__proto__); // undefined
console.log(bb.__proto__ === Object.prototype); // false
console.log(bb instanceof Object) //false*/

//检验是否继承且在当前对象下添加自身属性
/*var cc = MyObject.create({b: 1}, {
    a: {
        value: 3,
        writable: true,
        configurable: true
    }
});
console.log(cc.a); // 3
console.log(cc.hasOwnProperty('a'), cc.hasOwnProperty('b')); // true false 说明第二个参数设置的是新对象自身可枚举的属性
console.log(cc.__proto__); // {b: 1} 新对象cc的__proto__指向{b: 1}
console.log(cc.__proto__ === Object.prototype); // false
console.log(cc instanceof Object); // true cc是对象，原型链上肯定会出现Object*/


/*// 检测深冻结 不可删除、不可修改、不可扩展(可以添加属性)
let obj={
    a:1,
    b:2,
    c:{
        d:4
    }
}
Object.prototype.c=4
// Object.freeze(obj)
MyObject.deepFreeze(obj)
obj.c.d=5
obj.c.e=1
delete obj.c.d
console.log(obj)*/

/*// 检测深密封  不可删除、可修改、不可扩展(可以添加属性)
let obj={
    a:1,
    b:2,
    c:{
        d:4
    }
}
Object.prototype.c=4
// Object.freeze(obj)
MyObject.deepSeal(obj)
obj.c.d=5
obj.c.e=1
delete obj.c.d
console.log(obj)*/

// 检测深不可扩展   可删除、可修改、不可扩展(可以添加属性)
/*let obj={
    a:1,
    b:2,
    c:{
        d:4
    }
}
Object.prototype.c=4
// Object.freeze(obj)
MyObject.deepPreventExtensions(obj)
obj.c.d=5
obj.c.e=1
delete obj.c.d
console.log(obj)*/

//
/*const obj = {
    a: 1
}
obj.obj = obj

const newObj = deepClone(obj)

console.log('原来的对象', obj)
console.log('新的对象', newObj)*/
var myInstance=methods.myInstaceOf
function Car(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(myInstance(auto,Car));
// expected output: true

console.log(myInstance({},Object));
