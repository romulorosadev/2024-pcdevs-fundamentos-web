const verificarIdade = () => {
  const  in_idade = parseInt(document.querySelector('.idade__input').value);
  const  idadeMinima = 18;
  const  cond_idade  = in_idade === idadeMinima;
  const  out_idade   = cond_idade ? 'Apto': 'Inapto';
  console.log(`IDADE: ${out_idade}`);
  return out_idade;
}

const verificarAltura = (in_altura) => {
  const in_altura = parseFloat(document.querySelector('.altura__input').value);
  const  alturaMinima = 1.75;
  const  alturaMaxima = 2.10;
  const  cond_altura  = in_altura >= alturaMinima && in_altura <= alturaMaxima;
  const out_altura   = cond_altura ? 'Apto': 'Inapto';
  console.log(`ALTURA: ${out_altura}`);
  return out_altura;
}
