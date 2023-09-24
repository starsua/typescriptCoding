//getter&setter
class PersonC5{
   
    public constructor(private _name:string,private age:number){ //this에 알아서 할당됨
     
    }

    get name(){
        console.log('get')
        return this._name+' Lee';
    }

    set name(n:string){
        console.log('set')
        this._name=n;
    }
}

const pc7:PersonC5=new PersonC5("mark",39);
console.log(pc7.name)
pc7.name='sua'
console.log(pc7.name)