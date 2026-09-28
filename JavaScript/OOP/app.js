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





