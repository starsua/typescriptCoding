
class PersonC6{
   
    public readonly name:string='mark'
    private readonly country:string='Korea'; //readonly는 초기화할때만 값 세팅 가능

    public constructor(private _name:string,private age:number){ 
     this.country="korea";
    }

    hello(){
        // this.country='China';
    }

}

const pc8:PersonC6=new PersonC6("mark",39);
console.log(pc8.name)
//pc8.name='sua'
console.log(pc8.name)