//Promises Intro
// const myPromise = new Promise(function(resolveFunction,rejectFunction){
//     let connect = false;
//     if(connect){
//         resolveFunction("Connection Estalished");
//     }else{
//         rejectFunction("Connection Failed");
//     }

// }).then(
//     (resolvedValue)=>console.log(`Good ${resolvedValue}`),
//     (rejectValue)=>console.log(`Bad ${rejectValue}`)
// );

// console.log(myPromise);


/*
const myPromise = new Promise(function(resolveFunction,rejectFunction){
    let connect = true;
    if(connect){
        resolveFunction("Connection Estalished");
    }else{
        rejectFunction("Connection Failed");
    }

});

console.log(myPromise);
myPromise.then(
    (resolvedValue)=>console.log(`Good ${resolvedValue}`),
    (rejectValue)=>console.log(`Bad ${rejectValue}`)
);
*/






















//Promise then, catch, and finally
/*
const promise = new Promise((resolveFunction,rejectFunction)=>{
    let employees = ['Ahmed','Ali','Sayed'];
    if(employees.length === 4){
        resolveFunction(employees);
    }else{
        rejectFunction(Error(`${employees.length} employees came`));
    }
});

promise.then(
    (resolved)=>{
        resolved.length = 2;
        console.log(resolved);
        return resolved;
    }
);

promise.then(
    (resolved)=>{
        resolved.length = 1;
        console.log(resolved);
        return resolved;
    }
);

promise.catch((rejectionReason)=>console.log(rejectionReason));
promise.finally(()=>console.log("Process is done!"));
*/




















//Fetch API
/*
fetch("https://api.github.com/users/KareemEldeen2416").then(
    (result)=>{
        console.log(result);
        let myData = result.json();
        console.log(myData);
        return myData;
    }
).then((result)=>{
    console.log(result.login);
});


// NOTE: fetch() function returns a promise, and for sure promise return a result whether success of failure.
*/

















//Promise , all , all settled, race
/*
let myFirstPromise = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("I am the first promise")
    }
    ,5000)
});
let mySecondPromise = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("I am the second promise")
    }
    ,1000)
});
let myThirdPromise = new Promise((res,rej)=>{
    setTimeout(()=>{
        rej("I am the third promise")
    }
    ,2000)
});

// Promise.all([myFirstPromise,mySecondPromise,myThirdPromise]).then(
//     (resolvedValues)=>console.log(resolvedValues),
//     (rejectedValues)=>console.log(`Rejected: ${rejectedValues}`)
// );

// Promise.allSettled([myFirstPromise,mySecondPromise,myThirdPromise]).then(
//     (resolvedValues)=>console.log(resolvedValues),
//     (rejectedValues)=>console.log(`Rejected: ${rejectedValues}`)
// );

Promise.race([myFirstPromise,mySecondPromise,myThirdPromise]).then(
    (resolvedValues)=>console.log(resolvedValues),
    (rejectedValues)=>console.log(`Rejected: ${rejectedValues}`)
);
*/






















//Async


/*
// function getData(){
//     let users = ['Osama'];
//     if(users.length > 0){
//         return Promise.resolve('There are users');
//     }
//     else{
//         return Promise.reject('No users found');
//     }
// }

// getData().then(
//     (res)=>console.log(res),
//     (rej)=>console.log(rej)
// )


async function getData(){
    let users = ['Osama'];
    if(users.length > 0){
        return 'There are users';
    }
    else{
        return 'No users';
    }
}


getData().then(
    (res)=>console.log(res),
    (rej)=>console.log(rej)
)
*/




























//Await
/*
let promise = new Promise((res,rej)=>{
    setTimeout(()=>{
        rej('I am a bad promise')
    },3000)
});


async function getData(){
    console.log('Before Promise');
    console.log(await promise.catch((err)=>err));
    console.log('After Promise');
}
getData();
*/






















//Try, catch, finally with fetch



// let promise = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         rej('I am a bad promise')
//     },3000)
// });


// async function getData(){
//     console.log('Before Promise');
//     try{
//     console.log(await promise.catch((err)=>err));
//     }
//     catch(err){
//         console.log(`Error: ${err}`);
//     }finally{
//         console.log('After Promise');
//     }
// }
// getData();

async function fetchData(){
    console.log('Before Promise');
    try{
        let myData = await fetch('https://api.github.com/users/KareemEldeen2416');
        console.log((await myData.json()).login);
    }
    catch(err){
        console.log(`Error: ${err}`);
    }finally{
        console.log('After Promise');
    }
}
fetchData();