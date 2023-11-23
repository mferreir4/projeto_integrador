nome = sessionStorage.nome
email = sessionStorage.email
endereco = sessionStorage.endereco
rg = sessionStorage.rg
dt_nasc = sessionStorage.dt_nasc

function exibe() {
if (nome == null || email == null) {
    window.location.href = "../HTML/index.html"
    
}
    let info = document.getElementById("info")
    info.innerHTML += `
                        <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">nome</th>
                            <th scope="col">email</th>
                            <th scope="col">endereco</th>
                            <th scope="col">rg</th>
                            <th scope="col">dt_nasc</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">${nome}</th>
                            <td>${email} </td>
                            <th >${endereco}</th>
                            <td>${rg} </td>
                            <th >${dt_nasc}</th>
                            </tr>
                        </tbody>
                        </table>
`
}

function deletar() {


    sessionStorage.removeItem(nome)
    sessionStorage.removeItem(email)
    sessionStorage.removeItem(endereco)
    sessionStorage.removeItem(rg)
    sessionStorage.removeItem(dt_nasc)
    window.location.reload();
}

function atualizar() {
    sessionStorage.nome = nome
    sessionStorage.email = email
    sessionStorage.endereco = endereco
    sessionStorage.rg = rg
    sessionStorage.dt_nasc = dt_nasc
    window.location.href = "../HTML/atualizar.html"
}