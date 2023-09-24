"use strict";
class PersonC6 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
        this.name = 'mark';
        this.country = 'Korea'; //readonly는 초기화할때만 값 세팅 가능
        this.country = "korea";
    }
    hello() {
        // this.country='China';
    }
}
const pc8 = new PersonC6("mark", 39);
console.log(pc8.name);
//pc8.name='sua'
console.log(pc8.name);
