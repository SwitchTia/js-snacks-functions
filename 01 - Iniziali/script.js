/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array 
con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

const words = ["pane", "latte", "gatti", "cani"];

// Dichiara la funzione qui
const getInitials = (array) => {
    let initialsArray = [];
    
    for (let i = 0; i < array.length; i++) {
        initialsArray.push(array[i][0]);
    }
    return initialsArray;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(getInitials(names));
console.log(getInitials(words));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]