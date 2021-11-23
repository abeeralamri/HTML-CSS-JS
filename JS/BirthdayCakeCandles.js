function birthdayCakeCandles(candles)
{
    let max = candles[0];
    for(let i = 0; i < candles.length; i++)
    {
      
       if(candles[i] > max)
        {
         max = candles[i];
        }
       
    }

    return candles.filter(x => x === max).length;

}

let array = [44, 53, 31, 27, 77,77, 60, 66, 77, 26, 36];
console.log(birthdayCakeCandles(array));