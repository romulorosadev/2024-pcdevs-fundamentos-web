// Criada a funcao exibirNome que ao ser chamada percorre seu bloco de código
const exibirNomes = () => {

  //CAPTURANDO TAGS/ELEMENTOS
  const elem_nomeInput = document.getElementById("nomeInput");
  const elem_sobrenomeInput = document.getElementById("sobrenomeInput");
  const elem_nomeParagrafo = document.getElementById("nomeParagrafo");
  const elem_sobrenomeParagrafo = document.getElementById("sobrenomeParagrafo");
  const elem_nomeCompletoParagrafo = document.getElementById("nomeCompletoParagrafo");

  // VARIAVEL DE ENTRADA
  // Declaradas pra armazenar/manipular o valor digitado no input
  const in_nome = elem_nomeInput.value;
  const in_sobrenome = elem_sobrenomeInput.value;

  //VARIAVEIS DE SAIDA
    // Declaradas pra manipular os elementos dos paragrafos
  out_nomeParagrafo = elem_nomeParagrafo;
  out_sobrenomeParagrafo = elem_sobrenomeParagrafo;
  out_nomeCompletoParagrafo = elem_nomeCompletoParagrafo;

  //Insere os texto nos paragrafos referentes para serem exibidos ao usuario
  out_nomeParagrafo.textContent = `NOME: ${in_nome}`;
  out_sobrenomeParagrafo.textContent = `SOBRENOME: ${in_sobrenome}`;
  out_nomeCompletoParagrafo.textContent = `NOME COMPLETO: ${in_nome} ${in_sobrenome}`;
}



// Criada a funcao limparNome que ao ser chamada percorre seu bloco de código
const limparNomes = () => {

  //Resetando o form e os valores dos inputs.
  //Volta a exibir o texto de placeholder dos inputs
  document.getElementById("form").reset();

  //Limpando o conteudo de texto nos paragrafos para serem exibidos ao usuario
  document.getElementById("nomeParagrafo").textContent = " ";
  document.getElementById("sobrenomeParagrafo").textContent = " ";
  document.getElementById("nomeCompletoParagrafo").textContent = " ";
}
