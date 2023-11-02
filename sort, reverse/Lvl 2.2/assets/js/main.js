let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

// const aufsteigend = numArray2.sort((num1, num2) => num1 - num2);

// console.log(aufsteigend);

numArray2.sort((num1, num2) => {
    if (num1 < num2) {
        return -1
    } else {
        return 1
    }
})
console.log(numArray2);