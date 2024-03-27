// A criarmos a função construtora do objeto
// Nela passamos as propriedades do objeto separadas por vitgulas entre chaves
// Com isso ao criarmos instancias desse objeto
// Também precisamos passar os valores na mesma ordem declarada no objeto
function Carro(marca, preco, ano, cor, motor, portas, airbar, arcondicionado){
  this.marca = marca;
  this.preco = preco;
  this.ano = ano;
  this.cor = cor;
  this.motor = motor;
  this.portas = portas;
  this.airbar = airbar;
  this.arcondicionado = arcondicionado;
}

const meuCarro = new Carro('Volkswagen', 20000, 2010, 'cinza', 1.6, 4, true, true);

const honda = new Carro('Honda', 50000);

console.log(meuCarro);
console.log(honda);
