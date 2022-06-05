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
module.exports = Array