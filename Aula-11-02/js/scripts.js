const verificarIdade = () => {
  const  in_idade = parseInt(document.querySelector('.idade__input').value);
  const  idadeMinima = 18;
  const  cond_idade  = in_idade === idadeMinima;
  const  out_idade   = cond_idade ? 'Apto': 'Inapto';
  console.log(`IDADE: ${out_idade}`);
  return out_idade;
}
