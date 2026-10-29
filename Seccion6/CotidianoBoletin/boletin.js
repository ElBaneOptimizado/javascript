const notas = [7, 4, 8, 9, 6];

function listarNotas() {
    const lista = document.getElementById("lista-notas");
    lista.innerHTML = "";
    for (let i = 0; i < notas.length; i++) {
        lista.innerHTML += "<li>" + notas[i] + "</li>";
    }
}

function calcularPromedio() {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma = suma + notas[i];
    }
    const promedio = suma / notas.length;
    document.getElementById("promedio").textContent = "Promedio: " + promedio;
}

function notaMasAlta() {
    let maxima = notas[0];
    for (let i = 1; i < notas.length; i++) {
        if (notas[i] > maxima) {
            maxima = notas[i];
        }
    }
    document.getElementById("notamasalta").textContent = "Nota mas alta: " + maxima;
}

function hayAplazados() {
    let tieneAplazados = "No";
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < 4) {
            tieneAplazados = "Sí";
            break;
        }
    }
    document.getElementById("aplazo?").textContent = tieneAplazados;
}

listarNotas();
document.getElementById("btn-promedio").addEventListener("click", calcularPromedio);
document.getElementById("btn-nota-alta").addEventListener("click", notaMasAlta);
document.getElementById("btn-aplazados").addEventListener("click", hayAplazados);
