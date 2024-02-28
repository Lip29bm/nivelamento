"use strict";
function organizaArrayParte2() {
    let array = [
        3, 7, 2, 5, 12, 8, 10, 19, 20, 17, 13, 14, 11, 1, 9, 4, 6, 15, 16, 18
    ];
    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                array.splice(i, 0, array[i + 1]);
                array.splice(i + 2, 1);
            }
        }
    }
    console.log(array);
}
organizaArrayParte2();
