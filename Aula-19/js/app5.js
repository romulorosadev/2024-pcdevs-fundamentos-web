// A criarmos esse metodo construtor
// passamos as propriedadaes do objeto entre chaves
// Com isso ao criarmos instancias do objeto
// Também precisamos passar entre chaves
// As propriedades e valores que a instancia deve possuir
function Carro({marca, preco, ano, cor, motor, portas, airbag, arcondicionado}){
  this.marca = marca;
  this.preco = preco;
  this.ano = ano;
  this.cor = cor;
  this.motor = motor;
  this.portas = portas;
  this.airbag = airbag;
  this.arcondicionado = arcondicionado;
}

//Criar honda como uma instancia do objeto Carro com nome meuCarro
const honda = new Carro({ano: 2015, cor: 'verde', airbag: false});

console.log(honda);
