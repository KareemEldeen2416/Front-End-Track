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
