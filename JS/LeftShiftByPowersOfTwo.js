function shiftToLeft(x, y) {
	if(y < 0){
		return 0;
	}
	else {
         ;
		return x * Math.pow(2,y);
	}
}

console.log(shiftToLeft(-6, 5));