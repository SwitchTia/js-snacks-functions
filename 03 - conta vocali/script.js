/* Scrivi una funzione che accetti 
una stringa 
e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

const countVowels = (string) => {

    const vowels = ["a","o","u","e","i","y"];
    let count = 0;

    for (let i = 0; i < string.length - 1; i++) {
        for(let j = 0; j < vowels.length - 1; j++){
            if(string[i] === vowels[j])
                count++;
        }
    }
    return count;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(countVowels(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)