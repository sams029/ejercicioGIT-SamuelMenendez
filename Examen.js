/* Ejercicio 1 */
console.log("Ejercicio 1 *************************************************");
var numero1 = 5;
var numero2 = 8;

if(numero1 < numero2) {
    console.log("numero1 no es mayor que numero2");
}
if(numero2 > 0) {
    console.log("numero2 es positivo");
}
if(numero1 < 0 || numero1 !== 0) {
    console.log("numero1 es negativo o distinto de cero");
}
if( (numero1 + 1) < numero2 ) {
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}


/* Ejercicio 2 */
console.log("Ejercicio 2 *************************************************");
function numeroFactorial (numero) {
    let fact = 1;
    for (i=1; i<=numero; i++) {
        fact = fact * i;
    }
    return fact;
}

console.log(numeroFactorial(5));


/* Ejercicio 3 */
console.log("Ejercicio 3 *************************************************");
function numeroPar(numero) {
    if ((numero % 2) === 0) {
        return "Numero es par"
    } else {
        return "Numero es impar"
    }
}
console.log(numeroPar(235));


/* Ejercicio 4 */
console.log("Ejercicio 4 *************************************************");
function cadenaPalindromo(cadena) {

    let sinEspacios = cadena.replace(/ /g, "").toUpperCase();
    let invertida = sinEspacios.split("").reverse().join("");

    if(sinEspacios === invertida){
        return "Es palindromo";
    }else{
        return "No es palindromo";
    }
}

console.log(cadenaPalindromo("La ruta nos aporto otro paso natural"));

/* Ejercicio 5 */
console.log("Ejercicio 5 *************************************************");
class Persona {
    nombre;
    edad;

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    obtDetalles(){
        console.log("Persona de nombre: " + this.nombre + " y edad: " + this.edad);
    }

}

class Estudiante extends Persona {
    calificacion;

    constructor(nombre, edad, calificacion) {
        super(nombre, edad);
        this.calificacion = calificacion;
    }

    obtDetalles() {
        console.log("Estudiante de nombre: " + this.nombre + " y edad: " + this.edad + ". Calificacion: " + this.calificacion);
    }
}

class Profesor extends Persona {
    asignatura;
    nivel;

    constructor(nombre, edad, asignatura = "JS", nivel = "Basico") {
        super(nombre, edad);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }

    obtDetalles() {
        console.log("Profesor de nombre: " + this.nombre + " y edad: " + this.edad + ". Asignatura: " + this.asignatura + ", nivel: " + this.nivel);
    }

}

class Grupo {
    profesor;
    promedio;
    estudiantes=[];

    constructor(profesor, estudiantes) {
        this.profesor = profesor;

        for (let i = 0; i < estudiantes.length; i++) {
            this.estudiantes.push(estudiantes[i]);
        }
    }

    calcularPromedio() {
        let temp = 0;
        for (let i = 0; i < this.estudiantes.length; i++) {
            temp = temp + this.estudiantes[i].calificacion;
        }
        this.promedio = temp / this.estudiantes.length;

        return this.promedio;
    }

    obtDetalles() {
        this.profesor.obtDetalles();
        for (let i = 0; i < this.estudiantes.length; i++) {
            this.estudiantes[i].obtDetalles();
        }
    }
}

let estudiantes1 = [];
estudiantes1.push(new Estudiante("Estudiante1", "10", 9));
estudiantes1.push(new Estudiante("Estudiante2", "11", 8));
estudiantes1.push(new Estudiante("Estudiante3", "12", 10));
estudiantes1.push(new Estudiante("Estudiante4", "12", 8));
estudiantes1.push(new Estudiante("Estudiante5", "10", 9));
estudiantes1.push(new Estudiante("Estudiante6", "11", 8));

const prof1 = new Profesor("Carlos Garcia", 26);

const grupo1 = new Grupo(prof1, estudiantes1);

grupo1.obtDetalles();
console.log(grupo1.calcularPromedio());


/* Ejercicio 6*/
console.log("Ejercicio 6 *************************************************");
function combinacion(letras){

    combinaciones = [];

    for (let i = 0; i < letras.length; i++) {
        combinaciones.push(letras[i])
    }

    for (let i = 0; i < letras.length; i++) {
        for (let j = 1; j < letras.length; j++) {
            combinaciones.push(letras[i]+letras[j]);
        }
    }
    for (let i = 0; i < letras.length; i++) {
        for (let j = 1; j < letras.length; j++) {
            for (let k = 1; k < letras.length; k++) {
                combinaciones.push(letras[i] + letras[j] + letras[k]);
            }
        }
    }
    console.log(combinaciones)
}
combinacion("abc");
