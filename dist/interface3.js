"use strict";
//person['아무문자열']
function hello3(person) {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}
const p31 = {
    name: 'mark',
    age: 30,
};
const p32 = {
    name: 'anna',
    systers: ['sung', 'chan']
};
const p33 = {
    name: 'sua',
    father: p31,
    mother: p32,
};
hello3(p33);
