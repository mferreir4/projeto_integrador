function cadastrar() {
    var nome = document.querySelector('#nome').value;
    var email = document.querySelector('#email').value;
    var endereco = document.querySelector('#endereco').value;
    var rg = document.querySelector('#rg').value;
    var dt_nasc = document.querySelector('#dt_nasc').value;
    var senha = document.querySelector('#senha').value;
    var senha_conf = document.querySelector('#senha_conf').value;

    if (email == null || senha == null) {
    }
    if (senha != senha_conf) {
        let info = document.getElementById("info");
        info.innerHTML += `<h2>senhas diferentes</h2>`;
    }
    if (sessionStorage.email == email) {
        let info = document.getElementById("info");
        info.innerHTML += `<h2>usuario ou email nao disponiveis</h2>`;
    }
    else {
        sessionStorage.nome = nome;
        sessionStorage.email = email;
        sessionStorage.endereco = endereco;
        sessionStorage.rg = rg;
        sessionStorage.dt_nasc = dt_nasc;
        sessionStorage.senha = senha;

        let info = document.getElementById("info");
        info.innerHTML += `<h2>cadastro bem sucedido</h2>`;

        document.querySelector('#nome').value = "";
        document.querySelector('#email').value = "";
        document.querySelector('#endereco').value = "";
        document.querySelector('#rg').value = "";
        document.querySelector('#dt_nasc').value = "";
        document.querySelector('#senha').value = "";
        document.querySelector('#senha_conf').value = "";
        window.location.reload();

    }
    
}
