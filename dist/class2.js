"use strict";
class PersonC2 {
    constructor(age) {
        this.name = "mark";
        if (age === undefined) {
            this.age = 20;
        }
        else {
            this.age = age;
        }
    }
}
const pc2 = new PersonC2(30);
const pc3 = new PersonC2();
console.log(pc2);
pc2.age = 39;
console.log(pc2.age);
