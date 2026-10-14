function ActividadPosible() {
    const dineroInput = document.getElementById("Presupuesto").value;
    const personasInput = document.getElementById("Persons").value;
    const actividad = document.getElementById("Actividad").value;
    const respuesta = document.getElementById("resultado");

    
    if (dineroInput === "" || personasInput === "" || actividad === "") {
        respuesta.textContent = "Error";
        return;
    }

    const dinero = parseInt(dineroInput);
    const Persons = parseInt(personasInput);

    if (isNaN(dinero) || isNaN(Persons) || dinero <= 0 || Persons <= 0) {
        respuesta.textContent = "Error";
        return;
    }

    let Resultado = "";
    let porcentajeDescuento = 0;

    
    switch(actividad) {
        case "Deportes":
            if (dinero < 8000) {
               Resultado = "Caminata recreativa";
            } else if (dinero >= 8000 && dinero <= 15000) {
              Resultado = "Alquiler de cancha";
            } else {
                Resultado = "Actividad deportiva Especial";
            }
            break;
    case "Entretenimiento":
            if (dinero < 8000) {
               Resultado = "Actividad económica";
            } else if (dinero >= 8000 && dinero <= 15000) {
                Resultado = "Entrada al cine";
            } else {
                Resultado = "Concierto o espectáculo";
            }
            break;
        case "Turismo":
            if (dinero < 8000) {
               Resultado = "Visita a parque público";
            } else if (dinero >= 8000 && dinero <= 15000) {
                Resultado = "Tour local";
            } else {
                Resultado = "Excursión de día completo";
            }
            break;
        case "Actividades Familiares":
            if (dinero < 8000) {
               Resultado = "Picnic familiar";
            } else if (dinero >= 8000 && dinero <= 15000) {
                Resultado = "Salida recreativa";
            } else {
                Resultado = "Parque temático actividad especial";
            }
            break;
        default:
            Resultado = "?";
    }
    if (Persons >= 1 && Persons <= 4) {
        porcentajeDescuento = 0;
    } else if (Persons >= 5 && Persons <= 8) {
        porcentajeDescuento = 10;
    } else if (Persons >= 9) {
        porcentajeDescuento = 15;
    }

    const Descuento = dinero * (porcentajeDescuento / 100);
    const presupuestoFinal = dinero - (Descuento);

    respuesta.innerHTML = 
    "Actividad recomendada: " + Resultado + "<br>" +  
    "Cantidad de personas: " + Persons + "<br>" + 
    "Porcentaje de descuento aplicado: " + porcentajeDescuento + "%<br>" + 
    "Monto de descuento: ₡" + Descuento + "<br>" +
    "Presupuesto final después de aplicar descuento: ₡" + presupuestoFinal;
}

function reiniciarPagina() {
    document.getElementById("Presupuesto").value = "";
    document.getElementById("Persons").value = "";
    document.getElementById("Actividad").value = 0;
    document.getElementById("resultado").textContent = "";
}
 