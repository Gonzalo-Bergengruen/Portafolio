let numColumnas = 5;
let numTarjetas1 = 1;
function AvisoFunción() {
    let count = 0;
    document.getElementById("Aviso").textContent = "No podes hacer eso.";
    if (count == 0) {
        document.getElementById("Aviso").style.color = "white";
        count++;
    }
    else if (count == 1) {
        document.getElementById("Aviso").style.color = "red";
        count++;
    }
    else if (count == 2) {
        document.getElementById("Aviso").style.color = "blue";
        count = 0;
    }
}

function EliminarColumna1() {
    let element = document.getElementById("--1");
    element.style.display = "none";
    numColumnas--;
    element.id = "";
    document.getElementById("--2").id = "--1";
}

function EliminarTarjeta1_1() {
    numTarjetas1--;
    let element = document.getElementById("1_1");
    element.style.display = "none";
    element.id = "";
    document.getElementById("1_2").id = "1_1";
    document.getElementById("1_3").id = "1_2";
    document.getElementById("1_4").id = "1_3";
    document.getElementById("1_5").id = "1_4";
    document.getElementById("1_6").id = "1_5";
    document.getElementById("1_7").id = "1_6";
    document.getElementById("1_8").id = "1_7";
    document.getElementById("1_9").id = "1_8";
    document.getElementById("1_10").id = "1_9";
}

function CrearColumna() {
    numColumnas++;
    if (numColumnas >= 13) {
        document.getElementById("Aviso").textContent = "No puede tener más columnas.";
    } else {
        let divNombre = document.createElement("div");
        divNombre.textContent = "Hola Mundo";
        divNombre.style.color = "white";
        divNombre.className = "col-sm-12 col-md-4 col-lg-2";
        divNombre.id = "--" + numColumnas.toString();
        document.getElementById("columnas").appendChild(divNombre);
        let divDropdown = document.createElement("div");
        divDropdown.className = "dropdown";
        divDropdown.id = "nuevoDd" + numColumnas.toString();
        document.getElementById("--" + numColumnas.toString()).appendChild(divDropdown);
        let button = document.createElement("button");
        button.textContent = "Opciones";
        button.className = "dropbtn";
        document.getElementById("nuevoDd" + numColumnas.toString()).appendChild(button);

        let divDropdownContent = document.createElement("div");
        divDropdownContent.className = "dropdown-content";
        divDropdownContent.id = "nuevoDdC" + numColumnas.toString();
        document.getElementById("nuevoDd" + numColumnas.toString()).appendChild(divDropdownContent);
        let a1 = document.createElement("a");
        a1.textContent = "Nueva tarjeta";
        a1.href = "#";
        document.getElementById("nuevoDdC" + numColumnas.toString()).appendChild(a1);
        let a2 = document.createElement("a");
        a2.textContent = "Eliminar Columna";
        a2.href = "#";
        document.getElementById("nuevoDdC" + numColumnas.toString()).appendChild(a2);
        let a3 = document.createElement("a");
        a3.textContent = "Modificar Columna";
        a3.href = "#";
        document.getElementById("nuevoDdC" + numColumnas.toString()).appendChild(a3);
    }
}

function CrearTarjeta1() {
    numTarjetas1++;
    let divTarjeta = document.createElement("div");
    divTarjeta.className = "tarjeta";
    divTarjeta.id = "1_" + numTarjetas1.toString();
    document.getElementById("uno").appendChild(divTarjeta);
    let divDropdown = document.createElement("div");
    divDropdown.className = "dropdown";
    divDropdown.id = "nuevoDd1_" + numTarjetas1.toString();
    document.getElementById("1_" + numTarjetas1.toString()).appendChild(divDropdown);
    let button = document.createElement("button");
    button.textContent = "Opciones";
    button.className = "dropbtn";
    document.getElementById("nuevoDd1_" + numTarjetas1.toString()).appendChild(button);

    let divDropdownContent = document.createElement("div");
    divDropdownContent.className = "dropdown-content";
    divDropdownContent.id = "nuevoDdC1_" + numTarjetas1.toString();
    document.getElementById("nuevoDd1_" + numTarjetas1.toString()).appendChild(divDropdownContent);
    let a1 = document.createElement("a");
    a1.textContent = "Nueva tarjeta";
    a1.href = "#";
    document.getElementById("nuevoDdC1_" + numTarjetas1.toString()).appendChild(a1);
    let a2 = document.createElement("a");
    a2.textContent = "Eliminar Columna";
    a2.href = "#";
    document.getElementById("nuevoDdC1_" + numTarjetas1.toString()).appendChild(a2);
    let a3 = document.createElement("a");
    a3.textContent = "Modificar Columna";
    a3.href = "#";
    document.getElementById("nuevoDdC1_" + numTarjetas1.toString()).appendChild(a3);

    let divRowT = document.createElement("div");
    divRowT.className = "row";
    divRowT.id = "1-" + numTarjetas1.toString() + "rowT";
    document.getElementById("1_" + numTarjetas1.toString()).appendChild(divRowT);
    let divTitulo = document.createElement("div");
    divTitulo.className = "titulo";
    divTitulo.textContent = "Ejemplo";
    document.getElementById("1-" + numTarjetas1.toString() + "rowT").appendChild(divTitulo);
    let divRowC = document.createElement("div");
    divRowC.className = "row";
    divRowC.id = "1-" + numTarjetas1.toString() + "rowC";
    document.getElementById("1_" + numTarjetas1.toString()).appendChild(divRowC);
    let divContenido = document.createElement("div");
    divContenido.className = "texto";
    divContenido.textContent = "Contenido";
    document.getElementById("1-" + numTarjetas1.toString() + "rowC").appendChild(divContenido);

}