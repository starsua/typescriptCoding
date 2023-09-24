interface Person3{
    name:string;
    age?:number;
    [index:string]:any; //인덱서블 타입을 이용한 옵셔널 프로퍼티 사용. 어떤 이름의 프로퍼티가 와도 괜찮
}

//person['아무문자열']

function hello3(person:Person3):void{
    console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p31:Person3={
    name:'mark',
    age:30,
}

const p32:Person3={
    name:'anna',
    systers:['sung','chan']
}

const p33:Person3={
    name:'sua',
    father:p31,
    mother:p32,
}

hello3(p33)