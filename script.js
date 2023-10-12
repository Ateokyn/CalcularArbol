function calcular() {
    const numNodos = parseInt(document.getElementById("numNodos").value);

    // Calcula LCI y LCE usando propiedades de árboles generales
    const lci = numNodos - 1;
    const lce = 2 * (numNodos - 1);

    // Calcula MLCI y MLCE
    const mlci = lci / numNodos;
    const mlce = lce / numNodos;

    // Muestra los resultados en la página
    document.getElementById("lciResult").textContent = lci;
    document.getElementById("lceResult").textContent = lce;
    document.getElementById("mlciResult").textContent = mlci;
    document.getElementById("mlceResult").textContent = mlce;
}
