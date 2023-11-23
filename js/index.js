
function consulta() {

    var nome = document.querySelector('#nome').value;

    var genero = document.getElementById('genero');
    var value = genero.options[genero.selectedIndex].text;

    var idade = document.querySelector('#idade').value;

    if (nome == null || idade == null) {

    }
    else {
        window.location.href = "../HTML/listaVacinas.html"
    }
}


function moveV(){

    document.getElementById("btn_navbarV").style.backgroundColor = "#add6ff";
}
function moveCr() {

    document.getElementById("btn_navbarCr").style.backgroundColor = "#add6ff";
}
function moveCm() {

    document.getElementById("btn_navbarCm").style.backgroundColor = "#add6ff";
}
function moveCa() {

    document.getElementById("btn_navbarCa").style.backgroundColor = "#add6ff";
}
function moveMa() {

    document.getElementById("btn_navbarMa").style.backgroundColor = "#add6ff";
}

function normal(){
    document.getElementById("btn_navbarV").style.backgroundColor = "";
    document.getElementById("btn_navbarCr").style.backgroundColor = "";
    document.getElementById("btn_navbarCm").style.backgroundColor = "";
    document.getElementById("btn_navbarCa").style.backgroundColor = "";
    document.getElementById("btn_navbarMa").style.backgroundColor = "";
}