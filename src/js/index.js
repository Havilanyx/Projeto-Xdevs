/*Objetivo 1 - clicar na seta de avancar e mostrar o proximo cartao
passo 1 - pegar o elemento HTML da seta avancar
*/
const btnAvancar = document.getElementById("btn-avancar");
//passo 1 - pegar o elemento HTML da seta voltar
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

//passo 2 - identificar o clik do usuario na seta avancar
btnAvancar.addEventListener("click", function () {
    const ehUltimoCartao = cartaoAtual === cartoes.length - 1;
    if (ehUltimoCartao) return;

    //passo 4 -  buscar o cartao selecionado e esconder
    esconderCartaoSelecionado();

    //passo 3 - fazer aparecer o proximo cartao,colocando a classe selecionado nele
    cartaoAtual++;
    mostrarCartao();
})

//objetivo 2 - clicar na seta voltar e mostrar o cartao anteror

//passo 2 - identificar o clik do usuario na seta avancar
btnVoltar.addEventListener("click", function () {

    const ehPrimeiroCartao = cartaoAtual === 0;
    if(ehPrimeiroCartao) return;
    //passo 4 -  buscar o cartao selecionado e esconder
    esconderCartaoSelecionado();

    //passo 3 - fazer aparecer o proximo cartao,colocando a classe selecionado nele
    cartaoAtual--;
    mostrarCartao();
})
function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}