interface IPerson2{
    name:string,
    age?:number;
}

interface IKorean extends IPerson2{
    city:string;
}

const k: IKorean={
    name:'이솨',
    city:"서울",
}

//HTMLDivElement