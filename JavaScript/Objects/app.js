//Objects Intro
let user = {
    name:"KareemEldeen",
    age: 25,
    job: "Freelance Developer",
    //Functions of the object
    walk: function() {console.log("I can walk")}
}

console.log(`User is ${user.name}, he is ${user.age} years old, and he works as ${user.job}`);
user.walk();
user['job'] = 'Business Owner';
console.log(user['job']);


//Nested Objects
let employee = {
    name:"Sameer",
    addresses:{
        'Egypt':'Menofia',
        "Saudi Arabia":'Ryiadh'
    }
}

console.log(employee.addresses['Egypt']);
console.log(employee.addresses['Saudi Arabia']);





