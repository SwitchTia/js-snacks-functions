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




// Scrivi una funzione mediaPositivi(array) 
// che restituisce la media dei soli numeri maggiori di 0.

const numeriTest = [-2, 5, 10, -3, 7];


const mediaPositive = (array) => {

    let sum = 0;
    let media = 0;
    let positiveArray = [];
    
    //iterating array, extracting positive numbers and saving them into positiveArray:
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0){
            positiveArray.push(parseInt(array[i]));
        }
    }

    //calculating the sum of elements into the positiveArray, then calculating the media:
    for (let i = 0; i < positiveArray.length; i++) {
        sum += positiveArray[i]; 
    }
    console.log(positiveArray);
    console.log(sum);

    media = sum / positiveArray.length;
    return media;
}

console.log(mediaPositive(numeriTest)); // (5 + 10 + 7) / 3 = 7.33