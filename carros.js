//lista onde armazenamos a posição X, Y e por ultimo a velocidade dos carros
PosicaoEmXDosCarros = [1400, 1400, 1400, 1400, 1400, 1400, 1600, 1600,1500,1600];
PosicaoEmYDosCarros = [65, 140, 220, 380, 480, 590, 380, 590,300,140];
velocidadeDosCarros = [5, 3.5, 8, 4, 7, 2.5, 7, 5,3,6];

//Controla o dimensionamento das imagens dos carros
let dimensaoCarroX = 90;
let dimensaoCarroY = 60;

//Nessa função serve para mostrar os carros na tela
function mostrarCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(
      imagemCarros[i],
      PosicaoEmXDosCarros[i],
      PosicaoEmYDosCarros[i],
      dimensaoCarroX,
      dimensaoCarroY
    );
  }
}

//Criamos essa função para dar movimento nos carros
function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    PosicaoEmXDosCarros[i] -= velocidadeDosCarros[i];
  }
}

//Quando o carro passa a tela, ele precisa voltar na posicao inicial para que sempre fique passando na tela
function voltaCarroPosicaoInicial() {
  for (let i = 0; i < imagemCarros.length; i++) {
    if (voltaCarrosNaPosicaoInicial(PosicaoEmXDosCarros[i])) {
      PosicaoEmXDosCarros[i] = 1400;
    }
  }
}

//
function voltaCarrosNaPosicaoInicial(xCarro) {
  return xCarro < -50;
}

//Foi criado essa função para que aumentase a velocidade toda vez que o jogador ganha se um determidado ponto , usei valores random na velocidade para que o jogo ficasse mais dinamico
function dificuldade() {
  if (meusPontos > 2) {
      velocidadeDosCarros = [6, 4, 8.9, 4.8, 7.8, 3.2, 7.9, 6,5,7]
   }
  if (meusPontos > 5) {
      velocidadeDosCarros = [9, 5.6, 10, 6, 8.3, 5, 9, 7,11,8]
   }
  if (meusPontos > 7) {
      velocidadeDosCarros = [9, 7, 10, 6.9, 9.4, 7, 14, 12,9,14]
   }
 if (meusPontos > 11) {
      velocidadeDosCarros = [11, 7, 13, 6.9, 12, 9, 14, 12.9,10,16]
   }
  if (meusPontos > 14) {
      velocidadeDosCarros = [13, 7, 15, 6.9, 16,11, 14, 12.9,10,20]
   }
}

//é nessa função que geramos os valores random para a velocidades dos carros e usamos esse valor na funcao de cima
//function valorRandomVelocidade(min, max) {
  //return Math.floor(Math.random() * (max - min + 1)) + min;
//}

//pensei em colocar dois carros na mesma rua, porem tive problemas, pois em alguns momentos os carros passavam um por cima dos outros, por causa da velocidade aleatoria
//Entao criei essa função para deixar a velocidade dos carros da mesma rua igual, toda vez que eles se aproximarem, sendo assim nunca um tera mais velocidade que o outro
function ReduzVelocidade() {
  if (PosicaoEmXDosCarros == PosicaoEmXDosCarros && PosicaoEmYDosCarros== PosicaoEmYDosCarros) {
    velocidadeDosCarros[3] = velocidadeDosCarros[6];
    velocidadeDosCarros[5] = velocidadeDosCarros[7];
    velocidadeDosCarros[1] = velocidadeDosCarros[9];
  }
}
