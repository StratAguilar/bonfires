function convert(str) {
  // &colon;&rpar;
  str = str.replace(/&/g, '&amp;');
  str = str.replace(/</g,'&lt;');
  str = str.replace(/>/g,'&gt;');
  str = str.replace(/\'/g,'&apos;');
  str = str.replace(/\"/g,'&quot;');
  return str;
}

console.log(convert('Hamburgers & < Pizza < Tacos'));