xCarros = [700, 700, 700, 700, 700, 700];
yCarros = [40, 96, 150, 210, 270, 318];
velocidadeCarros = [5, 3.5, 8, 4, 7, 2.5];

let dimensaoCarroX = 70;
let dimensaoCarroY = 40;

function mostrarCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(
      imagemCarros[i],
      xCarros[i],
      yCarros[i],
      dimensaoCarroX,
      dimensaoCarroY
    );
  }
}

function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaCarroPosicaoInicial() {
  for (let i = 0; i < imagemCarros.length; i++) {
    if (voltaCarrosNaPosicaoInicial(xCarros[i])) {
      xCarros[i] = 700;
      velocidadeCarros[i] = valorRandomVelocidade(5, 9);
    }
  }
}

function voltaCarrosNaPosicaoInicial(xCarro) {
  return xCarro < -50;
}

function dificuldade() {
  if (meusPontos > 3) {
    for (let i = 0; i < imagemCarros.length; i++) {
      velocidadeCarros[i] = valorRandomVelocidade(7, 10);
    }
  }
  if (meusPontos > 7) {
    for (let i = 0; i < imagemCarros.length; i++) {
      velocidadeCarros[i] = valorRandomVelocidade(9, 12);
    }
  }
}

function valorRandomVelocidade(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
