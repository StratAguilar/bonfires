function bob(collection, source) {
  var arr = [];
  var keyName = Object.keys(source)[0];
  console.log(keyName);
    collection.forEach(function(person) {
        if (person.hasOwnProperty(keyName) && (person[keyName] === source[keyName])) {
          console.log(person[keyName]);
          arr.push(person);
        }
    });
  console.log(arr);
  return arr;

}

bob([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, 
	{ first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });