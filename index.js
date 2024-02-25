var botaoCriptografar = document.querySelector(".btn__criptografar");
var botaoDescriptografar = document.querySelector(".btn__descriptografar");
var imgProcura = document.querySelector(".procura");
var mensagemCriptografado = document.querySelector(".mensagem__criptografado");
var resultado = document.querySelector(".textear__deco");
var textear = document.querySelector(".textear");
var retornoTextoOculto = document.querySelector(".textear__deco");
var areaDescriptografar = document.querySelector(".descriptografar");
var botaoLimpar = document.querySelector(".botao__limpar");
var retornoBotaoCripto = document.querySelector(".retorno__botao");


botaoCriptografar.onclick = criptografar;
botaoDescriptografar.onclick = descriptografar;

function criptografar() {
    ocultarFrente();
    var textear = recuperarTexto();
    resultado.textContent = criptografarTexto(textear);

}

function descriptografar() {
    ocultarFrente();
    var textear = recuperarTexto();
    resultado.textContent = descriptografarTexto(textear);

}

function recuperarTexto() {
    var textear = document.querySelector(".textear")
    return textear.value;
}

function ocultarFrente() {
    procura.classList.add("ocultar");
    mensagemCriptografado.classList.add("ocultar");
}

function criptografarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "ai"
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "enter"
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "imes"
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "ober"
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "ufat"
        }
        else {
            textoFinal = textoFinal + texto[i]
        }
    }
    retornoBotaoCripto.classList.remove("ocultar");
    resultado.classList.remove("ocultar");
    return textoFinal;
}

function descriptografarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "a"
            i = i + 1;
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "e"
            i = i + 4;
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "i"
            i = i + 3;
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "o"
            i = i + 3;
        }


        else if (texto[i] == "u") {
            textoFinal = textoFinal + "u"
            i = i + 3;
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
    }
    retornoBotaoCripto.classList.remove("ocultar");
    resultado.classList.remove("ocultar");

    return textoFinal;

}

const btnCopiar = document.querySelector(".botao__copy");
btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".textear__deco").textContent;
    navigator.clipboard.writeText(contenido);
});

function limparTexto() {
    textear.value = ""
    procura.classList.remove("ocultar");
    mensagemCriptografado.classList.remove("ocultar");
    retornoBotaoCripto.classList.add("ocultar");
    retornoTextoOculto.classList.add("ocultar");
}
botaoLimpar.addEventListener('click', () => limparTexto());



