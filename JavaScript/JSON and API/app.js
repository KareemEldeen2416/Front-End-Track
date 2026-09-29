//Parse and Stringify
/*
let myJsonObject = '{"Name":"Osama" , "Age":40}';
let myJSObject = JSON.parse(myJsonObject);
console.log(myJSObject.Name);
console.log(myJSObject.Age);
myJSObject.Name = "Mostafa";
myJSObject.Age = 42;
let myJsonObjectToServer = JSON.stringify(myJSObject);
console.log(myJsonObjectToServer);
*/














//Request and Response from real API
let req = new XMLHttpRequest();
req.open("GET","https://api.github.com/users/KareemEldeen2416",true);
req.send();
console.log(req);
req.onreadystatechange = function(){
    console.log(req.readyState);
    console.log(req.status);
    if(this.readyState === 4 && this.status === 200){
        // console.log(this.responseText);
        let JSObject = JSON.parse(this.responseText);
        let para1 = document.createElement("p");
        para1.innerHTML = `User Name: ${JSObject.login} <br> ID: ${JSObject.id}`;
        let image = document.createElement("img");
        image.setAttribute('src',`${JSObject.avatar_url}`);
        document.body.appendChild(para1);
        document.body.appendChild(image);

    }
}












