//Set Data Type

/*
let nums = [1,1,2,2,3,4];
let uniqueData = new Set(nums);
console.log(uniqueData);
uniqueData.add([5,5,5,5,5,9]);
uniqueData.add(5).add(5).add(9);
console.log(uniqueData);
uniqueData.delete(2);
console.log(uniqueData.size);
console.log(uniqueData);
console.log(uniqueData.has(2));
uniqueData.clear();
console.log(uniqueData.size);
console.log(uniqueData);
*/















//Set VS WeakSet and Garbage Collection

/*
let mySet  = new Set([1,2,3,'A','K']);
let iterator = mySet.keys();
console.log(iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

mySet.forEach((el)=>console.log(el));
//##########################
let myWS = new WeakSet([{a:1},{a:2}]);
console.log(myWS);
*/











//Map VS Object


/*
let myObject = {};
let myEmptyObject = Object.create(null); //To create empty object without default keys
let myMap = new Map();

console.log(myObject);
console.log(myEmptyObject);
console.log(myMap);
myMap.set(10,"Number");
myMap.set("10","String");
myMap.set(true,"boolean");
myMap.set({a:1,b:2},"Object");
myMap.set(function doIt(){},"Function");
console.log(myMap);
console.log(myMap.get(10));
console.log(myMap.get("10"));
console.log(myMap.get(true));
*/



















//Map Methods
/*
let myMap = new Map([
    [10,"Number"],
    ['Name','String'],
    [true,'Boolean']
]);


console.log(myMap.has('Name'));
console.log(myMap.get(true));
console.log(myMap.get('Name'));
console.log(myMap.get(10));
console.log(myMap.size);
console.log(myMap.delete(10));
console.log(myMap.size);
myMap.clear();
console.log(myMap.size);
*/
















//Map VS WeakMap
/*
let mapUser = {name:"KareemEldeen"};
let myMap = new Map();
myMap.set(mapUser,'Object');
console.log(myMap.get(mapUser));
mapUser = null;
console.log(myMap)
//WeakMap only accepts keys as objects only
let myWMap = new WeakMap(mapUser);
console.log(myWMap);
*/













//Array.from method
/*
console.log(Array.from("Osama"));
console.log(Array.from("12345" , function(n){return +n + +n;}));
let myArray = [1,2,2,2,4,3];
let mySet = new Set(myArray);
myArray = Array.from(mySet);
console.log(myArray);
function testArgs(){
    return arguments;
}

function af(){
    return Array.from(arguments);
}
console.log(testArgs('Ahmed','Osama','Ibrahim'));
console.log(af("Abdo"));
*/










//Array copyWithin method
/*
let myArray = [10,20,30,40,'A','B'];
// myArray.copyWithin(3);
myArray.copyWithin(3,myArray.length-1,myArray.length);
console.log(myArray);
*/








//Array.some method
/*
let nums = [1,2,3,4,5,6,7];
let check = nums.some(function(n){
    return n > 5;
});

let myNumber = 7;
let chk = nums.some(function(n){
    return n > this;
},myNumber);
console.log(chk);
console.log(check);
*/









//Array.every method
/*
let nums = [1,2,3,4,5,6,7];
let check = nums.every(function(n){
    return n > 5;
});

let myNumber = 7;
let chk = nums.every(function(n){
    return n > this;
},myNumber);
console.log(chk);
console.log(check);
*/








//Spread sytanx and use cases
console.log("Osama");
console.log(..."Osama");
console.log([..."Osama"]);
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let total = [...arr1,...arr2];
console.log(total);