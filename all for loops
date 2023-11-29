const myJsonObject = {
  "name": "Thamarai kannan",
  "age": 30,
  "city": "Tamilnadu",
  "email": "thamaraikannan2308@gamil.com"
};


1. for...in Loop:
for (let key in myJsonObject) {
  console.log(key + ": " + myJsonObject[key]);
}
......................................................................................................
2. for...of Loop:
// This loop is not suitable for iterating over objects directly
// It's used for iterating over iterable objects like arrays
// To iterate over object properties, we need to convert the object's keys to an array
const keysArray = Object.keys(myJsonObject);
for (let key of keysArray) {
  console.log(key + ": " + myJsonObject[key]);
}

...............................................................................................................
3. forEach Loop:
// This loop is not suitable for iterating over objects directly
// It's used for iterating over array elements
// To iterate over object properties, we need to convert the object's keys to an array
const keysArray = Object.keys(myJsonObject);
keysArray.forEach((key) => {
  console.log(key + ": " + myJsonObject[key]);
});
..................................................................................................................
4. for Loop:
// Using Object.keys to get an array of keys and then iterating over the keys
const keysArray = Object.keys(myJsonObject);
for (let i = 0; i < keysArray.length; i++) {
  const key = keysArray[i];
  console.log(key + ": " + myJsonObject[key]);
}
................................................................................................................
