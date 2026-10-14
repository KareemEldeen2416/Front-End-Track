//Type Annotation


/*
let theName:string = 'Kareem';
let num: number = 28;
let active: boolean = true;
let all:any = 'I can accept any value of any datatype';
console.log(theName);
all = 90;
console.log(all);

function addNums(n1:number, n2:number){
    return n1 + n2;
}
console.log(addNums(1,2));
*/










//Type annotation with array

/*
let mix: (string|number) = 'Can store string or numeric values';
console.log(mix);
mix = 2;
console.log(mix);
let myFriends: string[] = ['Osama','Saif','Mohamed'];
for(let i:number = 0 ; i < myFriends.length;i++){
    console.log(myFriends[i]);
}
*/







//Type annotation with mulitdimensional arrays
/*
let all : (string|string[])[] = ['KareemEldeen',['Osama','Ehab']];
console.log(all);
*/






//Type annotations with functions

/*
let showMsg:boolean = true;
function displayInfo(name:string,age:number,salary:number):string{
    if(showMsg){
        return `Hello ${name}, Your Age Is ${age}, Your Salary Is ${salary}`;
    }
    return "No data found";
}
console.log(displayInfo('KareemEldeen',24,70000));
*/










//Optional and default parameters
/*
function showDetails(name:string,age:number,country?:string):string{ //? means optional parameter
    return `${name} , ${age} , ${country}`;
}
console.log(showDetails('Kareem',28));
*/








//Rest parameters

/*
function addAll(...numbers : number[]){
    let result : number = 0;
    for(let i : number = 0 ; i < numbers.length;i++){
        result += numbers[i]!;
    }
    return result;
}
console.log(addAll(1,2,3,4,5));
*/


















//Type annotation with anonymous functions
/*
const add = function(n1:number , n2:number):number{return n1+n2;};
console.log(add(1,2));
const addWithArrow = (n1:number , n2:number):number => n1+n2;
console.log(addWithArrow(1,3));
*/













//Datatypes, and type aliases
/*
type st = string;
type mix = string|number;
let theName:st = "Kareem";
let mixed:mix = 123;
console.log(theName);
console.log(mixed);
*/











//Aliases advanced
/*
type buttons = {
    up:string,
    down:string,
    right:string,
    left:string
};

type Last = buttons & {
    x:boolean
};

function displayButtons(btns:Last):string{
    console.log(`Up ${btns.up} , Down ${btns.down} , Right ${btns.right} , Left ${btns.left}, Can Play: ${btns.x}`);
    return 'All buttons returned';
}

displayButtons({up:'Move Up',down:'Move Down',right:'Move Right',left:'Move Left',x:true});
*/















//Datatypes, literal types
/*
type nums = 0 | 1 | -1;

function compare(n1:number , n2:number): nums{
    if(n1>n2){
        return 1;
    }
    else if(n1<n2){
        return -1;
    }
    else{
        return 0;
    }
}
console.log(compare(1,2));

let aNumber:nums = 1;
console.log(aNumber);
*/

























//Data types, tuple

/*
let article : readonly [number,string,boolean] = [12,'Title',true];
console.log(article[0]);
console.log(article[1]);
console.log(article[2]);
article = [40,'Journey to the center of the earth',false];
console.log(article);
// article.push(90);
const [id,title,published] = article;
console.log(id);
console.log(title);
console.log(published);
*/










//Data types, void, and never
/*
function logging(msg:string):void{
    console.log(msg);
    return; //it returns no thing
}

function noReturnFun(msg:string):never{
    console.log(msg);
    //it never returns any thing, 
    throw Error('Something went wrong');
}

console.log(logging("Simple Message"));
*/















//Enum Pt1
/*
enum level{
    kids = 15,
    easy = 10,
    medium = 5,
    hard = 3
};

let lvl:string = 'easy';
if(lvl === 'easy'){
    console.log(`Level: ${lvl} , Number of seconds available: ${level.easy} seconds`);
}
*/






