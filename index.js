//String Methoden --> strings

// string.split()  --> aus nem String einen Array
console.log('Ich bin ein String'.split(' ')); //--> Wieviele Worte in einem Satz
console.log('Ich bin ein String'.split('').length); 

// length Attribut --> gibt die Länge des Strings zurück
let string = "Ein anderer String";
console.log(string.length); 

// Einzelen Elemente im String auswählen
console.log('Auswählen mit Index: ', 'Hallo'[0]);

//slice --> kopiert mir was aus dem String raus und gibt es mir zurück, verändert nicht den ursprünglichen String!
let sliceString = "Ich bin ein Beispiel"
let zurück = sliceString.slice(3)
console.log(zurück)
console.log(sliceString);

//includes --> überprüft ob etwas in einem String ist --> ja oder nein (true oder false)
let includeString = "Bitte such mich"
console.log(includeString.includes("mich"))

// toUpperCase --> Schreibt String groß
console.log("hallo".toUpperCase());

//////////////////////////////


// Array Methoden --> arrays

//join() --> macht asu einem Array einen String
console.log(["Ich", "bin", "ein", "array"].join(' *** '))

// push --> fügt ein Element ans Ende des Arrays
let leererArray = [];
leererArray.push(1);
leererArray.push(2);
leererArray.push('Heidi');
console.log(leererArray);

//pop --> nimmt letzte Element raus,
// shift --> nimmt erste Element raus,
// unshift --> fügt Element an den Anfang ein
// reverse --> dreht den Array um
leererArray.reverse()
console.log(leererArray);


/////////////////////////////// 

// Spaß mit Zahlen  --> Numbers

// + - * / % --> rechnen
// ** Exponential
console.log(2**3);

// Zufallszahl erzeugen --> von 0-9
let randomZahl = Math.floor(Math.random()*10)
console.log(randomZahl);


// Math.irgendwas() Rechnungen --> vverschiedenste MAthe Operationen

/////////////////////////////////

// conditionals
// if() else{}

// Logische Operatoren  &&   || 
// Vergleisoperatoren < > >= <= ===

// SChleifen --> 
console.log('Anfang Schleife')
for (let i=0; i<10; i++){
    if (i % 2 === 0){
        console.log(i)
    }
}

// Funktionen-Beispiele

// Die Funktion nimmt ein Wort und überprüft ob das Wort auf "tal" endet, wenn ja dann ändere tal zu Berg und gib das neue Wort zurück
function changeWord(wort){
    let result = ""
    if(wort.slice(-3) === 'tal'){
        result = wort.slice(0,-3);
        result += 'berg';
        return result
    }
    return wort
}

console.log(changeWord('Berlintal'));
console.log(changeWord('Hollertal'));


/// Funktion die nimmt eine Zahl und gibt zurück ob die Zahl gerade ist
function gerade(zahl){
  let result = zahl % 2 === 0;
  return result
    
}
console.log(gerade(9));


// Funktion die nimmt eine Zahl und gibt einen String aus * zurück, mit der ANzahl der reingebeben Zahl
//Bsp paintStar(10) --> ***********

function paintStar(zahl) {
    let result = "";
    for(let i=0; i<zahl; i++){
        result += '*'
    }
    return result
}

console.log(paintStar(3));

function paintStartwithArray(zahl){
    let result = [];
    for (let i=0; i<zahl; i++){
        result.push('*');
    }
    return result.join('')
}
console.log(paintStartwithArray(5));



// While loop
let counter = 0;
let i=0;
while(i !== 10){
    i = Math.floor(Math.random()*100);
    counter++
}
console.log('Zufall: ', counter, i);


// Funktion die eien Array erhält und die größte Zahl sucht
function biggest(array){
    let result = 0;
    for(let i=0; i<array.length; i++ ){
        console.log(array[i])
        if (array[i] > result){
            result = array[i]
        }
    }
    return result
}
console.log('Größte Zahl: ', biggest([12,23,34,654,231]));


// Funktion die bekommt zwei Zahlen und erstellt daraus eine Reihe von Zahlen, wobei die erste zahl immer verdoppelt wird, sooft wie die zweite Zahl vorgibt
// doubleMe(5, 4); --> 10 20 40 80

function doubleMe(zahl1, zahl2){
    let result = zahl1;
    let string = ""
    for (let i= 0; i<zahl2; i++){
        result += result;
        string += result + ' ';
    }
    return string
}

console.log(doubleMe(5,4));


/// Eine Funktin die eine Zahlenreihe erzeugt und eine Zahl nimmt, die Zahl bestimmt die Länge der Zahlenreihe 
// zahlenreihe(5) ---> 1 2 3 4 5

function zahlenreihe(zahl){
    let result = [];
    for (let i=1; i<=zahl; i++){
        result.push(i)
        
    }
    return result.join(' ')
}
console.log(zahlenreihe(5));