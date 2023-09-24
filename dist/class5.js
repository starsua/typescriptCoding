"use strict";
//getter&setter
class PersonC5 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        console.log('get');
        return this._name + ' Lee';
    }
    set name(n) {
        console.log('set');
        this._name = n;
    }
}
const pc7 = new PersonC5("mark", 39);
console.log(pc7.name);
pc7.name = 'sua';
console.log(pc7.name);
