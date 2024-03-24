//Variaveis declaradas

//const - tipo da variavel
//nome - nome da variavel
//= atribuição
//"Rosa" - valor atrtibuido a variavel nome, no caso um dado do tipo String já que está entre aspas
const nome = "Rosa"

//const - tipo da variavel
//idade - nome da variavel
//= atribuição
//43 - valor atrtibuido a variavel idade, no caso um dado do tipo Number. Em jS todo numero (inteiro ou real) é considerado do tipo number
const idade = 43;

//console - Elemento
//. - Forma de Concatenar um método/função
//log - Método para exibir um texto desde que passado como parametro
//() - Parâmetro do método log
//`NOME: ${nome}\nIDADE: ${idade}` - Template string para concatenar texto estático com o valor atribuido a variaveis chamadas
//${nomeVariavel} - Forma de chamar a variavel dentro do  templeta string
console.log(`NOME: ${nome}\nIDADE: ${idade}`)

//TESTE CONDICIONAL
//if - Se
//(idade >= 18) - Condição entre parernteses for verdadeira
//{ ... } - Executa o que estiver dentro do Bloco de Código
//console.log("Maior de idade") - Exibe no console a mensagem Maior de Idade
//else - Se não
//{ ... } - Executa o que estiver dentro do Bloco de Código
//console.log("Menor de idade") - Exibe no console a mensagem Menor de Idade
if(idade >= 18){
  console.log("Maior de idade")
} else {
  console.log("Menor de idade")
}
