function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.charAt(0).toLowerCase() + str.substring(1, str.length); 
  str = str.replace(/_/g, ' ');
  str = str.replace(/([A-Z])/g, ' $1');
  str = str.toLowerCase();
  stringArray = str.split(/\s+/);
  str = stringArray.join("-");
  return str;
}

console.log(spinalCase('ThisIs Spinal Tap'));