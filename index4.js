function lastString(){
    let obj=[...arguments].join().split(' ')
    return obj[obj.length-1].length
}
console.log(lastString('hello nowcoder'))