//Enum Pt2
/*
enum children{
    five = 5,
    seven =7,
    ten = 10
}

enum level{
    kids = children.ten,
    easy = 10,
    medium = 5,
    hard = 3
};

let lvl:string = 'kids';
if(lvl === 'kids'){
    console.log(`Level: ${lvl} , Number of seconds available: ${level.kids} seconds`);
}
*/










//Type assertions
/*
let myImg = document.getElementById('imgID') as HTMLImageElement;
console.log(myImg.src);
let myImage = <HTMLImageElement> document.getElementById('imgID');
console.log(myImg.src);
*/








//Types, Union, and intersection
/*
type A = {
    one:string,
    two:number
};

type B = A & {
    three: boolean
};

type C = {
    four:boolean
};

type mix = A&C;

function printMessage(props:B):void{
    console.log(`Hello ${props.one}`);
    console.log(`Hello ${props.two}`);
    console.log(`Hello ${props.three}`);
}

function printMsg(props:mix):void{
    console.log(`Hello ${props.one}`);
    console.log(`Hello ${props.two}`);
    console.log(`Hello ${props.four}`);
}

printMessage({one:'KareemEldeen',two:12,three:true});
printMsg({one:'Mostafa',two:20,four:false});
*/


















//Type annotation with object
/*
let user:{
    Name: string,
    readonly age: number,
    country: string,
    hired:boolean,
    languages:{
        Arabic:number,
        English:number
    }
} = {
    Name: "Osama",
    age:23,
    country: 'Egypt',
    hired:true,
    languages:{
        Arabic:100,
        English:90
    }
}

console.log(user.Name);
user.Name = 'Ahmed';
console.log(user.Name);
*/









//Interface Declaration
/*
interface User{
    readonly name:string,
    age:number,
    hired:boolean
}

let user:User = {
    name:'Hamada',
    age:23,
    hired:false
}

console.log(user['age']);
user.age = 27;
console.log(user.age);

function getData(data:User):void{
    console.log(data.name);
    console.log(data.age);
    console.log(data.hired);
}

getData({name:'KareemEldeen',age:23,hired:true});
*/














//interface methods, and parameters
/*
interface User{
    readonly name:string,
    age:number,
    hired:boolean,
    sayHello():string,
    sayWelcome: ()=> string
}

let user:User = {
    name:'Hamada',
    age:23,
    hired:false,
    sayHello(){
        return "Hello from function in interface";
    },
    sayWelcome: ()=> "Welcome to the cave"
}

console.log(user.sayHello());
console.log(user.sayWelcome());
*/







//Interface reopen, and usecases
/*
//Home Page
interface settings{
    theme:boolean,
    font:string
}

//Article Page
interface settings{
    sidebar:boolean
}

//Contact Page
interface settings{
    external:boolean
}

let userSettings:settings = {
    theme:true,
    font:'Arial',
    sidebar:true,
    external:true
};
console.log(userSettings);
*/









//Interface extend
/*
interface user{
    name:string,
    age:number
}

interface moderator extends user{
    role:string
}

let user : moderator = {
    name:'KareemEldeen',
    age:23,
    role:'Moderator'
}
console.log(user);
*/

















//Class type annotaiton

    /*
class User{

    //properties must be declared with a type and initialized
    userName:string;
    age:number;
    sendMsg: ()=>string;
    //constructor
    constructor(userName:string,age:number){
        this.userName = userName;
        this.age = age;
        this.sendMsg = function(){
            return `Hello ${this.userName}, your age is : ${this.age}`;
        }
    }

    sayHi(){
        return 'Hi From Class User';
    }
}


let u = new User("KareemEldeen",24);
console.log(u.sendMsg());
console.log(u.sayHi());
*/











//Classes access modifiers, and parameters properties

/*
class User{

    //properties must be declared with a type and initialized
    private userName:string;
    protected age:number;
    sendMsg: ()=>string;
    //constructor
    constructor(userName:string,age:number,public readonly address:string, private salary:number){
        this.userName = userName;
        this.age = age;
        this.sendMsg = function(){
            return `Hello ${this.userName}, your age is : ${this.age}`;
        }
    }

    sayHi(){
        return 'Hi From Class User';
    }
}
*/








