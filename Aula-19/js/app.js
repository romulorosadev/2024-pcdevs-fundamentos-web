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

// Criar variavel pra capturar o elemento input no dom
let inputMarca = document.getElementById('inserir');

// É chamado um escutador/addEventListener no input
// Com isso é disparada uma função toda vez que for inserido um valor no campo
inputMarca.addEventListener('input', function() {

  //Atribuir o valor inserido no input a propriedade marca do objeto carro
  carro.marca = this.value;

  //Insere o Template string como código HTML dentro div carro
  car.innerHTML = `<p>Marca: ${carro.marca}</p>
                    <p>Preço: ${carro.preco}</p>
                    <p>Ano: ${carro.ano}</p>
                    <p>Cor: ${carro.cor}</p>
                    <p>Motor: ${carro.motor}</p>
                    <p>Portas: ${carro.portas}</p>`;
});
