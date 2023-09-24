function error(mesesage:string):never{
    throw new Error(mesesage);
}

function fail(){
    return error('failed');
}

function infiniteLoop():never{
    while(true){
        
    }
}
fail()

declare const te:string|number;

if(typeof te !=='string'){
    te;
}

type Indexable<T>=T extends string ? T & {[index:string]:any}:never;

type ObjectIn= Indexable<{}>

//const b:Indexable<{}>='';