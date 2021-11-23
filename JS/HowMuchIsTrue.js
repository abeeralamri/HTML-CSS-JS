function countTrue(arr) {
    return arr.filter(Boolean).length
}

let array = [true,false];
console.log(countTrue(array));