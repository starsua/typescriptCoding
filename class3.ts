//접근 제어자
class PersonC3{
    public name:string="mark";
    private age:number; // 예전에 javascript에서 private을 지원하지않아서 private이면 _를 붙여서 표현했다.

    public constructor(age?:number){
        if(age===undefined){
            this.age=20;
        }else{
            this.age=age
        }
    }
    public async init(){

    }
}

const pc4:PersonC3=new PersonC3(30);
const pc5:PersonC3=new PersonC3();
console.log(pc4);
// pc4.age=39
// console.log(pc4.age);