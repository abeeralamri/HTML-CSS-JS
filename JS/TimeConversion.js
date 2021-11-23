function timeConversion(s) {
    // Write your code here
    let [hours, minutes, seconds] = s.split(":");

    if(s.includes("12") && s.includes("AM"))
    {
        hours = "00";
    }

    if(s.includes("PM") && !s.includes("12"))
    {
        hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}:${seconds.replace(/["AM"-"PM"]/g, "")}`;

}

console.log(timeConversion("12:45:54PM"));