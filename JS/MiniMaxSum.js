function miniMaxSum(arr) {
    // Write your code here
    let min = arr[0];
    let max = min;
    let sum = min;
    for(let i = 1; i< arr.length;i++)
    {
        sum += arr[i];
        if(arr[i] > min)
        {
            min = arr[i];
        }
        if(arr[i] < max)
        {
            max = arr[i];
        }
        
    } 

    console.log((sum-min) + " " + (sum-max));

}

let array = [7, 69, 2, 221, 8974];
miniMaxSum(array);