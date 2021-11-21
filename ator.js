let yPersonagem = 380;
let xPersonagem = 100;
let dimensaoPersonagemX = 25;
let dimensaoPersonagemY = 14;

let colidiu = false;

let meusPontos = 0;

function mostrarAtor() {
  image(
    imagemPersonagem,
    xPersonagem,
    yPersonagem,
    dimensaoPersonagemX,
    dimensaoPersonagemY
  );
}

function controlaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yPersonagem -= 1.7;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) {
      yPersonagem += 1.7;
    }
  }
  if (keyIsDown(LEFT_ARROW)) {
    if (bloqueaAsLaterais()) {
      xPersonagem -= 1.7;
    }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    if (bloqueaAsLaterais()) {
      xPersonagem += 1.7;
    }
  }
}

function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i++) {
    colidiu = collideRectCircle(
      xCarros[i],
      yCarros[i],
      dimensaoCarroX,
      dimensaoCarroY,
      xPersonagem,
      yPersonagem,
      2
    );
    if (colidiu) {
      voltaPersonagemPosicaoInicial();
      somBatida.play();
      if (descontarPontos()) {
        meusPontos -= 1;
      }
    }
  }
}

function voltaPersonagemPosicaoInicial() {
  yPersonagem = 380;
}

function mostraPontos() {
  textAlign(CENTER);
  textSize(20);
  fill(255);
  text(meusPontos, width / 2, 25);
}

function calculaPontos() {
  if (yPersonagem < 15) {
    meusPontos += 1;
    voltaPersonagemPosicaoInicial();
    somPontos.play();
  }
}

function podeSeMover() {
  return yPersonagem < 380;
}

function descontarPontos() {
  return meusPontos > 0;
}

function bloqueaAsLaterais() {
  return yPersonagem >= 380;
}
