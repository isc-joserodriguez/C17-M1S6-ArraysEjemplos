/**
 * Crear una función que reciba un array de calificaciones y obtenga el
 * promedio con el uso de los métodos de arrays. Si el promedio es mayor a
 * 70 imprima que aprobó / si es menor, que no aprobó
 */
function promedio(listaCalificaciones) {
  const suma = listaCalificaciones.reduce(function (acc, valAct) {
    return acc + valAct;
    //Lo que se regresa en el return, representa acc en la siguiente iteración (Acumulador)
    //valAct: Elemento actual en cada iteración
  }, 0); //Obtenemos suma

  const NoElementos = listaCalificaciones.length; //Obtenemos el número de elementos

  // Promedio = SumaTotal/Número de elemetos

  const promedio = (suma / NoElementos).toFixed(2); //Calculamos el promedio y redondeamos a 2 decimales

  if (promedio >= 70) {
    //Estructura lógica
    console.log("Aprobó: " + promedio);
  } else {
    console.log("No aprobó: " + promedio);
  }
}

promedio([100, 80, 50, 50, 60, 10]);

function promedioForeach(listaCalificaciones) {
  var suma = 0;

  listaCalificaciones.forEach(function (calificacion) {
    //suma= suma+ calificacion
    suma += calificacion;
  });

  const NoElementos = listaCalificaciones.length; //Obtenemos el número de elementos

  const promedio = (suma / NoElementos).toFixed(2); //Calculamos el promedio y redondeamos a 2 decimales

  if (promedio >= 70) {
    //Estructura lógica
    console.log("Aprobó: " + promedio);
  } else {
    console.log("No aprobó: " + promedio);
  }
}

promedioForeach([100, 80, 50, 50, 60, 10]);

function imprimeArrayFor(elementos) {
  for (var i = 0; i < elementos.length; i++) {
    console.log(elementos[i]);
  }
}

imprimeArrayFor(["uno", 2, null, 0]);

function imprimeArrayForEach(elementos) {
  elementos.forEach(function (elemento) {
    console.log(elemento);
  });
}

imprimeArrayForEach(["uno", 2, null, 0]);

var array = ["uno", 2, null, 0];

function ejemplo(array) {
  array.forEach(function (elemento) {
    console.log(elemento);
  });
}

ejemplo(array);

console.log("-----------------------------------------");
/*
Utiliza la función forEach para recorrer cada elemento del arreglo nombres. 
En cada iteración debes agregar el nombre en mayusculas en el arreglo 
nombreMayusculas
*/
console.log("Punto 2.");

const nombres = [
  "alberto",
  "paty",
  "Jose",
  "daniel",
  "luis",
  "antonio",
  "Luis",
  "paty",
  "luis",
];

const nombreMayusculas = [];

nombres.forEach(function (nombre) {
  nombreMayusculas.push(nombre.toUpperCase());
});

console.log(nombreMayusculas)

const nombresEnMayusculas = nombres.map(function (nombre) {
  return nombre.toUpperCase()
});

console.log(nombresEnMayusculas)
