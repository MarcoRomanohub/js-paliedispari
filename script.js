function checkPalindrome(str) {  
  // prendo la lunghezza totale delle parole
  const len = str.length;  

  // uso il ciclo for per dividere le parole a metà
  for (let i = 0; i < len / 2; i++) {  
      // controllo che le due metà siano uguali
      if (str[i].toLowerCase() !== str[len - 1 - i].toLowerCase()) {  
        alert( 'It is not palindrome'); 
        return;
      }  
  }  
// Se sono uguali, allora non è palindroma
  alert( 'It is a palindrome');    
}  

// input stringa o numero dal prompt 
let string = prompt('Enter a string or number to check for Palindrome: ');  

const value = checkPalindrome(string) ;  




// PariDispari

let pariDispari;
let numGiocatore;
let numPc;
let somma;
let risultato;
let vincitore;

let validPariDispari = false;
let validNumber = false;

while (!validPariDispari) {
  pariDispari = prompt('Scrivi "pari" oppure "dispari"')
  // verifico che la stringa inserita sia 'pari' o 'dispari'
  if(pariDispari.toLowerCase() === 'pari' || pariDispari.toLowerCase() === 'dispari'){
    // se la stringa è valita interrompo il ciclo quindi non chiedo un altrpo inserimento
  validPariDispari = true;
  }else{
    alert('Attenzione! Devi scrivere la parola "pari" o "dispari"')
  }
}


while(!validNumber){
  numGiocatore = parseInt(prompt('Scrivi un numero da 1 a 5'));
  if(isNaN(numGiocatore) === false){
    if(numGiocatore > 0 && numGiocatore <=5){
      validNumber = true;
    }else{
      alert('Attenzione! hai inserito un numero sbagliato')
    }
  }else{
    alert('Attenzione! hai inserito una stringa e non un numero')
  }
}
  
numPc = getRandomNumber();
console.log(numPc);
somma = numGiocatore + numPc;
risultato = EvenOrOdd(numGiocatore + numPc); 
const output = document.querySelector('h1');

if((somma % 2 === 0 && pariDispari === 'pari') || (somma % 2 !== 0 && pariDispari === 'dispari')){
  vincitore = 'Vince il giocatore'
}else{
  vincitore = 'Vince il pc';
}

output.innerHTML =  ` Il giocatore ha giocato ${pariDispari} con numero ${numGiocatore} <br> 
Il pc ha giocato ${numPc}  <br>
${risultato} <br>
${vincitore}`

function getRandomNumber() {
  return Math.ceil(Math.random()* 5);
}

function EvenOrOdd(somma){
  if(!(somma % 2)){
    risultato = 'La somma è pari';
  }else{
    risultato = 'La somma è dispari';
  }
  console.log(risultato);
  return risultato;
}