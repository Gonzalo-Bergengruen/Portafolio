let numColumnas = 5;
let numTarjetas1 = 1;
let numTarjetas2 = 2;
let numTarjetas3 = 1;
let numTarjetas4 = 0;
let numTarjetas5 = 0;
let numTarjetas6 = 0;
let numTarjetas7 = 0;
let numTarjetas8 = 0;
let numTarjetas9 = 0;
let numTarjetas10 = 0;
let numTarjetas11 = 0;
let numTarjetas12 = 0;
let razas;
let aux = 2;

function AvisoFuncion() {
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
    document.getElementById("--1").id = ".";
    document.getElementById(".").remove();
    let viejo;
    let nuevo;
    let eli;
    for (let i = 2; i <= numColumnas; i++) {
        viejo = "--" + i.toString();
        nuevo = "--" + (i - 1).toString();
        console.log(i);
        document.getElementById(viejo).id = nuevo;
        viejo = "_" + i.toString();
        nuevo = "_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2--" + i.toString();
        nuevo = "a2--" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarColumna" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numColumnas--;
}

function EliminarColumna2() {
    document.getElementById("--2").id = ".";
    document.getElementById(".").remove();
    let viejo;
    let nuevo;
    let eli;
    for (let i = 3; i <= numColumnas; i++) {
        viejo = "--" + i.toString();
        nuevo = "--" + (i - 1).toString();
        console.log(i);
        document.getElementById(viejo).id = nuevo;
        viejo = "_" + i.toString();
        nuevo = "_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2--" + i.toString();
        nuevo = "a2--" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarColumna" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numColumnas--;
}

function EliminarColumna3() {
    document.getElementById("--3").id = ".";
    document.getElementById(".").remove();
    let viejo;
    let nuevo;
    let eli;
    for (let i = 4; i <= numColumnas; i++) {
        viejo = "--" + i.toString();
        nuevo = "--" + (i - 1).toString();
        console.log(i);
        document.getElementById(viejo).id = nuevo;
        viejo = "_" + i.toString();
        nuevo = "_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2--" + i.toString();
        nuevo = "a2--" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarColumna" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numColumnas--;
}

function EliminarColumna4() {
    document.getElementById("--4").id = ".";
    document.getElementById(".").remove();
    let viejo;
    let nuevo;
    let eli;
    for (let i = 5; i <= numColumnas; i++) {
        viejo = "--" + i.toString();
        nuevo = "--" + (i - 1).toString();
        console.log(i);
        document.getElementById(viejo).id = nuevo;
        viejo = "_" + i.toString();
        nuevo = "_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2--" + i.toString();
        nuevo = "a2--" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarColumna" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numColumnas--;
}

function EliminarColumna5() {
    document.getElementById("--5").id = ".";
    document.getElementById(".").remove();
    let viejo;
    let nuevo;
    let eli;
    for (let i = 6; i <= numColumnas; i++) {
        viejo = "--" + i.toString();
        nuevo = "--" + (i - 1).toString();
        console.log(i);
        document.getElementById(viejo).id = nuevo;
        viejo = "_" + i.toString();
        nuevo = "_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2--" + i.toString();
        nuevo = "a2--" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarColumna" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numColumnas--;
}

function EliminarColumna6() {
    document.getElementById("--6").id = ".";
    document.getElementById(".").remove();
    let viejo;
    let nuevo;
    let eli;
    for (let i = 7; i <= numColumnas; i++) {
        viejo = "--" + i.toString();
        nuevo = "--" + (i - 1).toString();
        console.log(i);
        document.getElementById(viejo).id = nuevo;
        viejo = "_" + i.toString();
        nuevo = "_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2--" + i.toString();
        nuevo = "a2--" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarColumna" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numColumnas--;
}

function EliminarColumna7() {
    document.getElementById("--7").id = ".";
    document.getElementById(".").remove();
    let viejo;
    let nuevo;
    let eli;
    for (let i = 8; i <= numColumnas; i++) {
        viejo = "--" + i.toString();
        nuevo = "--" + (i - 1).toString();
        console.log(i);
        document.getElementById(viejo).id = nuevo;
        viejo = "_" + i.toString();
        nuevo = "_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2--" + i.toString();
        nuevo = "a2--" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarColumna" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numColumnas--;
}

function EliminarColumna8() {
    document.getElementById("--8").id = ".";
    document.getElementById(".").remove();
    let viejo;
    let nuevo;
    let eli;
    for (let i = 9; i <= numColumnas; i++) {
        viejo = "--" + i.toString();
        nuevo = "--" + (i - 1).toString();
        console.log(i);
        document.getElementById(viejo).id = nuevo;
        viejo = "_" + i.toString();
        nuevo = "_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2--" + i.toString();
        nuevo = "a2--" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarColumna" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numColumnas--;
}

function EliminarColumna9() {
    document.getElementById("--9").id = ".";
    document.getElementById(".").remove();
    let viejo;
    let nuevo;
    let eli;
    for (let i = 10; i <= numColumnas; i++) {
        viejo = "--" + i.toString();
        nuevo = "--" + (i - 1).toString();
        console.log(i);
        document.getElementById(viejo).id = nuevo;
        viejo = "_" + i.toString();
        nuevo = "_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2--" + i.toString();
        nuevo = "a2--" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarColumna" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numColumnas--;
}

function EliminarColumna10() {
    document.getElementById("--10").id = ".";
    document.getElementById(".").remove();
    let viejo;
    let nuevo;
    let eli;
    for (let i = 11; i <= numColumnas; i++) {
        viejo = "--" + i.toString();
        nuevo = "--" + (i - 1).toString();
        console.log(i);
        document.getElementById(viejo).id = nuevo;
        viejo = "_" + i.toString();
        nuevo = "_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2--" + i.toString();
        nuevo = "a2--" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarColumna" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numColumnas--;
}

function EliminarColumna11() {
    document.getElementById("--11").id = ".";
    document.getElementById(".").remove();
    let viejo;
    let nuevo;
    let eli;
    for (let i = 12; i <= numColumnas; i++) {
        viejo = "--" + i.toString();
        nuevo = "--" + (i - 1).toString();
        console.log(i);
        document.getElementById(viejo).id = nuevo;
        viejo = "_" + i.toString();
        nuevo = "_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2--" + i.toString();
        nuevo = "a2--" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarColumna" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numColumnas--;
}

function EliminarColumna12() {
    document.getElementById("--12").id = ".";
    document.getElementById(".").remove();
    numColumnas--;
}

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

function EliminarTarjeta2_1() {
    document.getElementById("2_1").id = ".";
    document.getElementById(".").remove();
    let viejo;
    let nuevo;
    let eli;
    for (let i = 2; i < numTarjetas1 + 1; i++) {
        viejo = "2_" + i.toString();
        nuevo = "2_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta2_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas1--;
}

function EliminarTarjeta2_2() {
    document.getElementById("2_2").id = ".";
    document.getElementById(".").remove();
    for (let i = 3; i < numTarjetas1 + 1; i++) {
        let viejo = "2_" + i.toString();
        let nuevo = "2_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta2_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas1--;
}

function EliminarTarjeta2_3() {
    document.getElementById("2_3").id = ".";
    document.getElementById(".").remove();
    for (let i = 4; i < numTarjetas1 + 1; i++) {
        let viejo = "2_" + i.toString();
        let nuevo = "2_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta2_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas1--;
}

function EliminarTarjeta2_4() {
    document.getElementById("2_4").id = ".";
    document.getElementById(".").remove();
    for (let i = 5; i < numTarjetas1 + 1; i++) {
        let viejo = "2_" + i.toString();
        let nuevo = "2_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta2_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas1--;
}

function EliminarTarjeta2_5() {
    document.getElementById("2_5").id = ".";
    document.getElementById(".").remove();
    numTarjetas1--;
}

function EliminarTarjeta3_1() {
    document.getElementById("3_1").id = ".";
    document.getElementById(".").remove();
    let viejo;
    let nuevo;
    let eli;
    for (let i = 2; i < numTarjetas1 + 1; i++) {
        viejo = "3_" + i.toString();
        nuevo = "3_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta3_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas1--;
}

function EliminarTarjeta3_2() {
    document.getElementById("3_2").id = ".";
    document.getElementById(".").remove();
    for (let i = 3; i < numTarjetas1 + 1; i++) {
        let viejo = "3_" + i.toString();
        let nuevo = "3_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta3_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas1--;
}

function EliminarTarjeta3_3() {
    document.getElementById("3_3").id = ".";
    document.getElementById(".").remove();
    for (let i = 4; i < numTarjetas1 + 1; i++) {
        let viejo = "3_" + i.toString();
        let nuevo = "3_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta3_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas1--;
}

function EliminarTarjeta3_4() {
    document.getElementById("3_4").id = ".";
    document.getElementById(".").remove();
    for (let i = 5; i < numTarjetas1 + 1; i++) {
        let viejo = "3_" + i.toString();
        let nuevo = "3_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta3_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas1--;
}

function EliminarTarjeta3_5() {
    document.getElementById("3_5").id = ".";
    document.getElementById(".").remove();
    numTarjetas1--;
}

function EliminarTarjeta4_1() {
    document.getElementById("4_1").id = ".";
    document.getElementById(".").remove();
    let viejo;
    let nuevo;
    let eli;
    for (let i = 2; i < numTarjetas1 + 1; i++) {
        viejo = "4_" + i.toString();
        nuevo = "4_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta4_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas1--;
}

function EliminarTarjeta4_2() {
    document.getElementById("4_2").id = ".";
    document.getElementById(".").remove();
    for (let i = 3; i < numTarjetas1 + 1; i++) {
        let viejo = "4_" + i.toString();
        let nuevo = "4_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta4_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas1--;
}

function EliminarTarjeta4_3() {
    document.getElementById("4_3").id = ".";
    document.getElementById(".").remove();
    for (let i = 4; i < numTarjetas1 + 1; i++) {
        let viejo = "4_" + i.toString();
        let nuevo = "4_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta4_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas1--;
}

function EliminarTarjeta4_4() {
    document.getElementById("4_4").id = ".";
    document.getElementById(".").remove();
    for (let i = 5; i < numTarjetas1 + 1; i++) {
        let viejo = "4_" + i.toString();
        let nuevo = "4_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta4_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas1--;
}

function EliminarTarjeta4_5() {
    document.getElementById("4_5").id = ".";
    document.getElementById(".").remove();
    numTarjetas4--;
}

function EliminarTarjeta5_1() {
    document.getElementById("5_1").id = ".";
    document.getElementById(".").remove();
    let viejo;
    let nuevo;
    let eli;
    for (let i = 2; i < numTarjetas1 + 1; i++) {
        viejo = "5_" + i.toString();
        nuevo = "5_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta5_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas5--;
}

function EliminarTarjeta5_2() {
    document.getElementById("5_2").id = ".";
    document.getElementById(".").remove();
    for (let i = 3; i < numTarjetas1 + 1; i++) {
        let viejo = "5_" + i.toString();
        let nuevo = "5_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta5_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas5--;
}

function EliminarTarjeta5_3() {
    document.getElementById("5_3").id = ".";
    document.getElementById(".").remove();
    for (let i = 4; i < numTarjetas1 + 1; i++) {
        let viejo = "5_" + i.toString();
        let nuevo = "5_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta5_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas5--;
}

function EliminarTarjeta5_4() {
    document.getElementById("5_4").id = ".";
    document.getElementById(".").remove();
    for (let i = 5; i < numTarjetas1 + 1; i++) {
        let viejo = "5_" + i.toString();
        let nuevo = "5_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta5_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas5--;
}

function EliminarTarjeta5_5() {
    document.getElementById("5_5").id = ".";
    document.getElementById(".").remove();
    numTarjetas5--;
}

function EliminarTarjeta6_1() {
    document.getElementById("6_1").id = ".";
    document.getElementById(".").remove();
    let viejo;
    let nuevo;
    let eli;
    for (let i = 2; i < numTarjetas1 + 1; i++) {
        viejo = "6_" + i.toString();
        nuevo = "6_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta6_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas6--;
}

function EliminarTarjeta6_2() {
    document.getElementById("6_2").id = ".";
    document.getElementById(".").remove();
    for (let i = 3; i < numTarjetas1 + 1; i++) {
        let viejo = "6_" + i.toString();
        let nuevo = "6_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta6_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas6--;
}

function EliminarTarjeta6_3() {
    document.getElementById("6_3").id = ".";
    document.getElementById(".").remove();
    for (let i = 4; i < numTarjetas1 + 1; i++) {
        let viejo = "6_" + i.toString();
        let nuevo = "6_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta6_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas6--;
}

function EliminarTarjeta6_4() {
    document.getElementById("6_4").id = ".";
    document.getElementById(".").remove();
    for (let i = 5; i < numTarjetas1 + 1; i++) {
        let viejo = "6_" + i.toString();
        let nuevo = "6_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta6_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas6--;
}

function EliminarTarjeta6_5() {
    document.getElementById("6_5").id = ".";
    document.getElementById(".").remove();
    numTarjetas6--;
}

function EliminarTarjeta7_1() {
    document.getElementById("7_1").id = ".";
    document.getElementById(".").remove();
    let viejo;
    let nuevo;
    let eli;
    for (let i = 2; i < numTarjetas1 + 1; i++) {
        viejo = "7_" + i.toString();
        nuevo = "7_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta7_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas7--;
}

function EliminarTarjeta7_2() {
    document.getElementById("7_2").id = ".";
    document.getElementById(".").remove();
    for (let i = 3; i < numTarjetas1 + 1; i++) {
        let viejo = "7_" + i.toString();
        let nuevo = "7_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta7_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas7--;
}

function EliminarTarjeta7_3() {
    document.getElementById("7_3").id = ".";
    document.getElementById(".").remove();
    for (let i = 4; i < numTarjetas1 + 1; i++) {
        let viejo = "7_" + i.toString();
        let nuevo = "7_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta7_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas7--;
}

function EliminarTarjeta7_4() {
    document.getElementById("7_4").id = ".";
    document.getElementById(".").remove();
    for (let i = 5; i < numTarjetas1 + 1; i++) {
        let viejo = "7_" + i.toString();
        let nuevo = "7_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta7_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas7--;
}

function EliminarTarjeta7_5() {
    document.getElementById("7_5").id = ".";
    document.getElementById(".").remove();
    numTarjetas7--;
}

function EliminarTarjeta8_1() {
    document.getElementById("8_1").id = ".";
    document.getElementById(".").remove();
    let viejo;
    let nuevo;
    let eli;
    for (let i = 2; i < numTarjetas1 + 1; i++) {
        viejo = "8_" + i.toString();
        nuevo = "8_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta8_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas8--;
}

function EliminarTarjeta8_2() {
    document.getElementById("8_2").id = ".";
    document.getElementById(".").remove();
    for (let i = 3; i < numTarjetas1 + 1; i++) {
        let viejo = "8_" + i.toString();
        let nuevo = "8_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta8_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas8--;
}

function EliminarTarjeta8_3() {
    document.getElementById("8_3").id = ".";
    document.getElementById(".").remove();
    for (let i = 4; i < numTarjetas1 + 1; i++) {
        let viejo = "8_" + i.toString();
        let nuevo = "8_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta8_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas8--;
}

function EliminarTarjeta8_4() {
    document.getElementById("8_4").id = ".";
    document.getElementById(".").remove();
    for (let i = 5; i < numTarjetas1 + 1; i++) {
        let viejo = "8_" + i.toString();
        let nuevo = "8_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta8_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas8--;
}

function EliminarTarjeta8_5() {
    document.getElementById("8_5").id = ".";
    document.getElementById(".").remove();
    numTarjetas8--;
}

function EliminarTarjeta9_1() {
    document.getElementById("9_1").id = ".";
    document.getElementById(".").remove();
    let viejo;
    let nuevo;
    let eli;
    for (let i = 2; i < numTarjetas1 + 1; i++) {
        viejo = "9_" + i.toString();
        nuevo = "9_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta9_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas9--;
}

function EliminarTarjeta9_2() {
    document.getElementById("9_2").id = ".";
    document.getElementById(".").remove();
    for (let i = 3; i < numTarjetas1 + 1; i++) {
        let viejo = "9_" + i.toString();
        let nuevo = "9_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta9_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas9--;
}

function EliminarTarjeta9_3() {
    document.getElementById("9_3").id = ".";
    document.getElementById(".").remove();
    for (let i = 4; i < numTarjetas1 + 1; i++) {
        let viejo = "9_" + i.toString();
        let nuevo = "9_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta9_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas9--;
}

function EliminarTarjeta9_4() {
    document.getElementById("9_4").id = ".";
    document.getElementById(".").remove();
    for (let i = 5; i < numTarjetas1 + 1; i++) {
        let viejo = "9_" + i.toString();
        let nuevo = "9_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta9_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas9--;
}

function EliminarTarjeta9_5() {
    document.getElementById("9_5").id = ".";
    document.getElementById(".").remove();
    numTarjetas9--;
}

function EliminarTarjeta10_1() {
    document.getElementById("10_1").id = ".";
    document.getElementById(".").remove();
    let viejo;
    let nuevo;
    let eli;
    for (let i = 2; i < numTarjetas1 + 1; i++) {
        viejo = "10_" + i.toString();
        nuevo = "10_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta10_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas10--;
}

function EliminarTarjeta10_2() {
    document.getElementById("10_2").id = ".";
    document.getElementById(".").remove();
    for (let i = 3; i < numTarjetas1 + 1; i++) {
        let viejo = "10_" + i.toString();
        let nuevo = "10_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta10_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas10--;
}

function EliminarTarjeta10_3() {
    document.getElementById("10_3").id = ".";
    document.getElementById(".").remove();
    for (let i = 4; i < numTarjetas1 + 1; i++) {
        let viejo = "10_" + i.toString();
        let nuevo = "10_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta10_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas10--;
}

function EliminarTarjeta10_4() {
    document.getElementById("10_4").id = ".";
    document.getElementById(".").remove();
    for (let i = 5; i < numTarjetas1 + 1; i++) {
        let viejo = "10_" + i.toString();
        let nuevo = "10_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta10_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas10--;
}

function EliminarTarjeta10_5() {
    document.getElementById("10_5").id = ".";
    document.getElementById(".").remove();
    numTarjetas10--;
}

function EliminarTarjeta11_1() {
    document.getElementById("11_1").id = ".";
    document.getElementById(".").remove();
    let viejo;
    let nuevo;
    let eli;
    for (let i = 2; i < numTarjetas1 + 1; i++) {
        viejo = "11_" + i.toString();
        nuevo = "11_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta11_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas11--;
}

function EliminarTarjeta11_2() {
    document.getElementById("11_2").id = ".";
    document.getElementById(".").remove();
    for (let i = 3; i < numTarjetas1 + 1; i++) {
        let viejo = "11_" + i.toString();
        let nuevo = "11_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta11_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas11--;
}

function EliminarTarjeta11_3() {
    document.getElementById("11_3").id = ".";
    document.getElementById(".").remove();
    for (let i = 4; i < numTarjetas1 + 1; i++) {
        let viejo = "11_" + i.toString();
        let nuevo = "11_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta11_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas11--;
}

function EliminarTarjeta11_4() {
    document.getElementById("11_4").id = ".";
    document.getElementById(".").remove();
    for (let i = 5; i < numTarjetas1 + 1; i++) {
        let viejo = "11_" + i.toString();
        let nuevo = "11_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta11_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas11--;
}

function EliminarTarjeta11_5() {
    document.getElementById("11_5").id = ".";
    document.getElementById(".").remove();
    numTarjetas11--;
}

function EliminarTarjeta12_1() {
    document.getElementById("12_1").id = ".";
    document.getElementById(".").remove();
    let viejo;
    let nuevo;
    let eli;
    for (let i = 2; i < numTarjetas1 + 1; i++) {
        viejo = "12_" + i.toString();
        nuevo = "12_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta12_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas12--;
}

function EliminarTarjeta12_2() {
    document.getElementById("12_2").id = ".";
    document.getElementById(".").remove();
    for (let i = 3; i < numTarjetas1 + 1; i++) {
        let viejo = "12_" + i.toString();
        let nuevo = "12_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta12_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas12--;
}

function EliminarTarjeta12_3() {
    document.getElementById("12_3").id = ".";
    document.getElementById(".").remove();
    for (let i = 4; i < numTarjetas1 + 1; i++) {
        let viejo = "12_" + i.toString();
        let nuevo = "12_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta12_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas12--;
}

function EliminarTarjeta12_4() {
    document.getElementById("12_4").id = ".";
    document.getElementById(".").remove();
    for (let i = 5; i < numTarjetas1 + 1; i++) {
        let viejo = "12_" + i.toString();
        let nuevo = "12_" + (i - 1).toString();
        document.getElementById(viejo).id = nuevo;
        viejo = "a2" + viejo;
        nuevo = "a2" + nuevo;
        document.getElementById(viejo).id = nuevo;
        eli = "EliminarTarjeta12_" + (i - 1).toString() + "()";
        document.getElementById(nuevo).setAttribute("onclick", eli);
    }
    numTarjetas12--;
}

function EliminarTarjeta12_5() {
    document.getElementById("12_5").id = ".";
    document.getElementById(".").remove();
    numTarjetas12--;
}

//------------------------------------------------- Crear ---------------------------------------------------------//

function CrearColumna() {
    numColumnas++;
    if (numColumnas >= 13) {
        document.getElementById("Aviso").textContent = "No puede tener más columnas.";
        numColumnas--;
    } else {
        let divNombre = document.createElement("div");
        divNombre.textContent = "Columna nueva";
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
        a2.id = "a2--" + numColumnas.toString();
        document.getElementById("nuevoDdC" + numColumnas.toString()).appendChild(a2);
        let a3 = document.createElement("a");
        a3.textContent = "Modificar Columna";
        a3.href = "#";
        document.getElementById("nuevoDdC" + numColumnas.toString()).appendChild(a3);
        let eli = "EliminarColumna" + numColumnas.toString() + "()";
        document.getElementById("a2--" + numColumnas.toString()).setAttribute("onclick", eli);
        let divCol = document.createElement("div");
        divCol.className = "col";
        divCol.id = "_" + numColumnas;
        document.getElementById("--" + numColumnas.toString()).appendChild(divCol);
    }
}

function CrearTarjeta1() {
    numTarjetas1++;
    if (numTarjetas1 >= 6) {
        document.getElementById("Aviso").textContent = "Limite de tarjetas el la columna 1 alcanzado.";
        numTarjetas1--;
    } else {
        let divTarjeta = document.createElement("div");
        divTarjeta.className = "tarjeta";
        divTarjeta.id = "1_" + numTarjetas1.toString();
        document.getElementById("_1").appendChild(divTarjeta);
        let divDropdown = document.createElement("div");
        divDropdown.className = "dropdown";
        divDropdown.id = "nuevoDd1_" + aux.toString();
        document.getElementById("1_" + numTarjetas1.toString()).appendChild(divDropdown);
        let button = document.createElement("button");
        button.textContent = "Opciones";
        button.className = "dropbtn";
        document.getElementById("nuevoDd1_" + aux.toString()).appendChild(button);

        let divDropdownContent = document.createElement("div");
        divDropdownContent.className = "dropdown-content";
        divDropdownContent.id = "nuevoDdC1_" + aux.toString();
        document.getElementById("nuevoDd1_" + aux.toString()).appendChild(divDropdownContent);
        let a1 = document.createElement("a");
        a1.textContent = "Mover";
        a1.href = "#";
        document.getElementById("nuevoDdC1_" + aux.toString()).appendChild(a1);
        let a2 = document.createElement("a");
        a2.textContent = "Eliminar";
        a2.href = "#";
        a2.id = "a21_" + numTarjetas1.toString();

        document.getElementById("nuevoDdC1_" + aux.toString()).appendChild(a2);
        let a3 = document.createElement("a");
        a3.textContent = "Modificar";
        a3.href = "#";
        document.getElementById("nuevoDdC1_" + aux.toString()).appendChild(a3);

        let divRowT = document.createElement("div");
        divRowT.className = "row";
        divRowT.id = "1_" + aux.toString() + "rowT";
        document.getElementById("1_" + numTarjetas1.toString()).appendChild(divRowT);
        let divTitulo = document.createElement("div");
        divTitulo.className = "titulo";
        divTitulo.textContent = aux.toString();
        document.getElementById("1_" + aux.toString() + "rowT").appendChild(divTitulo);
        let divRowC = document.createElement("div");
        divRowC.className = "row";
        divRowC.id = "1_" + aux.toString() + "rowC";
        document.getElementById("1_" + numTarjetas1.toString()).appendChild(divRowC);
        let divContenido = document.createElement("div");
        divContenido.className = "texto";
        divContenido.textContent = "Contenido";
        document.getElementById("1_" + aux.toString() + "rowC").appendChild(divContenido);

        let eli = "EliminarTarjeta1_" + numTarjetas1.toString() + "()";
        document.getElementById("a21_" + numTarjetas1.toString()).setAttribute("onclick", eli);
    }
    aux++;
}

function CrearTarjeta2() {
    numTarjetas2++;
    if (numTarjetas2 >= 6) {
        document.getElementById("Aviso").textContent = "Limite de tarjetas el la columna 2 alcanzado.";
        numTarjetas2--;
    } else {
        let divTarjeta = document.createElement("div");
        divTarjeta.className = "tarjeta";
        divTarjeta.id = "2_" + numTarjetas2.toString();
        document.getElementById("_2").appendChild(divTarjeta);
        let divDropdown = document.createElement("div");
        divDropdown.className = "dropdown";
        divDropdown.id = "nuevoDd2_" + aux.toString();
        document.getElementById("2_" + numTarjetas2.toString()).appendChild(divDropdown);
        let button = document.createElement("button");
        button.textContent = "Opciones";
        button.className = "dropbtn";
        document.getElementById("nuevoDd2_" + aux.toString()).appendChild(button);

        let divDropdownContent = document.createElement("div");
        divDropdownContent.className = "dropdown-content";
        divDropdownContent.id = "nuevoDdC2_" + aux.toString();
        document.getElementById("nuevoDd2_" + aux.toString()).appendChild(divDropdownContent);
        let a1 = document.createElement("a");
        a1.textContent = "Mover";
        a1.href = "#";
        document.getElementById("nuevoDdC2_" + aux.toString()).appendChild(a1);
        let a2 = document.createElement("a");
        a2.textContent = "Eliminar";
        a2.href = "#";
        a2.id = "a22_" + numTarjetas2.toString();

        document.getElementById("nuevoDdC2_" + aux.toString()).appendChild(a2);
        let a3 = document.createElement("a");
        a3.textContent = "Modificar";
        a3.href = "#";
        document.getElementById("nuevoDdC2_" + aux.toString()).appendChild(a3);

        let divRowT = document.createElement("div");
        divRowT.className = "row";
        divRowT.id = "2_" + aux.toString() + "rowT";
        document.getElementById("2_" + numTarjetas2.toString()).appendChild(divRowT);
        let divTitulo = document.createElement("div");
        divTitulo.className = "titulo";
        divTitulo.textContent = aux.toString();
        document.getElementById("2_" + aux.toString() + "rowT").appendChild(divTitulo);
        let divRowC = document.createElement("div");
        divRowC.className = "row";
        divRowC.id = "2_" + aux.toString() + "rowC";
        document.getElementById("2_" + numTarjetas2.toString()).appendChild(divRowC);
        let divContenido = document.createElement("div");
        divContenido.className = "texto";
        divContenido.textContent = "Contenido";
        document.getElementById("2_" + aux.toString() + "rowC").appendChild(divContenido);

        let eli = "EliminarTarjeta2_" + numTarjetas2.toString() + "()";
        document.getElementById("a22_" + numTarjetas2.toString()).setAttribute("onclick", eli);
    }
    aux++;
}

function CrearTarjeta3() {
    numTarjetas3++;
    if (numTarjetas3 >= 6) {
        document.getElementById("Aviso").textContent = "Limite de tarjetas el la columna 3 alcanzado.";
        numTarjetas3--;
    } else {
        let divTarjeta = document.createElement("div");
        divTarjeta.className = "tarjeta";
        divTarjeta.id = "3_" + numTarjetas3.toString();
        document.getElementById("_3").appendChild(divTarjeta);
        let divDropdown = document.createElement("div");
        divDropdown.className = "dropdown";
        divDropdown.id = "nuevoDd3_" + aux.toString();
        document.getElementById("3_" + numTarjetas3.toString()).appendChild(divDropdown);
        let button = document.createElement("button");
        button.textContent = "Opciones";
        button.className = "dropbtn";
        document.getElementById("nuevoDd3_" + aux.toString()).appendChild(button);

        let divDropdownContent = document.createElement("div");
        divDropdownContent.className = "dropdown-content";
        divDropdownContent.id = "nuevoDdC3_" + aux.toString();
        document.getElementById("nuevoDd3_" + aux.toString()).appendChild(divDropdownContent);
        let a1 = document.createElement("a");
        a1.textContent = "Mover";
        a1.href = "#";
        document.getElementById("nuevoDdC3_" + aux.toString()).appendChild(a1);
        let a2 = document.createElement("a");
        a2.textContent = "Eliminar";
        a2.href = "#";
        a2.id = "a23_" + numTarjetas3.toString();

        document.getElementById("nuevoDdC3_" + aux.toString()).appendChild(a2);
        let a3 = document.createElement("a");
        a3.textContent = "Modificar";
        a3.href = "#";
        document.getElementById("nuevoDdC3_" + aux.toString()).appendChild(a3);

        let divRowT = document.createElement("div");
        divRowT.className = "row";
        divRowT.id = "3_" + aux.toString() + "rowT";
        document.getElementById("3_" + numTarjetas3.toString()).appendChild(divRowT);
        let divTitulo = document.createElement("div");
        divTitulo.className = "titulo";
        divTitulo.textContent = aux.toString();
        document.getElementById("3_" + aux.toString() + "rowT").appendChild(divTitulo);
        let divRowC = document.createElement("div");
        divRowC.className = "row";
        divRowC.id = "3_" + aux.toString() + "rowC";
        document.getElementById("3_" + numTarjetas3.toString()).appendChild(divRowC);
        let divContenido = document.createElement("div");
        divContenido.className = "texto";
        divContenido.textContent = "Contenido";
        document.getElementById("3_" + aux.toString() + "rowC").appendChild(divContenido);

        let eli = "EliminarTarjeta3_" + numTarjetas3.toString() + "()";
        document.getElementById("a23_" + numTarjetas3.toString()).setAttribute("onclick", eli);
    }
    aux++;
}

function CrearTarjeta4() {
    numTarjetas4++;
    if (numTarjetas4 >= 6) {
        document.getElementById("Aviso").textContent = "Limite de tarjetas el la columna 4 alcanzado.";
        numTarjetas4--;
    } else {
        let divTarjeta = document.createElement("div");
        divTarjeta.className = "tarjeta";
        divTarjeta.id = "4_" + numTarjetas4.toString();
        document.getElementById("_4").appendChild(divTarjeta);
        let divDropdown = document.createElement("div");
        divDropdown.className = "dropdown";
        divDropdown.id = "nuevoDd4_" + aux.toString();
        document.getElementById("4_" + numTarjetas4.toString()).appendChild(divDropdown);
        let button = document.createElement("button");
        button.textContent = "Opciones";
        button.className = "dropbtn";
        document.getElementById("nuevoDd4_" + aux.toString()).appendChild(button);

        let divDropdownContent = document.createElement("div");
        divDropdownContent.className = "dropdown-content";
        divDropdownContent.id = "nuevoDdC4_" + aux.toString();
        document.getElementById("nuevoDd4_" + aux.toString()).appendChild(divDropdownContent);
        let a1 = document.createElement("a");
        a1.textContent = "Mover";
        a1.href = "#";
        document.getElementById("nuevoDdC4_" + aux.toString()).appendChild(a1);
        let a2 = document.createElement("a");
        a2.textContent = "Eliminar";
        a2.href = "#";
        a2.id = "a24_" + numTarjetas4.toString();

        document.getElementById("nuevoDdC4_" + aux.toString()).appendChild(a2);
        let a3 = document.createElement("a");
        a3.textContent = "Modificar";
        a3.href = "#";
        document.getElementById("nuevoDdC4_" + aux.toString()).appendChild(a3);

        let divRowT = document.createElement("div");
        divRowT.className = "row";
        divRowT.id = "4_" + aux.toString() + "rowT";
        document.getElementById("4_" + numTarjetas4.toString()).appendChild(divRowT);
        let divTitulo = document.createElement("div");
        divTitulo.className = "titulo";
        divTitulo.textContent = aux.toString();
        document.getElementById("4_" + aux.toString() + "rowT").appendChild(divTitulo);
        let divRowC = document.createElement("div");
        divRowC.className = "row";
        divRowC.id = "4_" + aux.toString() + "rowC";
        document.getElementById("4_" + numTarjetas4.toString()).appendChild(divRowC);
        let divContenido = document.createElement("div");
        divContenido.className = "texto";
        divContenido.textContent = "Contenido";
        document.getElementById("4_" + aux.toString() + "rowC").appendChild(divContenido);

        let eli = "EliminarTarjeta4_" + numTarjetas4.toString() + "()";
        document.getElementById("a24_" + numTarjetas4.toString()).setAttribute("onclick", eli);
    }
    aux++;
}

function CrearTarjeta5() {
    numTarjetas5++;
    if (numTarjetas5 >= 6) {
        document.getElementById("Aviso").textContent = "Limite de tarjetas el la columna 5 alcanzado.";
        numTarjetas5--;
    } else {
        let divTarjeta = document.createElement("div");
        divTarjeta.className = "tarjeta";
        divTarjeta.id = "5_" + numTarjetas5.toString();
        document.getElementById("_5").appendChild(divTarjeta);
        let divDropdown = document.createElement("div");
        divDropdown.className = "dropdown";
        divDropdown.id = "nuevoDd5_" + aux.toString();
        document.getElementById("5_" + numTarjetas5.toString()).appendChild(divDropdown);
        let button = document.createElement("button");
        button.textContent = "Opciones";
        button.className = "dropbtn";
        document.getElementById("nuevoDd5_" + aux.toString()).appendChild(button);

        let divDropdownContent = document.createElement("div");
        divDropdownContent.className = "dropdown-content";
        divDropdownContent.id = "nuevoDdC5_" + aux.toString();
        document.getElementById("nuevoDd5_" + aux.toString()).appendChild(divDropdownContent);
        let a1 = document.createElement("a");
        a1.textContent = "Mover";
        a1.href = "#";
        document.getElementById("nuevoDdC5_" + aux.toString()).appendChild(a1);
        let a2 = document.createElement("a");
        a2.textContent = "Eliminar";
        a2.href = "#";
        a2.id = "a25_" + numTarjetas5.toString();

        document.getElementById("nuevoDdC5_" + aux.toString()).appendChild(a2);
        let a3 = document.createElement("a");
        a3.textContent = "Modificar";
        a3.href = "#";
        document.getElementById("nuevoDdC5_" + aux.toString()).appendChild(a3);

        let divRowT = document.createElement("div");
        divRowT.className = "row";
        divRowT.id = "5_" + aux.toString() + "rowT";
        document.getElementById("5_" + numTarjetas5.toString()).appendChild(divRowT);
        let divTitulo = document.createElement("div");
        divTitulo.className = "titulo";
        divTitulo.textContent = aux.toString();
        document.getElementById("5_" + aux.toString() + "rowT").appendChild(divTitulo);
        let divRowC = document.createElement("div");
        divRowC.className = "row";
        divRowC.id = "5_" + aux.toString() + "rowC";
        document.getElementById("5_" + numTarjetas5.toString()).appendChild(divRowC);
        let divContenido = document.createElement("div");
        divContenido.className = "texto";
        divContenido.textContent = "Contenido";
        document.getElementById("5_" + aux.toString() + "rowC").appendChild(divContenido);

        let eli = "EliminarTarjeta5_" + numTarjetas5.toString() + "()";
        document.getElementById("a25_" + numTarjetas5.toString()).setAttribute("onclick", eli);
    }
    aux++;
}

function CrearTarjeta6() {
    numTarjetas6++;
    if (numTarjetas6 >= 6) {
        document.getElementById("Aviso").textContent = "Limite de tarjetas el la columna 6 alcanzado.";
        numTarjetas6--;
    } else {
        let divTarjeta = document.createElement("div");
        divTarjeta.className = "tarjeta";
        divTarjeta.id = "6_" + numTarjetas6.toString();
        document.getElementById("_6").appendChild(divTarjeta);
        let divDropdown = document.createElement("div");
        divDropdown.className = "dropdown";
        divDropdown.id = "nuevoDd6_" + aux.toString();
        document.getElementById("6_" + numTarjetas6.toString()).appendChild(divDropdown);
        let button = document.createElement("button");
        button.textContent = "Opciones";
        button.className = "dropbtn";
        document.getElementById("nuevoDd6_" + aux.toString()).appendChild(button);

        let divDropdownContent = document.createElement("div");
        divDropdownContent.className = "dropdown-content";
        divDropdownContent.id = "nuevoDdC6_" + aux.toString();
        document.getElementById("nuevoDd6_" + aux.toString()).appendChild(divDropdownContent);
        let a1 = document.createElement("a");
        a1.textContent = "Mover";
        a1.href = "#";
        document.getElementById("nuevoDdC6_" + aux.toString()).appendChild(a1);
        let a2 = document.createElement("a");
        a2.textContent = "Eliminar";
        a2.href = "#";
        a2.id = "a26_" + numTarjetas6.toString();

        document.getElementById("nuevoDdC6_" + aux.toString()).appendChild(a2);
        let a3 = document.createElement("a");
        a3.textContent = "Modificar";
        a3.href = "#";
        document.getElementById("nuevoDdC6_" + aux.toString()).appendChild(a3);

        let divRowT = document.createElement("div");
        divRowT.className = "row";
        divRowT.id = "6_" + aux.toString() + "rowT";
        document.getElementById("6_" + numTarjetas6.toString()).appendChild(divRowT);
        let divTitulo = document.createElement("div");
        divTitulo.className = "titulo";
        divTitulo.textContent = aux.toString();
        document.getElementById("6_" + aux.toString() + "rowT").appendChild(divTitulo);
        let divRowC = document.createElement("div");
        divRowC.className = "row";
        divRowC.id = "6_" + aux.toString() + "rowC";
        document.getElementById("6_" + numTarjetas6.toString()).appendChild(divRowC);
        let divContenido = document.createElement("div");
        divContenido.className = "texto";
        divContenido.textContent = "Contenido";
        document.getElementById("6_" + aux.toString() + "rowC").appendChild(divContenido);

        let eli = "EliminarTarjeta6_" + numTarjetas6.toString() + "()";
        document.getElementById("a26_" + numTarjetas6.toString()).setAttribute("onclick", eli);
    }
    aux++;
}

function CrearTarjeta7() {
    numTarjetas7++;
    if (numTarjetas7 >= 6) {
        document.getElementById("Aviso").textContent = "Limite de tarjetas el la columna 7 alcanzado.";
        numTarjetas7--;
    } else {
        let divTarjeta = document.createElement("div");
        divTarjeta.className = "tarjeta";
        divTarjeta.id = "7_" + numTarjetas7.toString();
        document.getElementById("_7").appendChild(divTarjeta);
        let divDropdown = document.createElement("div");
        divDropdown.className = "dropdown";
        divDropdown.id = "nuevoDd7_" + aux.toString();
        document.getElementById("7_" + numTarjetas7.toString()).appendChild(divDropdown);
        let button = document.createElement("button");
        button.textContent = "Opciones";
        button.className = "dropbtn";
        document.getElementById("nuevoDd7_" + aux.toString()).appendChild(button);

        let divDropdownContent = document.createElement("div");
        divDropdownContent.className = "dropdown-content";
        divDropdownContent.id = "nuevoDdC7_" + aux.toString();
        document.getElementById("nuevoDd7_" + aux.toString()).appendChild(divDropdownContent);
        let a1 = document.createElement("a");
        a1.textContent = "Mover";
        a1.href = "#";
        document.getElementById("nuevoDdC7_" + aux.toString()).appendChild(a1);
        let a2 = document.createElement("a");
        a2.textContent = "Eliminar";
        a2.href = "#";
        a2.id = "a27_" + numTarjetas7.toString();

        document.getElementById("nuevoDdC7_" + aux.toString()).appendChild(a2);
        let a3 = document.createElement("a");
        a3.textContent = "Modificar";
        a3.href = "#";
        document.getElementById("nuevoDdC7_" + aux.toString()).appendChild(a3);

        let divRowT = document.createElement("div");
        divRowT.className = "row";
        divRowT.id = "7_" + aux.toString() + "rowT";
        document.getElementById("7_" + numTarjetas7.toString()).appendChild(divRowT);
        let divTitulo = document.createElement("div");
        divTitulo.className = "titulo";
        divTitulo.textContent = aux.toString();
        document.getElementById("7_" + aux.toString() + "rowT").appendChild(divTitulo);
        let divRowC = document.createElement("div");
        divRowC.className = "row";
        divRowC.id = "7_" + aux.toString() + "rowC";
        document.getElementById("7_" + numTarjetas7.toString()).appendChild(divRowC);
        let divContenido = document.createElement("div");
        divContenido.className = "texto";
        divContenido.textContent = "Contenido";
        document.getElementById("7_" + aux.toString() + "rowC").appendChild(divContenido);

        let eli = "EliminarTarjeta7_" + numTarjetas7.toString() + "()";
        document.getElementById("a27_" + numTarjetas7.toString()).setAttribute("onclick", eli);
    }
    aux++;
}

function CrearTarjeta8() {
    numTarjetas8++;
    if (numTarjetas8 >= 6) {
        document.getElementById("Aviso").textContent = "Limite de tarjetas el la columna 8 alcanzado.";
        numTarjetas8--;
    } else {
        let divTarjeta = document.createElement("div");
        divTarjeta.className = "tarjeta";
        divTarjeta.id = "8_" + numTarjetas8.toString();
        document.getElementById("_8").appendChild(divTarjeta);
        let divDropdown = document.createElement("div");
        divDropdown.className = "dropdown";
        divDropdown.id = "nuevoDd8_" + aux.toString();
        document.getElementById("8_" + numTarjetas8.toString()).appendChild(divDropdown);
        let button = document.createElement("button");
        button.textContent = "Opciones";
        button.className = "dropbtn";
        document.getElementById("nuevoDd8_" + aux.toString()).appendChild(button);

        let divDropdownContent = document.createElement("div");
        divDropdownContent.className = "dropdown-content";
        divDropdownContent.id = "nuevoDdC8_" + aux.toString();
        document.getElementById("nuevoDd8_" + aux.toString()).appendChild(divDropdownContent);
        let a1 = document.createElement("a");
        a1.textContent = "Mover";
        a1.href = "#";
        document.getElementById("nuevoDdC8_" + aux.toString()).appendChild(a1);
        let a2 = document.createElement("a");
        a2.textContent = "Eliminar";
        a2.href = "#";
        a2.id = "a28_" + numTarjetas8.toString();

        document.getElementById("nuevoDdC8_" + aux.toString()).appendChild(a2);
        let a3 = document.createElement("a");
        a3.textContent = "Modificar";
        a3.href = "#";
        document.getElementById("nuevoDdC8_" + aux.toString()).appendChild(a3);

        let divRowT = document.createElement("div");
        divRowT.className = "row";
        divRowT.id = "8_" + aux.toString() + "rowT";
        document.getElementById("8_" + numTarjetas8.toString()).appendChild(divRowT);
        let divTitulo = document.createElement("div");
        divTitulo.className = "titulo";
        divTitulo.textContent = aux.toString();
        document.getElementById("8_" + aux.toString() + "rowT").appendChild(divTitulo);
        let divRowC = document.createElement("div");
        divRowC.className = "row";
        divRowC.id = "8_" + aux.toString() + "rowC";
        document.getElementById("8_" + numTarjetas8.toString()).appendChild(divRowC);
        let divContenido = document.createElement("div");
        divContenido.className = "texto";
        divContenido.textContent = "Contenido";
        document.getElementById("8_" + aux.toString() + "rowC").appendChild(divContenido);

        let eli = "EliminarTarjeta8_" + numTarjetas8.toString() + "()";
        document.getElementById("a28_" + numTarjetas8.toString()).setAttribute("onclick", eli);
    }
    aux++;
}

function CrearTarjeta9() {
    numTarjetas9++;
    if (numTarjetas9 >= 6) {
        document.getElementById("Aviso").textContent = "Limite de tarjetas el la columna 9 alcanzado.";
        numTarjetas9--;
    } else {
        let divTarjeta = document.createElement("div");
        divTarjeta.className = "tarjeta";
        divTarjeta.id = "9_" + numTarjetas9.toString();
        document.getElementById("_9").appendChild(divTarjeta);
        let divDropdown = document.createElement("div");
        divDropdown.className = "dropdown";
        divDropdown.id = "nuevoDd9_" + aux.toString();
        document.getElementById("9_" + numTarjetas9.toString()).appendChild(divDropdown);
        let button = document.createElement("button");
        button.textContent = "Opciones";
        button.className = "dropbtn";
        document.getElementById("nuevoDd9_" + aux.toString()).appendChild(button);

        let divDropdownContent = document.createElement("div");
        divDropdownContent.className = "dropdown-content";
        divDropdownContent.id = "nuevoDdC9_" + aux.toString();
        document.getElementById("nuevoDd9_" + aux.toString()).appendChild(divDropdownContent);
        let a1 = document.createElement("a");
        a1.textContent = "Mover";
        a1.href = "#";
        document.getElementById("nuevoDdC9_" + aux.toString()).appendChild(a1);
        let a2 = document.createElement("a");
        a2.textContent = "Eliminar";
        a2.href = "#";
        a2.id = "a29_" + numTarjetas9.toString();

        document.getElementById("nuevoDdC9_" + aux.toString()).appendChild(a2);
        let a3 = document.createElement("a");
        a3.textContent = "Modificar";
        a3.href = "#";
        document.getElementById("nuevoDdC9_" + aux.toString()).appendChild(a3);

        let divRowT = document.createElement("div");
        divRowT.className = "row";
        divRowT.id = "9_" + aux.toString() + "rowT";
        document.getElementById("9_" + numTarjetas9.toString()).appendChild(divRowT);
        let divTitulo = document.createElement("div");
        divTitulo.className = "titulo";
        divTitulo.textContent = aux.toString();
        document.getElementById("9_" + aux.toString() + "rowT").appendChild(divTitulo);
        let divRowC = document.createElement("div");
        divRowC.className = "row";
        divRowC.id = "9_" + aux.toString() + "rowC";
        document.getElementById("9_" + numTarjetas9.toString()).appendChild(divRowC);
        let divContenido = document.createElement("div");
        divContenido.className = "texto";
        divContenido.textContent = "Contenido";
        document.getElementById("9_" + aux.toString() + "rowC").appendChild(divContenido);

        let eli = "EliminarTarjeta9_" + numTarjetas9.toString() + "()";
        document.getElementById("a29_" + numTarjetas9.toString()).setAttribute("onclick", eli);
    }
    aux++;
}

function CrearTarjeta10() {
    numTarjetas10++;
    if (numTarjetas10 >= 6) {
        document.getElementById("Aviso").textContent = "Limite de tarjetas el la columna 10 alcanzado.";
        numTarjetas10--;
    } else {
        let divTarjeta = document.createElement("div");
        divTarjeta.className = "tarjeta";
        divTarjeta.id = "10_" + numTarjetas10.toString();
        document.getElementById("_10").appendChild(divTarjeta);
        let divDropdown = document.createElement("div");
        divDropdown.className = "dropdown";
        divDropdown.id = "nuevoDd10_" + aux.toString();
        document.getElementById("10_" + numTarjetas10.toString()).appendChild(divDropdown);
        let button = document.createElement("button");
        button.textContent = "Opciones";
        button.className = "dropbtn";
        document.getElementById("nuevoDd10_" + aux.toString()).appendChild(button);

        let divDropdownContent = document.createElement("div");
        divDropdownContent.className = "dropdown-content";
        divDropdownContent.id = "nuevoDdC10_" + aux.toString();
        document.getElementById("nuevoDd10_" + aux.toString()).appendChild(divDropdownContent);
        let a1 = document.createElement("a");
        a1.textContent = "Mover";
        a1.href = "#";
        document.getElementById("nuevoDdC10_" + aux.toString()).appendChild(a1);
        let a2 = document.createElement("a");
        a2.textContent = "Eliminar";
        a2.href = "#";
        a2.id = "a210_" + numTarjetas10.toString();

        document.getElementById("nuevoDdC10_" + aux.toString()).appendChild(a2);
        let a3 = document.createElement("a");
        a3.textContent = "Modificar";
        a3.href = "#";
        document.getElementById("nuevoDdC10_" + aux.toString()).appendChild(a3);

        let divRowT = document.createElement("div");
        divRowT.className = "row";
        divRowT.id = "10_" + aux.toString() + "rowT";
        document.getElementById("10_" + numTarjetas10.toString()).appendChild(divRowT);
        let divTitulo = document.createElement("div");
        divTitulo.className = "titulo";
        divTitulo.textContent = aux.toString();
        document.getElementById("10_" + aux.toString() + "rowT").appendChild(divTitulo);
        let divRowC = document.createElement("div");
        divRowC.className = "row";
        divRowC.id = "10_" + aux.toString() + "rowC";
        document.getElementById("10_" + numTarjetas10.toString()).appendChild(divRowC);
        let divContenido = document.createElement("div");
        divContenido.className = "texto";
        divContenido.textContent = "Contenido";
        document.getElementById("10_" + aux.toString() + "rowC").appendChild(divContenido);

        let eli = "EliminarTarjeta10_" + numTarjetas10.toString() + "()";
        document.getElementById("a210_" + numTarjetas10.toString()).setAttribute("onclick", eli);
    }
    aux++;
}

function CrearTarjeta11() {
    numTarjetas11++;
    if (numTarjetas11 >= 6) {
        document.getElementById("Aviso").textContent = "Limite de tarjetas el la columna 11 alcanzado.";
        numTarjetas11--;
    } else {
        let divTarjeta = document.createElement("div");
        divTarjeta.className = "tarjeta";
        divTarjeta.id = "11_" + numTarjetas11.toString();
        document.getElementById("_11").appendChild(divTarjeta);
        let divDropdown = document.createElement("div");
        divDropdown.className = "dropdown";
        divDropdown.id = "nuevoDd11_" + aux.toString();
        document.getElementById("11_" + numTarjetas11.toString()).appendChild(divDropdown);
        let button = document.createElement("button");
        button.textContent = "Opciones";
        button.className = "dropbtn";
        document.getElementById("nuevoDd11_" + aux.toString()).appendChild(button);

        let divDropdownContent = document.createElement("div");
        divDropdownContent.className = "dropdown-content";
        divDropdownContent.id = "nuevoDdC11_" + aux.toString();
        document.getElementById("nuevoDd11_" + aux.toString()).appendChild(divDropdownContent);
        let a1 = document.createElement("a");
        a1.textContent = "Mover";
        a1.href = "#";
        document.getElementById("nuevoDdC11_" + aux.toString()).appendChild(a1);
        let a2 = document.createElement("a");
        a2.textContent = "Eliminar";
        a2.href = "#";
        a2.id = "a211_" + numTarjetas11.toString();

        document.getElementById("nuevoDdC11_" + aux.toString()).appendChild(a2);
        let a3 = document.createElement("a");
        a3.textContent = "Modificar";
        a3.href = "#";
        document.getElementById("nuevoDdC11_" + aux.toString()).appendChild(a3);

        let divRowT = document.createElement("div");
        divRowT.className = "row";
        divRowT.id = "11_" + aux.toString() + "rowT";
        document.getElementById("11_" + numTarjetas11.toString()).appendChild(divRowT);
        let divTitulo = document.createElement("div");
        divTitulo.className = "titulo";
        divTitulo.textContent = aux.toString();
        document.getElementById("11_" + aux.toString() + "rowT").appendChild(divTitulo);
        let divRowC = document.createElement("div");
        divRowC.className = "row";
        divRowC.id = "11_" + aux.toString() + "rowC";
        document.getElementById("11_" + numTarjetas11.toString()).appendChild(divRowC);
        let divContenido = document.createElement("div");
        divContenido.className = "texto";
        divContenido.textContent = "Contenido";
        document.getElementById("11_" + aux.toString() + "rowC").appendChild(divContenido);

        let eli = "EliminarTarjeta11_" + numTarjetas11.toString() + "()";
        document.getElementById("a211_" + numTarjetas11.toString()).setAttribute("onclick", eli);
    }
    aux++;
}

function CrearTarjeta12() {
    numTarjetas12++;
    if (numTarjetas12 >= 6) {
        document.getElementById("Aviso").textContent = "Limite de tarjetas el la columna 12 alcanzado.";
        numTarjetas12--;
    } else {
        let divTarjeta = document.createElement("div");
        divTarjeta.className = "tarjeta";
        divTarjeta.id = "12_" + numTarjetas12.toString();
        document.getElementById("_12").appendChild(divTarjeta);
        let divDropdown = document.createElement("div");
        divDropdown.className = "dropdown";
        divDropdown.id = "nuevoDd12_" + aux.toString();
        document.getElementById("12_" + numTarjetas12.toString()).appendChild(divDropdown);
        let button = document.createElement("button");
        button.textContent = "Opciones";
        button.className = "dropbtn";
        document.getElementById("nuevoDd12_" + aux.toString()).appendChild(button);

        let divDropdownContent = document.createElement("div");
        divDropdownContent.className = "dropdown-content";
        divDropdownContent.id = "nuevoDdC12_" + aux.toString();
        document.getElementById("nuevoDd12_" + aux.toString()).appendChild(divDropdownContent);
        let a1 = document.createElement("a");
        a1.textContent = "Mover";
        a1.href = "#";
        document.getElementById("nuevoDdC12_" + aux.toString()).appendChild(a1);
        let a2 = document.createElement("a");
        a2.textContent = "Eliminar";
        a2.href = "#";
        a2.id = "a212_" + numTarjetas12.toString();

        document.getElementById("nuevoDdC12_" + aux.toString()).appendChild(a2);
        let a3 = document.createElement("a");
        a3.textContent = "Modificar";
        a3.href = "#";
        document.getElementById("nuevoDdC12_" + aux.toString()).appendChild(a3);

        let divRowT = document.createElement("div");
        divRowT.className = "row";
        divRowT.id = "12_" + aux.toString() + "rowT";
        document.getElementById("12_" + numTarjetas12.toString()).appendChild(divRowT);
        let divTitulo = document.createElement("div");
        divTitulo.className = "titulo";
        divTitulo.textContent = aux.toString();
        document.getElementById("12_" + aux.toString() + "rowT").appendChild(divTitulo);
        let divRowC = document.createElement("div");
        divRowC.className = "row";
        divRowC.id = "12_" + aux.toString() + "rowC";
        document.getElementById("12_" + numTarjetas12.toString()).appendChild(divRowC);
        let divContenido = document.createElement("div");
        divContenido.className = "texto";
        divContenido.textContent = "Contenido";
        document.getElementById("12_" + aux.toString() + "rowC").appendChild(divContenido);

        let eli = "EliminarTarjeta12_" + numTarjetas12.toString() + "()";
        document.getElementById("a212_" + numTarjetas12.toString()).setAttribute("onclick", eli);
    }
    aux++;
}