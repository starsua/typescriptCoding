//생성자
class PersonC4{
   
    public constructor(public name:string,private age:number){ //this에 알아서 할당됨
     
    }

}

const pc6:PersonC4=new PersonC4("mark",39);
console.log(pc6)