/* Scrivi una funzione che accetti un'array di stringhe e una lettera 
e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const getInitialLetter = (array, letter) => {
    let initialLetterArray = [];
    
    for (let i = 0; i < array.length; i++) {
        if (array[i][0].toLowerCase() === letter.toLowerCase()){
            initialLetterArray.push(array[i]);
        }
    }
    return initialLetterArray;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(getInitialLetter(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]