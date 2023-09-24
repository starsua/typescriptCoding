"use strict";
//const aNumber:number=maybe;
if (maybe === true) { //타입 가드 - unknown을 쓰면 타입을 한정시켜서 쓸 수 있음
    const aBoolean = maybe;
}
if (typeof maybe === 'string') {
    const aString = maybe;
}
