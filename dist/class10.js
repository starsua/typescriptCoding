"use strict";
//상속
//protected -> 상속받은 클래스까지 접근 가능
class Parent {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    print() {
        console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다.`);
    }
    printName() {
        console.log(this._name, this._age);
    }
}
const p = new Parent('mark', 39);
p.print();
class Child extends Parent {
    constructor(age) {
        super('anna Jr.', age);
        // public _name='anna Jr.'; //접근 제어자도 override 할 수 있다.
        this.gender = 'male';
        this.printName();
    }
}
const cld = new Child(5);
cld.print();
cld.gender = 'female';
// cld._name
