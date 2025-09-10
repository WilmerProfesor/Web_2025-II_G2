//============================ SALIDA ============================
//alert("Hola mundo");
console.log("Hola mundo desde la consola");

//============================ ENTRADA ============================
//let dato= prompt("Ingrese su nombre: ");
//console.log("Hola " + dato);

//============================ VARIABLES ============================
let nombre = "Wilmer"; //declaracion de variable
let apellido = "Patino"; //declaracion de variable
let edad = 20; //declaracion de variable
let sexo = true; //declaracion de variable
const PI = 3.14; //declaracion de constante
const array = [3,"palabras",true,{x:1232, otro:"dfhjdsjl"},[23,45,6]];
array.push(2);
let d = {id:123, name:"Wilmer"};
let e = ()=>{return 0;};

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(sexo);
console.log(array);
console.log(d);

console.log(typeof apellido);
console.log(typeof edad);
console.log(typeof sexo);
console.log(typeof array);
console.log(typeof d);
console.log(typeof e);
console.log(typeof PI);
//============================ OPERADORES ============================
let a = 10;
let b = 5;
let c = "10";


console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
console.log(a == c); //comparacion de valor
console.log(a === c); //comparacion de valor y tipo
console.log(a != b); //comparacion de valor
console.log(a !== c); //comparacion de valor y tipo

//============================ CONDICIONALES ============================
if (a > b) {
    console.log("a es mayor que b");
} else if (a < b) {
    console.log("a es menor que b");
} else {
    console.log("a es igual que b");
}
