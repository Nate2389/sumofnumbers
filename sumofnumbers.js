"use strict";
const numList = [1, 2, 3, 4];
function sumFor(list) {
    let total = 0;
    for (let i = 0; i < list.length; i++) {
        total += list[i];
    }
    return total;
}
console.log(sumFor(numList));
function sumWhile(list) {
    let total = 0;
    let i = list.length - 1;
    while (i >= 0) {
        total += list[i];
        i--;
    }
    return total;
}
console.log(sumWhile(numList));
function sumRecursion(list) {
    let total = 0;
    if (list.length === 0) {
        return 0;
    }
    total += list[0] + sumRecursion(list.slice(1));
    return total;
}
console.log(sumRecursion(numList));
function sumTheFunctionalWay(list) {
    let total = 0;
    list.forEach((num) => {
        total += num;
    });
    return total;
}
console.log(sumTheFunctionalWay(numList));
