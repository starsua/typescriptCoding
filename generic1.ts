function helloString(message:string):string{
    return message;
}

function helloNumber(mesesage:number):number{
    return mesesage;
}

function helloGnr(message:any):any{
    return message;
}

console.log(helloGnr('mark').length)

function helloGeneric<T>(message:T):T{
    return message
}

console.log(helloGeneric('mark').length)
console.log(helloGeneric(39).toFixed)