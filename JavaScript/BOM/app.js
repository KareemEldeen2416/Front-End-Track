// alert, confirm, prompt

// alert("This is a message");
// let confirmation = confirm('Are your sure ... ?');
// console.log(confirmation);
// let promptMsg = prompt('Enter suitable day?','Ex:Sat,Mon,Fri');
// console.log(promptMsg);



// setTimeout, clearTimeout

// let timer = setTimeout(sayMsg,3000,'KareemEldeen');
// function sayMsg(name){
//     console.log(`Hello, ${name}`);
// }

// let btn = document.querySelector('button');
// btn.onclick = function(){
//     clearTimeout(timer);
// }


//setInterval, clearInterval
/*
let interval = setInterval(sayMsg,1000,'Osama');
function sayMsg(name){
    console.log(`Hello, ${name}`);
}

let btn = document.querySelector('button');
btn.onclick = function(){
    clearInterval(interval);
}
*/





//Window location Object

/*
console.log(location);
console.log(location.href);
console.log(location.host);
console.log(location.hash);
console.log(location.port);
console.log(location.protocol);
location.reload();
location.replace('https://www.google.com');
location.assign('https://kareemeldeen.com');
*/







//Window open, and close

// setTimeout(function(){
//     window.open('https://www.google.com','_blank','width=400,height=400');
//     // window.open('https://www.google.com','_self');
// },3000);
















//Window History Object
// console.log(history);
// console.log(history.length);
// history.forward();
// history.back();
// history.go(-2);










//Scroll, ScrollTo, ScrollBy, focus, print, stop
// window.stop();
// window.print();
// let myNewWindow = window.open('https://www.google.com','_blank','width=500,height=500');
// myNewWindow.focus()
// window.scrollTo(4000,4000);
// window.scrollTo(4000,4000);










//Local Storage*****
// window.localStorage.setItem('name','None');
// window.localStorage.age = 33;
// window.localStorage['address'] = 'None';
// let submit = document.querySelector('form button');
// let inputs = document.querySelectorAll('form input');
// console.log(submit);
// submit.onclick = function(e){
//     e.preventDefault();
//     window.localStorage.name = inputs[0].value;
//     window.localStorage.age = inputs[1].value;
//     window.localStorage.address = inputs[2].value;
// }

// console.log(window.localStorage.name);
// console.log(window.localStorage.age);
// console.log(window.localStorage.address);
// console.log(window.localStorage.key(0));
//window.localStorage.clear();












//Session Storage
// **The same as local storage but the info available only for current session




