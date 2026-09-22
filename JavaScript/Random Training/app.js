// let day = 'Saturday';
// let salary = 0;

// switch(day){
//     case 'Saturday':
//     case 'Sunday':
//         salary = 2000;
//         console.log(salary);
//         break;
//     case 'Monday':
//         salary = 3000;
//         console.log(salary);
//         break;
//     default:
//         salary = 0;
//         console.log(salary + ' No salary Today');
//         break;
// }

let friends = ["Ahmed","Mohamed","Sayed"];
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(`Hello ${friends[2]}`);
console.log(friends.length);

friends.unshift("Osama","Ali"); // To add element at the start of the array;
friends.push("Laya","Khadeja"); // To add element at the end of the array;
console.log(friends);

let name = friends.shift();
console.log(friends); //Remove the first element and returns it;
console.log(name);

let last = friends.pop(); //Remove the last element and returns it;
console.log(friends);
console.log(last);


console.log(friends.indexOf("Sayed"));
console.log(friends.lastIndexOf("Sayed"));
console.log(friends.indexOf("Sayed",2));
console.log(friends.includes("Ali"));
console.log(friends.sort());
console.log(friends.reverse());
console.log("|--------------------------------------|");
console.log(friends.slice());
console.log(friends.slice(2));
console.log(friends.slice(-2));
console.log(friends.slice(2,4));
console.log("|--------------------------------------|");
friends.splice(0,0,"Sameer","Samara");
friends.splice(0,1,"Karamela","Zabolla");
console.log(friends);


let arr1 = ["Salma","Dua"];
let arr2 = ["Ehab","Mostafa"];
let allFriends = arr1.concat(arr2,'Gamal',["Gamila","Omar","Amira"]);
console.log(allFriends);
console.log(allFriends.join());
console.log(allFriends.join(" * "));





