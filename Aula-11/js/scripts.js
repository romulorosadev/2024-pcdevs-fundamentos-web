// 1) Manipular o DOM do body - Inserindo um texto
// document.body.innerText = 'Romulo'

// 2) Manipular o DOM do body - Inserindo HTML
// document.body.innerHTML = `<h2>Rosadev Solutions</h2>`;

// 3) Estrutura Condicional + Manipular o DOM do body inserindo HTML
// const in_idade = 43;

// if (in_idade => 18){
//   document.body.innerHTML = '<p>Maior</p>';
// } else {
//   document.body.innerHTML = '<p>mENOR</p>';
// }


//4) Solicitando dado ao usuário

//ARMAZENANDO O DADO PARA SER MANIPULADO
// Criar variavel para armazenar e manipular dado
// const: tipo da variavel
// in_idade: nome da variavel
// parseInt(): Nativamente o prompt retorna um dado no formato string. O parseInt converte o dado para Number (Integer)
// prompt(): Método JavaScript que exibe no browser uma caixa de interação com o usuário
const in_idade = parseInt(prompt('Informe sua idade'));


//TESTE CONDICIONAL
//se(condição for verdadeira){
  //Executar Bloco de código
//} senão {
  //Executar Bloco de código
//}

// Se a idade for maior ou igual a 18
// Vai inserir um HTML com a mensagem dentro do body
// Senão
// Vai inserir um HTML com uma outra mensagem dentro do body

if (in_idade => 18){
  document.body.innerHTML = `<p>IDADE: ${in_idade}</p>
                            <p>STATUS: Maior de Idade</p>`;
} else {
  document.body.innerHTML = `<p>IDADE: ${in_idade}</p>
                            <p>STATUS: Menor de Idade</p>`;
}
