
//Criada a função para ser chamada no clique do botao Enviar
const exibirInfos = () => {

  //Armazenando os valores inseridos nos inputs já convertidos
  const inIdade = parseInt(document.querySelector('.idade__input').value);
  const inAltura = parseFloat(document.querySelector('.altura__input').value);
  let outMensagem;

  const verInVazios = isNaN(inIdade) || isNaN(inAltura);

  while(verInVazios){
    outMensagem = 'Campos vazios. Favor inserir os dados solicitados.'
    break;
  }

  console.log(inIdade, inAltura, outMensagem);
}


//Criada a função para ser chamada no clique do botao Limpar
const limparInfos = () => {
  console.log("Limpar")
}
