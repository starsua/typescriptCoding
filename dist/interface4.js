"use strict";
const p41 = {
    name: 'mark',
    age: 30,
    hello: function () {
        console.log(`안녕하세요! ${this.name}입니다.`);
    }
};
const p42 = {
    name: 'mark',
    age: 30,
    hello() {
        console.log(`안녕하세요! ${this.name}입니다.`);
    }
};
// const p43: Person4={
//     name:'mark',
//     age:30,
//     hello: (): void=>{
//         console.log(`안녕하세요! ${this.name}입니다.`) //arrow function에서는 this. 못 씀
//     }
// }
p41.hello();
p42.hello();
