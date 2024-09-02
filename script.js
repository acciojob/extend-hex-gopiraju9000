const extendHex = (shortHex) => {
  // Remove the leading '#' if present
  shortHex = shortHex.replace('#', '');

  // Extend the short hex to full hex by repeating each character
  let extendedHex = shortHex.split('').map(char => char + char).join('');

  // Add the leading '#' back to the extended hex code
  return `#${extendedHex}`;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
