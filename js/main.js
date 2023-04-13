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
