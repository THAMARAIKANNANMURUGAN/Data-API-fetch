// For the given JSON iterate over all for loops(for, for in, for of, forEach)
 const details = {
    "name" : "Thamarai Kannan",
    "firstName" : "Thamarai",
    "LastName" : "Kannan",
    "age" : 23,
    "Date of birth" : "24/06/2000",
    "marital-status" : "unmarried",
    "village" : "Ammapettai",
    "sub-district" : "ERode",
    "distirct" : "Ariyalur",
    "e-mail" : "thamaraikannan2408@gmail.com",
    "mobile-no" : "9080457210"

 }
 // using for loop
 console.log("<---------For loop--------->")
let info = Object.keys(details);
for(let i = 0; i <= info.length; i++) {
    let key = info[i]
    console.log(`${key} : ${details[key]}`);
}

console.log(); // line spacing
//using for in loop
console.log("<---------For in loop--------->")
for(let key in details) {
   console.log(key + " : " + details[key]);
}

console.log(); // line spacing
// using for of loop
console.log("<---------For of loop--------->")
for(let [key, value] of Object.entries(details)) {
   console.log(key, " : ", value);
}

console.log(); // line spacing
 //using forEach
console.log("<---------For Each loop--------->")
Object.entries(details).forEach(([key, value]) => {
    console.log(key, " : ", value);
});
................................................................................................................
