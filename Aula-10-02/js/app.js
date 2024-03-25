// Criada a arrow function exibirNome
// Ao ser chamada deve percorrer o código presente em seu bloco de código
const exibirNomes = () => {

  //CAPTURANDO TAGS/ELEMENTOS
  // Com id nomeInput
  const elem_nomeInput = document.getElementById("nomeInput");

  // Com id sobrenomeInput
  const elem_sobrenomeInput = document.getElementById("sobrenomeInput");

  //Com id nomeParagrafo
  const elem_nomeParagrafo = document.getElementById("nomeParagrafo");

  //Com id sobrenomeParagrafo
  const elem_sobrenomeParagrafo = document.getElementById("sobrenomeParagrafo");

  // VARIAVEL DE ENTRADA
  // Declarada pra armazenar/manipular o valor digitado no input
  const in_nome = elem_nomeInput.value;

  // Declarada pra armazenar/manipular o valor digitado no input
  const in_sobrenome = elem_sobrenomeInput.value;

  //VARIAVEIS DE SAIDA
    // Declarada pra manipular o elemento do paragrafo
  out_nomeParagrafo = elem_nomeParagrafo;
  out_sobrenomeParagrafo = elem_sobrenomeParagrafo;

  //Insere um texto no paragrafo, no caso o valor atribuido a variavel in_nome com uso de template string
  out_nomeParagrafo.textContent = `NOME: ${in_nome}`;
  out_sobrenomeParagrafo.textContent = `SOBRENOME: ${in_sobrenome}`;

}
