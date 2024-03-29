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
const in_idade = parseInt(prompt('Informe sua idade'));

if (in_idade => 18){
  document.body.innerHTML = `<p>IDADE: ${in_idade}</p>
                            <p>STATUS: Maior de Idade</p>`;
} else {
  document.body.innerHTML = `<p>IDADE: ${in_idade}</p>
                            <p>STATUS: Menor de Idade</p>`;
}
