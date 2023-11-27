const api = fetch ("http://localhost:3030/respost")
.then(res => res.json())


//FAZER MASCARA E VERIFICAÇÃO DO TELEFONE



// mensagem de dados salvos

//COLOCAR LAYOUT BONITO


// outra forma de testar o email 



function validacaoEmail(email) {
    // Expressão regular para verificar o formato do email
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (re.test(email) &&
        (!email.endsWith("."))
    ) {
        document.getElementById("emailError").textContent = ""; // Limpa a mensagem de erro
    } else {
        document.getElementById("emailError").textContent = "Por favor, insira um email válido.";
    }
}

//



// função guardar dados json

function salvedados() {
    var nome = document.querySelector(".inputname");
    var email = document.querySelector(".inputemail");
    var telefone = document.querySelector(".inputtelefone");
    var usuario = document.querySelector(".inputuser");
    var luck1 = document.querySelector(".inputlucknumber1");
    var luck2 = document.querySelector(".inputlucknumber2");
    var luck3 = document.querySelector(".inputlucknumber3");
    var indice = Number.parseInt(divBase[divBase.length - 1].id) + 1;
    console.log(nome.value);
    console.log(email.value);
    console.log(telefone.value);
    console.log(usuario.value);
    console.log(luck1.value);
    console.log(luck2.value);
    console.log(luck3.value);
    console.log(indice);
    //FAZER A EXPORTAÇÃO DOS DADOS E SALVAMENTO NO JSON
    var dadosJson = {
        "id": indice,
        "usuario": usuario.value,
        "nome": nome.value,
        "email": email.value,
        "telefone": telefone.value,
        "ativo": true,
        "lucknumbers": [luck1.value, luck2.value, luck3.value]
        }

        divBase.push(dadosJson);
        console.log(divBase)


// limpar campos para nova inserção depois da função

document.querySelector(".inputname").value = "";
document.querySelector(".inputemail").value = "";
document.querySelector(".inputtelefone").value = "";
document.querySelector(".inputuser").value = "";
document.querySelector(".inputlucknumber1").value = "";
document.querySelector(".inputlucknumber2").value = "";
document.querySelector(".inputlucknumber3").value = "";

}





function pulalinha() {
    return "\n";

}


let divBase;


async function buscarNaAPI(){
    await fetch("http://localhost:3030/respost").then((response) => {
        response.json().then((base) => {
            console.log(base);
            divBase = base;
        })
    })
} 



function verificar() {

    buscarNaAPI();
    var input = document.querySelector(".idInput");



    console.log(input.value);
    var achou = false;
    var indice;


    for (var i = 0; i < divBase.length; i++) {
        if (input.value == divBase[i].usuario) {
            achou = true;
            indice = i;
            break;
        }
    }

    if (achou == true) {

        var nome = (divBase[indice].nome)
        var usuario = (divBase[i].usuario)
        var email = (divBase[i].email)
        var telefone = (divBase[i].telefone)
        var luck = (divBase[i].lucknumbers[0])
        var luck1 = (divBase[i].lucknumbers[1])
        var luck2 = (divBase[i].lucknumbers[2])
        console.log(nome);
        console.log(usuario);
        console.log(email);

        alert("Nome: " + nome + pulalinha() +
            "Usuario: " + usuario + pulalinha() +
            "Email: " + email + pulalinha() +
            "Telefone: " + telefone + pulalinha() +
            "Numeros da sorte: " + luck + ", " + luck1 + ", " + luck2);

    } else {
        alert("não foi encontrado este nome");
    }
}





var header = document.querySelector("header");
var section = document.querySelector("section");
