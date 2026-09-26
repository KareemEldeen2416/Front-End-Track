console.log(document.getElementsByClassName("para")[0].attributes);
let myP = document.getElementsByTagName("p")[0];
console.log(myP.hasAttribute("data-src"));
console.log(myP.hasAttributes());
myP.removeAttribute("data-src");
console.log(myP.hasAttribute("data-src"));


//Creating and adding elements
let myElement = document.createElement("ul");
myElement.className = "skills-list";
let myAttribute = document.createAttribute("data-custom");
myElement.setAttributeNode(myAttribute);
let myText = document.createTextNode("This is a textual content");
myP.appendChild(myText);
for(let i  = 0 ;i<3;i++){
    let item = document.createElement('li');
    let textContent = document.createTextNode(`Item ${i}`);
    item.appendChild(textContent);
    myElement.appendChild(item);
}
let myComment = document.createComment('This is the end of appending process for this lesson');
document.body.appendChild(myElement);
document.body.appendChild(myComment);














//Deal with children
let testEle1 = document.getElementsByTagName('div')[1];
console.log(testEle1.children);
console.log(testEle1.childNodes);
console.log(testEle1.firstChild);
console.log(testEle1.firstElementChild);
console.log(testEle1.lastChild);
console.log(testEle1.lastElementChild);






//Form Validation
let myForm = document.querySelector('form');
myForm.onsubmit = function(event){
    let userValid = false;
    let myInput = document.querySelector('input');
    if(myInput.value.length > 0){
        userValid = true;
    }
    else{userValid = false;}
    if (userValid === false){
        event.preventDefault();
    }
};


//Focus on an element
window.onload = function(){
    let myInput = document.querySelector('input');
    myInput.focus();
};



//Class list
console.log(myForm.classList.contains('job-form'));
console.log(myForm.classList.add('valid'));
console.log(myForm.classList.remove('job-form'));
console.log(myForm.classList.toggle('test'));
console.log(myForm.classList.replace('job-form','valid'));
console.log(myForm.classList.item(0));



//Styling elements
let styledElement = document.getElementById('styled');
console.log(styledElement);
styledElement.style.color = 'red';
styledElement.style.setProperty('font-weight','bold');
// styledElement.style.cssText = 'background-color:green;';
setTimeout(() => {
    styledElement.style.removeProperty('color');
}, 2000);
console.log(document.styleSheets);
console.log(document.styleSheets[0]);







//Adding children in different ways
let myDiv = document.querySelector('.l97');
let paraEle = document.createElement('p');
let afterPara = document.createElement('p');
let appendedEle = document.createElement('p');
let prependedEle = document.createElement('p');
prependedEle.style.color = 'pink';
// prependedEle.innerText = 'Prepended Child';
appendedEle.style.color = 'blue';
myDiv.before(paraEle);
myDiv.after(afterPara);
myDiv.append(appendedEle);
myDiv.prepend(prependedEle);


//DOM Traversing
/*
-nextSibling
-previousSibling
-nextElementSibling
-previousElementSibling
-parentElement
*/








//DOM Cloning
let clonedEle = document.querySelector('#styled').cloneNode(true);
document.body.appendChild(clonedEle);
clonedEle.textContent = 'This is a cloned element from the styled element';
clonedEle.id = 'cloned';

