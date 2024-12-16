let n1 = 427
let n2 = 628

const soma = n1 + n2

const input = document.getElementById("inputResultado");
const botao = document.getElementById("botaoForms");
const resultadoSoma = document.getElementById("resultadoConta");

botao.addEventListener("click", () => {


const valor = input.value;

if (valor == 1055) {
    resultadoSoma.textContent = "Parabéns! Você acertou."
    resultadoSoma.style.color =rgb(0, 245, 0)
}

else {
    resultadoSoma.textContent = "Você Errou! Tente novamente."
}

})

