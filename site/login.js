function login(email, sn) {

    const dados = [
        {
            id: null,
            email: "maria@gmail.com",
            senha: "senha"
        },
         {
            id: null,
            email: "mario@gmail.com",
            senha: "asenha"
        },
         {
            id: null,
            email: "marinilda@gmail.com",
            senha: "senhaa"
        },
        {
            id: null,
            email: "admin@gmail.com",
            senha: "admin"
        },
    ]

    for (let i = 0; i < dados.length; i++) {
        if (dados[i],email==email && dados[i].senha==sn) {
            // window.location.href ="./site/carterinha.html"
             window.open("carterinha.html")
        }
    }
}

function logar() {
    let email = document.getElementById("email").value
    let sn = document.getElementById("senha").value
    console.log(email)
    console.log(sn)

    login(email,sn)
}