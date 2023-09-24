"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//접근 제어자
class PersonC3 {
    constructor(age) {
        this.name = "mark";
        if (age === undefined) {
            this.age = 20;
        }
        else {
            this.age = age;
        }
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
const pc4 = new PersonC3(30);
const pc5 = new PersonC3();
console.log(pc4);
// pc4.age=39
// console.log(pc4.age);
