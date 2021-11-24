function setup() {
  createCanvas(1350, 580);
  somTransito.loop();
}

function draw() {
  background(imagemFundoJogo);
  mostrarAtor();
  mostrarCarro();
  movimentaCarro();
  controlaAtor();
  voltaCarroPosicaoInicial();
  verificaColisao();
  mostraPontos();
  calculaPontos();
  dificuldade();
  ReduzVelocidade();
}
