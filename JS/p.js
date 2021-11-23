function octToHex(oct) {
	// write your code here
  let convert = parseInt(oct,8).toString(16);
  return convert.toUpperCase();
}


console.log(octToHex(234))
