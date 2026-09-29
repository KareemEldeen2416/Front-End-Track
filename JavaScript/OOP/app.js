//Constructor Function

/*
function User(name,salary,id){
    this.id = id;
    this.salary = salary + 1500;
    this.name = name;
}


let user1 = new User("KareemEldeen",1500,123);
console.log(user1.name);
console.log(user1.salary);
console.log(user1.id);
*/









//Constructor function new syntax
/*
class User{
    constructor(name,salary){
        this.name = name;
        this.salary = salary;
    }
}

let user1 = new User("Mostafa",4000);
console.log(user1.name);
console.log(user1.salary);
console.log(user1 instanceof User);
console.log(user1.constructor === User);
*/












//Properties, and methods
/*
class User{
    constructor(name,salary){
        this.name = name;
        this.salary = salary;
        this.msg = function(){
            return `Hello, ${this.name}, your salary is ${this.salary}`
        }
    }
    walk(){
        return "I can walk";
    }
}

let user1 = new User("Mostafa",4000);
console.log(user1.msg());
console.log(user1.walk());
*/











//Static properties

/*
class User{
    static count = 0 ;
    constructor(name,salary){
        this.name = name;
        this.salary = salary;
        this.msg = function(){
            return `Hello, ${this.name}, your salary is ${this.salary}`
        }
        User.count++;
    }
    walk(){
        return "I can walk";
    }
    static sayHello(){
        return `Hello From Class`;
    }

    static getNoMembers(){
        return `Number of members: ${this.count}`;
    }
}

let user1 = new User("Mostafa",4000);
console.log(User.sayHello());
console.log(User.getNoMembers());
let user2 = new User("Mostafa",4000);
let user3 = new User("Mostafa",4000);
console.log(User.getNoMembers());
*/



















//Inheritance
/*
class User{
    static count = 0 ;
    constructor(name,salary){
        this.name = name;
        this.salary = salary;
        this.msg = function(){
            return `Hello, ${this.name}, your salary is ${this.salary}`
        }
        User.count++;
    }
    walk(){
        return "I can walk";
    }
    static sayHello(){
        return `Hello From Class`;
    }

    static getNoMembers(){
        return `Number of members: ${this.count}`;
    }
}


class SuperUser extends User{
    constructor(name,salary,permissions){
        super(name,salary);
        this.permissions =  permissions;
    }
}

let user1 = new SuperUser("KareemEldeen",100000,'High');
console.log(user1.name);
console.log(user1.salary);
console.log(user1.permissions);
*/

















//Encapsulation
/*
class User{
    //Private Property
    #e
    cosntructor(name,eSalary){
        this.name = name;
        this.#e = eSalary;
    }
    getSalary(){
        return parseInt(this.#e);
    }
}

let u = new User("Osama",'5000 gneh');
console.log(parseInt('124 ksdjf'));
*/











//Prototype Introduction
/*
class User{
    constructor(name,salary){
        this.name = name;
        this.salary = salary;
    }

    sayHello(){
        return `Hello, ${this.name}`;
    }
}


let u = new User("Osama",4000);
console.log(User.prototype);

//Adding to the prototype
User.prototype.sayWelcome = function(){return `Welcome ${this.name}`;}
String.prototype.hobby = 'Programming';
let s = 'String Variable';
console.log(s.hobby);
*/
















//Object Metadata and Descriptor
const myObj = {
    a:1,
    b:2
}

Object.defineProperty(myObj,'c',{
    writable:true,
    enumerable: true,
    configurable:true,
    value: 3,
});

Object.defineProperties(myObj,{
    d:{
        configurable:true,
        value:10
    },
    e:{
        configurable:true,
        value:200
    }
});
console.log(myObj);
console.log(delete myObj.c);
console.log(Object.getOwnPropertyDescriptor(myObj,'d'));
console.log(Object.getOwnPropertyDescriptors(myObj));





