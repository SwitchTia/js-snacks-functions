/* Scrivi una funzione che accetti un'array di stringhe e una lettera 
e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const getInitialX = (array, x) => {
    let initialX = [];
    
    for (let i = 0; i < array.length; i++) {
        if (array[i][0] === x){
            initialX.push(array[i]);
        }
    }
    return initialX;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(getInitialX(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]