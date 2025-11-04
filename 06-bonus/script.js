// Scrivi una funzione contaParola(parole, parolaCercata) 
// che riceve un array di stringhe e restituisce quante volte compare parolaCercata.

const elenco = ["miele", "olio", "uova", "miele", "pane", "miele"];

const countWord = (array, word) => {
    let count = 0;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === word){
            count ++;
        }
    }
    return count;
}

console.log(countWord(elenco, "miele")); // 3