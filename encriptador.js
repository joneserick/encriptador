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

function limparCampos() {
    document.querySelector(".text-area").value = "";
    document.querySelector(".mensagem").value = "";
}

function criptografarTexto() {
    var campoDeTexto = document.querySelector(".text-area");
    var campoMensagem = document.querySelector(".mensagem");

    var textoInformadoPeloUsuario = campoDeTexto.value; 
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
    var campoDeTexto = document.querySelector(".text-area");
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

// newCript();

