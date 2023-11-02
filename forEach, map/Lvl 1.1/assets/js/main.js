let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
];

const myDrink = () => {
    getraenke.sort();
    getraenke.forEach((elt) => {
        console.log(elt);
        document.write(elt +"<br>");
    });

};

myDrink(getraenke);


getraenke.forEach((elt) => {
    console.log(elt);
});


