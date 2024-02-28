function checkPalindrome(str) {  
  // prendo la lunghezza totale delle parole
  const len = str.length;  

  // uso il ciclo for per dividere le parole a metà
  for (let i = 0; i < len / 2; i++) {  
      // controllo che le due metà siano uguali
      if (str[i] !== str[len - 1 - i]) {  
        alert( 'It is not palindrome'); 
        return;
      }  
  }  
// Se sono uguali, allora non è palindroma
  alert( 'It is a palindrome');    
}  

// input stringa o numero dal prompt 
const string = prompt('Enter a string or number to check for Palindrome: ');  

const value = checkPalindrome(string);  

// log value 
console.log(value);  
