"use strict";
function error(mesesage) {
    throw new Error(mesesage);
}
function fail() {
    return error('failed');
}
function infiniteLoop() {
    while (true) {
    }
}
fail();
