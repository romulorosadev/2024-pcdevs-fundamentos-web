const carro = {
  marca: 'Maclaren',
  preco: 50000,
  ano: 2020,
  cor: 'branco',
  motor: 1.0,
  portas: 4,
  airbag: true,
  arcondicionado: true
}

let car = document.getElementById('carro');
car.innerHTML = `<pre>${JSON.stringify(carro, null, 2)}</pre>`;
