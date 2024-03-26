//Criando o objeto carro
// Dentro dele propriedades separadas por chave : valor
const carro = {
  marca: 'Ford',
  preco: 50000,
  ano: 2020,
  cor: 'branco',
  motor: 1.0,
  portas: 4,
  airbag: true,
  arcondicionado: true
}


let car = document.getElementById('carro');
car.innerHTML = `<p>Marca: <span>${carro.marca}</span></p>
                  <p>Preco: <span>${carro.preco}</span></p>
                  <p>Ano: <span>${carro.ano}</span></p>
                  <p>Cor: <span>${carro.cor}</span></p>
                  <p>Motor: <span>${carro.motor}</span></p>
                  <p>Portas: <span>${carro.portas}</span></p>
                  <p>Air Bag: <span>${carro.airbag}</span></p>
                  <p>Ar-Condicionado: <span>${carro.arcondicionado}</span></p>`
