// Classe que representa um herói
class Heroi {

  // Construtor que inicializa as propriedades do herói
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método para o herói atacar
  atacar() {
    let ataque = '';

    // Definindo o tipo de ataque conforme o tipo de herói
    if (this.tipo === 'Mago') {
      ataque = 'magia';
    } else if (this.tipo === 'Guerreiro') {
      ataque = 'espada';
    } else if (this.tipo === 'Monge') {
      ataque = 'artes marciais';
    } else if (this.tipo === 'Ninja') {
      ataque = 'shuriken';
    } else {
      ataque = 'ataque desconhecido';  // Caso o tipo não seja reconhecido
    }

    // Exibindo a mensagem com o nome e tipo do herói
    console.log(`${this.tipo} ${this.nome} atacou usando ${ataque}`);
  }
}

// Criando instâncias de heróis com diferentes tipos
const heroi1 = new Heroi('Veigar', 100, 'Mago');
const heroi2 = new Heroi('Sett', 30, 'Guerreiro');
const heroi3 = new Heroi('Shen', 40, 'Monge');
const heroi4 = new Heroi('Akali', 16, 'Ninja');

// Testando os ataques de cada herói
heroi1.atacar(); // Exibe: "Mago Veigar atacou usando magia"
heroi2.atacar(); // Exibe: "Guerreiro Sett atacou usando espada"
heroi3.atacar(); // Exibe: "Monge Shen atacou usando artes marciais"
heroi4.atacar(); // Exibe: "Ninja Akali atacou usando shuriken"
