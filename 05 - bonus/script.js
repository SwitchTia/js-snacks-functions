/* Scrivi una funzione che accetti una stringa contenente un nome 
e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
const getCurrentHour = () =>{
    const now = new Date();
    const hours = now.getHours();
    return hours;
}

const saluteProperTime = (stringName) => {
    let currentHour = getCurrentHour();
    console.log(currentHour);
    let message = "";

    if (currentHour < 13){
        message = `Buongiorno ${stringName}`;
    }
    else if (currentHour < 17){
        message = `Buon pomerrigio ${stringName}`;
    }
    else {
        message = `Buonasera ${stringName}`;
    }
    return message;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(saluteProperTime(name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.