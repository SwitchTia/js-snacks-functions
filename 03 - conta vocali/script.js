/* Scrivi una funzione che accetti 
una stringa 
e restituisca il numero di vocali contenute al suo interno */

const word = 'ojavascriptiyyi';


// Dichiara la funzione qui.

const getVowels = (string) => {

    const vowels = ["a","o","u","e","i","y"];
    let count = 0;
    let vowelsArray = [];

    for (let i = 0; i < string.length; i++) {
        for(let j = 0; j < vowels.length; j++){
            if(string[i] === vowels[j])
                vowelsArray.push(string[i]);
        }
    }
    const message = `${vowelsArray.length} (${vowelsArray.join(",")})`;
    return message;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(getVowels(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)