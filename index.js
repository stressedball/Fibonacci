'use strict';

// iteration
function fibs(n) {
    const array = [0 , 1];
    for (let i = 2; i < n; i++) {
        array.push(array[i - 2] + array[i - 1])
    }
    return array;
}

function fibsRec(...n) {
    if (n.length === 1) {
        if (Number(n) === 0) {
            return [0 , 1, 'Fibonacci! :D'];
        }
        return fibsRec((n - 1), [0 , 1]);
    }

    if (n.length === 2) {
        const counter = n[0];
        const array = n[1]
        if (counter === 0) { 
            return array;
        }
        const total = array[array.length - 2] + array[array.length - 1];
        array.push(total);
        return fibsRec((counter - 1), array);
    }

}

function mergeSort(array) {

    if (array.length < 2) {
        return;
    }         
    
    const left = array.slice(0, array.length / 2);
    const right = array.slice(array.length / 2, array.length);

    mergeSort(left);
    mergeSort(right);

    let iLeft = 0;
    let iRight = 0;
    let iArray = 0;

    const tempArray = [];

    while (iLeft < left.length && iRight < right.length) {
        if (left[iLeft] < right[iRight]) {
            tempArray.push(left[iLeft]);
            iLeft++;
        } else {
            tempArray.push(right[iRight]);
            iRight++;
        }
        iArray++;
    }

    while (iLeft < left.length) {
        tempArray.push(left[iLeft]);
        iLeft++;
        iArray++;
    }
    
    while (iRight < right.length) {
        tempArray.push(right[iRight]);
        iRight++;
        iArray++;
    }

    for (let i = 0; i < iArray; i++) {
        array[i] = tempArray[i]; // you need to change the array, returning the copy doesn't work
    }

    return array;
    // return tempArray;
}

const even = [820, 601, 257, 735, 45, 818, 644, 217]; // even
const odd = [242, 5484, 546, 545, 213, 8784, 6213, 54, 540] // odd

console.log(mergeSort(even));
console.log(mergeSort(odd));