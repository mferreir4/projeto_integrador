function vacinas() {
    let dados = [{
        "id": 1,
        "idade": "Ao nascer",
        "vacina": "BCG (Bacilo Calmette-Guérin)",
        "objetivo": "Proteção contra a tuberculose, principalmente a forma grave em crianças."
    },

    {
        "id": 2,
        "idade": "Ao nascer, 2 meses e 6 meses",
        "vacina": "Hepatite B ",
        "objetivo": "Prevenir a infecção pelo vírus da hepatite B."
    },


    {
        "id": 3,
        "idade": "2, 4 e 6 meses",
        "vacina": "Pentavalente (DTP-Hib-HBV)",
        "objetivo": "Proteção contra difteria, tétano, coqueluche, meningite e hepatite B."
    },

    {
        "id": 4,
        "idade": " 2, 4 e 6 meses",
        "vacina": "VIP/VOP (Vacina Inativada e Vacina Oral Poliomielite)",
        "objetivo": "Prevenção da poliomielite (paralisia infantil)"
    },
    {
        "id": 5,
        "idade": "4 anos (reforco)",
        "vacina": "VIP/VOP (Vacina Inativada e Vacina Oral Poliomielite)",
        "objetivo": "Prevenção da poliomielite (paralisia infantil)"
    },

    {
        "id": 6,
        "idade": "2, 4 e 6 meses; reforço aos 12 e 15 meses",
        "vacina": "Pneumocócica Conjugada 10-Valente",
        "objetivo": "Prevenir doenças causadas pela bactéria Streptococcus pneumoniae, como pneumonia e meningite"
    },

    {
        "id": 7,
        "idade": "3, 5 e 12 meses",
        "vacina": "Meningocócica C Conjugada",
        "objetivo": "Proteção contra a meningite causada pelo sorotipo C da bactéria Neisseria meningitidis."
    },

    {
        "id": 8,
        "idade": " reforço aos 12 anos",
        "vacina": "Meningocócica C Conjugada",
        "objetivo": "Proteção contra a meningite causada pelo sorotipo C da bactéria Neisseria meningitidis."
    },

    {
        "id": 9,
        "idade": "2 e 4 meses",
        "vacina": "Rotavírus Humano",
        "objetivo": "Prevenir infecções por rotavírus, uma das principais causas de diarreia grave em crianças."
    },

    {
        "id": 10,
        "idade": "9 meses",
        "vacina": "Febre Amarela",
        "objetivo": "Proteção contra a febre amarela, uma doença viral transmitida por mosquitos."
    },
    {
        "id": 11,
        "idade": "reforço aos 4 anos",
        "vacina": "Febre Amarela",
        "objetivo": "Proteção contra a febre amarela, uma doença viral transmitida por mosquitos."
    }
    ]
    let n = JSON.stringify(dados);
    localStorage.setItem("tds", n);
}

function exibe() {

    var dados = JSON.parse(localStorage.getItem("tds"))
    for (let i = 0; dados.length > i; i++) {
        let info = document.getElementById("info")
        info.innerHTML += `
                        <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">idade</th>
                            <th scope="col">vacina</th>
                            <th scope="col">objetivo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th >${dados[i].idade}</th>
                            <td>${dados[i].vacina} </td>
                            <th >${dados[i].objetivo}</th>
                            </tr>
                        </tbody>
                        </table>`
    }
}