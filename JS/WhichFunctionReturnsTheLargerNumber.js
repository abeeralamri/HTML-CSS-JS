function whichIsLarger(f, g) {
	if(f() < g()){
		return "g";
	}
	else if(f() > g()){
		return "f";
	}
	else {
		return "neither"
	}
}

console.log(whichIsLarger(() => 505050, () => 5050 ))