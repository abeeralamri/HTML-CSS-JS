function swap(arr,idx1,idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function rotation(a,d){
    let j = 0;
    while(j<d){
    for(let i = a.length-1; i>0;i--){
        
            let temp = a[i];
            a[i] = a[i-1]
            a[i-1] = temp
        }
        j++;
    }
  console.log(arr);
}
let arr = [1,2,3,4,5];
rotation(arr,4)