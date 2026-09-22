function sayHello(name,age = "Unknown"){
    // age = age || "Unknown Age";
    return `The name is : ${name} , Age is : ${age}`;
}

console.log(sayHello("KareemEldeen",24));
console.log(sayHello("KareemEldeen"));





/////Rest Parameters

function notSpecifiedFunction(...numbers){
    for(let i = 0;i <numbers.length;i++){
        console.log(`number : ${i}`);
    }
}

notSpecifiedFunction(1,3,4,5,6,7,4,3);




//Anonymous Function
let calculator = function(n1,n2){
    return n1+n2;
}

console.log(calculator(1,4));


// setTimeout(function(){console.log("This is a set time out function")},3000);




//Nested Functions
function sayMsg(fname,lname){

    let msg = `Hello`;
    function concatMsg(){
        msg = `${msg}, ${fname} ${lname}`;
    }
    concatMsg();
    return msg;

}


function sayMsg2(fname,lname){
    let msg = `Hello`;
    function concatMsg(){
        return `${msg}, ${fname} ${lname}`;
    }
    return concatMsg();
}

console.log(sayMsg("KareemEldeen" , "Ahmed"));
console.log(sayMsg2("Amr","Shahaly"));






//Arrow Functions
let printName = (name)=>{
    console.log(`Hello ${name}`);
};

printName("Arrow function");





/*
Search For:
-Execution Context
-Lexical Environment
*/





/* 
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////
///////////////////
///////
//////
///////////////////
////////////////////////////////
/////////////////////////////
*/









// * Higher Order Functions * //


// Higher Order Function (Map)
let myArr = [1,2,3,4,5,6];
let addSelf = myArr.map(function(ele,i,array){
    return ele + ele;
},10); 
console.log(addSelf);

let multiSelf = myArr.map((e)=> e * e);
console.log(multiSelf);

function superAdd(ele){
    return ele * ele * ele;
}

let superAdder = myArr.map(superAdd);
console.log(superAdder);




//Map Practice
let swappingCases = 'elZERo';
let invertedNums = [1,-10,-20,15,100,-30];
let ignoreNumbers =  'Elz123er4o';

let sw = swappingCases.split("").map((ele)=>{
    return ele === ele.toUpperCase()? ele.toLocaleLowerCase():ele.toUpperCase();
}).join("");

console.log(sw);

let inv = invertedNums.map((ele)=>{
    return -ele;
});

console.log(inv);

let ignore = ignoreNumbers.split("").map((ele)=>{
    return isNaN(parseInt(ele))? ele:'';
}).join("");
console.log(ignore);



//Higher Order Functions (Filter)
friends = ["Ahmed","Osama","Saad","Asaad","Akbar"];
let filtering = friends.filter((ele)=>{
    return ele.startsWith('A');
});
console.log(filtering);


let nums = [10,4,20,5,7];
let evenNums = nums.filter((ele)=>{
    return ele % 2 === 0;
});

console.log(evenNums);








//Higher Order Functions (Reduce)
let numbersToBeReduced =[10,20,30,40];
let accumulatedNums = numbersToBeReduced.reduce((acc,current)=>{
    return acc + current;
});

console.log(accumulatedNums);




//Reduce practice
let word = ['E','@','@','L','@','Z','E','R','@','@','O'];
let cleanWord = word.reduce((acc,ele)=>{
    return !ele.startsWith('@')? acc + ele : acc+'';
},'');

console.log(cleanWord);






//Higher Order Functions (For Each)
let buttons = document.querySelectorAll('ul li');
buttons.forEach((ele)=>{
    ele.addEventListener('click',function(){
        ele.setAttribute('style','background-color:yellow;');
    });
});






