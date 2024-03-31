
//Criada a função para ser chamada no clique do botao Enviar
const exibirInfos = () => {

  //Armazenando os valores inseridos nos inputs já convertidos
  const inIdade = parseInt(document.querySelector('.idade__input').value);
  const inAltura = parseFloat(document.querySelector('.altura__input').value);

  const idadePadrao = 18;
  const alturaMin = 1.75;
  const alturaMax = 2.10;
  const verAlturaMax = inAltura <= alturaMax;
  const verAlturaMin = inAltura >= alturaMin;
  const verAltura = verAlturaMin && verAlturaMax;
  const verIdade = inIdade === idadePadrao;

  const verVaziosTodos = isNaN(inIdade) && isNaN(inAltura);
  const verVaziosAlgum = isNaN(inIdade) || isNaN(inAltura);
  const verAptidao = verIdade && verAltura ? true:false;
  const verInaptidaoTotal = !verIdade && !verAltura;
  let outMensagem;

  if(verVaziosTodos){
    outMensagem = 'CAMPOS VAZIOS | Favor preencher todos os campos solicitados.';
  }

  else if (verVaziosAlgum){
    outMensagem = 'CAMPO VAZIO | ';
    if(isNaN(inIdade)){
      outMensagem += 'IDADE: '
    }else{
      outMensagem += 'ALTURA: '
    }
    outMensagem += 'Favor preencher este campo.'
  }

  else if(verAptidao){
    outMensagem = 'APTO | Candidato atende a todos os requisitos.';
  }

  else {
    outMensagem = 'INAPTO | '

    if(verInaptidaoTotal){
      outMensagem += 'IDADE E ALTURA: Candidato não atende a nenhum dos requisitos.';
    }else {
      if(!verIdade){
        outMensagem += 'IDADE: Candidato não atende a este requisito. ';
        if(inIdade < idadePadrao){
          outMensagem += 'Possui menos de ';
        }else{
          outMensagem += 'Possui mais de ';
        }
        outMensagem += `${idadePadrao} anos.`;
      } else {
        outMensagem += 'ALTURA: Candidato não atende a este requisito. ';
        if(inAltura < 1.75){
          outMensagem += `Possui menos de ${alturaMin}m`;
        }else{
          outMensagem += `Possui mais de ${alturaMax}m`;
        }
      }
    }
  }

  console.log(inIdade, inAltura, outMensagem);
}


//Criada a função para ser chamada no clique do botao Limpar
const limparInfos = () => {
  console.log("Limpar")
}
