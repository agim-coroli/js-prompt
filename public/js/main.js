// let bonjour = prompt("comment tu t'apel");
// alert('Salut ' + bonjour + ', sympa de vous voir !');

// typeof => donne le type d'une variable
let var1 = 6;
let var2 = "6";
let var3 = true;

console.log(typeof(var1));
console.log(typeof(var2));
console.log(typeof(var3));

// .length => donne le nombre de caracteres dans un string
let var4 = "Salut !";
console.log(var4.length);

//  .trim() => supprime les espaces dans une chaine de caracteres s'ils sont placés au début ou a la fin
let var5 = " Bonjour ! "
console.log(var5);
console.log(var5.trim());

// .trimEnd() et .trimStrat() => supprime les espace au debut ou  a la fin
console.log(var5.trimStart()); 
console.log(var5.trimEnd());

// .substr() => permet de selectionné une portion de string (premier param = index de depart, second param = nombre de caractere selectionné)
let var6 = "Hello World";
console.log(var6.substr(0,7)+var6.substr(2,2));

// .replace() => remplace un element par un autre
let var7 = "Hello World";
console.log(var7);
console.log(var7.replace("World", "Agim"));

// .charAt() => permet de selectionné un seul caractere d'un string
let var8 = "Hello World";
console.log(var8.charAt(8));

//.concat() => concatène plusieurs chaines de caractères
let var9 = "Salut";
let var10 = "tout le monde";
console.log(var9.concat(" ", var10));
console.log(var9 + " " +var10);