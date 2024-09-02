const extendHex = (shortHex) => {
  // write your code here
	return shortHex[0]+shortHex[1]+shortHex[1]+shortHex[2]+shortHex[2]+shortHex[3]+shortHex[3];
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
