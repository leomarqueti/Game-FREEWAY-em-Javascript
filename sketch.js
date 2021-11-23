function setup() {
  createCanvas(600, 400);
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
