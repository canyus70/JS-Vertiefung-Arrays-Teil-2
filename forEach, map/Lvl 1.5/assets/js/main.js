let checkNumber = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

const teilen = checkNumber.map(nummer => {
    if (nummer % 3 === 0) {
        return nummer + 100;
    } else {
        return nummer
    }
});


const teilen2 = checkNumber.map(nummer => (nummer % 3 ===0) ? (nummer +100):nummer);



console.log(teilen2);
