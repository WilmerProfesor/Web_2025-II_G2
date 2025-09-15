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

//============================ FUNCIONES ============================

function saludar(nombre, apellido) {
    return "Hola " + nombre + " " + apellido;
}

console.log(saludar("Wilmer", "Patiño"));

//============================ FUNCIONES ANONIMAS ============================

const varA= function (x, y) {
return x + y;
}
console.log( varA(3, 5));

//============================ FUNCIONES FLECHA (Arrow Function) ============================

const varB = () => {};
const varC = (x) => {return x++;};
const varD = x => {return x++;};
const varE = (x, y) => {return x++ + y++;};
const varF = x =>  x++ ;

//============================ FUNCIONES DE ORDEN SUPERIOR ============================

const arrayNum = [1,2,3,4,5,6,7,8,9,10];
const arrayObj = [
    {id:1, name:"Wilmer"},
    {id:2, name:"Juan"},
    {id:3, name:"Pedro"},
    {id:4, name:"Maria"},
    {id:5, name:"Ana"},
];

// es aquella que retorna o recibe como parametro otra función
//map
const arrayNum2 = arrayNum.map(  (elemento) =>{
        return elemento * 2;
    }   
); 
console.log(arrayNum2);

//forEach
arrayNum.forEach(  (elemento)=> {
        console.log(elemento-1);
    }   
);

//filter
const arrayNum3 = arrayObj.filter(  (elemento) =>{
        return elemento.name == "Pedro";
    }   
);
console.log(arrayNum3);

//find
const arrayNum4 = arrayObj.find(  (elemento) =>{
        return elemento.name == "Pedro";
    }   
);

console.log(arrayNum4);

//reduce
const suma = arrayNum.reduce(  (acumulador, elemento) =>{
        return acumulador + elemento;
    }  , 10 
);

console.log(suma);

//============================ OBJ - JSON ============================

const persona = {
    nombre: "Wilmer",
    apellido: "Patiño", 
    edad: 20,
    direccion: {
        calle: "Calle 123",
        ciudad: "Bogotá",   
        pais: "Colombia"
    },
    hobbies: ["Leer", "Programar", "Correr"],    
};

const persona2 = {
    "nombre": "Ana",
    "apellido": "Gomez",
    "edad": 25,
    "direccion": {
        "calle": "Calle 456",
        "ciudad": "Medellín",
        "pais": "Colombia"
    },
    "hobbies": ["Bailar", "Cantar", "Viajar"],
};
