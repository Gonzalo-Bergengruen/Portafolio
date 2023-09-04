function EliminarTarjeta1_1() {
    document.getElementById("1_1").id = ".";
    document.getElementById(".").remove();
    let viejo;
    let nuevo;
    let eli;
    for (let i = 2; i < numTarjetas1 + 1; i++) {
        viejo = "1_" + i.toString();
        nuevo = "1_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta1_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas1--;
}

function EliminarTarjeta1_2() {
    document.getElementById("1_2").id = ".";
    document.getElementById(".").remove();
    for (let i = 3; i < numTarjetas1 + 1; i++) {
        let viejo = "1_" + i.toString();
        let nuevo = "1_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta1_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas1--;
}

function EliminarTarjeta1_3() {
    document.getElementById("1_3").id = ".";
    document.getElementById(".").remove();
    for (let i = 4; i < numTarjetas1 + 1; i++) {
        let viejo = "1_" + i.toString();
        let nuevo = "1_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta1_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas1--;
}

function EliminarTarjeta1_4() {
    document.getElementById("1_4").id = ".";
    document.getElementById(".").remove();
    for (let i = 5; i < numTarjetas1 + 1; i++) {
        let viejo = "1_" + i.toString();
        let nuevo = "1_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta1_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas1--;
}

function EliminarTarjeta1_5() {
    document.getElementById("1_5").id = ".";
    document.getElementById(".").remove();
    numTarjetas1--;
}