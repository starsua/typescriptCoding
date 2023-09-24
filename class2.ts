class PersonC2{
    name:string="mark";
    age:number; // age! -> 내가 나중에 초기화해주겠다.

    constructor(age?:number){
        if(age===undefined){
            this.age=20;
        }else{
            this.age=age
        }
    }
}

const pc2:PersonC2=new PersonC2(30);
const pc3:PersonC2=new PersonC2();
console.log(pc2);
pc2.age=39
console.log(pc2.age);