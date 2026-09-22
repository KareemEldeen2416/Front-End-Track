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













//Creating object with new keyword
let obj = new Object(
    {
        age:20
    }
);

obj.name = 'Osama';
console.log(obj.name);
console.log(obj['age']);





//Creating object with create method
let protoUser = {
    age:20,
    doubleAge : function(){return this.age * 2;}
}
console.log(protoUser.age);
console.log(protoUser.doubleAge());

let copyObj = Object.create(protoUser);
console.log(copyObj.age);
console.log(copyObj.doubleAge());

copyObj.age = 25;
console.log(copyObj.age);
console.log(copyObj.doubleAge());







//Creaeting object with assign method
let c1 = {
    prop1: 1,
    prop2: 4,
    method1: function(){console.log('First Object')}
}

let c2 = {
    prop1: 1,
    prop3: 9,
    method2: function(){console.log('Second Object')}
}

let targetObject = {
    prop1:30
}

let finalObject = Object.assign(targetObject,c1,c2);
console.log(finalObject.prop1);
console.log(finalObject.prop2);


