Array.prototype.even=function(){
    const arr=this;
    return new Promise(function(resolve,reject){
resolve(arr.filter((x)=>x%2===0));
    }
    ).then(data=>console.log(data));
}
Array.prototype.odd=function(){
    const arr=this;
    return new Promise(function(resolve,reject){
resolve(arr.filter((x)=>x%2!=0));
    }
    ).then(data=>console.log(data));
}
console.log('start');
[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();
console.log('end');