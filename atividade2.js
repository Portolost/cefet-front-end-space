// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

// caminho para onde as imagens estão hospedadas
const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  // array com o nome das 5 imagens da galeria
  nomesDasImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

// o índice da imagem sendo mostrada
// (inicialmente, é a imagem 0: 'philae-parts.jpg')
let indiceDaFotoCorrente = 0;
let botAnt = document.querySelector('#anterior');
let botPro = document.querySelector('#proximo');
let imagem = document.querySelector('#slide');

botAnt.addEventListener('click', function() {
    indiceDaFotoCorrente--;
    if (indiceDaFotoCorrente < 0)
        indiceDaFotoCorrente = 4;

    imagem.src = servidorDasImagens + nomesDasImagens[indiceDaFotoCorrente];
});

botPro.addEventListener('click', function() {
  indiceDaFotoCorrente++;
  if (indiceDaFotoCorrente > 4)
      indiceDaFotoCorrente = 0;

  imagem.src = servidorDasImagens + nomesDasImagens[indiceDaFotoCorrente];
});

// ...