//Class, get and set
/*
class User{

    //properties must be declared with a type and initialized
    private userName:string;
    protected age:number;
    sendMsg: ()=>string;
    //constructor
    constructor(userName:string,age:number,public readonly address:string, private salary:number){
        this.userName = userName;
        this.age = age;
        this.sendMsg = function(){
            return `Hello ${this.userName}, your age is : ${this.age}`;
        }
    }

    sayHi(){
        return 'Hi From Class User';
    }

    getUserName():string{
        return this.userName;
    }

    setUserName(uname:string):void{
        this.userName = uname;
    }
}

let user = new User('KareemEldeen',24,'Giza',10000);
console.log(user.getUserName());
console.log(user.address);
console.log(user.sendMsg());
user.setUserName('Mostafa');
console.log(user.getUserName());
*/













//class static members
/*
class User{
    private static counted:number = 0;
    static getCount():void{
        console.log(`${this.counted} Objects created`);
    }
    constructor(username:string){
        User.counted++;
    }
}

let user1 = new User("KareemEldeen");
let user2 = new User("Osama");
let user3 = new User("Nabil");
// console.log(User.counted);
User.getCount();
*/







//Class implements interface
/*
interface settings{
    theme:boolean,
    font?:string,
    save():void
}

class User implements settings{
    constructor(public theme:boolean){}
    save():void{
        console.log("Settings saved successfully!")
    }

    update():void{
        console.log('Updated!');
    }
}


let user = new User(true);
console.log(user.theme);
user.save();
user.update();
*/




















//Abstract classes, and memebers
/*
abstract class Food{
    constructor(foodName:string){}
    abstract getCookingTime():void;
}

class Pizza extends Food{
    constructor(foodName:string,price:number){
        super(foodName);
    }

    getCookingTime():void{
        console.log('Cooking time for pizza is 20 minutes');
    }
}

class Pasta extends Food{
    constructor(foodName:string,price:number){
        super(foodName);
    }

    getCookingTime():void{
        console.log('Cooking time for pasta is 30 minutes');
    }
}


let pizza = new Pizza("Pizza",100);
let pasta = new Pasta("Pasta",120);
pizza.getCookingTime();
pasta.getCookingTime();
*/












//Polymorphism, and override
/*
class Player{
    constructor(public pName:string){}
    attack(){
        console.log('Attacking Now!')
    }
}

class Amazon extends Player{
    constructor(playerName:string, public spears:number){
        super(playerName);
    }
    
    override attack(){
        console.log('Attacking with spears');
        this.spears -=1;
        console.log(`Available speaers ${this.spears}`)
    }
}

let amazon = new Amazon('Zee' , 78);
amazon.attack();
amazon.attack();
amazon.attack();
amazon.attack();
*/













//Generics Introduction
/*
function returnType<GenericType>(val:GenericType):GenericType{
    return val;
}


console.log(returnType<number>(20));
console.log(returnType<string>('KareemEldeen'));
console.log(returnType<boolean>(true));
*/









//Generics multiple types
/*
function returnMultipleTypes<T,S>(one:T , two:S):string{
    return `First value is ${one} , Second values is ${two}`;
}

console.log(returnMultipleTypes<string,number>('Ahmed',3));
console.log(returnMultipleTypes<boolean,number>(true,3));
*/
















//Generic classes
/*
class User <T = number>{
    constructor(public value:T){}
    getName():void{
        console.log(this.value);
    }
}


let user = new User<string>("KareemEldeen");
user.getName();
*/












//Generics, and interfaces
/*
interface book{
    title:string,
    author:string
}

class collection<T>{
    public data:T[] = [];
    addItem(item:T):void{
        this.data.push(item);
    }

}

let books = new collection<book>();
books.addItem({title:"What's behind the nature" , author:"Ahmed Tawfeek"});
books.addItem({title:"Jotupia" , author:"Ahmed Tawfeek"});
books.addItem({title:"Triple of Granada" , author:"Radwa Ashour"});
console.log(books);
*/














//////////          END          //////////




