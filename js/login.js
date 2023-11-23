
function login() {
    var email = document.querySelector('#email').value;
    var senha = document.querySelector('#senha').value;
    var bd_email = sessionStorage.email
    var bd_senha = sessionStorage.senha
    if (login == null || senha == null) {

    }
    if (bd_email == email && bd_senha == senha) {
        sessionStorage.email = email
        window.location.href = "../HTML/index.html"
    }
    else {
        let info = document.getElementById("info")
        info.innerHTML += `<h2>usuario ou senha incorretos</h2>                      
`
    }
}
