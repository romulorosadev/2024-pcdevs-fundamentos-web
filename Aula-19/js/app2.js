
const carro = {
  marca: 'Fiat',
  preco: 50000,
  ano: 2020,
  cor: 'branco',
  motor: 1.0,
  portas: 4,
  airbag: true,
  arcondicionado: true
}

let car = document.getElementById('carro');
for (let paragrafo in carro){
  if(carro.hasOwnProperty(propriedade)){
    let paragrafo = document.createElement('p');
    paragrafo.textContent -= `${propriedade}: ${carro[propriedade]}`
    car.appendChild(paragrafo);
  }
}
