function timeForMilkAndCookies(date) {
    let day = date.getDate();
    let month = date.getMonth();

    if(day == 24 && month == 11){
        return true
    }
    else{
        return false;
    }

}

console.log(timeForMilkAndCookies(new Date(2013, 10, 24)))