var methods = {
    // 浅拷贝
    clone: function (target) {
        if(typeof target!=='object'){
            return target
        }
        let newTarget=target instanceof Array?[]:{};
        for (let prop in target) {
            // 筛选自身可枚举属性
            if (target.hasOwnProperty(prop)) {
                newTarget[prop] = target[prop]
            }
        }
        return newTarget
    },

    // 深拷贝
    deepClone: function (target, hash = new WeakMap()) {
        if (target === null) return target
        if (target instanceof Date) return new Date(target)
        if (target instanceof RegExp) return new RegExp(target)
        // if (target instanceof HTMLElement) return target // 处理 DOM元素
        if (typeof target !== 'object') return target
        if (hash.has(target)) {
            return hash.get(target)
        }
        const cloneTarget = new target.constructor()
        hash.set(target, cloneTarget)
        Reflect.ownKeys(target).forEach(key => {
            cloneTarget[key] = deepClone(target[key], hash)
        })
        return cloneTarget
    },
    //new方法
    myNew: function () {
        var obj = new Object()
        var constructor = Array.prototype.shift.call(arguments)
        obj.__proto__ = constructor.prototype
        var ret = constructor.apply(obj, arguments)
        // 如果构造函数中return 了对象则返回对象
        return typeof ret === 'object' ? ret : obj
    },
    //instaceOf方法
    myInstaceOf: function (target, origin) {
        let proto = target.__proto__
        while (true) {
            if (proto === null) {
                return false
            }
            if (proto === origin.prototype) {
                return true
            }
            proto = proto.__proto__
        }
        // MDN
        /* while (target != null) {
             if (target == origin.prototype)
                 return true;
             if (typeof object == 'xml') {
                 return origin.prototype == XML.prototype;  //应对XML对象
             }
             target = target.__proto__;
         }
         return false;*/
    },
    //debounce防抖函数    功能：n秒内只要你触发事件，就重新计时，事件处理函数的程序将永远不能被执行.
    debounce: function (fn, wait, immediate) {
        var t = null, result
        var debounced = function () {
            var self = this
            var args = arguments
            if (t) {
                clearTimeout(t)
            }
            // 首次立即执行
            if (immediate) {
                // 执行了就不执行，等定时器执行完，再次执行
                var callNow = !t
                t = setTimeout(function () {
                    t = null
                }, wait)
                if (callNow) {
                    result = fn.apply(self, args)
                }
            } else {
                t = setTimeout(function () {
                    result = fn.apply(self, args)
                }, wait)
            }
            return result
        }
        // 取消防抖
        debounced.cancel = function () {
            clearTimeout(t)
            t = null
        }
        return debounced
    },
    //throttle节流函数  功能：事件被触发，n秒之内只执行一次事件处理函数  leading:false禁用第一次执行   trailing:false禁用停止触发的回调
    throttle: function (fn, wait, options) {
        var t = null
        var previous = 0
        if (!options) {
            options = {}
        }
        var throttled = function () {
            var self = this
            var args = arguments
            var now = +new Date()
            if (!previous && options.leading === false) {
                previous = now
            }
            //下次触发fn的剩余时间
            var remaining = wait - (now - previous)
            //如果没有剩余的时间或者改了系统时间
            if (remaining <= 0 || remaining > wait) {
                if (t) {
                    clearTimeout(t)
                    t = null
                }
                previous = now
                fn.apply(self, args)
                if (!t) {
                    self = args = null
                }
            } else if (!t && options.trailing !== false) {
                t = setTimeout(function () {
                    previous = options.leading === false ? 0 : +new Date()
                    t = null
                    fn.apply(self, args)
                    if (!t) {
                        self = args = null
                    }
                }, remaining)
            }
        }
        throttled.cancel = function () {
            t = null
            clearTimeout(t)
            previous = 0
        }
        return throttled
    },
    // isNaN方法  功能：用来确定一个值是否为NaN
    isNaN: function (value) {
        var n = Number(value);
        return n !== n;
    },
    //判断是否为包含关系
    isSuperset:function (set, subset) {
        for (let elem of subset) {
            if (!set.has(elem)) {
                return false;
            }
        }
        return true;
    },
    // 并集
    union:function (setA, setB) {
        let _union = new Set(setA);
        for (let elem of setB) {
            _union.add(elem);
        }
        return _union;
    },
    //交集
    intersection:function (setA, setB) {
        let _intersection = new Set();
        for (let elem of setB) {
            if (setA.has(elem)) {
                _intersection.add(elem);
            }
        }
        return _intersection;
    },
    // 补集  AB的并集减去AB的交集
    symmetricDifference:function (setA, setB) {
        let _difference = new Set(setA);
        for (let elem of setB) {
            if (_difference.has(elem)) {
                _difference.delete(elem);
            } else {
                _difference.add(elem);
            }
        }
        return _difference;
    },
    // 差集 属于A但不属于B的
    difference:function (setA, setB) {
        let _difference = new Set(setA);
        for (let elem of setB) {
            _difference.delete(elem);
        }
        return _difference;
    },
    //惰性函数
    addEvent:function(type, el, fn, capture = false) {
        // 重写函数
        if (window.addEventListener) {
            addEvent = function (type, el, fn, capture) {
                el.addEventListener(type, fn, capture);
            }
        }
        else if(window.attachEvent){
            addEvent = function (type, el, fn) {
                el.attachEvent('on' + type, fn);
            }
        }
        // 执行函数，有循环爆栈风险
        addEvent(type, el, fn, capture);
    },

    //函数柯里化
    currying:function(fn, length) {
        length = length || fn.length; 	// 注释 1
        return function (...args) {			// 注释 2
            return args.length >= length	// 注释 3
                ? fn.apply(this, args)			// 注释 4
                : currying(fn.bind(this, ...args), length - args.length) // 注释 5
        }
    },
   /* const currying = fn =>
        judge = (...args) =>
            args.length >= fn.length
                ? fn(...args)
                : (...arg) => judge(...args, ...arg)*/

   curry:function(fn,arity,args){
       var arity=arity||fn.length;
       var args=args||[];
       return function () {
           var newArgs=[].slice.call(arguments);
           Array.prototype.push.apply(args,newArgs);
           if(newArgs.length<arity){
               arity=arity-newArgs.length;
               return curry(fn,arity,args)
           }
           return fn.apply(this,args);
       }
   },
    //偏函数
    partial:function(fn){
        var args=[].slice.call(arguments,1)
        return function () {
            var newArgs=args.concat([].slice.call(arguments))
            return fn.apply(this,newArgs)
        }
    },
    //函数组合
    compose:function(){
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
    },
    //函数记忆
    memoize:function(func,hasher){
      var memoized=function(key){
          var cache=memoized.cache
          var address=''+(hasher?hasher.apply(this,arguments):key);
          if(!cache[address]){
              cache[address]=func.apply(this,arguments)
          }
          return cache[address]
      }
      memoized.cache={}
      return memoized
    },
    //尾递归斐波那契数列
    fibonacci:function(n , ac1 = 1 , ac2 = 1) {
        if( n <= 1 ) {return ac2}
        return fibonacci(n - 1, ac2, ac1 + ac2);
    },
    /*Fibonacci2(100) // 573147844013817200000
    Fibonacci2(1000) // 7.0330367711422765e+208
    Fibonacci2(10000) // Infinity*/

    //尾递归阶乘函数
    factorial:function(n,total=1){
        if(n===1){
            return total
        }
        return factorial(n-1,n*total)
    },
    //乱序  洗牌算法
    shuffle:function(arr){
        let m = arr.length;
        while (m > 1){
            let index = Math.floor(Math.random() * m--);
            [arr[m] , arr[index]] = [arr[index] , arr[m]]
        }
        return arr;
    },
    //递归转循环防止执行栈溢出   蹦床函数
    /*tco:function(f) {
        var value;
        var active = false;
        var accumulated = [];

        return function accumulator() {
            accumulated.push(arguments);
            if (!active) {
                active = true;
                while (accumulated.length) {
                    value = f.apply(this, accumulated.shift());
                }
                active = false;
                return value;
            }
        };
    },

    var sum = tco(function(x, y) {
        if (y > 0) {
            return sum(x + 1, y - 1)
        }
        else {
            return x
        }
    });

    sum(1, 100000)*/

    //for of 实现
    forOf:function (obj,cb) {
        let iterable,result
        if(typeof obj[Symbol.iterator]!=='function'){
            throw new TypeError(result+"is not iterable")
        }
        iterable=obj[Symbol.iterator]();
        result=iterable.next()
        while(!result.done){
            cb(result.value);
            result=iterable.next();
        }
    }
};
// json对象
var JSON = {
    parse: function (sJSON) {
        return eval('(' + sJSON + ')');
    },
    stringify: (function () {
        var toString = Object.prototype.toString;
        var isArray = Array.isArray || function (a) {
            return toString.call(a) === '[object Array]';
        };
        var escMap = {'"': '\\"', '\\': '\\\\', '\b': '\\b', '\f': '\\f', '\n': '\\n', '\r': '\\r', '\t': '\\t'};
        var escFunc = function (m) {
            return escMap[m] || '\\u' + (m.charCodeAt(0) + 0x10000).toString(16).substr(1);
        };
        var escRE = /[\\"\u0000-\u001F\u2028\u2029]/g;
        return function stringify(value) {
            if (value == null) {
                return 'null';
            } else if (typeof value === 'number') {
                return isFinite(value) ? value.toString() : 'null';
            } else if (typeof value === 'boolean') {
                return value.toString();
            } else if (typeof value === 'object') {
                if (typeof value.toJSON === 'function') {
                    return stringify(value.toJSON());
                } else if (isArray(value)) {
                    var res = '[';
                    for (var i = 0; i < value.length; i++)
                        res += (i ? ', ' : '') + stringify(value[i]);
                    return res + ']';
                } else if (toString.call(value) === '[object Object]') {
                    var tmp = [];
                    for (var k in value) {
                        if (value.hasOwnProperty(k))
                            tmp.push(stringify(k) + ': ' + stringify(value[k]));
                    }
                    return '{' + tmp.join(', ') + '}';
                }
            }
            return '"' + value.toString().replace(escRE, escFunc) + '"';
        };
    })()
};



module.exports = methods
