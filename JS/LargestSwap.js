function largestSwap(num) {
	let arr = [...num + ''].map(Number);
    let first = arr[0];
    let second = arr[1];
    newNum = parseInt(second+''+first);
    if(num > newNum || num == newNum){
        return true;
    }

    else {
        return false
    }

}

console.log(largestSwap(22))