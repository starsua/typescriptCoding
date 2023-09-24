abstract class AbstractpccersonCC{
    protected _name:string='mark';

    abstract setName(name:string):void;

}

class pccersonCC extends AbstractpccersonCC{
    setName(name: string): void {
        this._name=name;
    }
}

const pcc=new pccersonCC();
pcc.setName('sua')