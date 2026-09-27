//Destructuring Arrays
let friends = ['Ahmed','Ali','Amir'];
let [a,b,c,d = 'Not Found'] = friends;
console.log(a);
console.log(b);
console.log(c);
console.log(d);


//Destructuring, and swapping variables
let book = 'video';
let video = 'book';
[book,video] = [video,book];
console.log(book);
console.log(video);





//Destructuring Objects
const user = {
    name: "KareemEldeen",
    age: 24,
    title: "Developer",
    country: "Egypt",
};

const {name : n,age ,title,country, color = 'Red'} = user;
console.log(name);
console.log(age);
console.log(title);
console.log(country);
console.log(n);
console.log(color);





//Destructuring functions parameters
function showDetails({name:n , age:a , title:t} = user){
    console.log(`Name is ${n}`);
    console.log(`Age is ${a}`);
    console.log(`Title is ${t}`);
}

showDetails();


