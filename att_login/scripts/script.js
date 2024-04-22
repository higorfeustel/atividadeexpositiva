var nome = document.getElementById('nome').value;
var senha = document.getElementById('senha').value;

function salvarDados(){
    var usuario ={
        nome: nome,
        senha: senha,
    }
    console.log(usuario);
    validarFormulario()
}
function validarFormulario() {
    console.log("...")
    if (nome === '') {
        alert('Por favor, insira seu nome.');
        return false;
    }

    if (senha === '') {
        console.log("...ç")
        alert('Por favor, insira sua senha.');
        
        return false;
    }

    window.location.href='./prox.html'
    return true;
}


