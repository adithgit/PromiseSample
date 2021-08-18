// function add(s1,s2,callback){
//     err = false;
//     if(s1==s2){
//         err = true;
//     }
//     callback(s1+s2,err)
// }
const promise = require('promise');


function multiply(s1,s2){
    return new promise((resolve,reject)=>{
        return resolve(s1*s2);
    })
}

function division(s1,s2){
    return new promise((resolve,reject)=>{
        return resolve(s1/s2)
    })
}



function add(s1,s2){
    return new promise((resolve,reject)=>{
        if (s1==s2){
            return reject("The numbers should not be same");
        }
        return resolve(s1+s2)
    })
}

add(101,10).then((sum)=>{
    return multiply(sum,sum)
}).then((product)=>{
    console.log(product)
    return division(product,product)
}).then((result)=>{
    console.log(result)
})
.catch((message)=>{
    console.log(message)
})