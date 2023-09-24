"use strict";
//static properties & methods
class PersonMt {
    hello() {
        console.log('안녕하세요', PersonMt.CITY);
    }
    change() {
        PersonMt.CITY = 'LA';
    }
}
PersonMt.CITY = 'Seoul';
const pmt1 = new PersonMt();
const pmt2 = new PersonMt();
pmt1.hello();
// PersonMt.hello();
PersonMt.CITY;
pmt1.change();
pmt2.hello();
