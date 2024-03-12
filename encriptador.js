/* 
Criptografar o texto informado pelo usuario e também permitir a
descritografia;
*/

/* Camada de regras
- Não são permitidos caracteres especiais (á, é, @, %, ç, etc..)
- Não são permitidas letras maiúsculas
*/

const listaCaracteres = [
    ['a', 'ai'],
    ['e', 'enter'],
    ['i', 'imes'],
    ['o', 'ober'],
    ['u', 'ufat']
];

function limparCampos() {
    document.querySelector(".text-area").value = "";
    document.querySelector(".mensagem").value = "";
}

function criptografarTexto() {
    var campoDeTexto = document.querySelector(".text-area");
    var campoMensagem = document.querySelector(".mensagem");

    var textoInformadoPeloUsuario = campoDeTexto.value; 
    var textoCriptografado = "";

    for(let indice = 0; indice <= listaCaracteres.length - 1; indice++) {
        if(textoInformadoPeloUsuario.includes(listaCaracteres[indice][0])) {
            textoCriptografado = textoInformadoPeloUsuario.replaceAll(listaCaracteres[indice][0], listaCaracteres[indice][1]);
        }
    }
    
    campoMensagem.value = textoCriptografado;
}

function descriptografarTexto() {
    var campoDeTexto = document.querySelector(".text-area");
    var campoMensagem = document.querySelector(".mensagem");
    var textoDescriptografado = "";

    //identificar os caracteres codificados dentro do texto.
    for(let i = 0; i <= listaCaracteres.length-1; i++) {
       if(campoDeTexto.value.includes(listaCaracteres[i][1])) {
            textoDescriptografado = campoDeTexto.value.replaceAll(listaCaracteres[i][1], listaCaracteres[i][0]);
       }
    }
    campoMensagem.value = textoDescriptografado;
}

