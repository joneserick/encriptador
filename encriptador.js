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

const listaVogais = [
    'a',
    'e',
    'i',
    'o',
    'u',
]

let areaDeTransferencia = "";

function limparCampos() {
    document.querySelector(".text-area-principal").value = "";
    document.querySelector(".mensagem").value = "";
}

function criptografarTexto() {
    if(verificarCaracteresEspeciais() || document.querySelector(".text-area-principal").value === "") {
        let errorBox = document.querySelector(".error-box");
        errorBox.style.display = 'flex';
        return;
    }

    document.querySelector(".error-box").style.display = 'none';

    var campoDeTexto = document.querySelector(".text-area-principal");
    var campoMensagem = document.querySelector(".mensagem");

    
    esconderComponentesIniciais();
    exibirComponentesResposta(campoMensagem);

    var textoInformadoPeloUsuario = campoDeTexto.value.toLowerCase(); 
    var textoCriptografado = "";

    for(let indice = 0; indice < textoInformadoPeloUsuario.length; indice++) {
        const caractere = textoInformadoPeloUsuario[indice];
        const itemCorrespondente = listaCaracteres.find(item => item[0] == caractere);

        if(listaVogais.includes(caractere) && itemCorrespondente) {
            textoCriptografado += itemCorrespondente[1];
        } else {
            textoCriptografado += caractere;
        }
    }
    campoMensagem.value = textoCriptografado;
}

function descriptografarTexto() {
    var campoDeTexto = document.querySelector(".text-area-principal");
    var campoMensagem = document.querySelector(".mensagem");
    var textoDescriptografado = campoDeTexto.value;

    //identificar os caracteres codificados dentro do texto.
    for(let i = 0; i <= listaCaracteres.length-1; i++) {
       if(textoDescriptografado.includes(listaCaracteres[i][1])) {
            textoDescriptografado = textoDescriptografado.replaceAll(listaCaracteres[i][1], listaCaracteres[i][0]);
       }
    }
    campoMensagem.value = textoDescriptografado;
}

function verificarCaracteresEspeciais() {
    const campoDeTexto = document.querySelector('.text-area-principal').value;
    var padrao = '^[a-z ]*$';
    let contem = false;

    for(let indice = 0; indice < campoDeTexto.length; indice++) {
        if(!campoDeTexto[indice].match(padrao)) {
            contem = true;
            console.log(campoDeTexto[indice]);
            break;
        }
    }

    return contem;
}

function exibirComponentesResposta(campoMensagem) {
    let botaoCopiar = document.querySelector(".btn-copiar");

    campoMensagem.style.display = 'block';
    botaoCopiar.style.display = 'block';
}

function esconderComponentesResposta() {
    let campoMensagem = document.querySelector(".mensagem");
    let botaoCopiar = document.querySelector(".btn-copiar");

    campoMensagem.style.display = 'none';
    botaoCopiar.style.display = 'none';
}

function esconderComponentesIniciais() {
    let startBox = document.querySelector(".start-box");

    startBox.style.display = 'none';
}

function copiarTexto() {
    let campoMensagem = document.querySelector(".mensagem");

    navigator.clipboard.writeText(campoMensagem.value).then(function() {
        alert('Texto copiado para a área de transferência!');
    });
}
   

// newCript();

