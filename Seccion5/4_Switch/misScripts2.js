function textoEscrito(fruta) {
    let frutas = fruta.toLowerCase().trim();
    let precio;

    switch (fruta) {
        case "manzana":
            precio = 15;
            break;
        case "naranja":
            precio = 20;
            break;
        case "banana":
            precio = 25;
            break;
        default:
            alert("Fruta no encontrada en el inventario.");
            return; 
    }

    alert("El precio de la fruta es " + frutas + " es: " + precio);
}

