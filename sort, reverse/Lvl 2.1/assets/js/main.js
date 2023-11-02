// Sergio, Hannah, Regallager, Reliefpfeiler und Rentner.

// "Ella mag alle Bohnen" und "han nesaH has ennaH".



function zeichenKettenUmdrehen(input){
    if(input.includes(" ")){
        const einzelneWörter = input.split(" ");
        const umgedrehteWörter= einzelneWörter.map(x => x.split("").reverse().join(""));
        return umgedrehteWörter.join(" ");
    } else {
        return input.split("").reverse().join("");
    }
}

const nameUmgedreht = zeichenKettenUmdrehen("Sergio");
console.log(nameUmgedreht);

const nameUmgedreht2 = zeichenKettenUmdrehen("Hannah");
console.log(nameUmgedreht2);

const nameUmgedreht3 = zeichenKettenUmdrehen("Regallager");
console.log(nameUmgedreht3);

const nameUmgedreht4 = zeichenKettenUmdrehen("Reliefpfeiler");
console.log(nameUmgedreht4);

const nameUmgedreht5 = zeichenKettenUmdrehen("Rentner");
console.log(nameUmgedreht5);


const satzUmgedreht = zeichenKettenUmdrehen("Ella mag alle Bohnen");
console.log(satzUmgedreht);

const satzUmgedreht2 = zeichenKettenUmdrehen("han nesaH has ennaH");
console.log(satzUmgedreht2);


const zeichKetten = (input) => {   // definiere eine funktion (zeichenKetten) mit dem parameter (input)
    if (input.includes(" ")) { //überprüfen ob der input ein leerzeichen hat
        const einzelneWörter = input.split(" ");// teile wo immer ein leerzeichen ist (teile den satz in einzelne wörter)
        const umgedrehteWörter =einzelneWörter.map(x=> x.split("").reverse().join("")); // teile jedes weort in einzelne buchstaben auf und drehe sie um und füge sie wieder zusammen
        return umgedrehteWörter.join(" ");
    } else {
        return input.split("").reverse().join("");// falls kein leerzeichen da ist: teile den input in einzelne buchstaben und drehe sie um und füge sie wieder zusammen
    }
}

console.log(zeichKetten("yusuf"));