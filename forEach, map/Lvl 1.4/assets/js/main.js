let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];


const celcius = fahrenheit.map(x => Math.round((x-32) / 1.8 ));
console.log(celcius)




// function celcius2(x){
//     return (x -32) /1.8;
// };

// const fahrenheitToCelcius = fahrenheit.map(celcius2);

// console.log(fahrenheitToCelcius)